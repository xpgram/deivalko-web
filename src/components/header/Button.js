import { Component } from 'react';
import { IExternalLink } from '../Icon';

import styles from './Button.module.scss';

export class Button extends Component {
  render() {
    return (
      <button
        className={styles.button}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onTouchStart={this.onMouseEnter}
        onTouchEnd={this.onMouseLeave}
      >
        {this.props.children}
        {this.props.external && <IExternalLink className={styles.icon} />}
      </button>
    );
  }
}