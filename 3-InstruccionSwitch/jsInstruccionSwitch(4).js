function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño)
	{
		case "Febrero" :
			alert("tiene 28");
			break;
		case "Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":
			alert("tiene 30");
			break;
		default:
		alert("tiene 31");
		break;
	}
}//FIN DE LA FUNCIÓN