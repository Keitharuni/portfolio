import React from "react";
import ProjectDetails from "../ProjectDetails/ProjectDetails.component";

import "./Project.styles.scss";
import Hover from "../Hover/Hover.component";

const Project = ({ title, url, image, projectDetails }) => {
  return (
    <div>
      <Hover
        onHover={
          <ProjectDetails title={title} projectDetails={projectDetails} />
        }>
        <div className='project'>
          <a href={url} rel='noopener noreferrer' target='_blank'>
            <img alt={title} src={image} />
          </a>
        </div>
      </Hover>
    </div>
  );
};

export default Project;
