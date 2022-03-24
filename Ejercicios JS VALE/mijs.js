/*// Ejercicio #1
var salario= prompt("Digite salario: ");
var salud= salario*0.8/100;
var pension= salario* 0.8/100;
var pension= salario* 0.8/100;
var salarioAPagar= salario - salud - pension;

document.write("<br> El descuento de la salud es: " + salud + "<br> El descuento de la pension es: " + pension + "<br> El salario neto es: " + salarioAPagar);
*/

// Ejercicio #2
/*
var base= prompt("Digite base del triangulo: ");
var altura= prompt("Digite altura del triangulo: ");

var area= (base*altura)/2;

document.write("El area del triangulo es : " + area );
 */
// Ejercicio #3
/*
var num1= prompt("Digite el numero 1: ");
var num2= prompt("Digite el numero 2: ");

var suma= parseInt(num1) + parseInt(num1);
var resta= num1-num2;
var mul= num1*num2;
var div= num1/num2;
var mod= num1%num2;

document.write("<br>La suma es: " + suma);
document.write("<br>La resta es: " + resta);
document.write("<br>La multiplicacion es: " + mul);
document.write("<br>La division es: " + div);
document.write("<br>El modulo es: " + mod);
 */
// Ejercicio #4
/*
var numHoras= prompt("Digite el numero de horas trabajadas al mes");
var valorHora= prompt("Digite el valor de la hora: ");
var numExtras= prompt("Digite el numero de horas extras ");
var valorExtras= prompt("Digite valor de horas extras: ");

var totalNormales= numHoras*valorHora;
var totalExtras= numExtras*valorExtras;
var neto= parseInt(totalNormales) + parseInt(totalExtras);

document.write("<br> El valor por horas trabajadas al mes: " + totalNormales);
document.write("<br> El valor por horas extras trabajadas al mes: " + totalExtras);
document.write("<br> El salario neto es: " + neto);
 */
// Ejercicio #5
/*
var producto= prompt("Digite valor del producto");
var proCon= producto * 1.19;
var iva=producto-proCon;

document.write("<br> El producto con iva tiene un valor de " + proCon );
document.write("<br> El producto sin iva tiene un valor de " + producto );
document.write("<br> El iva tinene un valor de " + iva + " sobre el valor del producto" );
 */

// Ejercicio #6
/*
var Mujeres= prompt("Digite cantidad de mujeres");
var Hombres= prompt("Digite cantidad de hombres");

var TotalEstudiantes= parseInt(Mujeres) + parseInt(Hombres);

PorceMujeres= (Mujeres/TotalEstudiantes)*100;
PorceHombres= (Hombres/TotalEstudiantes)*100;

document.write("El porcentaje de mujeres es: " + parseInt(PorceMujeres) + "%" + " <br> El porcentaje de Hombres es: " + parseInt(PorceHombres) + "%" );
 */
// Ejercicio #7
/*
var nota1= prompt("Digite nota 1");
var nota2= prompt("Digite nota 2");
var nota3= prompt("Digite nota 3");
var nota4= prompt("Digite nota 4");
var nota5= prompt("Digite nota 5");

var p = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)+parseFloat(nota5))/5;

document.write("El promedio: " + p );
 */

// Ejercicio #8
/*
var numero= prompt("Digite num");

if(numero%2==0){
        
    alert("El número "+numero+" es par");

}else{
    
    alert("El número "+numero+" es impar");
    
}
if(numero === 0){
        
    alert("Cero");
    
  }else if(numero > 0) {
      
    alert(" y es Positivo");
    
  }else{
      
    alert(" y es Negativo");
    
  }
   */
 
// Ejercicio #9
/*
var a =prompt("ingrese el primer numero");
var b =prompt("ingrese el segundo numero");

if(a===b){
  alert("son iguales");
}
if(a>b){
  alert(a+ " es mayor y "+b+" es menor");
}else { 
  alert(b+ " es mayor y "+a+" es menor");
}
 */

 
// Ejercicio #10
/*
var day =prompt("ingrese el primer numero");

if  (day == 1) {
  alert ("Lunes");
}   
else {
  if  (day == 2) {
    alert ("Martes");
  }
  else {
      if (day == 3) {
        alert ("Miercoles");
      }   
      else {
           if (day == 4) {
            alert ("Jueves");
           }
               else {
                   if (day == 5) {
                    alert("viernes");
                   }
                       else {
                           if (day == 6) {
                            alert ("Sabado");
                           }
                               else {   alert ("Domingo"); 
                                    }
                           }
                  }
          }
      }
} 
*/


