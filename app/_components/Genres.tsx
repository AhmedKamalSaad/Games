import getGenres from "@/lib/getGenres";
import Image from "next/image";
import React from "react";

const Genres = async () => {
  const { data: genres, error } = await getGenres();
  if (error) return <p>{error}</p>;
  return (
    <div className="flex flex-col gap-2 w-full px-2">
      {genres?.map((g) => (
        <div key={g.id} className="flex gap-2 justify-start items-center">
          <div className="w-7 h-7 aspect-square flex rounded-md overflow-hidden">
          <Image
            src={g.image_background}
            alt="genre"
            width={50}
            height={50}
            quality={80}
            className="object-cover w-full h-full "
          />
          </div>
          <p className="tracking-wide">{g.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Genres;
