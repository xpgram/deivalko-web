import { Component } from 'react';

const FIRST_NAME = "DEVIN";
const LAST_NAME = "VALKO";
const NAME = `${FIRST_NAME}${LAST_NAME}`;

// TODO Site Load: glitch to DEVIN.VALKO, wait; glitch to KONDK.IVVDN
// First mouse-over consumes this process.

export class GlitchName extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stabilizeText: props.stabilizeText
    }
  }

  impulseOn = () => {
    this.setState({stabilizeText: true});
  }

  impulseOff = () => {
    this.setState({stabilizeText: false});
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
              changeCount={10+i*2}
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

  _shortTimer = 40;
  _longTimer = 1600;
  _timerId;

  actual;
  possible;
  changeCount;
  maxChangeCount;
  stabilize;

  constructor(props) {
    super(props);
    this.state = {
      render: props.actual,
      color: "#c8b",
    };

    this.actual = props.actual;
    this.possible = NAME;
    this.changeCount = props.changeCount || 10;
    this.maxChangeCount = this.changeCount;
    this.stabilize = props.stabilize || false;
  }

  componentDidMount = () => {
    this.update();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.stabilize !== this.props.stabilize) {
      this.changeCount = this.maxChangeCount;
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
    return this.wait(this._longTimer, 0.25);
  }

  randomLetter = () => {
    const idx = Math.floor(Math.random()*this.possible.length);
    return this.possible[idx];
  }

  update = () => {
    if (this.stabilize && this.changeCount <= 0) {
      this.setState({render: this.actual});
      return;
    } else {
      this.setState({
        render: this.randomLetter(),
        color: (Math.random() < 0.2) ? '#ebd' : '#aaa'
      });
      --this.changeCount;
    }

    if (this.changeCount >= 0)
      this._timerId = setTimeout(this.update, this.shortTimer());
    else
      this._timerId = setTimeout(this.update, this.longTimer());

    // TODO SetTimeout seems to operate a bit outside the react live-update cycle.
    // Try this:
    //   write console.log('yes')
    //   see that each letter posts 'yes' to the console on update.
    //   remove console.log('yes')
    //   see that each letter still posts 'yes' to the console, but
    //     no longer(?) affects the live website. It becomes an orphan.
  }

  render() {
    return <span style={{color: this.state.color}}>{this.state.render}</span>;
  }
}