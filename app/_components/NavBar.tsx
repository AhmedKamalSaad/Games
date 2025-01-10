import { Gamepad2 } from "lucide-react";
import React from "react";
import ModeSwitch from "./ModeSwitch";
import PlatformsList from "./PlatformsList";

const NavBar = () => {
  return (
    <nav className=" h-16 flex items-center px-2 justify-between">
      <div className="flex items-center">
        <Gamepad2 size={45} /> 
        <PlatformsList/>
      </div>
      <ModeSwitch />
    </nav>
  );
};

export default NavBar;
