/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";

import coffeedata from "../../data/coffee.json";

{
  /* 

COMPOSANT QUI GERE LE SWIPE DES CARTES DE CAFÉ

*/
}

function Card() {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const color = useTransform(x, xInput, [
    "rgb(227, 74, 71)",
    "rgb(227, 74, 71)",
    "rgb(64, 154, 62)",
  ]);

  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

  const animControls = useAnimation();

  const [dataIndex, setDataIndex] = useState(0);

  let coffeeDataActual = coffeedata[dataIndex];

  return (
    <motion.div
      className="bg-white h-[600px] w-64 rounded-xl"
      style={{ x }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(event, info) => {
        {
          /* Si x < 170 (swipe gauche) alors c'est un Nope et change l'index de la donnée JSON */
        }
        if (Math.abs(info.point.x) < 170) {
          console.log("Nope");
          if (dataIndex !== coffeedata.length - 1) {
            setDataIndex(dataIndex + 1);
          }
          {
            /* Si x > 700 (swipe droite) alors c'est un Like et change l'index de la donnée JSON */
          }
        } else if (info.point.x > 700) {
          if (dataIndex !== coffeedata.length - 1) {
            setDataIndex(dataIndex + 1);
          }
          console.log("Like");
          {
            /* Si le mouvemebt est pas assez prononcé, revient à la position de départ */
          }
        } else if (Math.abs(info.point.x) <= 150) {
          animControls.start({ x: 0 });
          console.log(info.point.x);
        }
      }}
    >
      <svg className="progress-icon z-50 absolute" viewBox="0 0 50 50">
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke={color}
          d="M14,26 L 22,33 L 35,16"
          strokeDasharray="0 1"
          style={{ pathLength: tickPath }}
        />
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke={color}
          d="M17,17 L33,33"
          strokeDasharray="0 1"
          style={{ pathLength: crossPathA }}
        />
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke={color}
          d="M33,17 L17,33"
          strokeDasharray="0 1"
          style={{ pathLength: crossPathB }}
        />
      </svg>
      <div>
        <div>
          <img
            className="bg-cover scale-x-[-1] min-h-[300px] rounded-t-xl"
            src={coffeeDataActual["imgurl"]}
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="m-2">
          <p className="font-bold">
            {coffeeDataActual["name"]} - {coffeeDataActual["type"]}
          </p>
        </div>
        <hr />
        <div>
          <p className="m-2">
            <span className="font-semibold">Composition:</span>{" "}
            {coffeeDataActual["composition"]}
          </p>
          <div></div>
          <hr />
          <div className="m-2">
            <p>{coffeeDataActual["anecdote"]}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
