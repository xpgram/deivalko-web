import { Component } from 'react';

const FIRST_NAME = "DEVIN";
const LAST_NAME = "VALKO";
const NAME = `${FIRST_NAME}${LAST_NAME}`;
const EXTRA_CHARS = "ƎИΛⱯꓘΓΠƆ";

// TODO Mouse-over is on the logo section level, not just the text.

// TODO Letter change animation is more involved.
// Flash ▯ over letters for 100ms?
// I could just use a rect div, I don't actually need the char.

// TODO Site Load: glitch to DEVIN.VALKO, wait; glitch to KONDK.IVVDN
// First mouse-over consumes this process.

// TODO Guarantee 1 or 2 letters are pink or 'corrupt' at all times.
// Pink and corrupt do not need to be in the same place.
// 1 letter per name, maybe.

// TODO When not stabilized, make each letter 40% likely to be actual.


export class GlitchName extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stabilizeText: props.stabilizeText,
    }
  }

  impulseOn = () => {
    this.setState({stabilizeText: true});
  }

  impulseOff = () => {
    this.setState({stabilizeText: false});
  }

  letterRevealCurve = (x) => {
    const { trunc, sin } = Math;
    return trunc(sin(x * 0.0625) * 20 + 10);
  }

  render() {
    const li = [];
    const name = `${FIRST_NAME}.${LAST_NAME}`;
    
    for (let i = 0; i < name.length; i++) {
      if (name[i] !== '.') {
        li.push(
          <span key={`glitch-letter_${i}`} className="glitch-text-letter">
            <GlitchLetter
              actual={name[i]}
              changeCount={this.letterRevealCurve(i)}
              stabilize={this.state.stabilizeText} />
              {/* flash=true */}
              {/*  */}
          </span>
        )
      } else {
        li.push(
          <span key={`glitch-letter_${i}`} className="glitch-text-letter glitch-text-separator">
            .
          </span>
        )
      }
    }

    return (
      <div
        className="glitch-text"
        onMouseEnter={this.impulseOn}
        onMouseLeave={this.impulseOff}
      >
        {li}
      </div>
    );
  }
}

class GlitchLetter extends Component {

  _shortTimer = 50;
  _longTimer = 3000;
  _timerId;

  // Letters to render
  actual;
  possible;
  possible_ext;

  // Animation Vars
  changeCount;
  stabilize;
  corruptionRate;

  constructor(props) {
    super(props);
    this.state = {
      render: props.actual,
      colorize: false,
    };

    this.actual = props.actual;
    this.possible = NAME;
    this.possible_ext = EXTRA_CHARS;
    this.changeCount = props.changeCount || 10;
    this.stabilize = props.stabilize || false;
    this.corruptionRate = props.corruptionRate || 0.075;
  }

  componentDidMount = () => {
    this.update();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.stabilize !== this.props.stabilize) {
      this.changeCount = this.props.changeCount;
      this.stabilize = this.props.stabilize;
      clearTimeout(this._timerId);
      this.update();
    }
  }

  componentWillUnmount = () => {
    clearTimeout(this._timerId);
  }

  wait = (time, deviation) => {
    return (time - time*deviation) + (time*deviation*2*Math.random());
  }

  shortTimer = () => {
    return this.wait(this._shortTimer, 0.05);
  }

  longTimer = () => {
    return this.wait(this._longTimer, 0.70);
  }

  randomLetter = () => {
    const choose = (Math.random() > this.corruptionRate) ? this.possible : this.possible_ext;

    const idx = Math.floor(Math.random()*choose.length);
    return choose[idx];
  }

  update = () => {
    if (this.stabilize && this.changeCount <= 0) {
      this.setState({
        render: this.actual,
      });
      return;
    } else {
      this.setState({
        render: this.randomLetter(),
        colorize: (Math.random() < .2),
      });
      --this.changeCount;
    }

    // Uses short time length when "stabilizing."
    const time = (this.changeCount >= 0) ? this.shortTimer() : this.longTimer();
    this._timerId = setTimeout(this.update, time);
  }

  render() {
    return (
      <span
        className={(this.state.colorize) ? 'glitch-text-special' : ''}
      >
        {this.state.render}
      </span>
    )
  }
}