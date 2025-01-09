import getData from "./getData";
import { Game } from "./types";

const getGames = async () => {
  const { data, error } = await getData<Game>("games");
  return { data, error };
};

export default getGames;
