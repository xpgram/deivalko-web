import { Component } from "react";
import './common.css';
import './Section.css';


export default class Section extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.id || '',                 // Used for auto-scrolling.
      style: props.style || 'opaque',     // Whether to use opaque or distant-background styling.
      glow: props.glow || 'top bottom',   // Whether to draw section division glows.
    }

    if (props.style === 'opaque') {
      this.state.glow = '';
    }

    // TODO If transparent, background data is either given or assumed to be some
    // default, probably wherever the Pixi background is defined.
  }

  render() {
    return (
      <section className={`section-plaque section-glow ${this.props.className}`}>
        <div className='section-content text-center'>
          {this.props.children}
        </div>
      </section>
    );
  }
}