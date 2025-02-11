// Pide al usuario un número por input y muestra si es par o impar en la misma pagina


function calcular(){
    var num=parseInt(document.getElementById("num1").value);
    if(num%2===0)
        document.getElementById("resul").textContent="El número es par";
    else
        document.getElementById("resul").textContent="El número es impar";
    console.log(num);
}


