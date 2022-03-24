//Ejercicio #1 1.
//Hacer un programa que calcule la suma de los N primeros números naturales,
// dónde N es el número límite ingresado.

/*var N= prompt("Ingrese numero: ");
var Cont=1;
var Suma=0;

while (Cont <= N){
    Suma = Suma + Cont
    Cont = Cont + 1
}
document.write("La suma es: " + (Suma));
*/

//Ejercicio #2 
//Hacer un programa que pida N notas, calcular el promedio de las notas aprobadas
//y el promedio de las notas desaprobadas; (Aprueba con un promedio de 3). 


/*var canNota= prompt("Ingrese cantidad de notas: ");
var Cont =0;
var notApro=0;
var notRepro=0;
var proApro =0;
var proRepro =0;
var nota =0;

while (Cont<canNota)
{
    Cont=Cont + 1;
    nota = prompt("Ingrese notas: " + Cont + " de " + canNota + " : ");
    if(nota>3){
        notApro=notApro+nota;
        proApro=proApro+1;
        
    }else{
        notRepro=notRepro+nota;
        proRepro=proRepro+1;
    }
}


document.write("aprobo con un promedio de: " + parseInt(notApro/proApro));
document.write("reprobo con un promedio de: " + parseInt(notRepro/proRepro));
*/

//Ejercicio #3
//Ingrese varios números enteros y muestre la cantidad de números ingresados
//y la suma de los mismos. Realice esta acción hasta que el usuario ingrese la palabra FIN.

/*
var num= prompt("Digite numero: ")
var suma = 0;
var cantidad = 0;
var numero= "";

while (num!="fin"){
    
    numero= numero= +num;
    suma = suma + parseInt(num);
    cantidad = cantidad + 1;
    num=prompt("Digite numero ")
}

document.write("<p>Cantidad de Números Ingresados: " + cantidad +"<p>" );
document.write("<p>Suma de los Número Ingresados: " + suma +"<p>");
*/

//Ejercicio #4
//realice una tabla de multiplicar con cualquier número ingresado hasta el 30
/*
var num= prompt("Digite numero: ")
var multi;

for (var i = 1; i <= 30; i++) {
    multi = num * i;
    document.write(num + "x" + i + "=" + multi + "<br>");
}
*/
//Ejercicio #5
//Cree la tabla de multiplicar de cualquier número ingresado de manera descendente.
/*
var num= prompt("Digite numero: ")
var multi;

for (var i = 10; i >= 1; i--) {
    multi = num * i;
    document.write(num + "x" + i + "=" + multi + "<br>");
}*/

//Ejercicio #6
//Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado

/*var num= prompt("Digite numero: ")

for (var i = 1; i <= 30; i+=parseInt(num)){
    document.write(i+ " " );
}
*/

//Ejercicio #7
//Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado, de manera regresiva.

var num= prompt("Digite numero: ")

for (var i = 30; i >= 1; i-=parseInt(num)){
    document.write(i+ " " );
}
