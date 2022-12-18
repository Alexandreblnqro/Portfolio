import React from "react";

import { Link } from "react-router-dom";

import { AiFillHome, AiFillProject } from "react-icons/ai";
import { FaCoffee } from "react-icons/fa";

{
  /* 

COMPOSANT QUI GERE LA NAVBAR (Bravo sherlock)

*/
}

function Navbar() {
  return (
    <nav className="flex justify-between mx-16 p-5 text-white">
      <div>
        <Link to="/" className="font-interBold text-2xl hidden md:block">
          ALEXANDRE BLANQUERO
        </Link>
        <Link to="/" className="font-interBold text-2xl md:hidden block">
          <AiFillHome />
        </Link>
      </div>
      <div className="font-inter text-xl flex">
        <Link to="/projets" className="pr-8 hidden md:block">
          Projets
        </Link>
        <Link to="/projets" className="pr-8 md:hidden block">
          <AiFillProject />
        </Link>
        <Link to="/tincoffee" className="pl-8 hidden md:block">
          Tincoffee
        </Link>
        <Link to="/" className="font-interBold text-2xl md:hidden block">
          <FaCoffee />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
