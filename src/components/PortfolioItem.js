import { Component } from "react";

import styles from "./PortfolioItem.module.scss";

import demoImage from "../resources/img/portfolio/advance-wars-clone.png";

export class PortfolioItem extends Component {
  

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.frostedGlass}>
          <div className={styles.visualWrapper}>
            <img className={styles.visual} src={demoImage} alt="" />
            <h2 className={styles.title}>{this.props.title}</h2>
          </div>
        </div>
      </div>
    );
  }
}