import React from "react";

import DadJokes from "../../Images/DadJokesAPI.JPG";
import ColorApp from "../../Images/ColorApp.JPG";
import eCommerce from "../../Images/eCommerce.JPG";

import "./ProjectList.styles.scss";
import Project from "../Project/Project.component";

const projects = [
  {
    id: 4,
    title: "e-Commerce Site",
    img: eCommerce,
    url: "https://ecommerce-clothing-site.herokuapp.com/",
    details: [
      "e-Commerce site built with Redux and SCSS with the use of Stripe test intergration payment and Firebase Authentication"
    ]
  },
  {
    id: 1,
    title: "Dad Jokes API",
    img: DadJokes,
    url: "https://dad-jokes-api.herokuapp.com/",
    details: [
      "Axios API call to icanhazdadjoke.com, jokes stored in localStorage, animations when reordering list, and loading icon"
    ]
  },
  {
    id: 2,
    title: "Large Color App",
    img: ColorApp,
    url: "https://large-color-app.herokuapp.com/",
    details: [
      "Clone color app styled via CSS in JS, with form validation, and dynamic color text based on background color of individual colors within a palette"
    ]
  }
];
const ProjectList = () => {
  return (
    <div className='project-list'>
      <div className='project-header'>
        <h1>PROJECTS</h1>
        <h3>
          A few projects that show my skills as a web developer, using reusable
          components to create single page applications.
        </h3>
      </div>
      <div className='project-div'>
        {projects.map(project => (
          <Project
            key={project.id}
            image={project.img}
            url={project.url}
            title={project.title}
            projectDetails={project.details}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
