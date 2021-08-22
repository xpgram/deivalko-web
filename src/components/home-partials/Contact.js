import { Component } from "react";

import styles from "./Contact.module.scss";

export class Contact extends Component {
  render() {
    return (
      <div className={styles.background}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.text}>
          Tell me you love me <a>here</a> and maybe I'll tell you back.</p>
        <form>
          <input placeholder={'Write your message here.'} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}