import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface gridLinkProps {
  label: string;
  imgUrl?: string;
  linkUrl: string;
}

function GridLink({ label, imgUrl, linkUrl }: gridLinkProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      whileTap={{ scale: 0.9 }}
      className="overflow-hidden rounded-lg shadow-xl col-span-4 md:col-span-2 "
    >
      <Link
        to={`/${linkUrl}`}
        className="bg-gradient-to-r from-blue to-cyan-800 min-h-[300px] bg-cover flex justify-center items-center"
      >
        <h2 className="text-center font-interBold text-5xl md:text-7xl text-white text-shadow-md ">
          {label}
        </h2>
      </Link>
    </motion.div>
  );
}

export default GridLink;
