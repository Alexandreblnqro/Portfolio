import { motion } from "framer-motion";
import React from "react";
import SmButtonLink from "../Buttons/SmButton/SmButtonLink";

import { AiOutlineArrowRight } from "react-icons/ai";

interface ProjectDataProps {
  id: any;
  category: string;
  title: string;
  subtitle: string;
  url: string;
}

function ProjectData({ id, category, title, subtitle, url }: ProjectDataProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      className="overflow-hidden rounded-lg shadow-xl bg-gradient-to-r from-blue to-cyan-800 p-6 text-white my-4"
    >
      <div id={id}>
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <SmButtonLink label={<AiOutlineArrowRight />} url={url} />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectData;
