import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
     nav: boolean;
     closeNav: () => void;
}

const HumbergerMenu = ({ nav, closeNav }: Props) => {
     const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
     return (
          <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#0E0F26]`}>
               <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                    <div className="nav-link-mobile">Home</div>
                    <div className="nav-link-mobile">CV</div>
                    <div className="nav-link-mobile">Projects</div>
                    <div className="nav-link-mobile">Blog</div>
                    <div className="nav-link-mobile">Contact</div>
               </div>
               <div onClick={closeNav} className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-[#F6F5F6]">
                    <XMarkIcon />
               </div>
          </div>
     );
};

export default HumbergerMenu;
