import { Component } from 'react';
import './Button.scss';

const STYLES = ['btn--navigation'];

const SIZES = ['btn--medium'];

export class Button extends Component {
  constructor(props) {
    super(props);
    const { buttonStyle, buttonSize } = props;
    
    this.state = {
      checkButtonStyle: STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0],
      checkButtonSize: SIZES.includes(buttonSize) ? buttonSize : SIZES[0],
    };
  }

  render() {
    const { children, type, onClick } = this.props;
    const { checkButtonStyle, checkButtonSize } = this.state;
    return (
      <button
        className={`${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}         // What is this?
      >
        {children}
      </button>
    );
  }
}