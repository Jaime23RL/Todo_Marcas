/*
Ejercicio: Solicitar al usuario realizar una operación aritmética
El programa debe preguntar al usuario si desea realizar una
operación aritmética. Si la respuesta es "no", el programa finaliza. Si
la respuesta es "sí", se le solicitarán dos números al usuario y el
programa mostrará el resultado de su suma.
*/

var result= confirm("¿Quieres hacer una operacion aritmetica?");
console.log("El resultado del confirm es "+result);

if(result==true){
    alert("SI");
    var num1=parseInt(prompt("Introduce el primer numero",0));
    var num2=parseInt(prompt("Introduce el segundo numero",0));
    var suma=num1+num2;
    //alert(num1+" + "+num2+" = "+(num1+num2));
    document.getElementById("demo").innerHTML=suma;
}
else{
    alert("Eres un vago");
}
