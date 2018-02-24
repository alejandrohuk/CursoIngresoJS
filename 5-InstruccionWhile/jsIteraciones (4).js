function Mostrar()
{


	var numero; 
	numero= prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);
	
	while(isNaN(numero) || (numero < 0 || numero >10))
	{
		numero= prompt("ingrese un número entre 0 y 10.");
		
	}
	document.getElementById('Numero').value= numero;
	alert("correcto");


}//FIN DE LA FUNCIÓN