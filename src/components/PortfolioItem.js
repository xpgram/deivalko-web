import { Component } from "react";

import styles from "./PortfolioItem.module.scss";
import demoImage from "../resources/img/PixilBG.png";

export class PortfolioItem extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{this.props.title}</h2>
          <div className={styles.visualWrapper}>
            <div className={styles.column} />
            <img className={styles.visual} src={demoImage} alt="" />
          </div>
        </div>
        <div className={styles.description}>{this.props.description}</div>
      </div>
    );
  }
}