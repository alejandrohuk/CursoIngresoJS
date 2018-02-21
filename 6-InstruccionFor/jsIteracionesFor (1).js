function Mostrar()
{
	//var contador;
	//contador = 0;
	/*var contador=0;
	for(;;)
	{
		contador++
		document.write("<br>" + contador);
	
		if(contador==10)
		{
			document.write("<br> + break" + contador);
			break;
		}
		if(contador==5)
		{
			continue;
		}
		document.write( "<br> + continue" + contador);


	}*/
		var contadorDePositivos=0;
		var contadorDeNegativos=0;
		var contadorDeCeros=0;
		var contadorDePar=0;
		var contadorDeimPar=0;
		var contador50=0;


		for(contador=-100; contador<100; contador++)
		{
			if(contador>0)
			{
				contadorDePositivos++;
			}
			else{
				if(contador<0)
					{
						contadorDeNegativos++;

					}else
					{contadorDeCeros++;
					}
			}
			if(contador%2==0 && contadorDeCeros!=0)
			{
				contadorDePar++;
			}else
			{
				if(contadorDeCeros!=0)
				{
					contadorDeimPar++;
				}
			}
			switch(contador)
			{
				case 50:
					contador50 ++;
					break;
			}
		}
		document.write("positivos: "+contadorDePositivos)
		document.write("<br>negativos: "+contadorDeNegativos)
		document.write("<br>ceros: "+contadorDeCeros)
		document.write("<br>impares: "+ contadorDeimPar)
		document.write("<br>contadorde50: "+ contador50)
		

}//es la de la funcion