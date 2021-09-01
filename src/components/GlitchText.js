import { Component } from "react";

import styles from "./GlitchText.module.scss";

// TODO Too many cascading renders, I think.
// I should be able to do this without GlitchLetter. That *might* help.

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

const AnimationPatterns = {
  'reveal': ['scramble', 'stable'],
  'blank-reveal': ['blank', 'scramble', 'stable'],
  'scramble': ['scramble', 'drift'],
  'show-scramble': ['scramble', 'stable', 'scramble', 'drift'],
  'blank-show-scramble': ['blank', 'scramble', 'stable', 'scramble', 'drift'],
}

export class GlitchText extends Component {

  _timerId = null; // Reference handle for the current setTimeout() instance.

  constructor(props) {
    super(props);

    const text = this.props.text || '';
    const length = text.length;
    const pattern = AnimationPatterns[this.props.pattern || 'reveal'] || AnimationPatterns['reveal'];

    if (length > 25)
      console.warn('GlitchText is long and may affect performance. Text=', text);

    this.state = {
      timerStep: 0,
      animStates: new Array(length).fill(pattern[0]),
    };
  }

  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  start = () => {
    this.stop();
    this._repeat(1000);
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
    const { text } = this.props;
    const { timerStep } = this.state;

    const length = (text || '').length;
    const pattern = AnimationPatterns[this.props.pattern || 'reveal'] || AnimationPatterns['reveal'];
    const patternLast = pattern.length - 1;

    // Affects the wait time between phases; helps 'stable > scramble' text to be readable.
    const phaseChangeCoefficient = 8 / Math.max(length, 1) + 1;

    // Determine letter states.
    const animStates = new Array(length).fill(0).map( (v, idx) => {
      let patternIdx = Math.floor(Math.max(timerStep - idx + length, 0) / (length * phaseChangeCoefficient));
      patternIdx = Math.min(patternIdx, patternLast);
      return pattern[patternIdx];
    });

    this.setState({
      timerStep: timerStep + 1,
      animStates: animStates,
    });

    const stepDelay = Math.ceil(100);
    this._repeat(stepDelay);
  }

  render() {
    const { text } = this.props;
    const charsList = (text || '').toUpperCase().split('');
    const charsPossible = (text || '').toUpperCase() + extendedCharset;

    const letters = charsList.map( (char, idx) =>
      <GlitchLetter
        key={`gl_${idx}`}
        character={char}
        state={this.state.animStates[idx]}
        colorize={false}
        possibleChars={charsPossible}
      />
    );

    return (<>{letters}</>);
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
    const color = this.props.colorize || false;
    const char = this.selectChar();

    // TODO On prop change, 'drift' will auto-instance-scramble, which isn't drifting.
    // I could wait the first interval without doing anything, but drift is the only state which desires this.

    const options = {
      'stable':   {letter: actual, colorize: color, time: Intervals.Sparkle},
      'scramble': {letter: char,   colorize: color, time: Intervals.Rapid},
      'drift':    {letter: char,   colorize: color, time: Intervals.Drift},
      'blank':    {letter: ' ',    colorize: color, time: null},
    }

    const { time, ...settings } = options[state] || options['stable'];
    this.setState(settings);

    if (time)
      this._repeat(time);
  }

  render() {
    return (
      <span className={`${styles.letter} ${this.state.colorize && styles.colorized}`}
      // TODO Remove inline style
      style={{color: 'white', fontSize: '1.2rem', width: '1.3rem', height: '1.5rem', textAlign: 'center', display: 'inline-block'}}>
        {this.state.letter}
      </span>
    )
  }
}