const { parallel, src, dest, watch } = require('gulp');
const cssmin = require('gulp-cssmin');
const sass = require('gulp-sass')(require('sass'));
const jsmin = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');

function css(){
    return src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('rocket-q.min.css'))
    .pipe(cssmin())
    .pipe(dest(`./public/`))
}

function js() {
    return src('public/scripts/**/*.js')
        .pipe(
            rollup({
                input: 'public/scripts/main.js',
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
        .pipe(dest(`./public/`));
}

exports.css = css;
exports.js = js;

exports.watch = (cb) => {
    watch('src/scss/**/*.scss', css, ['sass']);
    watch('public/scripts/**/*.js', js);
    cb();
};

exports.default = parallel(css, js);