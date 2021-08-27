import "./HeaderLogo.scss";
import { Component } from "react";
import logo from "../../resources/img/dV_logo.png";
import { GlitchName } from "./GlitchName";

export class HeaderLogo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showName: true,
      hover: true,
    };
  }

  componentDidMount = () => {
    this._timerId = setTimeout(() => {
      if (this.state.showName)
        this.onMouseLeave();
    }, 2500);
  }

  onMouseEnter = () => {
    this.setState({
      showName: false,
      hover: true,
    });
  }

  onMouseLeave = () => {
    this.setState({
      showName: false,
      hover: false,
    });
  }

  render() {
    return (
      <div className="logo-container"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <img src={logo} className="logo-image" alt="logo" />
        <div>
          <div className="logo-text">
            <GlitchName stabilize={this.state.hover} />
            <div className="logo-text-glow" />
          </div>
        </div>
      </div>
    );
  }
}