function Mostrar()
{

	var sexo;
	sexo = prompt("ingrese f ó m .");

	while(sexo !=="m" && sexo !=="f")
	{
		sexo= prompt("ingrese f ó m .");

		alert("ingrese m ó f .")

	}

	document.getElementById('Sexo').value= sexo;
	alert("el sexo ingresado es: " + sexo);


}//FIN DE LA FUNCIÓN