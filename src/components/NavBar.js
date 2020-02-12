import React from "react";
import M from "materialize-css";

//make it as a functional component , bcz its simple
class Navbar extends React.Component {
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Manvi Tyagi
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Home</a>
            </li>
            <li>
              <a href="badges.html">About</a>
            </li>
            <li>
              <a href="collapsible.html">Experience</a>
            </li>
            <li>
              <a href="collapsible.html">Education</a>
            </li>
            <li>
              <a href="collapsible.html">Projects</a>
            </li>
            <li>
              <a href="collapsible.html">Blog</a>
            </li>
            <li>
              <a href="collapsible.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Navbar;
