let Hora = document.querySelector('.hora');
let Min = document.querySelector('.min');
let Sec = document.querySelector('.sec');

let hora = 0, min = 0, sec = 0, ms = 0, Start = false;

document.querySelector('.start').addEventListener('click', function(){
    document.querySelector('.start').innerHTML = 'Start';
    Start = true;
});

document.querySelector('.stop').addEventListener('click', function(){
    document.querySelector('.start').innerHTML = 'Continue';
    Start = false;
});

document.querySelector('.reset').addEventListener('click', function(){
    hora = 0;
    min = 0;
    sec = 0;
    ms = 0;
    Hora.innerHTML = hora;
    Min.innerHTML = min;
    Sec.innerHTML = sec;
    Ms.innerHTML = 0;
    document.querySelector('.start').innerHTML = 'Start';
});

function contar(){ 
    if (Start === false){
        return;
    }
    sec++;
    Sec.innerHTML = sec;
    if (sec === 60){
        sec = 0;
        min++;
        Min.innerHTML = min;
        if (min === 60){
            min = 0;-
            hora++;
            Hora.innerHTML = hora;
        }
    }
}

setInterval(contar, 1000);
