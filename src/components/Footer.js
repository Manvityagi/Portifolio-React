import React from "react";
import "../css/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer">
          <p>
            Copyright &copy; 2020
            <br />
            All Rights Reserved. Manvi Tyagi.
          </p>
          <p>Happy Coding!</p>

          <ul
            class="soc_ial-link wow fadeInUp"
            style={{ visibility: "visible" }}
          >
            <li>
              <a target="_blank" href="https://www.facebook.com/praveenscience">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/praveenscience">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://uk.linkedin.com/in/praveentech">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://stackoverflow.com/users/462627">
                <i class="fa fa-stack-overflow"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://stackexchange.com/users/210807">
                <i class="fa fa-stack-exchange"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/praveenscience">
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://git.praveen.science">
                <i class="fa fa-gitlab"></i>
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Footer;
