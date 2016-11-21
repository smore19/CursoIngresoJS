function Mostrar()
{
//tomo la edad  

var laEdad;
laEdad=document.getElementById('edad').value;
if(laEdad>=13 && laEdad<=17){

	alert("es adolescente");
}

if(laEdad>=18){


alert("es mayor de edad");

}

if(laEdad<13){

 
 alert("es un niño");

}


}//FIN DE LA FUNCIÓN