function Mostrar()
{
	//alert('iteración while');
	//
	var contador;
	contador= 0;//el contador simepre tiene que empezar en cero
	while(contador < 10)// no conviene poner el menor o igual
	{
		document.write("<br>" + contador);
		contador = contador+1;// el contador siempre tenemos que ponerlo en la primer linea no com aca tendria que estar una linea mas arriba
		//y poner el "contador ++"" es lo mismo que poner "contador= contador + 1"

	}

}//FIN DE LA FUNCIÓN