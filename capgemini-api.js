const url =
  "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_aires-covoiturage-nantes-metropole&q=&facet=commune&facet=service_velo&facet=stationnement_velo&facet=stationnement_velo_securise&facet=conditions_d_acces&facet=exploitant";

const getData = async (dataUrl) => {
  try {
    const response = await fetch(dataUrl);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    throw error;
  }
};

getData(url);
