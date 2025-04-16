const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log("al contrario:", reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"];
const result = longNames.filter((word) => word.length >= 5);
console.log(result);

// 3. Rimuovi 'Ed' dall'array teachers
let edIndex = teachers.indexOf("Ed");
delete teachers[edIndex];
console.log(teachers);
