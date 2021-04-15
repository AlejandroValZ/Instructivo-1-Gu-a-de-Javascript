var btn = document.getElementById("boton");
var resultado = document.getElementById("resultado");
var inputUno = document.getElementById("minimo");
var inputDos = document.getElementById("maximo");

btn.addEventListener("click",function(){
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    resultado.innerHTML = getRandomInt(n1,n2);
});

function getRandomInt(min, max) {
    var numMin = parseInt(min);
    var numMax = parseInt(max);
    return Math.floor(Math.random() * (numMax - numMin)) + numMin;
}