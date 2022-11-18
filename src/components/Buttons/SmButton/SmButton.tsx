import React from "react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface SmButtonProps {
  label: string;
  url?: string;
}

function SmButton({ label, url }: SmButtonProps) {
  const navigate = useNavigate();

  return (
    <motion.button
      className="text-white bg-red font-medium rounded-full text-sm px-6 py-2.5 mr-3 my-4"
      whileHover={{ width: 250 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        navigate("/" + url);
      }}
    >
      {label}
    </motion.button>
  );
}

export default SmButton;
