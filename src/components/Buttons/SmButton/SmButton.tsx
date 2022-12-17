import React from "react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface SmButtonProps {
  label: string | JSX.Element;
  url?: string;
}

function SmButton({ label, url }: SmButtonProps) {
  const navigate = useNavigate();

  return (
    <motion.button
      className="text-white bg-red font-medium rounded-full text-sm px-6 py-2.5 mr-3 my-4 flex justify-center"
      whileHover={{ width: 250 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "just",
      }}
      onClick={() => {
        navigate("/" + url);
      }}
    >
      {label}
    </motion.button>
  );
}

export default SmButton;
