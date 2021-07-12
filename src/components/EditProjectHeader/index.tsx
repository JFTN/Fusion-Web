import React, { ReactElement, HTMLAttributes } from "react";

import ProjectTagList from "containers/ProjectTagList";
import ProjectModel from "models/Project";
import { ProfileModel } from "models/User";

type ProjectHeaderProps = ProjectModel & {
  authorProfile: ProfileModel | undefined;
  setTitle: (value: string) => void;
  setTagFlags: (value: number) => void;
} & HTMLAttributes<HTMLElement>;

const ProjectHeader = ({
  author,
  title,
  tagFlags,
  thumbnail,
  authorProfile,
  setTitle,
  setTagFlags,
  ...rest
}: ProjectHeaderProps): ReactElement => (
  <div {...rest}>
    <input
      type="text"
      value={title}
      onChange={event => setTitle(event.target.value)}
    />
  </div>
);

export default ProjectHeader;
