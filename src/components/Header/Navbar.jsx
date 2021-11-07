import React from "react";

import styled from "styled-components";
import { largeScreen } from "../../utils/responsive";

import { NavItems } from "../../utils/data";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <Nav>
      {NavItems.map((navItem) => {
        return <NavItem {...navItem} key={navItem.id} />;
      })}
    </Nav>
  );
}

const Nav = styled.nav`
  /* border: 1px solid; */
  ${largeScreen({
    display: `flex`,
    alignItems: `center`,
  })}
`;
