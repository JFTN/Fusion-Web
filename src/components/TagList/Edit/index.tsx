import React, { ReactElement, HTMLAttributes } from "react";

import ListView from "components/ListView";
import TagModel from "models/Tag";

import EditTag from "./_Tag";

interface EditTagListProps extends HTMLAttributes<HTMLElement> {
  tags: TagModel[];
  currentFilter: number;
  setTagFlags: (value: number) => void;
}

const EditTagList = ({
  tags,
  currentFilter,
  setTagFlags,
  ...rest
}: EditTagListProps): ReactElement => (
  <ListView
    items={tags}
    getItemKey={tag => `${tag.flag}`}
    onRenderRow={tag => (
      <EditTag
        {...tag}
        currentFilter={currentFilter || 0}
        setTagFlags={setTagFlags}
      />
    )}
    {...rest}
  />
);

export default EditTagList;
