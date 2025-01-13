'use client'
import { Gamepad2 } from "lucide-react";
import React from "react";
import ModeSwitch from "./ModeSwitch";
import dynamic from "next/dynamic";
const SearchInput = dynamic(() => import("./SearchInput"), { ssr: false });

const NavBar = () => {
  return (
    <nav className=" h-16 flex items-center px-2 justify-between">
      <div className="flex items-center">
        <Gamepad2 size={45} />
      </div>
      <SearchInput />
      <ModeSwitch />
    </nav>
  );
};

export default NavBar;
