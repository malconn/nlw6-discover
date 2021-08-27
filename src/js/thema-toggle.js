const toggleTheme = document.querySelector("#toggleButton");
let body = document.querySelector('body');
let allH2 = document.querySelectorAll('h2');
let allBtn = document.querySelectorAll('button');
let imgBgHome = document.querySelector('#bg');

toggleTheme.addEventListener('click',()=>{
    body.classList.toggle('linear-dark');
    if(body.classList.contains('linear-dark')){
        allH2.forEach((item)=>{
            item.classList.add('white');
        });
        allBtn.forEach((item)=>{
            item.classList.add('blue');
        });
        imgBgHome.style.background = "url(/images/home-bg-img-dark.svg) top/contain no-repeat";
    }else{
        allH2.forEach((item)=>{
            item.classList.remove('white');
        });
        allBtn.forEach((item)=>{
            item.classList.remove('blue');
        });
        imgBgHome.style.background = "url(/images/home-bg-img.svg) top/contain no-repeat";
    }
});

