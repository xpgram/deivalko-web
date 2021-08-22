import { Component } from "react";
import { PortfolioItem } from "../PortfolioItem";

import styles from "./Portfolio.module.scss";

export class Portfolio extends Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <PortfolioItem
            title="Advance Wars Clone"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis gravida euismod. Phasellus nec consectetur magna. Ut condimentum, lectus et commodo sollicitudin, tortor nulla tempus nibh, id dapibus est ante sit amet nunc. Maecenas blandit tortor tellus, eget dapibus diam imperdiet vitae. Donec gravida lacus."
          />
          <PortfolioItem
            title="Advance Wars Clone"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis gravida euismod. Phasellus nec consectetur magna. Ut condimentum, lectus et commodo sollicitudin, tortor nulla tempus nibh, id dapibus est ante sit amet nunc. Maecenas blandit tortor tellus, eget dapibus diam imperdiet vitae. Donec gravida lacus."
          />
          <PortfolioItem
            title="Advance Wars Clone"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis gravida euismod. Phasellus nec consectetur magna. Ut condimentum, lectus et commodo sollicitudin, tortor nulla tempus nibh, id dapibus est ante sit amet nunc. Maecenas blandit tortor tellus, eget dapibus diam imperdiet vitae. Donec gravida lacus."
          />
        </div>
      </div>
    )
  }
}