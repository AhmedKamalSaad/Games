import { GameQuery, GamesResponse } from "./types";

const getData = async <T,>(
  endpoint: string,
  gameQuery?: GameQuery,
  pageParam?: number
) => {
  const { genreId, platformId, order, searchText } = gameQuery || {};
  const baseUrl = process.env.NEXT_PUBLIC_RAWG_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;
  const params = new URLSearchParams();
  if (genreId) params.append("genres", genreId.toString());
  if (platformId) params.append("platforms", platformId.toString());
  if (order) params.append("ordering", order);
  if (searchText) params.append("search", searchText);
  if (pageParam) params.append("page", pageParam.toString());
  const url = `${baseUrl}/${endpoint}?key=${apiKey}&${params.toString()}`;
  try {
    const response = await fetch(url);
    const data = (await response.json()) as GamesResponse<T>;
    return {
      data
    };
  } catch {
    return {
      error: "An unknown error occurred",
    };
  }
};

export default getData;
