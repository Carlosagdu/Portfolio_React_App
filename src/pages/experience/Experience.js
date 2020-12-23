import React, { Component } from "react";
import Header from "../../components/header/Header";
import LanguageButton from "../../components/languageButton/LanguageButton";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { withTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    const sections = this.props.t("sections");
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <LanguageButton theme={this.props.theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {this.props.t("title")}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {this.props.t("subtitle")}
                </h3>
                {/* <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p> */}
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={sections} theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default withTranslation("experience")(Experience);
