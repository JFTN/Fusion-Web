import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import EditProjectContainer from "containers/EditProjectContainer";
import ProjectModel from "models/Project";
import ProjectRowModel from "models/ProjectRow";
import { ProfileModel } from "models/User";

interface NewProjecctLayoutProps {
  project: ProjectModel;
  setProject: (value: ProjectModel) => void;
  profile: ProfileModel;
  rows: ProjectRowModel[];
  setRows: (value: ProjectRowModel[]) => void;
}

const NewProjectLayout = ({
  project,
  setProject,
  profile,
  rows,
  setRows,
}: NewProjecctLayoutProps): ReactElement => (
  <>
    <Link to="/">Home</Link>
    <EditProjectContainer
      project={project}
      setProject={setProject}
      profile={profile}
      rows={rows}
      setRows={setRows}
    />
  </>
);

export default NewProjectLayout;
