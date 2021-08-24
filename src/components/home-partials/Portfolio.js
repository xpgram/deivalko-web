import { Component } from "react";
import { PortfolioItem } from "../PortfolioItem";

import styles from "./Portfolio.module.scss";

import test from "../../resources/img/PixilBG.png";

export class Portfolio extends Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <img src={test} className={styles.image} />
          <PortfolioItem
            title="Advance Wars Clone using Pixi.js and my own brain"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique qui sunt exercitationem commodi sint illo velit ea voluptas, maxime aspernatur enim veniam, accusamus modi sed voluptatibus quia? Accusamus rem illo corporis dolorum recusandae excepturi reiciendis a omnis rerum qui."
          />
          <PortfolioItem
            title="Advance Wars Clone"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque ab tempora, aspernatur amet, sequi maxime, velit voluptatum fugiat itaque consequatur nemo maiores sapiente quis."
          />
          <PortfolioItem
            title="Advance Wars Clone I Built Without My Dad's Permission"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident quod, sequi odit dolores corrupti quas animi rerum ex in, laudantium itaque eum labore nostrum voluptatem mollitia. Iusto omnis totam dolor ipsa cupiditate quaerat eius suscipit delectus assumenda distinctio! Ab velit necessitatibus assumenda iusto consectetur mollitia, similique molestias quo odio provident perferendis dicta, maiores quibusdam enim quasi, accusamus modi ad deserunt."
          />
        </div>
      </div>
    )
  }
}