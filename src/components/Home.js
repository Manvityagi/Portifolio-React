import React from "react";
import "../css/Home.css";

class Home extends React.Component {
  render() {
    return (
      <section id="home">
        <div>
          <img className="bg" src="/images/manvi3.jpg" />
          <div className="intro">
            <h1 className="me">Hi! I am Manvi</h1>
            <h2 className="whome">
              I am a Web Deveoper, a community leader and a mentor
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
