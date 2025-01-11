export interface GamesResponse<T> {
  count: number;
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
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top:number
}
