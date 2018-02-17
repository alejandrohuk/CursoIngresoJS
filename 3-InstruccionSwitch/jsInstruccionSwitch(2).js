function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{

		case "Julio":
		case "Agosto":
 		alert("estamos en invierno");
 		break;
 		case "Enero" :
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		alert("falta parea el invierno");
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		alert("ya pasamos el frio ahora el calor");
		break;
		
}



}//FIN DE LA FUNCIÓN