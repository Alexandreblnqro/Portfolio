import { useState } from "react";
import ProjectData from "../components/ProjectData/ProjectData";
import projects from "../data/projects.json";

const Web = () => {
  const [projectData, setProjectData] = useState(projects);

  return (
    <div>
      <h2 className="text-lg font-bold">Web</h2>
      <div>
        <ul className="grid grid-cols-3 gap-5 px-6">
          {projectData.map(({ id, category, subtitle, title, href }) => {
            if (category === "web")
              return (
                <ProjectData
                  id={id}
                  category={category}
                  subtitle={subtitle}
                  title={title}
                  url={href}
                />
              );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Web;
