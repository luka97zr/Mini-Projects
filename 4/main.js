const searchBtn = document.querySelector('.btn');
const input = document.querySelector('.input');
const search = document.querySelector('.search');

searchBtn.addEventListener('click',()=>{
    search.classList.toggle('active');
    input.focus()
})