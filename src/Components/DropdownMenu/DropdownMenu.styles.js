import styled from "styled-components";
import "../../SCSS/_colors.scss";

export { default } from "./DropdownMenu.component";

export const StyledDropdownMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #348498;
  height: 100vh;
  text-align: center;
  padding: 1rem;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};

  @media (max-width: 800px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1.25rem 0;
    margin-left: -10px;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    text-shadow: 2px 2px black;

    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
  }
`;
