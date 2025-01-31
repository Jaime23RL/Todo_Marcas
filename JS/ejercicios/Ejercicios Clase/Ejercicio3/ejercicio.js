/*
Dos textbox para almacenar dos numeros y un boton
que al pulsarlo calcule los numeros introducidos
*/

function calcular(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    var suma=n1+n2;
    document.getElementById("demo").innerHTML="La suma es "+suma;
}

function CambiarColor(){
    var arrayColors=["yellow","green","red","black","brown","grey","white"];
    for (let index = 0; index < 5; index++) {
        var rand=Math.floor(Math.random()*6);
        document.body.style.background=arrayColors[rand];
    }
}