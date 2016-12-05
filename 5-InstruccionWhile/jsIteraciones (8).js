function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	while(respuesta !='si'){

		contador++;
		numeroIngresado=parseInt(prompt("ingrese el numero"));
		if(numeroIngresado<0)
		{

			negativo= negativo+numeroIngresado;

		} else
		{

            positivo=positivo+numeroIngresado;			
		}
		respuesta=prompt("desea continuar , si o no");

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN