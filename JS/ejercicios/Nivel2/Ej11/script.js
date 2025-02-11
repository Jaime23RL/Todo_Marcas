var num;
var guess;
num=parseInt(document.getElementById("numero").value);
guess=parseInt(Math.random()*10);
function comprobar(){
        document.getElementById("resul").innerHTML=guess;
}
