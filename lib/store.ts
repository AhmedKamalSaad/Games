import { create } from "zustand";

interface Store {
  genreId: number | null;
  setGenre: (genreId: number) => void;
}
export const useStore = create<Store>()((set) => ({
  genreId: null,
  setGenre: (genreId) => set(() => ({ genreId })),
}));
