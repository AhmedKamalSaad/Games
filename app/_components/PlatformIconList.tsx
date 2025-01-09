import { Platform } from "@/lib/types";
import React, { ReactNode } from "react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
const PlatformIconList = ({ platforms }: { platforms: Platform[] }) => {
  const iconMap: { [key: string]: ReactNode } = {
    playstation: <FaPlaystation size={20} />,
    pc: <FaWindows size={20}/>,
    xbox: <FaXbox size={20} />,
    mac: <FaApple size={20} />,
    linux: <FaLinux size={20} />,
    android: <FaAndroid size={20} />,
    ios: <MdPhoneIphone size={20} />,
    nintendo: <SiNintendo  size={20}/>,
    web: <BsGlobe size={20} />,
  };
  return (
    <div className="flex gap-1 text-gray-500">
      {platforms.map((platform) => (
        <p key={platform.id}>{iconMap[platform.slug]}</p>
      ))}
    </div>
  );
};

export default PlatformIconList;
