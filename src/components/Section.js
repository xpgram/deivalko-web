import { Component } from "react";
import './common.css';
import './Section.css';


export default class Section extends Component {

  render() {
    return (
      <section className={`section-plaque ${this.props.className}`}>
        <div className='text-center'>
          {this.props.children}
        </div>
      </section>
    );
  }
}