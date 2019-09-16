import React from "react";

import { StyledDropdownMenu } from "./DropdownMenu.styles";

const DropdownMenu = ({ open }) => {
  return (
    <StyledDropdownMenu open={open}>
      <a href='/'>About</a>
      <a href='/projects'>Projects</a>
      <a href='/skills'>Skills</a>
      <a href='/education'>Education</a>
      <a href='/experience'>Experience</a>
      <a href='/interests'>Interests</a>
    </StyledDropdownMenu>
  );
};
export default DropdownMenu;
