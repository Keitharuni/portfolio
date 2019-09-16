import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProjectsCarousel.styles.scss";
import { Carousel } from "react-responsive-carousel";

const ProjectsCarousel = ({ toggleDetails, projects, details }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        width='70vw'
        autoPlay={true}
        interval='3500'
        dynamicHeight={true}>
        {projects.map(project => (
          <div key={project.id}>
            {details ? (
              <h1>Details</h1>
            ) : (
              <img alt={project.title} src={project.img} />
            )}
            <a
              className='launch-button'
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'>
              Launch {project.title}
            </a>
            <button className='details-button' onClick={toggleDetails}>
              {project.title} Details
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default ProjectsCarousel;
