import { Component } from "react";

import styles from "./PortfolioItem.module.scss";


export class PortfolioItem extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{this.props.title}</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.visualWrapper}>
            <div className={styles.column} />
            <img className={styles.visual} src="" alt="" />
          </div>
          <div className={styles.description}>{this.props.description}</div>
        </div>
      </div>
    );
  }
}