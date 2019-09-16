import styled from "styled-components";

import "../../SCSS/_colors.scss";

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 30px;
  margin-right: 10px;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #effffa;
    border-radius: 10px;
    box-shadow: 2px 2px black;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      box-shadow: ${({ open }) => (open ? "2px 0px black" : "2px 2px black")};
      z-index: 10;
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateY(20px)" : "translateY(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      box-shadow: ${({ open }) => (open ? "0px 2px black" : "2px 2px black")};
    }
 s
  }
`;
