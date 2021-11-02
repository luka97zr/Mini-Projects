const loadingText = document.querySelector('.loading-text');
const img = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring,35); //Pokrece interval gde je prvi arg fja a drugi vremenski interval

function blurring(){
    load++
    if(load > 99) clearInterval(int) //Cisti(prekida) interval
    console.log(load)
    loadingText.textContent = load + '%';
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    img.style.filter = `blur(${scale(load,0,100,30,0)}px)`
}

const scale = (num, in_min, in_max, out_min,out_max) => {
    return (num- in_min) * (out_max - out_min) / (in_max - in_min) + out_min; //Fja koja smanjuje neku vrednost(npr opacity) u odredjenom vrem intervalu
}




