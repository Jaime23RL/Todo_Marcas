// Usar un switch para sacar el dia de la semana
var num;
var dia;
function diaSemana(){
    num=parseInt(document.getElementById("dia").value);
    switch(num){
        case 1:dia="Lunes";break;
        case 2:dia="Martes";break;
        case 3:dia="Miercoles";break;
        case 4:dia="Jueves";break;
        case 5:dia="Viernes";break;
        case 6:dia="Sabado";break;
        case 7:dia="Domingo";break;
    }

    document.getElementById("resul").textContent="El dia es "+dia;
}