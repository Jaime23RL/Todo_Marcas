//Crea un script que pida dos numeros y una operacion, realize el calculo y muestre el resultado
// Todo se hara a traves de prompt
var num1;
var num2;
var operador;
var result;
num1=parseInt(prompt("Primer número"));
operador=prompt("Operador");
num2=parseInt(prompt("Segundo número"));
result=eval(num1+operador+num2);
console.log(operador);
alert(num1+" "+operador+" "+num2+" = "+result);
