const { parallel, src, dest, watch } = require('gulp');
const cssmin = require('gulp-cssmin');
const sass = require('gulp-sass')(require('sass'));
const jsmin = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');


function css(){
    return src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(cssmin())
    .pipe(dest(`./public/style/`))
}

function js() {
    return src('src/js/**/*.js')
        .pipe(
            rollup({
                input: './src/js/index.js',
                allowRealFiles: true,
                plugins: [
                    babel(),
                ],
                output: {
                    name: 'testing',
                    format: 'umd',
                },
            })
        )
        .pipe(babel())
        .pipe(jsmin())
        .pipe(concat('main.js'))
        .pipe(dest(`./public/js/`));
}

exports.css = css;
exports.js = js;

exports.watch = (cb) => {
    watch('src/js/**/*.js', js);
    watch('src/scss/**/*.scss', css);
    cb();
};

exports.default = parallel(js,css);