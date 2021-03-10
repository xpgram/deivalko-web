import { Component } from 'react';

// TODO Experiment class, rewrite to be better.

// TODO Variable Timer
// Not always the same 2000 between alters.
// The first 1.5 seconds, every alter is like 50.

function randomIndex(length) {
  return Math.trunc(Math.random() * length);
}

export class GlitchName extends Component {
  letters = "DEVINVALKO";
  changeTime = 1000;
  size = "20px";

  constructor() {
    super();
    this.state = {
      firstname: "DEIVN",
      lastname: "VKALO"
    };
    setTimeout(this.changeLetter, this.changeTime);
  }

  randomLetter = () => {
    return this.letters[randomIndex(this.letters.length)];
  }

  changeLetter = () => {
    const firstNotLast = (Math.random() < .5);
    let nameIdx, nameStr;

    nameStr = (firstNotLast) ? this.state.firstname : this.state.lastname;
    nameIdx = randomIndex(nameStr.length);
    nameStr = `${nameStr.slice(0, nameIdx)}${this.randomLetter()}${nameStr.slice(nameIdx + 1)}`;

    if (firstNotLast) {
      this.setState({ firstname: nameStr });
    } else {
      this.setState({ lastname: nameStr });
    }

    setTimeout(this.changeLetter, this.changeTime);
  }

  render() {
    const li = [];
    const name = `${this.state.firstname}.${this.state.lastname}`;
    for (let i = 0; i < name.length; i++) {
      if (name.charAt(i) !== '.') {
        li.push(<span className="glitch-text-letter">{name.charAt(i)}</span>);
      } else {
        li.push(<span className="glitch-text-separator">.</span>);
      }
    }

    return (
      <div className="glitch-text">
        {li}
      </div>
    );
  }
}