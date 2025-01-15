import getData from "@/lib/getData";
import { Screenshot } from "@/lib/types";
import Image from "next/image";
import React from "react";

const Screenshots = async ({ gameId }: { gameId: number }) => {
  const { data } = await getData<Screenshot>(`games/${gameId}/screenshots`);

  return (
    <div className="grid md:grid-cols-2 gap-1 mt-1">
      {data?.results.map(({ height, id, image, width }) => (
        <Image key={id} width={width} height={height} src={image} alt="screenshot"/>
      ))}
    </div>
  );
};

export default Screenshots;
