/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
		contadorIntentos=0;
		numeroSecreto=Math.floor((Math.random() *100) + 1);


}

function verificar()
{
	var numeroIngresado;

	contadorIntentos= contadorIntentos+1; //figura NaN porque no es un número, es letra. 
	console.log("el contador: "+contadorIntentos);
	document.getElementById('intentos').value=contadorIntentos;


    numeroIngresado=document.getElementById('numero').value;
    if(numeroIngresado==numeroSecreto)

    {

    	alert("gano");
    	if(contadorIntentos>10);
    	{
          alert("afortunado en el amor");

    	}

    	if(contadorIntentos>6&& contadorIntentos<11)

    	{

           alert("falta tecnica");
    	}

    	if(contadorIntentos==5)
    	{
         alert("usted esta en la media")

    	}

    }
else

{
        if(numeroSecreto>numeroIngresado)
        {
             alert("falta");


        }

        else 
        {

        	alert("te pasaste");

        }


}

}
