import React, { ReactElement, HTMLAttributes } from "react";
import { Link } from "react-router-dom";

import TagModel from "models/Tag";

type TagProps = TagModel & {
  currentFilter: number;
} & HTMLAttributes<HTMLElement>;

const Tag = ({
  flag,
  name,
  username,
  currentFilter,
  ...rest
}: TagProps): ReactElement => {
  return (
    <Link to={`/${username}?tags=${flag ^ currentFilter}`} {...rest}>
      {flag & currentFilter ? `[${name}]` : name}
    </Link>
  );
};

export default Tag;
