/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	
	var numeroUno=33; //esto es un numero
	var numeroDos="33";//esto es una palabra
	var suma;

    numeroUno=document.getElementById('numeroUno').value; 
    numeroDos=document.getElementById('numeroDos').value;
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
    suma= numeroUno+numeroDos; /*aca detecta que son enteros, entonces no los concatena sino que los suma*/

    /*
    suma= parseInt(numeroUno)+parseInt(numeroDos);
    */ 
    /*ambas formas funcionan de la misma manera, la primera formula es mas estudiable y entendible*/
   alert("la suma es"+suma);  

