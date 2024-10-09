export const getCalles = async () => {
  const URL = `http://testiis01.campana.gov.ar/Municipalidad.Campana.Api/api/commons/calles`;

  const response = await fetch(URL);
  return response.json();
};
