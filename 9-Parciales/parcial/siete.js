function Mostrar()
{
	var letra;
	var numero;
	var respuesta="si";

	while(respuesta == "si")
	{
		
		letra = prompt("ingrese letra");
			while(!isNaN(letra))
			{
				letra = prompt("ingrese letra");
			}
		
		numero= prompt("ingrese un numero entre -50 y 50");
		numero=parseint(numero);
			while(numero <=50 || numero >= -50)
			{
				numero= prompt("ingrese un numero entre -50 y 50");
			}

	
	respuesta= prompt("ingresar mas datos?");
		
	} 

	

}
