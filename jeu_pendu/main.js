/**
 *
 * @returns {tentative} retourner le nombre de tentative choisi par l'utilisateur
 *
 */

const entrerTentative = () => {
  let tentative = null;
  while (!tentative || isNaN(tentative)) {
    tentative = prompt("Entrer le nombre d'essai :");
  }
  return tentative;
};

/**
 *
 * @returns {alpha} retourner le mot ou la lettre écrite par l'utilisateur
 *
 */

const enterAlphabetic = (message) => {
  let alpha = null;
  while (!alpha || !alpha.match(/^[a-z]+$/g)) {
    alpha = prompt(message).toLowerCase();
  }
  return alpha;
};

/**
 *
 * @returns {Boolean} retourner true si le mot contient la lettre écrite, false sinon
 *
 */

const devinerMot = (mot, lettre) => {
  return mot.includes(lettre);
};

/**
 *
 * @returns {Boolean} retourner true si les lettres trouvées sont égaux au mot.
 *
 */

const checkResult = (mot, lettresIn) =>
  mot.split("").sort().join("") === lettresIn.sort().join("").toLowerCase();

/**
 *
 * @returns {Void} Afficher une alerte à chaque tentative.
 *
 */

const showResult = (tentative, lettreIn, lettresOut) => {
  alert(
    `Il reste ${
      tentative - 1
    } essais !\nLettres trouvées : ${lettreIn}\nLettres erronées : ${lettresOut}`
  );
};

/**
 *
 * rJeu du pendu
 *
 */

const penduGame = () => {
  const lettresIn = [];
  const lettresOut = [];
  let tentative = entrerTentative();
  const mot = enterAlphabetic("Entrer un mot pour jouer :");
  while (tentative != 0) {
    const lettre = enterAlphabetic(
      `#Tentative ${tentative} : Entrer une lettre pour jouer :`
    );
    devinerMot(mot, lettre)
      ? lettresIn.push(lettre.toUpperCase())
      : lettresOut.push(lettre.toUpperCase());
    if (checkResult(mot, lettresIn)) break;
    showResult(tentative, lettresIn, lettresOut);
    tentative -= 1;
  }
  alert(
    `Le mot est ${mot}\n` +
      (checkResult(mot, lettresIn)
        ? `Vous avez gagné !`
        : `Oops ! Vous avez échoué`)
  );
};

penduGame();
