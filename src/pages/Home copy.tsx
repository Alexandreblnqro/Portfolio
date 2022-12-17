import React from "react";

import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-4 gap-5 px-6">
      <div className="bg-blue rounded-lg shadow-xl min-h-[300px] col-span-4 md:col-span-3 flex items-center">
        <div className="flex flex-col m-4 text-white">
          <div>
            <div>
              <h2 className="font-interBold text-4xl mb-2">
                Salutations ! Je suis Alexandre !
              </h2>
              <p className="font-inter text-3xl mb-6">
                Concepteur Web, infographiste et éditeur vidéo !
              </p>
            </div>
          </div>
          <div>
            <p>
              Ce qui m’intéresse le plus est de permettre à des associatons, ou
              petites entreprise de se développer dans le monde en plein
              expension du web ! Afin de leurs permettre de trouver une identité
              graphique, et de s’ouvrir à un tout nouveau marché en pleine
              expension !
            </p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap">
            <motion.button
              className="text-white bg-red font-medium rounded-full text-sm px-6 py-2.5 mr-3 my-4"
              whileHover={{ width: 250 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                navigate("/contact");
              }}
            >
              M
            </motion.button>
            <a href="https://github.com/Alexandreblnqro">
              <motion.button
                whileHover={{ width: 250 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                whileTap={{ scale: 0.9 }}
                className="text-white bg-red font-medium rounded-full text-sm px-6 py-2.5 mr-3 my-4"
              >
                G
              </motion.button>
            </a>
            <a
              href="/public/assets/img/cv.pdf"
              download={"CV_alexandre-blanquero.pdf"}
            >
              <motion.button
                whileHover={{ width: 250 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                whileTap={{ scale: 0.9 }}
                className="text-white bg-red font-medium rounded-full text-sm px-6 py-2.5 mr-3 my-4"
              >
                C
              </motion.button>
            </a>
            <a href="https://alexandre-blanquero.fr/">
              <motion.button
                whileHover={{ width: 250 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                whileTap={{ scale: 0.9 }}
                className="text-white bg-red font-medium rounded-full text-sm px-6 py-2.5 mr-3 my-4"
              >
                S
              </motion.button>
            </a>
          </div>
        </div>
      </div>
      <div className=" hidden md:block bg-[url('/public/assets/img/alex_background.png')] bg-cover scale-x-[-1] rounded-lg shadow-xl min-h-[300px]"></div>
      <motion.div
        whileHover={{ scale: 1.03 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        whileTap={{ scale: 0.9 }}
        className="overflow-hidden rounded-lg shadow-xl col-span-4 md:col-span-2 "
      >
        <Link
          to={"/projets"}
          className="bg-[url('/public/assets/img/projects_background.jpg')] min-h-[300px] bg-cover flex justify-center items-center"
        >
          <h2 className="font-interBold text-5xl md:text-7xl text-white text-shadow-md">
            Mes projets
          </h2>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.03 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        whileTap={{ scale: 0.9 }}
        className="overflow-hidden rounded-lg shadow-xl col-span-4 md:col-span-2 "
      >
        <Link
          to={"/tincoffee"}
          className="bg-[url('/public/assets/img/tincoffee_background.jpg')] min-h-[300px] bg-cover flex justify-center items-center"
        >
          <h2 className="font-interBold text-5xl md:text-7xl text-white text-shadow-md">
            Tincoffee
          </h2>
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
