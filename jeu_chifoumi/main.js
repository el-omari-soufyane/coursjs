/*
* Préférer le === pour les compraraisons en lieu et place du ==
*/
const options = ["pierre", "feuille", "ciseau"];

/**
 * 
 * Choix de l'utilisateur à partir du prompt
 *
 */
const choixUserFunction = () => {

  //let option; au lieu de let option = null;
  let option;
  while (!option || !options.includes(option)) {
    option = prompt(
      "Quelle option ? [pierre - feuille - ciseau]"
    ).toLowerCase();
  }
  return option;
};

/**
 * 
 * Choix au hasard de l'ordinateur
 *
 */
const choixComputerFunction = () => options[Math.floor(Math.random() * 3)];

/**
 * 
 * Comparer les deux choix
 * @return {-1} si l'ordinateur a gagné
 * @return {0} si les choix sont égaux
 * @return {1} si l'utilisateur a gagné
 *
 */
const evaluateUser = (choixUser, choixComputer) => {
  if (choixUser === choixComputer) return 0;
  let score = -1;
  switch (choixUser) {
    case "pierre":
      if (choixComputer === "ciseau") score = 1;
      break;

    case "feuille":
      if (choixComputer === "pierre") score = 1;
      break;

    case "ciseau":
      if (choixComputer === "feuille") score = 1;
      break;
  }
  return score;
};

/**
 * 
 * Jeu Chifoumi
 *
 */
const chifoumiGame = () => {
  let manche = 3;
  let scoreComputer = 0;
  let scoreUser = 0;
  while (manche != 0) {
    const choixUser = choixUserFunction();
    const choixComputer = choixComputerFunction();

    const result = evaluateUser(choixUser, choixComputer);
    if (result === 1) scoreUser += 1;
    else if (result === -1) scoreComputer += 1;

    console.log("\nGame #" + manche);
    console.log("User choix : " + choixUser);
    console.log("Computer choix : " + choixComputer);
    console.log("Score User : " + scoreUser);
    console.log("Score Computer : " + scoreComputer);

    manche = manche - 1;
  }

  alert(
    "\n\nScore Final\nScore User : " +
      scoreUser +
      "\nScore Computer : " +
      scoreComputer
  );
};

chifoumiGame();
