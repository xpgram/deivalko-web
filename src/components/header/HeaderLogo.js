import "./HeaderLogo.scss";
import { Component } from "react";
import logo from "../../resources/img/dV_logo.png";
import { GlitchName } from "./GlitchName";

export class HeaderLogo extends Component {
  render() {
    return (
      <div className="logo-container">
        <img src={logo} className="logo-image" />
        <div>
          <div className="logo-text">
            <GlitchName className="logo-text" />
          </div>
        </div>
      </div>
    );
  }
}