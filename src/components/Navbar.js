import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'react-scroll'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo1: undefined,
            logo2: undefined,
            currentLogo: undefined,
            navHeightOffset: 0,
            navbarReduce: false
        };
    }

    handleClickNavBarToggler = () => {
        this.setState({ navbarReduce: true });
    }

    componentDidMount() {
        this.setState({
            currentLogo: 1,
        })
        const navHeight = this.navElement.clientHeight;
        this.setState({ navHeightOffset: -Math.abs(navHeight) });
        this.props.updateNavHeightOffset(navHeight)

        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 50) {
            document
              .querySelector(".navbar-expand-md")
              .classList.add("navbar-reduce");
            document
              .querySelector(".navbar-expand-md")
              .classList.remove("navbar-trans");
            this.setState({ currentLogo: 2 });
          } else {
            document
              .querySelector(".navbar-expand-md")
              .classList.add("navbar-trans");
            document
              .querySelector(".navbar-expand-md")
              .classList.remove("navbar-reduce");
            this.setState({ currentLogo: 1 });
          }
        });
      }

      

    render() {
        return (
            <nav
                className={"nav navbar navbar-b navbar-trans navbar-expand-md fixed-top " + (this.state.navbarReduce ? "navbar-reduce" : "")} 
                id="mainNav"
                ref={(navElement) => this.navElement = navElement}
            >
                <div className="container">
                    <a className="navbar-brand js-scroll" href="#page-top">
                        <GatsbyImage
                            image={this.props.logos[this.state.currentLogo - 1]}
                            alt="logo"
                            style={{ maxWidth: "100px" }}
                        />
                    </a>
                    <button
                        className="navbar-toggler collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarDefault"
                        aria-controls="navbarDefault"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={this.handleClickNavBarToggler}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div
                        className="navbar-collapse collapse justify-content-end"
                        id="navbarDefault"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item"  data-to-scrollspy-id="home">
                                <Link className="nav-link js-scroll" to="home" smooth={true} offset={this.state.navHeightOffset}>
                                Home
                                </Link>
                            </li>
                            <li className="nav-item active"  data-to-scrollspy-id="about">
                                <Link className="nav-link js-scroll" to="about" smooth={true} offset={this.state.navHeightOffset}>
                                About
                                </Link>
                            </li>
                            <li className="nav-item"  data-to-scrollspy-id="work">
                                <Link className="nav-link js-scroll" to="work" smooth={true} offset={this.state.navHeightOffset}>
                                Work
                                </Link>
                            </li>
                            <li className="nav-item"  data-to-scrollspy-id="contact">
                                <Link className="nav-link js-scroll" to="contact" smooth={true} offset={this.state.navHeightOffset}>
                                Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}