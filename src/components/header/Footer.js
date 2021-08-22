import { Component } from "react";

import styles from "./Footer.module.scss";

export class Footer extends Component {
  render () {
    return (
      <div className={styles.background}>
        <div className={styles.text}>DEI VALKO | 2021</div>
      </div>
    );
  }
}