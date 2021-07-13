import React, { ReactElement, HTMLAttributes, useState } from "react";

import Navbar from "components/Navbar";

import TabGroupItem, { TabGroupItemType } from "./_TabGroupItem";

interface TabGroupProps extends HTMLAttributes<HTMLElement> {
  children: TabGroupItemType | TabGroupItemType[];
}

const TabGroup = ({ children }: TabGroupProps): ReactElement => {
  const childrenArray = React.Children.map(children, child => child);
  const tabs = childrenArray.map(child => child.props.title);

  const [index, setIndex] = useState(0);

  return (
    <div>
      <Navbar onNavbarClick={setIndex}>
        {tabs.map(tab => (
          <Navbar.Item key={tab}>{tab}</Navbar.Item>
        ))}
      </Navbar>
      {childrenArray[index].props.children}
    </div>
  );
};

TabGroup.Item = TabGroupItem;

export default TabGroup;
