//Calcular el promedio y la calificacion mas baha de todo el grupo
notaBaja == null;
sumaNotas = 0;
for (let i = 0; i <= 10; i++) {
    let nota= parseFloat(input("Dijite la nota del estudiante " + i));
    sumaNotas+=nota;
    if(notaBaja>nota){
        notaBaja=nota
    }
}
let promedio= sumaNotas/10;
console.log(`Promedio de las notas : ${promedio} /n Nota mas Baja: ${notaBaja}`)
