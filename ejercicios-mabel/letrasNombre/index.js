let text = document.getElementById('text')
let nombreInput = document.getElementById('nombre')
let nameText = document.getElementById('nameText')

function calculateBtn(){
    
    if (nombreInput.value.length == 0) {
        text.innerHTML = "Escribe algo >:C"
    }else{
    text.innerHTML = `Tu nombre contiene: ${nombreInput.value.length} letras`
    nameText.innerHTML = nombreInput.value.toUpperCase()
    }
}

function resetBtn(){
    text.innerHTML = ""
    nombreInput.value = ""
    nameText.innerHTML= ""
}






// res = 2 + 4

// if(res% 2 == 0){
//     console.log("es par")
// }else{
//     console.log("es impar")
// }


// res = 3 + 6

// if(res% 2 == 0){
//     console.log("es par")
// }else{
//     console.log("es impar")
// }



// res = 1 + 8

// if(res% 2 == 0){
//     console.log("es par")
// }else{
//     console.log("es impar")
// }

let a = 12
let b = 2

verSiEsPar(2,4)
verSiEsPar(3,6)
verSiEsPar(4,13)

verSiEsPar(a,b)



function verSiEsPar(parametro1,parametro2){

    let resultado = parametro1 + parametro2

    if(resultado% 2 == 0){

        console.log("es par")
    }else{
        console.log("es impar")
    }

}