import React from "react";
import { Element } from "react-scroll";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

// Images
const steam = "../images/steam.png";
const quickwhois = "../images/quickwhois.png";
const portal = "../images/portal.png";
const mouse = "../images/mouse.png";
const visitArrow = "../images/visit-arrow.png";
const code = "../images/code.png";

const links = {
    SteamAccountSwitcher: {
        app: "https://github.com/GuilhermeRaposo/Steam-Account-Switcher/releases",
        code: "https://github.com/GuilhermeRaposo/Steam-Account-Switcher",
    },
    QuickWhois: {
        app: "https://addons.mozilla.org/en-CA/firefox/addon/quick-who-is/",
        code: "https://github.com/GuilhermeRaposo/quick-who-is",
    },
    Portal2Server: {
        code: "https://github.com/GuilhermeRaposo/Portal2-Server",
    },
    DoubleClick: {
        code: "https://github.com/GuilhermeRaposo/dbclick-test",
        app: "https://guilhermeraposo.github.io/dbclick-test/",
    },
};

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
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
                                        Built with ReactJS and Gatsby, this
                                        website is a showcase of my recent
                                        projects as a Software Developer.
                                    </p>
                                    <div className="line-mf"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row work-box-row">
                            <div className="col-md-4">
                                <div className="work-box">
                                    <div className="work-img">
                                        <StaticImage
                                            src={steam}
                                            alt="Steam logo"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h2 className="w-title">
                                                    Steam Account Switcher
                                                </h2>
                                                <div className="w-more">
                                                    <p className="w-about">
                                                        Lightweight tool that
                                                        helps you switch steam
                                                        accounts in a few clicks
                                                        without your
                                                        credentials.
                                                        Doesn&apos;t store any
                                                        user information or
                                                        passwords.
                                                    </p>
                                                    <span className="w-ctegory">
                                                        C# .NET AvaloniaUI
                                                    </span>
                                                    <div className="w-links row">
                                                        <div className="link">
                                                            <a
                                                                href={
                                                                    links
                                                                        .SteamAccountSwitcher
                                                                        .app
                                                                }
                                                                className="w-link-button"
                                                            >
                                                                visit{" "}
                                                                <StaticImage
                                                                    src={
                                                                        visitArrow
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="link">
                                                            <a
                                                                href={
                                                                    links
                                                                        .SteamAccountSwitcher
                                                                        .code
                                                                }
                                                                className="w-link-button"
                                                            >
                                                                <StaticImage
                                                                    src={code}
                                                                    alt=""
                                                                />{" "}
                                                                code
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="work-box">
                                    <div className="work-img">
                                        <StaticImage
                                            src={quickwhois}
                                            alt="Sherlock homes"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h2 className="w-title">
                                                    Quick WHOIS
                                                </h2>
                                                <div className="w-more">
                                                    <p className="w-about">
                                                        Firefox add-on that lets
                                                        you quickly search and
                                                        view whois information
                                                        for the current page in
                                                        two clicks.
                                                    </p>
                                                    <span className="w-ctegory">
                                                        HTML CSS JS
                                                    </span>
                                                    <div className="w-links row">
                                                        <div className="link">
                                                            <a
                                                                href={
                                                                    links
                                                                        .QuickWhois
                                                                        .app
                                                                }
                                                                className="w-link-button"
                                                            >
                                                                visit{" "}
                                                                <StaticImage
                                                                    src={
                                                                        visitArrow
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="link">
                                                            <a
                                                                href={
                                                                    links
                                                                        .QuickWhois
                                                                        .code
                                                                }
                                                                className="w-link-button"
                                                            >
                                                                <StaticImage
                                                                    src={code}
                                                                    alt=""
                                                                />{" "}
                                                                code
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="work-box">
                                    <div className="work-img">
                                        <StaticImage
                                            src={portal}
                                            alt="Space ship"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h2 className="w-title">
                                                    Portal 2 - Server
                                                </h2>
                                                <div className="w-more">
                                                    <p className="w-about">
                                                        Built a mod for my
                                                        favorite game that
                                                        implements a HTTP web
                                                        server directly into the
                                                        in-game console to
                                                        expose live game data in
                                                        real time. Renders a
                                                        live minimap with player
                                                        position, orientation,
                                                        and additional gameplay
                                                        data.
                                                    </p>
                                                    <span className="w-ctegory">
                                                        TypeScript React VScript
                                                    </span>
                                                    <div className="w-links row">
                                                        <div className="link">
                                                            <a
                                                                href={
                                                                    links
                                                                        .Portal2Server
                                                                        .code
                                                                }
                                                                className="w-link-button"
                                                            >
                                                                <StaticImage
                                                                    src={code}
                                                                    alt=""
                                                                />{" "}
                                                                code
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="work-box">
                                    <div className="work-img">
                                        <StaticImage
                                            src={mouse}
                                            alt="Mouse"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h2 className="w-title">
                                                    Double Click Test
                                                </h2>
                                                <div className="w-more">
                                                    <p className="w-about">
                                                        Browser tool that helps
                                                        identify faulty double
                                                        clicks on a possible
                                                        broken mouse, as they
                                                        can be sometimes hard to
                                                        spot.
                                                    </p>
                                                    <span className="w-ctegory">
                                                        HTML CSS JS
                                                    </span>
                                                    <div className="w-links row">
                                                        <div className="link">
                                                            <a
                                                                href={
                                                                    links
                                                                        .DoubleClick
                                                                        .app
                                                                }
                                                                className="w-link-button"
                                                            >
                                                                visit{" "}
                                                                <StaticImage
                                                                    src={
                                                                        visitArrow
                                                                    }
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="link">
                                                            <a
                                                                href={
                                                                    links
                                                                        .DoubleClick
                                                                        .code
                                                                }
                                                                className="w-link-button"
                                                            >
                                                                <StaticImage
                                                                    src={code}
                                                                    alt=""
                                                                />{" "}
                                                                code
                                                            </a>
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

Portfolio.propTypes = {
    id: PropTypes.string,
};
