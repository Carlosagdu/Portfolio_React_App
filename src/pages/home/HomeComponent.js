import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import LanguageButton from "../../components/languageButton/LanguageButton";

class Home extends Component {
  render(props) {
    console.log(this.props.theme);
    console.log(this.props.onClick);
    return (
      <div>
        <Header theme={this.props.theme} />
        <LanguageButton theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
