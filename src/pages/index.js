import * as React from "react"

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
      navHeightOffset: 0
    };
  }

  getNavHeightOffset = (value) => {
    this.setState({ navHeightOffset: value })
  };

  render() {
    return (
      <Layout updateNavHeightOffset={this.getNavHeightOffset}>
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