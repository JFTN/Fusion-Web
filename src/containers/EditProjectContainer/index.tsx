import React, { ReactElement, HTMLAttributes, useState } from "react";

import ProjectHeader from "components/ProjectHeader";
import EditProjectHeader from "components/ProjectHeader/Edit";
import ProjectRowList from "components/ProjectRowList";
import TabGroup from "components/TabGroup";
import ProjectModel from "models/Project";
import ProjectRowModel, {
  ProjectRowType,
  ProjectRowTextModel,
  TextStyle,
} from "models/ProjectRow";
import { ProfileModel } from "models/User";

interface EditProjectContainerProps extends HTMLAttributes<HTMLElement> {
  project: ProjectModel;
  setProject: (value: ProjectModel) => void;
  profile: ProfileModel;
  rows: ProjectRowModel[];
  setRows: (value: ProjectRowModel[]) => void;
}

const addNewRow = (
  rows: ProjectRowModel[],
  setRows: (value: ProjectRowModel[]) => void
): void => {
  const newRow: ProjectRowTextModel = {
    id: `${rows.length}`,
    type: ProjectRowType.Text,
    content: "Hello",
    style: TextStyle.p,
  };
  setRows([...rows, newRow]);
};

const EditProjectContainer = ({
  project,
  setProject,
  profile,
  rows,
  setRows,
  ...rest
}: EditProjectContainerProps): ReactElement => {
  return (
    <div {...rest}>
      <TabGroup>
        <TabGroup.Item title="Edit">
          <h1>Edit</h1>
          <EditProjectHeader
            {...project}
            authorProfile={profile}
            setTitle={title => setProject({ ...project, title })}
            setTagFlags={tagFlags => setProject({ ...project, tagFlags })}
          />
          <button type="button" onClick={() => addNewRow(rows, setRows)}>
            New Row
          </button>
        </TabGroup.Item>
        <TabGroup.Item title="Preview">
          <ProjectHeader {...project} authorProfile={profile} />
          <ProjectRowList rows={rows} />
        </TabGroup.Item>
      </TabGroup>
    </div>
  );
};

export default EditProjectContainer;
