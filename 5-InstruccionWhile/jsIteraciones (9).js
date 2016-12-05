function Mostrar()
{

	var contador=0;
	// declarar variables
	var minimo;
	var maximo;	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numeroIngresado=prompt("ingrese el numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(contador==1)
		{

			maximo=numeroIngresado;
			minimo=numeroIngresado;

		}else 

		{

           if(numeroIngresado<minimo)  
           {
           	minimo=numeroIngresado;
           }
           if(numeroIngresado>maximo)
           {

           	maximo=numeroIngresado;
           }
		}


		respuesta=prompt("desea continuar , si o no");	
	}




}//FIN DE LA FUNCIÓN