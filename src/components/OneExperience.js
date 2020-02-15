import React from "react";
import "../css/oneExperience.css";

class OneExperience extends React.Component {
  render() {
    return (
      <div id="workexperience" class="sectionClass">
        <div class="row">
        
          <div class="fullWidth eight columns">
            <ul class="cbp_tmtimeline">
              <li>
                <div class="cbp_tmicon cbp_tmicon-phone">
                  <i class="faPra fa-briefcase"></i>
                </div>
                <div class="cbp_tmlabel wow fadeInRight animated">
                  <h3>Web developer</h3>
                  <div class="date">
                    <i class="fa fa-calendar"></i>April 2014 - Current
                  </div>
                  <h4>
                    <i class="fa fa-flag"></i>Davic Company, Bratislava
                  </h4>
                  <p class="projectParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit obcaecati ipsa quae, iusto laudantium qui, nisi eum
                    modi perspiciatis quasi facilis corporis iure soluta enim
                    incidunt itaque aspernatur sequi tempora.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default OneExperience;
