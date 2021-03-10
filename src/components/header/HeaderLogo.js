import "./HeaderLogo.css";
import { Component } from "react";
import logo from "../../public/img/dV_logo.png";
import { GlitchName } from "./GlitchName";

export class HeaderLogo extends Component {
  render() {
    return (
      <div className="logo-container">
        <img src={logo} className="logo-image" />
        <div className="logo-text">
          <GlitchName />
        </div>
      </div>
    );
  }
}