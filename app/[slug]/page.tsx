import getGame from "@/lib/getGame";
import React from "react";
import ExpandableText from "./_components/ExpandableText";
import Details from "./_components/Details";
import CriticScore from "../_components/CriticScore";
import TrailerVideo from "./_components/Trailer";
import Screenshots from "./_components/Screenshots";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const { data } = await getGame(slug);
  console.log(data.id);
  return (
    <div className=" max-w-screen-2xl px-3  pt-5 flex flex-col gap-2 pb-9">
      <h1 className="text-4xl font-bold  tracking-wide">{data.name}</h1>
      <ExpandableText>{data.description_raw}</ExpandableText>
      <div className="grid grid-cols-2 gap-y-5">
        <Details title="Platforms">
          {data.parent_platforms.map(({ platform }) => (
            <p key={platform.id}>{platform.name}</p>
          ))}
        </Details>
        <Details title="Metascore">
          <CriticScore score={data.metacritic} />
        </Details>
        <Details title="Genres">
          {data.genres.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </Details>
        <Details title="Publishers">
          {data.publishers.map((publisher) => (
            <p key={publisher.id}>{publisher.name}</p>
          ))}
        </Details>
      </div>
      <TrailerVideo gameId={data.id} />
      <Screenshots gameId={data.id} />
    </div>
  );
};

export default page;

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const { data } = await getGame(slug);
  return {
    title: data.name,
    description:
      data.description_raw?.substring(0, 150) ||
      "Discover more about this game.",
  };
};
