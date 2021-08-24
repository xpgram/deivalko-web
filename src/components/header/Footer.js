import { Component } from "react";

import styles from "./Footer.module.scss";

import background from "../../resources/img/PixilBG.png";

export class Footer extends Component {

  render () {
    const year = new Date().getFullYear().toString();

    return (
      <div className={styles.background}
        style={{backgroundImage: `url(${background})`}}
      >
        <div className={styles.text}>&copy; DEI VALKO &nbsp;|&nbsp; {year}</div>
      </div>
    );
  }
}