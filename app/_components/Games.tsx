import getGames from "@/lib/getGames";
import React from "react";
import GameCard from "./GameCard";

const Games = async () => {
  const { data: games, error } = await getGames();
  if (error) return <div>{error}</div>;

  return (
    <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-2 px-2">
      {games?.map((g) => (
        <GameCard key={g.id} game={g} />
      ))}
    </div>
  );
};

export default Games;
