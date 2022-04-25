let counterVida = 100
const resetBtn = document.getElementById('reset')
let midiv = document.getElementById('divsito')
let mivida = document.getElementById('vida')
const sonidoCombo = new Audio('audio/golpe1.mp3')

function combo(){
    // al momento de apretarlo en 10 que aparezca el botón
    if(counterVida <= 10) {
        resetBtn.style.display="unset" 
    } 

    sonidoCombo.pause()
    sonidoCombo.play()
    // sonidoCombo.loop =true;
     sonidoCombo.playbackRate = 2;

    if(counterVida <= 50){
        midiv.style.backgroundImage = 'url(images/bad.jpeg)'
    }
    counterVida = counterVida -10
    updateVida(counterVida)
}

function resetButton(){
    midiv.style.backgroundImage = 'url(images/good.jpeg)'
    updateVida(counterVida = 100)
    resetBtn.style.display="none" 
}

function updateVida(nuevoValorVida){
    mivida.innerHTML = nuevoValorVida
}