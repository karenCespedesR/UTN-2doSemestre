//Ejercicio 3 : Leer 10 nros e imprimir cuantos son positivos, negativos y neutros
let positivos = 0;
let negativos = 0;
let neutros = 0 ;
for (let i = 0; i <= 10; i++) {
    let nro =parseInt(input("Digite un numero"));
    if (nro == 0) {
        neutros++;
    } else if(nro >0){
        positivos++
    } else if(nro<0){
        negativos++
    }else{
        console.log("No es un nro")
    }
}

console.log(`Posotivos: ${positivos} /n Negativos: ${negativos} /n Neutros: ${neutros}`);
