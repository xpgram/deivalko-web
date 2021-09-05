import { Component } from "react";
import { GlitchText } from "./GlitchText";

import styles from "./PortfolioItem.module.scss";

export class PortfolioItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }

    this._image = (this.props.image)
      ? require(`../resources/img/portfolio/${this.props.image}`).default
      : '';

    // TODO Styles fail miserably if no image exists or can be found.
  }

  onMouseEnter = () => {
    this.setState({hover: true});
  }

  onMouseLeave = () => {
    this.setState({hover: false});
  }

  render() {

    const technologies = this.props.technologies || [];
    const technologyElems = technologies
      .map( (word, idx) =>
        <span
          key={`tech_${idx}`}
          className={styles.technologyWord}>
            {word}
        </span>
      );

    const showSidebarMenu = (this.props.linkDemo || this.props.linkSource);

    return (
      <div className={styles.block}>

        <div className={styles.preview}>
          <img
            className={styles.previewImage}
            src={this._image}
            alt={this.props.title}
          />
          <div className={styles.gradientOverlay} />
          <div className={styles.titleWrapper}>
            <GlitchText
              text={this.props.title + '_'}
              pattern={'blank-reveal'}
              textStyle={styles.titleText}
              wordStyle={styles.titleWord}
              charStyle={styles.titleLetters}
            />
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.mainWrapper}>

            <div className={styles.main}>
              <div className={styles.technologies}>
                {technologyElems}
              </div>
              <div className={styles.description}>
                {this.props.description}
              </div>
              <div className={styles.endbar} />
            </div>

            {showSidebarMenu &&
              <div className={styles.sidebarWrapper}>
                <div className={styles.sidebar}>

                  {/* TODO Extract to component, and to button list before return */}
                  {this.props.linkDemo &&
                    <a
                      className={styles.link}
                      href={this.props.linkDemo}
                      target="_blank"
                    >
                      VIEW
                    </a>
                  }
                  {this.props.linkSource &&
                    <a
                      className={styles.link}
                      href={this.props.linkSource}
                      target="_blank"
                    >
                      PROJ
                    </a>
                  }

                </div>
              </div>
            }

          </div>
        </div>

      </div>
    );
  }
}