import React from "react";
import FontAwesomeIcons from "../../Components/FontAwesomeIcons/FontAwesomeIcons.component";

import "./Skills.styles.scss";

import {
  faHtml5,
  faGit,
  faReact,
  faNodeJs,
  faJs,
  faNpm,
  faCss3Alt,
  faSass
} from "@fortawesome/free-brands-svg-icons";

const icons = [
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faReact,
  faNodeJs,
  faNpm,
  faGit
];

const Skills = () => {
  return (
    <div className='skills'>
      <h1>SKILLS</h1>
      <h3>PROGRAMMING LANGUAGES & TOOLS</h3>

      <div>
        <FontAwesomeIcons icons={icons} />
      </div>
    </div>
  );
};

export default Skills;
