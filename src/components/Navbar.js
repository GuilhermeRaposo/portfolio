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
            isNavOpen: false,
            navBarTrans: true,
            navBarReduce: false,
            navListCollapse: true
        };
    }

    openNavBar = () => {
        this.setState({ 
            navListCollapse: false,
            navBarReduce: true,
            isNavOpen: true,
            currentLogo: 2
         });
    }

    closeNavBar = () => {
        this.setState({
            navListCollapse: true,
            navBarReduce: (window.scrollY > 50) ? true : false,
            isNavOpen: false,
            currentLogo: (window.scrollY > 50) ? 2 : 1
        })
    }

    handleClickNavBarToggler = () => {
        console.log(window.scrollY)
        if (!this.state.isNavOpen) {
            this.openNavBar();
        }
        else {
            this.closeNavBar();
        }
    };

    handleClickNavBarLink = () => {
        this.closeNavBar();
    }

    componentDidMount() {
        this.setState({
            currentLogo: 1,
        })
        const navHeight = this.navElement.clientHeight;
        this.setState({ navHeightOffset: -Math.abs(navHeight) });
        this.props.updateNavHeightOffset(navHeight)

        window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            this.setState({
                navBarReduce: true,
                navBarTrans: false
            })
            this.setState({ currentLogo: 2 });
        } 
        else {
            if (!this.state.isNavOpen)
            this.setState({
                navBarReduce: false,
                navBarTrans: true
            })
            this.setState({ currentLogo: 1 });
        }
        });
      }

      

    render() {
        return (
            <nav
                className={
                    "nav navbar navbar-b navbar-expand-md fixed-top " + 
                    (this.state.navBarReduce ? "navbar-reduce " : " ") + 
                    (this.state.navBarTrans ? "navbar-trans" : "")
                } 
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
                        className={"navbar-collapse justify-content-end " + (this.state.navListCollapse ? "collapse" : "")}
                        id="navbarDefault"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item"  data-to-scrollspy-id="home">
                                <Link className="nav-link js-scroll" to="home" smooth={true} offset={this.state.navHeightOffset} onClick={this.handleClickNavBarToggler}>
                                Home
                                </Link>
                            </li>
                            <li className="nav-item active"  data-to-scrollspy-id="about">
                                <Link className="nav-link js-scroll" to="about" smooth={true} offset={this.state.navHeightOffset} onClick={this.handleClickNavBarToggler}>
                                About
                                </Link>
                            </li>
                            <li className="nav-item"  data-to-scrollspy-id="work">
                                <Link className="nav-link js-scroll" to="work" smooth={true} offset={this.state.navHeightOffset} onClick={this.handleClickNavBarToggler}>
                                Work
                                </Link>
                            </li>
                            <li className="nav-item"  data-to-scrollspy-id="contact">
                                <Link className="nav-link js-scroll" to="contact" smooth={true} offset={this.state.navHeightOffset} onClick={this.handleClickNavBarToggler}>
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