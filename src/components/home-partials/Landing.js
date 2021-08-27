import { Component } from "react";
import styles from "./Landing.module.scss";

import image from "../../resources/img/PixilBG_faded.png";
import logo from "../../resources/img/d.V.png";

export class Landing extends Component {
  render() {
    return (
      <div class={styles.landing}>
        <img
          class={styles.background}
          src={image}
          alt=""
        />
        <img
          class={styles.logo}
          src={logo}
          alt=""
        />
        <div className={styles.glow} />
      </div>
    );
  }
}