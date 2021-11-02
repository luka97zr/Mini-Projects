const progress = document.getElementById('progress');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextBtn.addEventListener('click',()=>{
    currentActive++;
    if(currentActive > circles.length) currentActive = circles.length
    update();
})

prevBtn.addEventListener('click',()=>{
    currentActive--;
    if(currentActive < 1) currentActive = 1;
    update();
})

function update(){
    circles.forEach((cirlce, i)=>{
        if(i < currentActive){
            cirlce.classList.add('active');
        }else{
            cirlce.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1)/ (circles.length - 1) * 100 + '%'

    if(currentActive === 1){
        prevBtn.disabled = true
    }else if( currentActive === circles.length){
        nextBtn.disabled = true;
    } else{
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}