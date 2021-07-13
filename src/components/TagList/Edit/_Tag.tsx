import React, { ReactElement, HTMLAttributes } from "react";

import TagModel from "models/Tag";

type EditTagProps = TagModel & {
  currentFilter: number;
  setTagFlags: (value: number) => void;
} & HTMLAttributes<HTMLElement>;

const EditTag = ({
  flag,
  name,
  currentFilter,
  setTagFlags,
  ...rest
}: EditTagProps): ReactElement => {
  return (
    <button
      type="button"
      onClick={() => setTagFlags(flag ^ currentFilter)}
      {...rest}
    >
      {flag & currentFilter ? `[${name}]` : name}
    </button>
  );
};

export default EditTag;
