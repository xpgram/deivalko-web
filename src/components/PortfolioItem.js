import { Component } from "react";

import styles from "./PortfolioItem.module.scss";

import demoImage from "../resources/img/portfolio/advance-wars-clone.png";

export class PortfolioItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  }

  onMouseEnter = () => {
    this.setState({hover: true});
  }

  onMouseLeave = () => {
    this.setState({hover: false});
  }

  render() {
    return (
      <div className={styles.container}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className={styles.frostedGlass}>
          <div className={styles.visualWrapper}>
            <img
              className={`${styles.visual} ${this.state.hover && styles.visualHover}`}
              src={demoImage}
              alt={this.props.title} />
            <h2 className={styles.title}>{this.props.title}</h2>
          </div>
        </div>
      </div>
    );
  }
}