import { Component } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

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
      <Link to='/' className='btn-mobile'>
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
    );
  }
}