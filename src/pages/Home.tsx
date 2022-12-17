import React from "react";

import GridLink from "../components/Grid/GridLink/GridLink";
import GridPresentation from "../components/Grid/GridPresentation/GridPresentation";

function Home() {
  return (
    <div className="grid grid-cols-4 gap-5 px-6">
      <GridPresentation />
      <div className=" hidden md:block bg-[url('/public/assets/img/alex_background.png')] bg-cover scale-x-[-1] rounded-lg shadow-xl min-h-[300px]"></div>

      <GridLink label="Projets" linkUrl="projets" />
      <GridLink label="Tincoffee" linkUrl="tincoffee" />
    </div>
  );
}

export default Home;
