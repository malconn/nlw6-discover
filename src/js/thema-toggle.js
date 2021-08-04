export function teste(){ 
    const toggleTheme = document.querySelector('#toggleButton');
    const firstButton = document.querySelector('button');
    toggleTheme.addEventListener('click', ()=>{
        document.body.classList.add('dark');
    });
}
teste();