/**
 * Variable Globale Annuaire
 */
const annuaire = [];

/**
 *
 * @param {String} message Le message à afficher à l'écran
 * Tester si la chaine entrée contient que des lettres
 * @returns la chaine écrit
 */

const enterAlphabetic = (message) => {
  let alpha = null;
  while (!alpha || !alpha.match(/^[a-z\s]*$/g)) {
    alpha = prompt(message).toLowerCase();
  }
  return alpha;
};

/**
 *
 * @param {String} message Le message à afficher à l'écran
 * Tester si la chaine entrée contient que des chiffres
 * @returns la chaine écrit
 */

const enterNumeric = (message) => {
  let numeric = null;
  while (!numeric || !numeric.match(/^[0-9]+$/g) || numeric.length > 10) {
    numeric = prompt(message).toLowerCase();
  }
  return numeric;
};

/**
 *
 * Ajouter le contact à l'annuaire.
 * @returns le contact si N° n'existe pas, null sinon
 */

const addTelephone = () => {
  const telephone = enterNumeric("Entrer le N° de téléphone :");
  if (searchByTelephone(telephone)) return null;

  const prenom = enterAlphabetic("Entrer le prénom :");
  const nom = enterAlphabetic("Entrer le nom :");
  annuaire.push({ telephone, nom, prenom });
  return { telephone, nom, prenom };
};

/**
 *
 * Supprimer le contact de l'annuaire.
 * @returns le contact supprimé, null sinon
 */

const removeTelephone = () => {
  const telephone = enterNumeric("Entrer le N° de téléphone :");
  const telephoneIndex = annuaire.findIndex(
    (personne) => personne.telephone == telephone
  );
  if (telephoneIndex == -1) return null;
  return annuaire.splice(telephoneIndex, 1);
};

/**
 *
 * @param {String} telephone Le N° téléphone à chercher
 * @returns le contact s'il existe, null sinon
 */

const searchByTelephone = (telephone) =>
  annuaire.find((p) => p.telephone == telephone);

/**
 *
 * @param {String} nom Le Nom du contact
 * @returns le contact s'il existe, null sinon
 */

const searchByNom = (nom) => annuaire.filter((p) => p.nom == nom);

/**
 *
 * @param {Array} annuaireList La liste des contacts à afficher
 */

const showAnnuaire = (annuaireList) => {
  let list = "Annuaire :\n==============\n";
  annuaireList.forEach(
    (p, index) =>
      (list += `\nContact #${
        index + 1
      }\n- Nom : ${p.nom.toUpperCase()}\n- Prénom : ${
        p.prenom
      }\n- Téléphone : ${p.telephone}`)
  );
  alert(list);
};

/**
 *
 * Fonction pour afficher le menu et les operations de recherche
 */

const search = () => {
  let choix = null;
  while (!choix || choix != "q") {
    choix = enterAlphabetic(
      "Rechercher par [Telephone - Nom]\nEntrer 'q' pour quitter"
    );

    switch (choix) {
      case "telephone": {
        const telephone = enterNumeric("Entrer le N° de téléphone :");
        const contact = searchByTelephone(telephone);
        contact ? showAnnuaire([contact]) : alert("Téléphone n'existe pas !");
        break;
      }
      case "nom": {
        const nom = enterAlphabetic("Entrer le Nom :");
        const contacts = searchByNom(nom);
        contacts ? showAnnuaire(contacts) : alert("Nom n'existe pas !");
        break;
      }
    }
  }
};

/**
 *
 * Annuaire App
 */

const annuaireApp = () => {
  let choix = null;
  while (!choix || choix != "q") {
    choix = enterAlphabetic(
      "Entrer ton choix [recherche - ajouter - supprimer - afficher]\nEntrer 'q' pour quitter"
    );

    switch (choix) {
      case "recherche":
        search();
        break;
      case "ajouter": {
        const result = addTelephone();
        result
          ? alert("Téléphone créé avec succès !")
          : alert("Téléphone existe déjà ou N° erroné !");
        break;
      }
      case "supprimer": {
        const result = removeTelephone();
        result
          ? alert("Téléphone supprimé avec succès !")
          : alert("Téléphone n'existe pas !");
        break;
      }
      case "afficher":
        showAnnuaire(annuaire);
        break;
    }
  }
};

annuaireApp();
