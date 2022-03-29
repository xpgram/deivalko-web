import { Component } from "react";
import { PortfolioItem } from "../PortfolioItem";

import styles from "./Portfolio.module.scss";

import portfolioItems from "../../resources/content/portfolio-items.json";

export class Portfolio extends Component {
  render() {

    const portfolio = portfolioItems.map( data =>
      <PortfolioItem
        title={data.title}
        image={data.image}
        technologies={data.technologies}
        description={data.description}
        linkDemo={data.linkDemo}
        linkSource={data.linkSource}
      />)

    return (
      <div className={styles.background}>
        <div className={styles.container}>
          {portfolio}
        </div>
      </div>
    )
  }
}