import { Component } from "react";

import styles from "./GlitchText.module.scss";

const extendedCharset = "ƎИΛⱯꓘΓΠƆ";
const timerGranularity = 200; // ms

/** time in ms, variance a decimal between 0 and 1 */
function interval(time, variance) {
  return {time: time, variance: variance};
}
const Intervals = {
  Wipe: interval(350, 0),
  Rapid: interval(40, 0),
  Sparkle: interval(850, .9),
  Drift: interval(2700, .7),
}

export class GlitchText extends Component {

  _text;  // Actual text being obfuscated.
  // 

  _timerId = null; // Reference handle for the current setTimeout() instance.

  constructor(props) {
    super(props);
    this._text = this.props.text || '';
  }

  componentDidMount() {
    this.update();
  }

  componentWillUnmount() {
    clearTimeout(this._timerId);
  }

  update = () => {

    // start state
    // timer step
    // timer step
    // timer step

    // timer granularity = 200ms? this means no individual letter changes state more finely than these time steps.
  }

  render() {
    const charsList = this.props.text + extendedCharset;

    const letter = (
      <GlitchLetter character={'a'} state={'unstable'} colorize={false} possibleChars={charsList} />
    );

    return (<>{letter}</>);
  }
}

/**  */
class GlitchLetter extends Component {
  _timerId;

  constructor(props) {
    super(props);
    this.state = {
      letter: this.props.character || ' ',
      colorize: false,
    };
  }

  componentDidMount() {
    this.start();
  }

  componentDidUpdate(prevProps) {
    if (Object.keys(prevProps).some(k => prevProps[k] !== this.props[k]))
      this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  start = () => {
    // TODO Combine this with update()'s somehow.
    const options = {
      'actual':   Intervals.Sparkle,
      'unstable': Intervals.Rapid,
      'drifting': Intervals.Drift,
      'blank':    null,
    }
    const time = options[this.props.state || 'actual'] || options['actual'];

    this.stop();
    this._repeat(time);
  }

  stop = () => {
    if (this._timerId)
      clearTimeout(this._timerId);
  }

  _repeat = (interval) => {
    const { time, variance } = interval;
    const wait = time * (1 - variance) + Math.random() * time * variance;
    this._timerId = setTimeout(this.update, wait);
  }

  selectChar = () => {
    const cur = this.state.letter;
    const choose = (this.props.possibleChars || this.props.character).replaceAll(cur, '');

    if (choose.length) {
      const idx = Math.floor(Math.random()*choose.length);
      return choose[idx];
    } else
      return cur;
  }

  update = () => {
    const state = this.props.state || 'actual';
    const actual = this.props.character || ' ';
    const color = this.props.colorize || false;
    const char = this.selectChar();

    // TODO On prop change, 'drift' will auto-instance-scramble, which isn't drifting.
    // I should wait the first interval without doing anything.

    const options = {
      'actual':   {letter: actual, colorize: color, time: Intervals.Sparkle},
      'unstable': {letter: char,   colorize: color, time: Intervals.Rapid},
      'drifting': {letter: char,   colorize: color, time: Intervals.Drift},
      'blank':    {letter: ' ',    colorize: color, time: null},
    }

    const { time, ...settings } = options[state] || options['actual'];
    this.setState(settings);

    if (time)
      this._repeat(time);
  }

  render() {
    return (
      <div className={`${styles.letter} ${this.state.colorize && styles.colorized}`}>
        {this.state.letter}
      </div>
    )
  }
}