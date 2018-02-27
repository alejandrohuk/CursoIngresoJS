
function Mostrar()
{	
	
	var base= document.getElementById('laBase').value;
	base= parseInt(base);
	//falta tomar por prompt la altura
	alert("la superficie es: " + (base*base)/2);
	alert("el perimetro del triangulo equilatero es: " + base*3);
	
}
