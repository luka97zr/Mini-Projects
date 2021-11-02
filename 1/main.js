const panel = document.querySelectorAll('.panel')

// for(let i =0; i<panel.length;i++){
//     panel[i].addEventListener('click', function(){
//         panel[i].classList.toggle('active');
//         console.log(panel[i])
//     })
// }
function removeActiveClasses(){
    panel.forEach((panel)=>{
        panel.classList.remove('active')
    })
}

panel.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

