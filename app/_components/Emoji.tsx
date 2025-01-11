import React from "react";
import bullseye from "@/public/bullseye.png";
import sad from "@/public/sad.png";
import thumbsUp from "@/public/thumbs_up.png";
import Image, { ImageProps } from "next/image";
const Emoji = ({ rating }: { rating: number }) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    5: { src: bullseye, alt: "bullseye" },
    3: { src: sad, alt: "sad" },
    4: { src: thumbsUp, alt: "thumbsup"},
  };
  const { src, alt } = emojiMap[rating];

  return <Image src={src} alt={alt} width={30} height={30} className="w-full h-full" />;
};

export default Emoji;
