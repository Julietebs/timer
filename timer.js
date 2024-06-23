function criaSeg(segundos){
    const data = new Date(segundos*1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'GMT'
    })
}

const hora = document.querySelector('#hora')
const iniciar = document.querySelector('#iniciar')
const pausar = document.querySelector('#pausar')
const zerar = document.querySelector('#zerar')
let segundos = 0
let timer;

iniciar.addEventListener('click', inicio);
pausar.addEventListener('click', pausa)
zerar.addEventListener('click', zerou)


function inicio(){
    clearInterval(timer)
    timer = setInterval(function(){
        segundos++
        hora.innerHTML = criaSeg(segundos)
    },1000)
}

function pausa(){
    clearInterval(timer)
    
}

function zerou(){
    clearInterval(timer)
    hora.innerHTML = '00:00:00'
    segundos = 0    
}

