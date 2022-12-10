import * as React from "react"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Intro from "../components/Intro";
import About from "../components/About"
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

import "normalize.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/stars.scss";
import "../styles/style.css"

import ScrollSpy from "react-ui-scrollspy";

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navHeightOffset: 0,
      logos: []
    };
  }
  
  getNavHeightOffset = (value) => {
    this.setState({ navHeightOffset: value })
  };

  componentDidMount() {
    // Prevents page from restoring scroll position on reload and breaking the rest of the content
    // Why is it happening???
    window.scrollTo(0,0);

    this.setState({
      logos: [
        this.props.data.logo1.childImageSharp.gatsbyImageData,
        this.props.data.logo2.childImageSharp.gatsbyImageData
      ]
    })
  }

  render() {
    return (
      <Layout logos={this.state.logos} updateNavHeightOffset={this.getNavHeightOffset}>
        <ScrollSpy scrollThrottle={30} offsetTop={0} activeClass="active" updateHistoryStack={false}>
          <Intro id="home" navHeightOffset={this.state.navHeightOffset}/>
          <About id="about"/>
          <Portfolio id="work"/>
          <Contact id="contact"/>
        </ScrollSpy>
      </Layout> 
    )
  }
}

export class Head extends React.Component {
  render() {
    return (
      <Seo />
    );
  }
};

export const logoQuery = graphql`
query MyQuery {
  logo1:
  	file(relativePath: {eq: "logo1.png"}) {
    	childImageSharp {
      	gatsbyImageData(placeholder: NONE, layout: CONSTRAINED)
    	}
  	}
  logo2:
  	file(relativePath: {eq: "logo2.png"}) {
    	childImageSharp {
      	gatsbyImageData(placeholder: NONE, layout: CONSTRAINED)
    	}
  	} 
}
`