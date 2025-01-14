"use client";
import React from "react";
import GameCard from "./GameCard";
import GamesLoading from "./GamesLoading";
import { Button } from "@/components/ui/button";
import useGames from "@/lib/useGames";

const Games = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    isLoading,
  } = useGames();
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
        <Button
          className="bg-transparent text-foreground hover:bg-transparent border  "
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
