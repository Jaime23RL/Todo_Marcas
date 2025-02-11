//Crea una funcion que genere una contraseña aleatoria de 8 caracteres con letras y numeros
const LIM=8;
function generar(){
    var psw=[];
    for(var i=0;i<LIM;i++){
       let rand=parseInt(Math.random()*3);
       if(rand==0){
        var num=parseInt(Math.random()*10);
        psw[i]=num;
       }      
       if(rand==1){
        var may=String.fromCharCode(Math.random()*26+65);
        psw[i]=may;
       }
       if(rand==2){
        var min=String.fromCharCode(Math.random()*26+97);
        psw[i]=min;
       }
    }
    var contra="";
    for(var i=0;i<psw.length;i++)
        contra+=psw[i];
    document.getElementById("aqui").innerHTML=contra;
}