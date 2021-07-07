import React, { ReactElement, HTMLAttributes } from "react";

import ProjectModel from "models/Project";

import ProjectListItem from "./ProjectListItem";

interface ProjectListProps extends HTMLAttributes<HTMLElement> {
  projects: ProjectModel[];
}

const ProjectList = ({
  projects,
  className,
  ...rest
}: ProjectListProps): ReactElement => (
  <div className={`user-projects-list ${className || ""}`} {...rest}>
    <ul>
      {projects.map(project => (
        <ProjectListItem key={project.title} {...project} />
      ))}
    </ul>
  </div>
);

export default ProjectList;
export { ProjectListItem };
