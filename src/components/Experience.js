import React from "react";
import OneExperience from "./OneExperience";
import "../css/Experience.css";

//I wanted to do this OneExpereince thing here but couldnt succeed
class Experience extends React.Component {
  render() {
    return (
      <>
        <div id="workexperience" class="sectionClass">
          <div class="row ">
            <div class="sectiontitle">
              <h2>Work experience</h2>
              <span class="headerLine"></span>
            </div>
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
                     Davic Company, Bratislava
                    </h4>
                    <p class="projectParagraph">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugit obcaecati ipsa quae, iusto laudantium qui, nisi eum
                      modi perspiciatis quasi facilis corporis iure soluta enim
                      incidunt itaque aspernatur sequi tempora.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="cbp_tmicon cbp_tmicon-screen">
                    <i class="faPra fa-briefcase"></i>
                  </div>
                  <div class="cbp_tmlabel wow fadeInRight animated">
                    <h3>Web designer</h3>
                    <h4>
                     Fannous Company, Prague
                    </h4>
                    <div class="date">
                      <i class="fa fa-calendar"></i>June 2012 - April 2014
                    </div>
                    <p class="projectParagraph">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Deserunt quasi perspiciatis, aliquid sed maiores
                      accusamus. Adipisci quidem nostrum quos quae doloremque
                      esse a, ipsum earum, recusandae omnis dignissimos et sint.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="cbp_tmicon cbp_tmicon-mail">
                    <i class="faPra fa-briefcase"></i>
                  </div>
                  <div class="cbp_tmlabel wow fadeInRight animated">
                    <h3>Web designer</h3>
                    <h4>
                      Techixs Company, London
                    </h4>
                    <div class="date">
                      <i class="fa fa-calendar"></i>November 2009 - June 2012
                    </div>
                    <p class="projectParagraph">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nulla labore atque alias ipsa, nam quod rerum repellat
                      cumque, aliquam sequi vitae voluptatibus cum soluta
                      incidunt tempore accusamus eius sed excepturi!Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Tempora
                      natus veritatis aperiam repellendus dolor vel, expedita
                      assumenda eos, mollitia quae ullam esse voluptas vero.
                      Dolores culpa eaque vitae eum quibusdam?
                    </p>
                  </div>
                </li>
                <li>
                  <div class="cbp_tmicon cbp_tmicon-phone">
                    <i class="faPra fa-briefcase"></i>
                  </div>
                  <div class="cbp_tmlabel wow fadeInRight animated">
                    <h3>Freelancer</h3>
                    <div class="date">
                      <i class="fa fa-calendar"></i>Januar 2006 - November 2009
                    </div>
                    <p class="projectParagraph">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Esse iusto, possimus hic at quisquam, incidunt illo
                      asperiores et nobis, qui nulla consequatur molestiae
                      quibusdam expedita dignissimos? Iste eum velit quos.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Experience;
