function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var acumulador 0;
	var numero;
	var flag=0;
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero= prompt("ingrese un numero");
		numero = parseInt(numero);
		if(flag==0)
		{
			maximo= numero;
			minimo = numero;
			flag=1;
		}
		else
		{
			if(numero> maximo)
			{
				maximo = numero;
			}
			if(numero< minimo)
			{
				minimo = numero;
			}

		}
		respuesta= prompt("desea seguir ingresando?");
	
	}
	document.getElementByi('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;





}//FIN DE LA FUNCIÓN