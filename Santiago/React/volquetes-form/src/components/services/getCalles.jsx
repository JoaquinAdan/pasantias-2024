import { URL } from "../consts/API_URL";

export const getCalles = async () => {
  const response = await fetch(URL);
  return response.json();
};
