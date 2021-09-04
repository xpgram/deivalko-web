import { Component } from "react";
import { GlitchText } from "./GlitchText";

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
      <div className={styles.block}>

        <div className={styles.preview}>
          <img
            className={styles.previewImage}
            src={demoImage}
            alt=""
          />
          <div className={styles.gradientOverlay} />
          <div className={styles.titleWrapper}>
            <GlitchText
              text={this.props.title + '_'}
              pattern={'blank-reveal'}
              blockStyle={styles.titleText}
              textStyle={styles.titleLetters}
            />
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.mainWrapper}>
            
            <div className={styles.main}>
              <div className={styles.technologies}>
                PixiJs / Typescript
              </div>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
              <div className={styles.endbar} />
            </div>

            <div className={styles.sidebar}>
              <div className={styles.sidebarSeparator} />
              <button className={styles.link}>VIEW</button>
              <button className={styles.link}>PROJ</button>
              {/* // TODO href to new address? */}
            </div>

          </div>
        </div>

      </div>
    );
  }
}