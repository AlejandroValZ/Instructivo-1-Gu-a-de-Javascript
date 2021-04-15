var btnSumar = document.getElementById("btn-sumar");
var btnRestar = document.getElementById("btn-restar");
var btnMultiplicar = document.getElementById("btn-multiplicar");
var btnDividir = document.getElementById("btn-dividir");

var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

var resultado = document.getElementById("resultado");

btnSumar.addEventListener("click", function(){
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    resultado.innerHTML = sumar(n1, n2);
});
btnRestar.addEventListener("click", function(){
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    resultado.innerHTML = restar(n1, n2);
});
btnMultiplicar.addEventListener("click", function(){
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    resultado.innerHTML = multiplicar(n1, n2);
});
btnDividir.addEventListener("click", function(){
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    resultado.innerHTML = dividir(n1, n2);
})

function sumar(n1, n2){
    return parseInt(n1) + parseInt(n2);
}
function restar(n1, n2) {
    return parseInt(n1) - parseInt(n2);
}
function multiplicar(n1, n2) {
    return parseInt(n1) * parseInt(n2);
}
function dividir(n1, n2) {
    if(n2==0) {
        Alerta.show();
        return "";
    }else {
        return parseInt(n1) / parseInt(n2);
    }
}

/**
Alerta
**/

const Alerta = {
    init() {
        this.hideTimeout = null;

        this.el = document.createElement("div");
        this.el.className = "alerta";
        document.body.appendChild(this.el);
    },
  
    show() {
        clearTimeout(this.hideTimeout);

        this.el.textContent = "Divisor en 0, resultado indefinido.";
        this.el.className = "alerta alerta--visible";

        this.hideTimeout = setTimeout(() => {
            this.el.classList.remove("alerta--visible");
        }, 3000);
    }
};
  
document.addEventListener("DOMContentLoaded", () => Alerta.init());
  