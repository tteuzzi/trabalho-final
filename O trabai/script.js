
let a = document.querySelector('.a');
let s = document.querySelector('.s');
let d = document.querySelector('.d');
let j = document.querySelector('.j');
let k = document.querySelector('.k');
let l = document.querySelector('.l');


document.addEventListener('keydown', (event) => {
    if (event.key === 'a' || event.key === 'A') { 
        fazerSom();
        a.classList.toggle('drum_clicked');
        setTimeout(() => {
            a.classList.toggle('drum_clicked');
        }, 300);
    }
    if (event.key === 's' || event.key === 'S') { 
        fazerSom2();
        s.classList.toggle('drum_clicked');
        setTimeout(() => {
            s.classList.toggle('drum_clicked');
        }, 300);
    }
    if (event.key === 'd' || event.key === 'D') { 
        fazerSom3();
        d.classList.toggle('drum_clicked');
        setTimeout(() => {
            d.classList.toggle('drum_clicked');
        }, 300);
    }
    if (event.key === 'j' || event.key === 'J') { 
        fazerSom4();
        j.classList.toggle('drum_clicked');
        setTimeout(() => {
            j.classList.toggle('drum_clicked');
        }, 300);
    }
    if (event.key === 'k' || event.key === 'K') { 
        fazerSom5();
        k.classList.toggle('drum_clicked');
        setTimeout(() => {
            k.classList.toggle('drum_clicked');
        }, 300);
    }
    if (event.key === 'l' || event.key === 'L') { 
        fazerSom6();
        l.classList.toggle('drum_clicked');
        setTimeout(() => {
            l.classList.toggle('drum_clicked');
        }, 300);
    }
});

function fazerSom(){
    const som = document.getElementById('barulho');
    som.currentTime = 0;
    som.play();
}
function fazerSom2(){
    const som = document.getElementById('barulho2');
    som.currentTime = 0;
    som.play();
}
function fazerSom3(){
    const som = document.getElementById('barulho3');
    som.currentTime = 0;
    som.play();
}
function fazerSom4(){
    const som = document.getElementById('barulho4');
    som.currentTime = 0;
    som.play();
}
function fazerSom5(){
    const som = document.getElementById('barulho5');
    som.currentTime = 0;
    som.play();
}
function fazerSom6(){
    const som = document.getElementById('barulho6');
    som.currentTime = 0;
    som.play();
}
    