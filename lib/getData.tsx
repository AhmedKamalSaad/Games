import { GamesResponse } from "./types";

const getData = async <T,>(endpoint: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_RAWG_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;
  const url = `${baseUrl}/${endpoint}?key=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = (await response.json()) as GamesResponse<T>;
    return {
      data: data.results
    
    };
  } catch {
    return {
          error: "An unknown error occurred",
    };
  }
};

export default getData;
