import { GamesResponse } from "./types";

const getGames = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_RAWG_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;
  const url = `${baseUrl}/games?key=${apiKey}`;
  try {
    const response = await fetch(url);
    const games = (await response.json()) as GamesResponse;
    return { games: games.results, error: null };
  } catch {
    return {
      games: null,
      error:
       "An unknown error occurred",
    };
  }
};

export default getGames;
