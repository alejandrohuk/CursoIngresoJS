function Mostrar()
{
  	var precio= prompt("ingrese el precio del producto: ");
  	var descuento= prompt("ingrese el descuento del producto");
  	var precioFinal;
  	descuento = (precio*descuento)/100 
  	precioFinal= precio - descuento;
  	document.getElementById('importeFinal').value=precioFinal;
}
