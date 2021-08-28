
const toggleTheme = document.querySelector("#toggleButton");
let body = document.querySelector('body');
let allH2 = document.querySelectorAll('h2');
let allBtn = document.querySelectorAll('button');
let imgCartoonHome = document.querySelector('#bg');
let imgLogo = document.querySelector('header a ');
let btnSecond = document.querySelector('a.button.outlined');
let separator = document.querySelectorAll('.separator div');

toggleTheme.addEventListener('click',()=>{
    body.classList.toggle('bg-dark');
    if(body.classList.contains('bg-dark')){
        allH2.forEach((item)=>{
            item.classList.add('white');
        });
        allBtn.forEach((item)=>{
            item.classList.add('blue');
        });
        imgCartoonHome.style.background = "url(/images/home-bg-img-dark.svg) top/contain no-repeat";
        imgLogo.innerHTML = '<img id="logo" src="/images/logo-dark.svg" alt="Rocket.Q Logo" />';
        btnSecond.innerHTML= '<img src="images/users-dark.svg" alt="Criar Sala"> Criar Sala';
        btnSecond.classList.add('gradient-btn');
        separator.forEach((item)=>{
            item.classList.add('white');
        });
    }else{
        allH2.forEach((item)=>{
            item.classList.remove('white');
        });
        allBtn.forEach((item)=>{
            item.classList.remove('blue');
        });
        imgCartoonHome.style.background = "url(/images/home-bg-img.svg) top/contain no-repeat";
        imgLogo.innerHTML = '<img id="logo" src="/images/logo.svg" alt="Rocket.Q Logo" />';
        btnSecond.innerHTML= '<img src="images/users.svg" alt="Criar Sala"> Criar Sala';
        btnSecond.classList.remove('gradient-btn');  
        separator.forEach((item)=>{
            item.classList.remove('white');
        });
    }
});
