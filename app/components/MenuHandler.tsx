"use client";
import React, { useState } from "react";
import HumbergerMenu from "./HumbergerMenu";
import Nav from "./Nav";

const MenuHandler = () => {
     const [nav, setNav] = useState(false);
     const openNav = () => setNav(true);
     const closeNav = () => setNav(false);
     return (
          <div>
               <HumbergerMenu nav={nav} closeNav={closeNav} />
               <Nav openNav={openNav} />
          </div>
     );
};

export default MenuHandler;
