//exo indiv à rendre vendredi 22 novembre 2024

// je crée une fonction isvalideDate

function isValidDate(date) {
//split permet d'utiliser des séparation
const tableauDate = date.split("/");

//pour accéder a mon jour dans le tableaudate
const day = +tableauDate[0];

//accede au mois en 2eme position dans tableau (1 car il commence à 0)
//-1 car js commence janvier à 0 et nous janv à 1
//si je ne met pas - 1 janv sera en 1 fev en 2 alors que janv doit être a 0 et fev a 1
const month = +tableauDate[1]-1;

//convertir l'année en nombre
const year = tableauDate[2];
//console.log(tableauDate)
//console.log(day)
//console.log(month)
//console.log(tableauDate [2])
return day<0&&day>=maxDaysInMonth(month, year)
}
 //isValidDate("01/02/2024")

 //appeller avec date non valide
 //isValidDate("01/15/20024")

 //je donne un parametre a ma fonction maxDaysMonth(mois)
// Fonction pour obtenir le nombre maximum de jours dans un mois 
function maxDaysInMonth(month, year){
return new Date(year,month + 1,0).getDate()
}
console.log(isValidDate("01/02/2024")); // true  
console.log(isValidDate("29/02/2024")); // true (année bissextile)
console.log(isValidDate("31/04/2024")); // false (avril a 30 jours)
console.log(isValidDate("01/15/2024")); // false (mois invalide)


//fonction maxDays trouver ce qu'elle prend en parametre
//dans fonction isValideDate appelle ma fonction
//maxDaysInMonth avec le bon parametre