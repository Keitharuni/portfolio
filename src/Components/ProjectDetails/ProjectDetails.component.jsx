import React from "react";

import "./ProjectDetails.styles.scss";

const ProjectDetails = ({ title, projectDetails }) => {
  const details = (
    <div className='project-details'>
      {projectDetails.map(detail => (
        <h4 key={detail}>{detail}</h4>
      ))}
      <button>Launch {title} </button>
    </div>
  );

  return <div>{details}</div>;
};

export default ProjectDetails;
