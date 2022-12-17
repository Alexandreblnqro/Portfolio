import React from "react";

import { motion } from "framer-motion";

interface SmButtonProps {
  label: string | JSX.Element;
  url?: string;
  download: string;
}

function SmButtonDownload({ label, url, download }: SmButtonProps) {
  return (
    <a href={url} target={"_blank"} download={download}>
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

export default SmButtonDownload;
