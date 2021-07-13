import React, { ReactElement, ReactNode, HTMLAttributes } from "react";

interface NavbarItemProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

const NavbarItem = ({
  children,
  onClick,
  ...rest
}: NavbarItemProps): ReactElement => (
  <li {...rest}>
    <button type="button" onClick={onClick}>
      {children}
    </button>
  </li>
);

NavbarItem.defaultProps = {
  children: undefined,
};

type NavbarItemType = ReactElement<NavbarItemProps>;

export default NavbarItem;
export { NavbarItemType };
