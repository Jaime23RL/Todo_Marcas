/*
Hay que ajustar las cartas para que vayan del A (1) hasta el rey (k valor 0.5)
Tras esto hay que ajustar el array de valores para que se quede cada valor con su carta
La manera mas eficaz es ordenar por valor (primero los ases luego los 2) y poner los valores
(1,1,1,1,2,2,2,2 etc..)s
*/



const arrayIMG = [
	"ace_of_clubs.png",
    "ace_of_diamonds.png",
    "ace_of_hearts.png",
    "ace_of_spades.png",
	"2_of_clubs.png",
    "2_of_diamonds.png",
    "2_of_hearts.png",
    "2_of_spades.png",
	"3_of_clubs.png",
    "3_of_diamonds.png",
    "3_of_hearts.png",
    "3_of_spades.png",
	"4_of_clubs.png",
    "4_of_diamonds.png",
    "4_of_hearts.png",
    "4_of_spades.png",
	"5_of_clubs.png",
    "5_of_diamonds.png",
    "5_of_hearts.png",
    "5_of_spades.png",
	"6_of_clubs.png",
    "6_of_diamonds.png",
    "6_of_hearts.png",
    "6_of_spades.png",
	"7_of_clubs.png",
    "7_of_diamonds.png",
    "7_of_hearts.png",
    "7_of_spades.png",
    "queen_of_clubs.png",
    "queen_of_diamonds.png",
    "queen_of_hearts.png",
    "queen_of_spades.png",
	"king_of_clubs.png",
    "king_of_diamonds.png",
    "king_of_hearts.png",
    "king_of_spades.png",
	] ;
var arrayValor=[1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5];
var resultado=0;


function puedoSeguir(){
    if(resultado>7.5){
        document.getElementById("perdido").disabled=true;
        document.body.style.backgroundColor="red"; 
        alert("Has perdido");
    }
    
}

function pedir(){
    var ale=Math.floor(Math.random()*arrayIMG.length);
    var ruta="img/"+arrayIMG[ale];
    resultado=arrayValor[ale]+resultado;
    arrayIMG.splice(ale,1);
    arrayValor.splice(ale,1);
    console.log(arrayValor[ale]);
    document.getElementById("player").innerHTML+="<img src="+ruta+" width=180px>";
    document.getElementById("resultado").innerHTML="Usted lleva "+resultado;
    puedoSeguir();
}

function plantarse(){
    document.getElementById("demo").innerHTML="";
    document.getElementById("result").innerHTML="";
}