"use client";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store";
import { Genre } from "@/lib/types";
import React from "react";

const GenreButton = ({ genre }: { genre: Genre }) => {
  const { setGenre, setGenreName, gameQuery } = useStore();

  return (
    <Button
      variant={"link"}
      className={`tracking-wide p-0 opacity-90 ${
        genre.id === gameQuery.genreId ? "font-bold opacity-100" : ""
      } `}
      onClick={() => {
        setGenre(genre.id);
        setGenreName(genre.name);
      }}
    >
      {genre.name}
    </Button>
  );
};

export default GenreButton;
