import React, { ReactElement, ReactNode, HTMLAttributes } from "react";

interface TabGroupItemProps extends HTMLAttributes<HTMLElement> {
  title: string;
  children?: ReactNode;
}

const TabGroupItem = ({ title, children }: TabGroupItemProps): ReactElement => (
  <div>
    <p>{title}</p>
    {children}
  </div>
);

TabGroupItem.defaultProps = {
  children: undefined,
};

type TabGroupItemType = ReactElement<TabGroupItemProps>;

export default TabGroupItem;
export { TabGroupItemType };
