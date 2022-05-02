function calculateBtn(){
    let nombre = document.getElementById('nombre')
    let estaturaCM = parseInt(document.getElementById('estatura').value)
    let estaturaMT = estaturaCM / 100
    let peso = parseInt(document.getElementById('peso').value)
    let imc = Math.round(peso / (estaturaMT * estaturaMT))
    
    let text = document.getElementById('text')
    let IMC = document.getElementById('IMC')
    let img = document.getElementById('image')
    
    if (imc < 18.5) {
        text.innerHTML = 'Estás muy delgado(a) :( '
        img.style.backgroundImage = 'url(imgs/underweight.jpg)'
    } else if (imc < 25){
        text.innerHTML = 'Felicidades, estás saludable :)'
        img.style.backgroundImage = 'url(imgs/good.jpeg)'
    } else {
        text.innerHTML = 'Tienes sobrepeso :3'
        img.style.backgroundImage = 'url(imgs/overweight.jpeg)'
    }
    IMC.innerHTML = 'Tu IMC es: ' + imc

}

function resetBtn(){
    let nombre = document.getElementById('nombre')
    let estaturaCM = document.getElementById('estatura')
    let peso = document.getElementById('peso')
    let img = document.getElementById('image')
    let text = document.getElementById('text')
    let IMC = document.getElementById('IMC')

    nombre.value = ""
    estaturaCM.value = ""
    peso.value = ""
    img.style.backgroundImage = 'url(imgs/inicial.jpg)'
    text.innerHTML = ""
    IMC.innerHTML = ""

}
  