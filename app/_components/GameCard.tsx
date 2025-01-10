import { Game } from "@/lib/types";
import Image from "next/image";
import React from "react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <div className="border flex flex-col items-center rounded-lg overflow-hidden h-[300px] shadow-lg">
      <div className="h-1/2 w-full">
        <Image
        quality={50}
          src={game.background_image}
          className="object-cover w-full h-full object-top"
          alt="game"
          width={300}
          priority
          height={150}
        />
      </div>

      <div className="w-full h-1/2 p-4 flex flex-col gap-2">
        <h1 className="text-2xl ">{game.name}</h1>
        <div className="flex justify-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
