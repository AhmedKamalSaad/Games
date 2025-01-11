import { create } from "zustand";
import { GameQuery } from "./types";

interface Store {
  gameQuery: GameQuery;
  setGenre: (genreId: number) => void;
  selectPlatform: (platformId: number) => void;
  setOrder: (order: string) => void;
  setSearchText: (searchText: string) => void;
}
export const useStore = create<Store>()((set) => ({
  gameQuery: {},
  setGenre: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  selectPlatform: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setOrder: (order) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, order } })),
  setSearchText: (searchText) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, searchText } })),
}));
