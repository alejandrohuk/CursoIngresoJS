/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldo;
	var sueldoConAumento;
	var resultado;

	sueldo = document.getElementById('sueldo').value;

	sueldo = parseInt(sueldo);

	sueldoConAumento = parseInt(sueldoConAumento);

	resultado = sueldo* 1.1

	sueldoConAumento = resultado

	document.getElementById("resultado").value = resultado;

}
