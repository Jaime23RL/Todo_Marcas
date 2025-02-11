alert("Control de edad");
var edad=parseInt(prompt("Introduce tu edad"));
if(edad<18)
    alert("Acceso denegado");
if(edad>=18 &&
     edad<=65)
    alert("Acceso permitido")
if(edad>65)
    alert("Acceso VIP");