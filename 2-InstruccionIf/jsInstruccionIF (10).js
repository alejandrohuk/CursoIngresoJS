function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var numeroRandom;
	Math.floor((Math.random() * 10) + 1);
	if(numeroRandom>8)
	{
		alert("exelente" + numeroRandom);
	}else
	{
		if(numeroRandom>3)
			{alert("aprobo" + numeroRandom);
}
		else
			{ alert("la proxima sera");
		}
	}
}//FIN DE LA FUNCIÓN