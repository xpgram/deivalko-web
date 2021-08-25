import { Component } from "react";

import styles from "./Contact.module.scss";

export class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {showMsg: false};
  }

  onSubmit = () => {
    this.setState({showMsg: true});
    setTimeout(() => {this.setState({showMsg: false})}, 3000);
  }

  render() {
    return (
      <div className={styles.background}>
        <h1 className={styles.header}>Contact</h1>
        <p className={styles.text}>
          Tell me you love me and maybe I'll tell you back.
        </p>
        <form>
          <textarea
            className={styles.input}
            placeholder={'Write your message here.'}
          />
          <button
            className={styles.button}
            type="button"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>

        <div className={`${styles.prankText} ${this.state.showMsg && styles.prankTextShow}`}>
          Ha! Pranked you, bro. That button doesn't do anything.
        </div>

      </div>
    )
  }
}