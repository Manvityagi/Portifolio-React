import React from "react";
import "../css/About.css";
import Skills from "../components/Skills";
import Education from "./Education";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1 className="heading">Let's know each other a bit :)</h1>
        <div className="container">
        <a href="https://www.linkedin.com/in/priyabrata-biswas-22748813b/" title="Linkedin" target="_blank" class="social-media fa fa-linkedin"></a>


          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
            <h4>YES I LIKE MINIONS!</h4>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
