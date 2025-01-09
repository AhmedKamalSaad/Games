import getGames from "@/lib/getGames";
import React from "react";

const Games = async () => {
  const { games, error } = await getGames();
  return (
    <div>
      {error && <div>{error}</div>}
            {games?.map((g) => (
        <p key={g.id}>{g.name}</p>
      ))}
    </div>
  );
};

export default Games;
