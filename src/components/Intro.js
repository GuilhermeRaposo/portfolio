import React from "react";
import Typed from "typed.js";
import { Element, Link } from "react-scroll";
import PropTypes from "prop-types";

export default class Intro extends React.Component {
    componentDidMount() {
        const options = {
            strings: [ "Software Engineer", "Full-Stack Developer" ],
            typeSpeed: 80,
            backDelay: 1100,
            backSpeed: 30,
            loop: true
        };

        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return (
        // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
            <Element id={this.props.id} name="home">
                <div className="intro route bg-image background">
                    <div id="stars" />
                    <div id="stars2" />
                    <div id="stars3" />

                    <div className="intro-content display-table">
                        <div className="table-cell">
                            <div className="container">
                                <h1 className="intro-title mb-4">Hello, I am Guilherme</h1>
                                <p className="intro-subtitle">
                                    <span className="text-slider-items"></span>
                                    <strong className="text-slider">
                                        <span ref={(el) => { this.el = el; }}></span>
                                    </strong>
                                </p>
                                <p className="pt-3">
                                    <Link to="work" smooth={true} offset={-Math.abs(this.props.navHeightOffset)}
                                        className="btn btn-primary btn js-scroll px-4"
                                        href="#work"
                                        role="button"
                                    >
                    View My Work
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        );
    }
}

Intro.propTypes = {
    id: PropTypes.string,
    navHeightOffset: PropTypes.number
};