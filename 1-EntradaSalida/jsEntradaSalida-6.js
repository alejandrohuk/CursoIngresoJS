/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
/*los numeros qyue esten entre collas se consideran 
palabras y al queres sumarlos el programa solo los 
va a concatenar*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	
	numeroUno= document.getElementById('numeroUno').value;
	numeroDos= document.getElementById("numeroDos").value;
	
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;
	alert(resultado);


}


