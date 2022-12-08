import React from "react";
import { Element } from "react-scroll";

export default class About extends React.Component {
  render() {
    return (
      <Element id={this.props.id} name="about">
        <section className="about-mf sect-pt4 route">
          <div className="container">
              <div className="box-shadow-full text-center">
                  <div className="title-box">
                      <h5 className="title-b title-center">About me</h5>
                  </div>
                  <p className="lead">
                      Software Engineer and Computer Science student who 
                      is eager to learn and grow, currently residing in Vancouver. 
                      I have experience using Node.js, CSS, React, TypeScript, MongoDB and MySQL
                  </p>
                  <p className="about-resume lead">
                    You can check out my resume <a 
                                                  href="https://drive.google.com/file/d/1vp6M7vehw5U1GprNnEieyl9fPrbqMxa2/view?usp=sharing" 
                                                  target="_blank"
                                                  rel="noopener noreferrer" 
                                                  className="resume-link" 
                                                > Here </a>
                  </p>
              </div>
          </div>
        </section>
      </Element>
    );
  }
}