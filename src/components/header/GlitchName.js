import { Component } from 'react';

const FIRST_NAME = "DEVIN";
const LAST_NAME = "VALKO";
const NAME = `${FIRST_NAME}${LAST_NAME}`;
const EXTRA_CHARS = "ƎИΛⱯꓘΓΠƆ";

// TODO Mouse-over is on the logo section level, not just the text.
// TODO When not stabilized, make each letter 40% likely to be actual.


export class GlitchName extends Component {

  /** Given in index, returns how many times a letter should change before showing actual. */
  textStabilizationCurve = (x) => {
    const { trunc } = Math;
    return trunc(x * 2 + 10);
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
              changeCount={this.textStabilizationCurve(i)}
              stabilize={this.props.stabilize}
            />
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
      <div className="glitch-text">
        {li}
      </div>
    );
  }
}

class GlitchLetter extends Component {

  _shortTimer = 40;
  _medTimer = 850;
  _longTimer = 2700;
  _timerId;

  // Letters to render
  actual;
  possible;
  possible_ext;

  // Animation Vars
  changeCount;
  stabilize;
  corruptionRate;
  stabilityRate;

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

  medTimer = () => {
    return this.wait(this._medTimer, 0.90);
  }

  longTimer = () => {
    return this.wait(this._longTimer, 0.70);
  }

  randomLetter = () => {
    let choose = (Math.random() > this.corruptionRate) ? this.possible : this.possible_ext;

    const idx = Math.floor(Math.random()*choose.length);
    return choose[idx];
  }

  update = () => {
    const stable = (this.props.stabilize && this.changeCount <= 0);
    const rapid = (this.changeCount > 0);

    const letter = (stable) ? this.actual : this.randomLetter();

    this.setState({
      render: letter,
      colorize: (Math.random() < .2),
    });

    // Determine time length for next style/letter change.
    const [short, med, long] = [this.shortTimer, this.medTimer, this.longTimer];
    const time = (stable) ? med() : (rapid) ? short() : long();

    --this.changeCount;
    
    this._timerId = setTimeout(this.update, time);
  }

  render() {
    return (
      <span className={(this.state.colorize) ? 'glitch-text-special' : ''}>
        {this.state.render}
      </span>
    )
  }
}