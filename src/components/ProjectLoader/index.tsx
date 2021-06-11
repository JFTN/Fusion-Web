import React, { useState } from "react";

import api from "api/fakeProjectAPI";
import ProjectView from "components/ProjectView";
import ProjectModel, { ProjectQueryModel } from "models/Project";

const ProjectLoader: React.FC<ProjectQueryModel> = ({
  title,
}: ProjectQueryModel) => {
  const [project, setProject] = useState<ProjectModel>();

  if (project === undefined) {
    const fetchProject = api.fetchWithTitle(title);
    fetchProject
      .then(setProject)
      .catch(err => console.log("Error fetching project", err));
    return <h1>Loading</h1>;
  }

  return <ProjectView {...project} />;
};

export default ProjectLoader;