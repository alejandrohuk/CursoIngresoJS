/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var importeConDescuento;
	var resultado;

	importe = document.getElementById('importe').value;

	importe = parseInt(importe);

	importeConDescuento = parseInt(importeConDescuento);

	resultado = importe* 0.9

	importeConDescuento = resultado

	document.getElementById("resultado").value = resultado;

}
