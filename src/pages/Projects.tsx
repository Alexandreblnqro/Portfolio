import React from "react";
import GridProjects from "../components/Grid/GridProjects/GridProjects";

function Projects() {
  return (
    <div className="flex flex-col justify-start items-center md:justify-around text-center h-80vh md:flex-row">
      <GridProjects
        title="WEB"
        label="Développement web, UI Design"
        url="/projets/web"
      />
      <GridProjects
        title="DESIGN"
        label="Illustrations, logos, affiches, publications..."
        url="/projets/design"
      />
      <GridProjects
        title="VIDÉO"
        label="Publicités courtes, vidéos narratives..."
        url="/projets/video"
      />
    </div>
  );
}

export default Projects;
