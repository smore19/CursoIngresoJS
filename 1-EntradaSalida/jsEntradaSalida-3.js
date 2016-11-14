/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//identificador que esta al lado de html. Estructura dom que java scrip puede manejar.
	//Escritura camel, cuando tenes en mayùscula la segunda palabra.
	var miVariable = document.getElementById('elNombre').value;
alert (miVariable);
}
//este objeto tiene un atributo. Si no ponemos .value aparece [object HTMLInputElement]


