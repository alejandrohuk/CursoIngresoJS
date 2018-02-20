function Mostrar()
{


	var numero; 
	numero= prompt("ingrese un número entre 0 y 10.");
	
	while(numero = 0 || numero >=9)
	{
		numero= prompt("ingrese un número entre 0 y 10.");
		alert("incorrecto");
	}
	document.getElementById('Numero').value= numero;
	alert("correcto");


}//FIN DE LA FUNCIÓN