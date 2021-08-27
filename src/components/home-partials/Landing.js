import { Component } from "react";
import styles from "./Landing.module.scss";

import image from "../../resources/img/PixilBG_faded.png";
import logo from "../../resources/img/d.V.png";

export class Landing extends Component {
  render() {
    return (
      <div className={styles.landing}>
        <img
          className={styles.background}
          src={image}
          alt=""
        />
        <img
          className={styles.logo}
          src={logo}
          alt=""
        />
        <div className={styles.glow} />
      </div>
    );
  }
}