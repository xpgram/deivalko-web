import { Component } from "react";
import { Navbar } from "../components/header/Navbar";
import { Landing } from "../components/home-partials/Landing";
import { Bio } from "../components/home-partials/Bio";
import { Portfolio } from "../components/home-partials/Portfolio";
import { Contact } from "../components/home-partials/Contact";
import { Footer } from "../components/header/Footer";

export class HomeView extends Component {
  render() {
    return (
      <>
        <Navbar />

        <span id="landing" />
        <Landing />

        <span id="bio" />
        <Bio />

        <span id="portfolio" />
        <Portfolio />

        <span id="contact" />
        <Contact />

        <Footer />
      </>
    )
  }
}