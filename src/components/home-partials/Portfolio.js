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
            image="advance-wars-clone.png"
            technologies={['PixiJs', 'Typescript']}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique qui sunt exercitationem commodi sint illo velit ea voluptas, maxime aspernatur enim veniam, accusamus modi sed voluptatibus quia? Accusamus rem illo corporis dolorum recusandae excepturi reiciendis a omnis rerum qui."
            linkDemo="https://xpgram.github.io/armed-revolt/game.html"
            linkSource="https://github.com/xpgram/advance-wars"
          />
          <PortfolioItem
            title="Movie.Web"
            image="advance-wars-clone.png"
            technologies={['React', 'Django', 'Heroku']}
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident quod, sequi odit dolores corrupti quas animi rerum ex in, laudantium itaque eum labore nostrum voluptatem mollitia. Iusto omnis totam dolor ipsa cupiditate quaerat eius suscipit delectus assumenda distinctio! Ab velit necessitatibus assumenda iusto consectetur mollitia, similique molestias quo odio provident perferendis dicta, maiores quibusdam enim quasi, accusamus modi ad deserunt."
            linkDemo=""
            linkSource=""
          />
          <PortfolioItem
            title="Budgetboy"
            image="advance-wars-clone.png"
            technologies={['Python']}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque ab tempora, aspernatur amet, sequi maxime, velit voluptatum fugiat itaque consequatur nemo maiores sapiente quis."
            linkDemo=""
            linkSource=""
          />
        </div>
      </div>
    )
  }
}