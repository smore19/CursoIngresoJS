function Mostrar()
{  

//necesitan inicialización
var iteraciones=0;
var cont1=0;
var cont2=0;
var cont3=0;
var cont4=0;
var cont5=0;
var cont6=0;
var cont7=0;
var cont8=0;
var cont9=0;
var contPar=0;
var contImpar=0;

//no necesita
var numeroRandom;


while(iteraciones<10000)

     { 
         iteraciones=iteraciones+1;
         numeroRandom=Math.floor((Math.random() * 10) + 1);
 
          //alert(numeroRandom);
         //console.log("numero: "+numeroRandom);
         switch(numeroRandom)
         {
            case 1:
            cont1++;
            break; 

            case 2:
            cont2++;
            break;

            case 3:
            cont3++;
            break;

            case 4:
            cont4++;
            break;

            case 5:

                 total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9;
                 porc=cont5/total*100;
                 if(porc<7)
                 {

                 	cont5++;
                 	{

                 		iteraciones--;
                 		continue;
                 	}

                 }

            break;

            case 6:
            cont6++;
            break;

            case 7:
            cont7++;
            break;

            case 8:
            cont8++;
            break;

            case 9:
            cont9++;
            break;


         }//fin del switch

        if(numeroRandom%2==0)
        {
        	contPar++;

        }

        else{

        	contImpar++;
        }

    }//del while hasta ...?

    total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9;
    console.log("el total es : "+total);
    console.log("% de pares : "+(contPar/total*100));
    console.log("% de impares : "+(contImpar/total*100));



    console.log("en numero 1 salio :"+ cont1+"veces"+ parseInt (cont1/total*100)+ "%");
    console.log("en numero 2 salio :"+ cont2+"veces"+ parseInt (cont2/total*100)+ "%");
    console.log("en numero 3 salio :"+ cont3+"veces"+ parseInt (cont3/total*100)+ "%");
    console.log("en numero 4 salio :"+ cont4+"veces"+ parseInt (cont4/total*100)+ "%");
    console.log("en numero 5 salio :"+ cont5+"veces"+ parseInt (cont5/total*100)+ "%");
    console.log("en numero 6 salio :"+ cont6+"veces"+ parseInt (cont6/total*100)+ "%");
    console.log("en numero 7 salio :"+ cont7+"veces"+ parseInt (cont7/total*100)+ "%");
    console.log("en numero 8 salio :"+ cont8+"veces"+ parseInt (cont8/total*100)+ "%");
    console.log("en numero 9 salio :"+ cont9+"veces"+ parseInt (cont9/total*100)+ "%");


/* numero random del 1 al 10*/


} //FIN DE LA FUNCIÓN

//acumuladores y contadores siempre se inicializan