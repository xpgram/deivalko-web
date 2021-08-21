import { Component } from "react";

import styles from './Bio.module.scss';

export class Bio extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.attentionGrabber}>Hey</h1>
        <p className={styles.text}>
          My name is <span style={{color: '#A7A'}}>Dei</span> <span style={{color: '#C7A'}}>Valko</span>.
          I am an indie games designer</p>
        <p className={styles.text}>
          and artist based in Oregon.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iusto delectus quod corrupti necessitatibus magnam perferendis voluptas voluptate totam enim animi rem neque nisi doloribus cumque quis, laborum cum at?
        </p>
      </div>
    )
  }
}