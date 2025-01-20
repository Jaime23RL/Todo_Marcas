/* Programa que nos pida dos numeros por pantalla y que nos diga
cual es mayor cual es menor y si son iguales */

var num1= parseInt(prompt('Introduce el primer numero',0));
var num2= parseInt(prompt('Introduce el segundo número',0));

console.log(num1,num2);

if(num1==num2){
    alert("Los dos numeros son iguales");
}
else if(num1>num2){
    alert("El numero mayor es "+num1);
    alert("El numero menor es "+num2);
}
else if(num2>num1){
    alert("El numero mayor es "+num2);
    alert("El numero menor es "+num1);
}