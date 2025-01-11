"use client";
import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
import getData from "@/lib/getData";
import { Game } from "@/lib/types";
import { useStore } from "@/lib/store";
import GamesLoading from "./GamesLoading";

const Games = () => {
  const { gameQuery } = useStore();
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await getData<Game>(
          "games",
          gameQuery.genreId,
          gameQuery.platformId,
          gameQuery.order,
          gameQuery.searchText
        );
        if (error) {
          setIsLoading(false);
          setError(error);
        } else {
          setIsLoading(false);
          setGames(data || []);
        }
      } catch {
        setError("An error occurred while fetching the games.");
      }
    };

    fetchGames();
  }, [gameQuery]);
  if (isLoading) return <GamesLoading />;
  if (error) return <div>{error}</div>;
  return (
    <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-2 px-2">
      {games?.map((g) => (
        <GameCard key={g.id} game={g} />
      ))}
    </div>
  );
};

export default Games;
