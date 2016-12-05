function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;

	while(contador<5) {
		contador++; /*se ejecuta 5 veces*/
		numeroIngresado=prompt("ingrese el numero");
		console.log(contador);
		//acumulador= acumulador+numeroIngresado;
		acumulador= acumulador+parseInt(numeroIngresado);
		




	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN