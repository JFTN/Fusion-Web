import React, { ReactElement, HTMLAttributes } from "react";

import NavbarItem, { NavbarItemType } from "./_NavbarItem";

interface NavbarProps extends HTMLAttributes<HTMLElement> {
  children: NavbarItemType | NavbarItemType[];
  onNavbarClick?: (i: number) => void;
}

const Navbar = ({
  children,
  onNavbarClick,
  ...rest
}: NavbarProps): ReactElement => {
  if (onNavbarClick === undefined) {
    return <ul {...rest}>{children}</ul>;
  }

  return (
    <ul {...rest}>
      {React.Children.map(children, (child, index) => (
        <NavbarItem onClick={() => onNavbarClick(index)}>
          {child.props.children}
        </NavbarItem>
      ))}
    </ul>
  );
};

Navbar.defaultProps = {
  onNavbarClick: undefined,
};

Navbar.Item = NavbarItem;

export default Navbar;
