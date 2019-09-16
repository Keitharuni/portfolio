import React, { useState } from "react";
import { Link } from "react-router-dom";
import Me from "../../Images/Me.jpg";
import Burger from "../Burger/Burger.component";

import "./Navbar.styles.scss";
import DropdownMenu from "../DropdownMenu/DropdownMenu.component";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='navbar'>
        <Link to='/'>
          <img src={Me} alt='Keith Blackmon' className='navImg' />
        </Link>
        <Link className='navLink' to='/'>
          About
        </Link>
        <Link className='navLink' to='/projects'>
          Projects
        </Link>
        <Link className='navLink' to='/skills'>
          Skills
        </Link>
        <Link className='navLink' to='/education'>
          Education
        </Link>
        <Link className='navLink' to='/experience'>
          Experience
        </Link>
        <Link className='navLink' to='/interests'>
          Interests
        </Link>
      </div>
      <div className='mini-navbar'>
        <h1>Keith Blackmon</h1>
        <Burger className='burger-comp' open={open} setOpen={setOpen} />
        <DropdownMenu open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Navbar;
