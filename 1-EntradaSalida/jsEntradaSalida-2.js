/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
//var= proporciòn de la memoria ram
	var nombre;
	var apellido = "Moreno"
	nombre="Sofía";
	nombre = prompt("ingrese su nombre", "NN");
	alert("nombre");
	//palabra literal: cuando pones comillas aparece la plabra nombre
	alert("mi nombre es: " + nombre + " y mi apellido es " + apellido); 
}
//alert tenés un solo parámetro, una cadena de texto. En el prompt tenes varias cadenas de textos

