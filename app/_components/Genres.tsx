import Image from "next/image";
import React from "react";
import GenreButton from "./GenreButton";
import getData from "@/lib/getData";
import { Genre } from "@/lib/types";
import getCroppedImage from "@/lib/getCroppedImage";

const Genres = async () => {
  const { data: genres, error } = await getData<Genre>("genres");
  if (error) return <p>{error}</p>;
  return (
    <div className="flex flex-col gap-2 w-full px-2">
      {genres?.results.map((g) => (
        <div key={g.id} className="flex gap-2 justify-start items-center">
          <div className="w-7 h-7 shrink-0  rounded-md overflow-hidden">
            <Image
              src={getCroppedImage(g.image_background)}
              alt="genre"
              width={50}
              height={50}
              quality={50}
              className="object-cover h-full w-full"
              loading="lazy"
            />
          </div>
          <GenreButton genre={g} />
        </div>
      ))}
    </div>
  );
};

export default Genres;
