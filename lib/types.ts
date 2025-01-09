export interface GamesResponse {
  count: number;
  results: Game[];
}
interface Game {
  id: number;
  name: string;
}