// Ejercicio #11
/*
var edad =prompt("ingrese edad");

if (edad<18){
  alert ("usted es adolescente");
} else
if(edad >=18 && edad <=28){
  alert ("usted es adulto adolescente");
} else
if(edad >=29 && edad <=49){
  alert ("usted es adulto");
}
else {
  alert ("usted es adulto mayor");
}
*/
// Ejercicio #12
/*
var produc1 = prompt('Ingrese el valor del producto 1');
var produc2 = prompt('Ingrese el valor del producto 2 ');
var produc3 = prompt('Ingrese el valor del producto 3');
var met = prompt('Ingrese el su metodo de pago:  1. Efectivo, 2. Cupón, 3. Crédito:  ');
var ttl,desc;
if(met == 1){
  total = parseInt(produc1) + parseInt(produc2) + parseInt(produc3);
  alert('El valor a pagar: ' + total);
}else if (met == 2){
    total = parseInt(produc1) + parseInt(produc2) + parseInt(produc3);
    desc = total * 0.3;
    total = total - desc;
    alert('El valor a pagar:' + total + ' y tiene un descuento de' + desc);
}else if(met == 3){
    total = parseInt(produc1) + parseInt(produc2) + parseInt(produc3);
    desc = total * 0.5;
    total = total + desc;
    alert('El valor a pagar:' + total + ' y tiene un aumento de ' + desc);
}else{
    alert('no corresponde a un metodo de pago válido');
}
*/
// Ejercicio #13
/*
var nota1= prompt("Digite nota 1");
var nota2= prompt("Digite nota 2");
var nota3= prompt("Digite nota 3");

var p = (parseInt(nota1)+parseInt(nota2)+parseInt(nota3))/3;
if (p >=0 && p<10){
  alert("El promedio es malo");
}
else if (p >=11 && p<13){
  alert("El promedio es regular");
} 
else if (p >=14 && p<16){
  alert("El promedio es bueno");
}else
 {
  alert("El promedio es muy bueno");
} 
*/
//Ejercicio #15

var edad = prompt("Ingrese la edad del usuario");
var dHosp = prompt("Ingrese los días que estuvo hospitalizado");
var vpagar;
var vpagRecargo;
var recargo;


if (edad >=0 && edad <=10 && dHosp <=1){
    vpagar = dHosp * 20000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=0 && edad <=10 && dHosp >=2 && dHosp <=4){
    vpagar = dHosp * 30000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=0 && edad <=10 && dHosp >=5 && dHosp <=7){
    vpagar = dHosp * 25000;
    recargo = vpagar * 0.5;
    vpagRecargo = vpagar + recargo;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor del recargo del 5% es de $:"+recargo);
    alert("El valor a pagar con recargos del 5% es de $: "+vpagRecargo);
}
else if (edad >=0 && edad <=10 && dHosp >=8){
    vpagar = dHosp * 15000;
    recargo = vpagar * 0.10;
    vpagRecargo = vpagar + recargo;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor del recargo del 10% es de $:" +recargo);
    alert("El valor a pagar con recargos del 10% es de $: "+vpagRecargo);
}
else if (edad >=11 && edad <=17 && dHosp <=1){
    vpagar = dHosp * 20000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=11 && edad <=17 && dHosp >=2 && dHosp <=4){
    vpagar = dHosp * 30000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=11 && edad <=17 && dHosp >=5 && dHosp <=7){
    vpagar = dHosp * 25000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=11 && edad <=17 && dHosp >=8){
    vpagar = dHosp * 15000;
    recargo = vpagar * 0.10;
    vpagRecargo = vpagar + recargo;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor del recargo del 10% es de $:");
    alert("El valor a pagar con recargos del 10% es de $: "+vpagRecargo);
}
else if (edad >=18 && edad <=49 && dHosp <=1){
    vpagar = dHosp * 20000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=18 && edad <=49 && dHosp >=2 && dHosp <=4){
    vpagar = dHosp * 30000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=18 && edad <=49 && dHosp >=5 && dHosp <=7){
    vpagar = dHosp * 25000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargos es de $: "+vpagar);
}
else if (edad >=18 && edad <=49 && dHosp >=8){
    vpagar = dHosp * 15000;
    recargo = vpagar * 0.15;
    vpagRecargo = vpagar + recargo;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor del recargo del 15% es de $:" +recargo);
    alert("El valor a pagar con recargos del 15% es de $: "+vpagRecargo);
}

else if (edad >=50 && dHosp <=1){
    vpagar = dHosp * 20000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargo es de $: "+vpagar); 
}
else if (edad >=50 && dHosp >= 2 && dHosp <=4){
    vpagar = dHosp * 30000;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor a pagar sin recargo es de $: "+vpagar); 
}
else if(edad >=50 && dHosp >= 5 && dHosp <=7){
    vpagar = dHosp * 25000;
    recargo = vpagar * 0.15;
    vpagRecargo = vpagRecargo + vpagar;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("Valor del recargo del 15% es de $: "+recargo);
    alert("El valor a pagar con recargo del 15% es de $: "+vpagRecargo); 
}
else if (edad >=50 && dHosp >=8){
    vpagar = dHosp * 15000;
    recargo = vpagar * 0.20;
    vpagRecargo = vpagRecargo + vpagar;
    alert("Los días que el usuario estuvo hospitalizado son: "+dHosp);
    alert("El valor del recargo del 20% es de $: "+recargo);
    alert("El valor a pagar con recargo del 20% es de $: "+vpagRecargo); 
}
else {
    alert("Reconsidere la opción");
}