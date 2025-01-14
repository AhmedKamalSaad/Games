import getData from "@/lib/getData";
import { Trailer } from "@/lib/types";
import React from "react";

const TrailerVideo = async ({ gameId }: { gameId: number }) => {
  const { data} = await getData<Trailer>(`games/${gameId}/movies`);
  const first = data?.results[0]
    return data ? (
    <video
      src={first?.data[480]}
      poster={first?.preview}
      controls
      className="mt-2"
    />
  ) : null;
};

export default TrailerVideo;
