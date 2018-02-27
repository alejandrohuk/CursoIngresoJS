function Mostrar()
{
	 var numeroUno = prompt("ingrese un numero: ");
	 var numeroDos = prompt("ingrese un numero: ");
	 var numeroTres = prompt("ingrese un numero: ");
	 var numeroMinimo;
	 var numeroMaximo;
	 

	 if (numeroUno > numeroDos && numeroUno > numeroTres)
	 {
	 	alert(numeroUno);
	 }
	 else{
           if(numeroDos > numeroUno && numeroDos > numeroTres)
	 	{
	 	alert(numeroDos);
	 	}
	 	

	 }
	 	
	 	if (numeroTres > numeroUno && numeroTres > numeroDos) 
	 	{
	 	alert(  numeroTres);	
	 	}


	
}
