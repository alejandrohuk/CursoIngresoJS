function Mostrar()
{

	/*var sexo;
	sexo = prompt("ingrese f ó m .");

	while(sexo !=="m" && sexo !=="f")
	{
		sexo= prompt("ingrese f ó m .");

		alert("ingrese m ó f .")

	}

	document.getElementById('Sexo').value= sexo;
	alert("el sexo ingresado es: " + sexo);*/


		var sexo=prompt("indique con f para femenino y m para masculino");

		while(sexo !="f" && sexo !="m")
		{
			sexo= prompt("ingrese f o m ");
		}
		if(sexo=="f")
		{
			document.getElementById("Sexo").value="femenino";

		}else
		{
			document.getElementById("Sexo").value="masculino";
		}

		







































}//FIN DE LA FUNCIÓN