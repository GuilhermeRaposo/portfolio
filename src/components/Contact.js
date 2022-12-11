import React from "react";
import imageOverlay from "../images/earth.jpg";
import { Element } from "react-scroll"
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import {  AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";

export default class Contact extends React.Component {
  render() {
    return (
      <Element id={this.props.id} name="contact">
        <section
          className="paralax-mf footer-paralax bg-image sect-mt4 route abcd"
          style={{ backgroundImage: "url(" + imageOverlay + ")" }}
        >
          <div className="overlay-mf"></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="contact-mf">
                  <div className="box-shadow-full  text-center">
                        <div className="title-box pt-4 pt-md-0">
                          <h5 className="title-b">Get in Touch</h5>
                        </div>
                        <div className="more-info">
                          <p className="lead">
                              If you would like to get in touch with me, please feel free to email me or check my social links below.
                            <br />
                            <a href="mailto:dev@graposo.me" target="_blank" rel="noopener noreferrer" className="email-link">dev@graposo.me</a>
                          </p>
                        </div>
                        <div className="socials">
                          <ul>
                            <li key="github">
                              <a
                                href="https://github.com/GuilhermeRaposo"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span className="ico-circle">
                                  <div className="d-inline-block">
                                    <SiGithub className="float-left"/>
                                  </div>
                                </span>
                              </a>
                            </li>
                            <li key="linkedin">
                              <a
                                href="https://www.linkedin.com/in/guilherme-raposo-470010199/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span className="ico-circle">
                                  <div className="d-inline-block">
                                    <AiFillLinkedin className="float-left"/>
                                  </div>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="copyright-box">
                      © {new Date().getFullYear()}, Built with
                      {` `}
                      <a href="https://www.gatsbyjs.com" className="gatsby-link">Gatsby</a>
                  </div>
                  <div>
                    <a href="https://github.com/GuilhermeRaposo/portfolio/" className="source-link">Page source code</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </Element>
    );
  }
}