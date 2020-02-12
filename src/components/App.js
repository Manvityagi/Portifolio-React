import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "./NavBar";
import Home from "./Home";
import About from "./About";
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
        <Experience />
        <Project />
        <Achievements />
        <ContactMe />
        <Footer />
      </>
    );
  }
}

export default App;
