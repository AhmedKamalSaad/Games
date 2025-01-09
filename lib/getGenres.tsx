import getData from "./getData";
import { Genre } from "./types";

const getGenres = async () => {
  const { data, error } = await getData<Genre>("genres");
  return { data, error };
};

export default getGenres;
