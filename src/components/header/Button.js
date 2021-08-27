import { Component } from 'react';
import { IExternalLink } from '../Icon';

import styles from './Button.module.scss';

export class Button extends Component {
  render() {
    return (
      <a className={styles.linkWrapper}
        href={this.props.link}
        target={this.props.external && '_blank'}
      >
        <button className={styles.text} type='button'>
          {this.props.children}
          {this.props.external && <IExternalLink className={styles.icon} />}
          <div className={styles.lightbar}>
            <div className={styles.light} />
          </div>
        </button>
      </a>
    );
  }
}