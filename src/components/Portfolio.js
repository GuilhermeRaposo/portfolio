import React from "react";
import { Element } from "react-scroll";

// Images
import discord from "../images/discord.png"
import galaxyEdge from "../images/galaxy-edge.png";
import mouse from "../images/mouse.png" ;
import visitArrow from "../images/visit-arrow.png";
import code from "../images/code.png";

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            links: {
                GameManager: {
                    code: "https://github.com/HyperVS/GameManager"
                },
                GalaxyEdge: {
                    code: "https://github.com/GuilhermeRaposo/GalaxyEdge",
                    app: "https://galaxy-edge.herokuapp.com/"
                },
                DoubleClick: {
                    code: "https://github.com/GuilhermeRaposo/dbclick-test",
                    app: "https://dbclick-test.herokuapp.com/"
                }
            }
        }
    }
    render() {
        return (
            <Element id={this.props.id} name="work">
                <section className="portfolio-mf sect-pt4 route">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="title-box text-center">
                                    <h3 className="title-a">Portfolio</h3>
                                    <p className="subtitle-a">
                                    Built with ReactJS and Gatsby, this website is a showcase 
                                    of my recent projects as a Software Developer.
                                    </p>
                                    <div className="line-mf"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-md-4">
                                <div className="work-box container">
                                    <div className="work-img">
                                        <img src={discord} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h2 className="w-title">Game Manager</h2>
                                                <div className="w-more">
                                                    <p className="w-about">
                                                        Discord bot that helps creating fun and fair matches for
                                                        a variety of games using a matchmacking system and ELO tracking
                                                    </p>
                                                    <span className="w-ctegory">
                                                        Node.js Express MySQL
                                                    </span>
                                                    <div className="w-links row">
                                                        <div className="w-link-buttonlink">
                                                            <span className="w-link-button">WIP</span>
                                                        </div>
                                                        <div className="link">
                                                            <a href={this.state.links.GameManager.code} className="w-link-button"><img src={code} alt=""/> code</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="work-box container">
                                    <div className="work-img">
                                        <img src={galaxyEdge} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h2 className="w-title">Galaxy Edge</h2>
                                                <div className="w-more">
                                                    <p className="w-about">
                                                        Simple 2D browser game built with vanilla JS in which you have to avoid the asteroids using the arrow keys. Sound enabled by default.
                                                    </p>
                                                    <span className="w-ctegory">
                                                        HTML CSS JS
                                                    </span>
                                                    <div className="w-links row">
                                                        <div className="link">
                                                            <a href={this.state.links.GalaxyEdge.app} className="w-link-button">visit <img src={visitArrow} alt=""/></a>
                                                        </div>
                                                        <div className="link">
                                                            <a href={this.state.links.GalaxyEdge.code} className="w-link-button"><img src={code} alt=""/> code</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="work-box container">
                                    <div className="work-img">
                                        <img src={mouse} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h2 className="w-title">Double Click Test</h2>
                                                <div className="w-more">
                                                    <p className="w-about">
                                                        Browser tool that helps identify faulty double clicks on a possible broken mouse, as they can be sometimes hard to spot.
                                                    </p>
                                                    <span className="w-ctegory">
                                                        HTML CSS JS
                                                    </span>
                                                    <div className="w-links row">
                                                        <div className="link">
                                                            <a href={this.state.links.DoubleClick.app} className="w-link-button">visit <img src={visitArrow} alt=""/></a>
                                                        </div>
                                                        <div className="link">
                                                            <a href={this.state.links.DoubleClick.code} className="w-link-button"><img src={code} alt=""/> code</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>
            </div>
        </section>
      </Element>
    );
  }
}
