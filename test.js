const douleur = prompt("Douleur ? y/n ");
let resultat = "";

if (douleur === "y" || douleur === "yes") {
  const typeDouleur = prompt("Type Douleur ? [Abdomen - gorge - Aucune]");
  switch (typeDouleur.toLowerCase()) {
    case "abdomen":
      resultat = "Apprendicite";
      break;

    case "gorge": {
      const fievre = prompt("Fievre ? y/n ");
      resultat = fievre === "y" || fievre === "yes" ? "Rhume" : "Mal de gorge";
      break;
    }

    case "aucune": {
      const toux = prompt("Toux ? y/n ");
      if (!toux) resultat = "Rien";
      else {
        const fievre = prompt("Fievre ? y/n ");
        resultat =
          fievre === "y" || fievre === "yes" ? "Rhume" : "Refroidissement";
      }
      break;
    }

    default: resultat = "Autre type douleur";break;
  }
} else {
    resultat = "Autre type douleur";
}

document.getElementById("resultat").innerHTML = resultat;




const coucou = "Coucou";
const hello = "Hello";
let i = 1;
while(i<200) {
    switch(true) {
        case i%3 == 0 && i%5 == 0: console.log("i = " + i + " | " + coucou.concat(hello)); break;
        case i%3 == 0: console.log("i = " + i + " | " + coucou);break;
        case i%5 == 0: console.log("i = " + i + " | " + hello);break;
        default: console.log(i)break;
    }
    i++
}
