import React from "react";
import "../globals.css";
import { Bars3Icon } from "@heroicons/react/16/solid";

interface Props {
     openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
     return (
          <div className="w-[100%] top-0 h-[12vh] bg-[#11122B] shadow-md">
               <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
                    <h1 className="flex-[0.8] cursor-pointer text-3xl font-bold">
                         WEB
                         <span className="text-[#C9CAD1]">DEV</span>
                    </h1>
                    <div className="nav-link">Home</div>
                    <div className="nav-link">CV</div>
                    <div className="nav-link">Projects</div>
                    <div className="nav-link">Blog</div>
                    <div className="nav-link">Contact</div>
                    <div onClick={openNav}>
                         <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#C9CAD1]" />
                    </div>
               </div>
          </div>
     );
};

export default Nav;
