import "./HeaderLogo.scss";
import { Component } from "react";
import logo from "../../resources/img/dV_logo.png";
import { GlitchText } from "../GlitchText";

export class HeaderLogo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showName: true,
      hover: false,
    };
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
    const { showName, hover } = this.state;
    const pattern = showName
      ? 'blank-reveal-scramble'
      : hover
      ? 'to-reveal'
      : 'to-drift';

    return (
      <div className="logo-container"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <img src={logo} className="logo-image" alt="logo" />
        <div className="logo-text">
          <GlitchText
            text={'Devin Valko'}
            pattern={pattern}
            textStyle={'glitch-text'}
            charStyle={'glitch-text-letter'}
          />
          <div className="logo-text-glow" />
        </div>
      </div>
    );
  }
}