import { Component } from "react";
import './common.css';
import './Section.css';


export default class Section extends Component {

  render() {
    return (
      <section className={`section-plaque section-glow ${this.props.className}`}>
        <div className='section-content text-center'>
          {this.props.children}
        </div>
      </section>
    );
  }
}