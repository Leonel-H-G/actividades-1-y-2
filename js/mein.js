const NombreCompleto=(nombre,apellido)=>{
    
    
   let resultadon = nombre + apellido
 
   
   return resultadon;
}

let ncom = NombreCompleto("Leonel","Hernandez")

console.log("Mi nombre es "+ncom);





const AreaDelCirculo=(numeropi,radioalcud)=>{
    
    
   let alcuad = radioalcud * radioalcud
   let  resultado = numeropi* alcuad 
   
   return resultado;
}

let areacirculo = AreaDelCirculo(3.1416,0.5)

console.log("el area del circulo es "+areacirculo + "cm^2");




/*Calcule el área de un cuadrado cuyo lado tiene una longitud de 7 cm.*/
/*formula 
A=L^2*/
const AreaCuadrado=(lado1,lado2)=>{
    
    
   let acuad = lado1 * lado2
    
   
   return acuad;
}

let areacuad = AreaCuadrado(7,7)

console.log("el area del cuadrado es "+areacuad+ "cm^2");


/*el área del triángulo rectángulo de lados 3, 4 y 5
A=b*h/2
*/
const AreaTriangulo=(a,b,h)=>{
    
    
   let acuad = b*h
   let areafinal= acuad/2
    
   
   return areafinal;
}

let areatrin = AreaTriangulo(5,4,3)

console.log("el area del triangulo es "+areatrin );

/*practica kodecam
nombre y que te den las iniciales*/ 

/*
let nomm="Leonel Hernandez Garfias"
let nomb= nomm.split("")
console.log(nomb[0])
console.log(nomb[7])
console.log(nomb[17])
*/

let nomm="Leonel Hernandez Garfias"
let nomb= nomm.length
console.log(nomb)

let nuevano=nomm.split("")
console.log(nuevano)

let ini= nomm.split("")
console.log(ini[0])
console.log(ini[7])
console.log(nomm.charAt(17))

let cualquierCadena="Brave new world";

console.log("El carácter en el índice 0 es '" + cualquierCadena.charAt(0) + "'")
