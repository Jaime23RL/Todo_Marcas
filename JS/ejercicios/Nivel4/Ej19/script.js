var ale=parseInt(Math.random()*10+1);
var intento=3;

function adivinar(){
    if(intento>0){
        var num=parseInt(document.getElementById("guess").value);
        if(num>ale){
            document.getElementById("demo").innerHTML="El numero es menor";
        }else if(num<ale){
            document.getElementById("demo").innerHTML="El numero es mayor";
        }else if(num==ale){
            document.getElementById("demo").innerHTML="Advinaste el numero "+ale;
            document.getElementById("boton").disabled="true";
        }
    }
    else{
        alert("Insert Coin");
        document.getElementById("demo").innerHTML="La has liado otra vez";
    }
    console.log("El numero es "+ale);
    intento--;
}