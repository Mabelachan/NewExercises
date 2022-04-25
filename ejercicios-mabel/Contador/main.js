var counterVal = 0;
const btn = document.getElementById('btnDisabled');
var currentValue = "NO";

function handleClick(myRadio) {
    currentValue = myRadio.value;
}

//
function incrementClick() {
    if (counterVal<=0) {
        btn.disabled = false;
        btn.classList.remove('disabledButton') 
    }
    updateDisplay(++counterVal);
}

//Si el valor es menor a 0 evita que siga restando y a la vez le agrega la clase disabledButton
function decreaseCounter(){
    
    if (counterVal<=1  && currentValue=='NO'  ) {
        counterVal = 0;
        updateDisplay(counterVal);
        btn.disabled = true;
        btn.classList.add('disabledButton') 
    }else{ //si no, le resta hasta llegar a 0
        updateDisplay(--counterVal);
    }
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}
//Modifica el valor que contiene el h3, que inicialmente es 0. innerHTML se encarga de hacer esto
function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}

