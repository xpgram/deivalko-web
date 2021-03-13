import { Component } from 'react';

const FIRST_NAME = "DEVIN";
const LAST_NAME = "VALKO";
const NAME = `${FIRST_NAME}${LAST_NAME}`;

// TODO Site Load: glitch to DEVIN.VALKO, wait; glitch to KONDK.IVVDN
// First mouse-over consumes this process.
// TODO Define color palette somewhere so I don't have to go needle searching.
// TODO Guarantee at least 2 letters are pink at all times.
// 1 letter per name, maybe.
// Glitch name can do this with props, I guess.


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

  // Animation Vars
  changeCount;
  stabilize;

  constructor(props) {
    super(props);
    this.state = {
      render: props.actual,
      colorize: false,
    };

    this.actual = props.actual;
    this.possible = NAME;
    this.changeCount = props.changeCount || 10;
    this.stabilize = props.stabilize || false;
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
    const idx = Math.floor(Math.random()*this.possible.length);
    return this.possible[idx];
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