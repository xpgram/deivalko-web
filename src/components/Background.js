import { Component } from "react";
import "./Background.css";

import image from "../resources/img/PixilBG_faded.png";
import logo from "../resources/img/d.V.png";

export class Background extends Component {
  render() {
    return (
      <div className="hide-overflow">
        <div className="landing-container">
          <img
            className="landing-background"
            src={image}
            alt=""
          />
          <img
            className="landing-logo"
            src={logo}
            alt=""
          />
        </div>
      </div>
    );
  }
}