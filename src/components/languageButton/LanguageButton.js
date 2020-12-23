import React, {Component} from "react";
import "./LanguageButton.css";
import {withTranslation} from 'react-i18next'

class LanguageButton extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isEnglish: true,
      language: "EN",
    };
  }
  onMouseEnter = (color, bgColor) => {
        const languageButton = document.getElementById("languageButton");
        languageButton.style.color = color;
        languageButton.style.backgroundColor = bgColor;
      };

  onMouseLeave = (color, bgColor) => {
        const languageButton = document.getElementById("languageButton");
        languageButton.style.color = color;
        languageButton.style.backgroundColor = bgColor;
      };
  
  onClick = (boollang, ln, i18n) => {
  this.setState({
      isEnglish: boollang,
      language: ln,
  });
  const languageToSwitch = ln.toLowerCase();
  i18n.changeLanguage(languageToSwitch);
  };
  

  render(){
    const i18n = this.props.i18n;
    const theme = this.props.theme;
    const boollang = !this.state.isEnglish
    const ln = (boollang=== true) ? 'EN': 'ES'
    return(
      <div
      onClick={()=>this.onClick(boollang, ln, i18n)}
      id="languageButton"
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
      }}
      title={this.state.language}
      onMouseEnter={() => this.onMouseEnter(theme.text, theme.body)}
      onMouseLeave={() => this.onMouseLeave(theme.body, theme.text)}
    >
      {this.state.language} <i className="fas fa-globe-americas"></i>
    </div>
    )
  }
}
export default withTranslation()(LanguageButton);
