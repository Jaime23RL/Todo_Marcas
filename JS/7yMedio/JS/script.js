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
var resultado=0;  // Puntaje del player
var resultadoRobo=0; //Puntaje de la maquina

//Funcion que se ejecuta en cada ronda
//Lo que hace es mirar si el jugador se ha pasado del puntaje para deshabilitar los botones y iniciar a la maquina
function puedoSeguir(){
    if(resultado>7.5){
        document.getElementById("perdido").disabled=true;
        document.getElementById("plantado").disabled=true;
        robot();
        //Aqui miro si ha ganado el robot o si tambien se ha pasado ya que aqui el player tecnicamente a perdido
        if(resultadoRobo<=7.5)
            document.getElementById("resul").innerText+="Ha ganado la maquina";
        else if(resultadoRobo>7.5)
            document.getElementById("resul").innerText+="Os habeis pasado los dos";
    }  
}

function pedir(){
    var ale=Math.floor(Math.random()*arrayIMG.length);
    var ruta="img/"+arrayIMG[ale];
    resultado=arrayValor[ale]+resultado;
    arrayIMG.splice(ale,1);
    arrayValor.splice(ale,1);
    console.log(arrayValor[ale]);
    document.getElementById("player").innerHTML+="<img src="+ruta+" width=100px>";
    document.getElementById("resultado").innerHTML="Player: "+resultado+" puntos";
    puedoSeguir();
    console.log("El resultado es: "+resultado);
}


// Funcion que se aplica en un boton dentro del html
//Sirve para deshabilitar los botones ya que el jugador no va a jugar mas cartas e iniciar a la maquina
function plantarse(){
    document.getElementById("perdido").disabled=true;
    document.getElementById("plantado").disabled=true;
    robot();
    // Aqui hago los chequeos de las puntuaciones al acabar el turno de la maquina
    if((resultado>resultadoRobo && resultado<=7.5) || resultadoRobo>7.5){
        document.getElementById("resul").innerText+="Ha ganado el player";
        console.log("Num victorias "+vic);
    }else if((resultadoRobo>resultado && resultadoRobo<=7.5) || resultado>7.5)
        document.getElementById("resul").innerText+="Ha ganado la maquina";
    else if(resultado==resultadoRobo)
        document.getElementById("resul").innerText+="Empate";
    else if(resultado>7.5 && resultadoRobo>7.5)
        document.getElementById("resul").innerText+="Os habeis pasado los dos";
}

//Funcion con la que la maquina juega
//El codigo es copia pega de la funcionar pedir salvo las id de donde se muestra la informacion
function robot(){
    // Primero miro si el jugador se ha pasado del puntaje o si esta dentro del margen
    if(resultado<=7.5){
    // Si el player puede ganar la maquina pide cartas hasta que ha superado al player
    while(resultadoRobo<resultado){
        var ale=Math.floor(Math.random()*arrayIMG.length);
        var ruta="img/"+arrayIMG[ale];
        resultadoRobo=arrayValor[ale]+resultadoRobo;
        arrayIMG.splice(ale,1);
        arrayValor.splice(ale,1);
        console.log(arrayValor[ale]);
        document.getElementById("maquina").innerHTML+="<img src="+ruta+" width=100px>";
        document.getElementById("resulMaquina").innerHTML="Puntuacion maquina "+resultadoRobo;
        console.log("Resultado player "+resultado);
        console.log("Resultado maquina "+resultadoRobo);
        console.log("carta "+arrayIMG[ale]);
    }
}
else{
    // En el caso de que el player se haya pasado la maquina solo va a tirar una vez para no pasarse
    while(resultadoRobo<=0){
        var ale=Math.floor(Math.random()*arrayIMG.length);
        var ruta="img/"+arrayIMG[ale];
        resultadoRobo=arrayValor[ale]+resultadoRobo;
        arrayIMG.splice(ale,1);
        arrayValor.splice(ale,1);
        console.log(arrayValor[ale]);
        document.getElementById("maquina").innerHTML+="<img src="+ruta+" width=100px>";
        document.getElementById("resulMaquina").innerHTML="Puntuacion maquina "+resultadoRobo;
        console.log("Resultado player "+resultado);
        console.log("Resultado maquina "+resultadoRobo);
        console.log("carta "+arrayIMG[ale]);
    } 
}
}

// Funcion que solo sirve para refrescar la pagina y volver a jugar
function Refrescar(){
    location.reload();
}