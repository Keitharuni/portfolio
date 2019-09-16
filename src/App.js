import React from "react";
import { Switch, Route } from "react-router-dom";

import Experience from "./Pages/Experience/Experience.component";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.component";
import Education from "./Pages/Education/Education.component";
import About from "./Pages/About/About.component";
import Interests from "./Pages/Interests/Interests.component";
import Skills from "./Pages/Skills/Skills.component";
import ProjectList from "./Components/ProjectList/ProjectList.component";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/interests' component={Interests} />
        <Route exact path='/' component={About} />
        <Route exact path='/projects' component={ProjectList} />
        <Route exact path='/experience' component={Experience} />
        <Route exact path='/skills' component={Skills} />

        <Route exact path='/education' component={Education} />
      </Switch>
    </div>
  );
};

export default App;
