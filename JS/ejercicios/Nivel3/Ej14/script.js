//Crear un campo de texto y un boton, al escribir algo y hacer click el texto se agrega a una lista ul

function add(){
   document.getElementById("lista").innerHTML+="<li>"+document.getElementById("campo").value+"</li>";
}