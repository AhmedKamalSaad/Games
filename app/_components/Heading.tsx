"use client";

import { useStore } from "@/lib/store";

const Heading = () => {
  const { gameQuery } = useStore();
  return (
    <h1 className="text-3xl ml-2 mb-3 mt-5 font-bold opacity-85">{`${gameQuery.platformName || ''} ${gameQuery.genreName || ''} Games`}</h1>
  );
};

export default Heading;
