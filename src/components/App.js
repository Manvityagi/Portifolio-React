import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "../css/App.css";
import Navbar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Project from "./Project";
import Achievements from "./Achievements";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <div className="project-container">
          <div class="sectiontitle">
            <h2>Projects</h2>
            <span class="headerLine"></span>
          </div>
          <div className="row">
            <div className="col s4">
              <Project />
            </div>
            <div className="col s4">
              <Project />
            </div>
            <div className="col s4">
              <Project />
            </div>
          </div>
          <div className="row">
            <div className="col s4">
              <Project />
            </div>
            <div className="col s4">
              <Project />
            </div>
            <div className="col s4">
              <Project />
            </div>
          </div>
        </div>
        <ContactMe />
        <Footer />
      </>
    );
  }
}

export default App;
