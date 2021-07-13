import React, { ReactElement, HTMLAttributes } from "react";

import EditTagList from "components/TagList/Edit";
import TagModel from "models/Tag";
import { ProfileModel } from "models/User";

interface EditProjectTagListProps extends HTMLAttributes<HTMLElement> {
  author: string;
  tagFlags: number;
  authorProfile: ProfileModel | undefined;
  setTagFlags: (value: number) => void;
}

const EditProjectTagList = ({
  author,
  tagFlags,
  authorProfile,
  setTagFlags,
  ...rest
}: EditProjectTagListProps): ReactElement => {
  const tagObjects = authorProfile?.tags?.map(
    (tag, index): TagModel => ({
      flag: 1 << index,
      name: tag,
      username: author,
    })
  );

  return (
    <EditTagList
      tags={tagObjects ?? []}
      currentFilter={tagFlags}
      setTagFlags={setTagFlags}
      {...rest}
    />
  );
};

export default EditProjectTagList;
