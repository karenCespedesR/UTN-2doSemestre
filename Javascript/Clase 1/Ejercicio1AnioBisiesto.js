//Ejercicio Anio Bisiesto


let option = 1;
console.log(" Comprobamos que el anio es Bisiesto");
while (option==0) {
    let anio = parseInt(input("Ingrese el anio"));

if((num%4 == 0 && num % 100 != 0) || num% 4 == 0){
 console.log("El anio es bisiesto"+ anio)
}else{
    console.log("El anio no es bisiesto" + anio);
}
opcion = parseInt(input("Para continuar ingrese 1, /n para salir 0"));
}

