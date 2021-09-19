import { Component } from "react";

import styles from "./GlitchText.module.scss";

// TODO Too many cascading renders, I think.
// I should be able to do this without GlitchLetter. That *might* help.

const extendedCharset = "ƎИΛⱯꓘΓΠƆ";
const timerGranularity = 60; // ms

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

const AnimationPatterns = {
  'blank': ['blank'],
  'show': ['stable'],
  'blank-reveal': ['blank', 'scramble', 'stable'],
  'blank-reveal-scramble': ['blank', 'scramble', 'stable', 'scramble', 'drift'],
  'to-reveal': ['previous', 'scramble', 'stable'],
  'to-drift': ['previous', 'scramble', 'drift'],
}

export class GlitchText extends Component {

  _timerId = null; // Reference handle for the current setTimeout() instance.

  _text = this.props.text || '';
  _length = this._text.length;

  /** Affects the wait time between phases; helps 'stable > scramble' text to be readable. */
  _phaseChangeCoefficient = 8 / Math.max(this._length, 1) + 1;

  /** The number of time steps an animation phase lasts. */
  _phaseInterval = this._length * this._phaseChangeCoefficient;

  /** Affects the inter-letter phase-change delay; longer text 'stabilizes' more quickly. */
  _stepDelay = Math.ceil(timerGranularity * 2.5 / Math.pow(this._length, 0.4));

  constructor(props) {
    super(props);

    if (this._length > 25)
      console.warn(`GlitchText is long and may affect performance.`, {text: this._text});

    this.state = this.getInitialState();
  }

  getInitialState = () => {
    const key = this.props.pattern || 'show';
    const pattern = AnimationPatterns[key] || AnimationPatterns['show'];
    const timerStep = (this.state)
      ? this.state.timerStep % this._phaseInterval
      : 0;
    const maxTimeStep = this._phaseInterval * pattern.length;
    const animStates = (this.state)
      ? this.state.animStates
      : new Array(this._length).fill(pattern[0]);

    return {
      timerStep: timerStep,
      maxTimeStep: maxTimeStep,
      pattern: pattern,
      animStates: animStates,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pattern !== this.props.pattern) {
      this.setState( this.getInitialState() );
      this.start();
    }
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  start = () => {
    this.stop();
    this._repeat(10);
  }

  stop = () => {
    if (this._timerId)
      clearTimeout(this._timerId);
  }

  _repeat = (time) => {
    this.stop();
    this._timerId = setTimeout(this.update, time);
  }

  update = () => {
    const { floor, min, max, } = Math;
    const { timerStep, pattern } = this.state;

    const patternLast = pattern.length - 1;

    // Determine letter states.
    const animStates = new Array(this._length).fill(0).map( (v, idx) => {
      let patternIdx = floor(max(timerStep - idx + this._phaseInterval, 0) / this._phaseInterval);
      patternIdx = min(patternIdx, patternLast);
      return pattern[patternIdx] === 'previous' ? this.state.animStates[idx] : pattern[patternIdx];
    });

    this.setState({
      timerStep: timerStep + 1,
      animStates: animStates,
    });

    if (this.state.timerStep <= this.state.maxTimeStep)
      this._repeat(this._stepDelay);
  }

  render() {
    const text = (this.props.text || '').toUpperCase();
    const words = text.split(' ');
    const charsList = text;
    const charsPossible = charsList + extendedCharset;

    // TODO Extract list processing to constructor
    let animStateCount = -1;
    const elements = words.map( (word, widx) => {
      const addSpace = Boolean(widx !== words.length - 1);
      const letters = (word + (addSpace ? ' ' : ''))
        .split('')
        .map( (char, lidx) => {
          animStateCount++;
          return (
            <GlitchLetter
              key={`gl_${widx}_${lidx}`}
              character={char}
              state={this.state.animStates[animStateCount]}
              colorize={false}
              possibleChars={charsPossible}
              textStyle={this.props.charStyle}
            />
          );
        }
      );
      return (
        <span key={`gw_${widx}`} className={this.props.wordStyle}>
          {letters}
        </span>
      )
    });

    return (
      <span className={`${styles.text} ${this.props.textStyle}`}>
        {elements}
      </span>
    );
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
    if (prevProps.state !== this.props.state)
      this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  start = () => {
    this.stop();
    this.update();
  }

  stop = () => {
    if (this._timerId)
      clearTimeout(this._timerId);
  }

  _repeat = (interval) => {
    this.stop();
    const { time, variance } = interval;
    const wait = time * (1 - variance) + Math.random() * time * variance;
    this._timerId = setTimeout(this.update, wait);
  }

  selectChar = () => {
    const cur = this.state.letter;
    const choose = (this.props.possibleChars || this.props.character).replaceAll(cur, '').replaceAll(' ', '');

    if (choose.length) {
      const idx = Math.floor(Math.random()*choose.length);
      return choose[idx];
    } else
      return cur;
  }

  update = () => {
    const state = this.props.state || 'stable';
    const actual = this.props.character || ' ';
    const color = Math.random() < .2 ? true : false; // this.props.colorize || false;
    const char = this.selectChar();

    const options = {
      'stable':   {letter: actual, colorize: false, time: null},
      'scramble': {letter: char,   colorize: color, time: Intervals.Rapid},
      'drift':    {letter: char,   colorize: color, time: Intervals.Drift},
      'blank':    {letter: ' ',    colorize: color, time: null},
      'stable-sparkle': {letter: actual, colorize: color, time: Intervals.Sparkle},
    }

    const { time, ...settings } = options[state] || options['stable'];
    this.setState(settings);

    if (time)
      this._repeat(time);
  }

  render() {
    return (
      // TODO textStyle will not override existing letter style.
      <span className={`${this.props.textStyle} ${styles.letter} ${this.state.colorize && styles.colorized}`}>
        {this.state.letter}
      </span>
    )
  }
}