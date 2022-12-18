import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface SmButtonProps {
  label: string | JSX.Element;
  url?: string;
  widthMovement?: number;
}

{
  /* 

COMPOSANT QUI GERE LES BOUTONS DE LIEN

*/
}

function SmButtonLink({ label, url }: SmButtonProps) {
  return (
    <a href={url}>
      {" "}
      {/* <a to={url}> */}
      <motion.button
        whileHover={{ width: 250 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "just",
        }}
        className="text-white bg-red font-medium rounded-full text-sm px-6 py-2.5 mr-3 my-4 flex justify-center"
      >
        {label}
      </motion.button>
    </a>
  );
}

export default SmButtonLink;
