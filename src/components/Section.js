import { Component } from "react";
import './common.scss';
import './Section.scss';


export default class Section extends Component {

  render() {
    return (
      <section
        id={this.props.id}
        className={`${this.props.class}`}
      >
        <content>
          {this.props.children}
        </content>
      </section>
    );
  }
}