export interface GamesResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
export interface GameQuery {
  platformId?: number;
  genreId?: number;
  order?: string;
  searchText?: string;
  genreName?: string;
  platformName?: string;
}
export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
interface Publisher {
  name: string;
  id: number;
}
export interface Game {
  id: number;
  genres: Genre[];
  name: string;
  publishers: Publisher[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
  slug: string;
}
export interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}
