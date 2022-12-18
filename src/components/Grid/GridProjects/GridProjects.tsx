import React from "react";
import SmButtonLink from "../../Buttons/SmButton/SmButtonLink";

import { AiOutlineArrowRight } from "react-icons/ai";

interface GridProjectsProps {
  title: string;
  label: string;
  url: string;
}

{
  /* 

COMPOSANT QUI GERE SOUS FORMAT DE GRID LES LIENS PERMETTANT D'ACCEDER AUX DIFFERENTS TYPES DE PROJETS

*/
}

function GridProjects({ title, label, url }: GridProjectsProps) {
  return (
    <div className="box bg-gradient-to-b from-blue to-cyan-800 w-1/2 h-1/3 md:w-full mx-10 rounded-lg flex flex-col justify-center items-center my-2 md:my-10 p-4">
      <h2 className="text-lg md:text-7xl font-bold">{title}</h2>
      <p className="text-left">{label}</p>
      <SmButtonLink label={<AiOutlineArrowRight />} url={`${url}`} />
    </div>
  );
}

export default GridProjects;
