"use client";
import getData from "@/lib/getData";
import { useStore } from "@/lib/store";
import { Game, GamesResponse } from "@/lib/types";
import {
  useInfiniteQuery,
} from "@tanstack/react-query";
import React from "react";
import GameCard from "./GameCard";
import GamesLoading from "./GamesLoading";
import { Button } from "@/components/ui/button";

const Games = () => {
  const { gameQuery } = useStore();
  const fetchGames = async ({ pageParam }: { pageParam: number }) => {
    const { data } = await getData<Game>("games", gameQuery, pageParam);
    console.log(data); // Add logging to inspect the data
    return data as GamesResponse<Game>;
  };

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
    queryFn: fetchGames,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 9,
  });
  if (isLoading) return <GamesLoading />;
  if (isError)
    return (
      <div>{error instanceof Error ? error.message : "An error occurred"}</div>
    );
  return (
    <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-2 px-2">
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.results.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </React.Fragment>
      ))}
      <div className="-mt-3">
        <Button className="bg-transparent text-foreground hover:scale-105 hover:bg-transparent "
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </div>
    </div>
  );
};

export default Games;
