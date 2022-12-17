import { useState } from "react";
import ProjectData from "../components/ProjectData/ProjectData";
import projects from "../data/projects.json";

interface ProjectManagerProps {
  type: string;
}

const ProjectManager = ({ type }: ProjectManagerProps) => {
  const [projectData, setProjectData] = useState(projects);
  return (
    <div>
      <h1 className="ml-6 mb-4 text-6xl font-bold text-white">{type}</h1>
      <div>
        <ul className="flex flex-col md:grid md:grid-cols-3 md:gap-5 px-6">
          {projectData.map(({ id, category, subtitle, title, href }) => {
            if (type === category)
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
export default ProjectManager;
