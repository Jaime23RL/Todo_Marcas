var result= confirm("¿Quieres hacer una operacion aritmetica?");
console.log("El resultado del confirm es "+result);

if(result==true){
    alert("SI");
    var num1=parseInt(prompt("Introduce el primer numero",0));
    var num2=parseInt(prompt("Introduce el segundo numero",0));
    alert(num1+" + "+num2+" = "+(num1+num2));
}
else{
    alert("Eres un vago");
}