function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño)
	{
		case "Febrero" :
			alert("este mes no tien mas de 29 dias");
			break;

		default:
			alert("este mes no tiene mas de 31 dias");
			break;
	}

}//FIN DE LA FUNCIÓN