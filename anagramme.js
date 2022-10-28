/**
 *
 * @param {string} mot1
 * @param {string} mot2
 * @returns {Boolean} true si les mots sont anagrammes, false sinon.
 */

const estAnagramme = (mot1, mot2) => {
  if (mot1.length !== mot2.length) return false;
  return (
    mot1.toLowerCase().split("").sort().join("") ==
    mot2.toLowerCase().split("").sort().join("")
  );
};

console.log("Brulé - Heëllô ".normalize("NFD").replace(/[\u0300-\u036f]/g, ""));

console.log(estAnagramme("cafe", "face"));
console.log(estAnagramme("arbre", "Barre"));
console.log(estAnagramme("Poires ", "proies"));
