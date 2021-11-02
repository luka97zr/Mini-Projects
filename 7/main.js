const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

 left.addEventListener('mouseenter', () => container.classList.add('hover-left')); //Na hover dodaje klasu
 left.addEventListener('mouseleave', () => container.classList.remove('hover-left')); //Kada skloni mis skida se klasa

 right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
 right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))