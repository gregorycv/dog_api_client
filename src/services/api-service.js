import axios from "axios";

const API_HOST = "https://dog.ceo/api";

export const getAllBreeds = async () => {
  const response = await axios.get(`${API_HOST}/breeds/list/all`);
  return response.data.message;
};

export const getRandomBreedImage = async (name) => {
  const response = await axios.get(`${API_HOST}/breed/${name}/images/random`);
  return response.data.message;
};
