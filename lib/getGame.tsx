import { Game } from "./types";

const getGame = async (slug: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_RAWG_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;
  const url = `${baseUrl}/games/${slug}?key=${apiKey}`;
  const response = await fetch(url);
  const data = (await response.json()) as Game;
  return {
    data,
  };
};

export default getGame;
