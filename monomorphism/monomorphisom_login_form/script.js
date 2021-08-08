var r = document.querySelector(':root');


document.querySelector('.red').addEventListener('click', ()=> r.style.setProperty('--regular-color', 'rgb(245, 153, 153)'));

document.querySelector('.green').addEventListener('click', ()=> r.style.setProperty('--regular-color', 'rgb(190, 245, 153)'));

document.querySelector('.blue').addEventListener('click', ()=> r.style.setProperty('--regular-color', 'rgb(153, 208, 245)'));

document.querySelector('.yellow').addEventListener('click', ()=> r.style.setProperty('--regular-color', 'rgb(245, 239, 153)'));
