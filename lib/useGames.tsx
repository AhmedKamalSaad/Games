import getData from "./getData";
import { useStore } from "./store";
import { Game, GamesResponse } from "./types";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGames = () => {
  const { gameQuery } = useStore();
    const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      const { data } = await getData<Game>("games", gameQuery, pageParam);
      return data as GamesResponse<Game>;
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
  return {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useGames;
