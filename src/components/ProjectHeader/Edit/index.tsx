import React, { ReactElement, HTMLAttributes } from "react";

import EditTagList from "containers/EditProjectTagList";
import ProjectModel from "models/Project";
import { ProfileModel } from "models/User";

type EditProjectHeaderProps = ProjectModel & {
  authorProfile: ProfileModel | undefined;
  setTitle: (value: string) => void;
  setTagFlags: (value: number) => void;
} & HTMLAttributes<HTMLElement>;

const EditProjectHeader = ({
  author,
  title,
  tagFlags,
  authorProfile,
  setTitle,
  setTagFlags,
  ...rest
}: EditProjectHeaderProps): ReactElement => (
  <div {...rest}>
    <input
      type="text"
      placeholder="Project Title"
      value={title}
      onChange={event => setTitle(event.target.value)}
    />
    <EditTagList
      author={author}
      tagFlags={tagFlags}
      authorProfile={authorProfile}
      setTagFlags={setTagFlags}
    />
  </div>
);

export default EditProjectHeader;
