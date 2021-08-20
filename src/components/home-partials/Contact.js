import { Component } from "react";


export class Contact extends Component {
  render() {
    return (
      <>
        <h1>Hey</h1>
        <p style={{maxWidth: '30rem', margin: '0 auto 0 auto'}}>
          My name is <span style={{color: '#969'}}>Dei</span> <span style={{color: '#A58'}}>Valko</span>.
          I am an indie games designer</p>
        <p style={{maxWidth: '50rem', margin: '0 auto 0 auto'}}>
          and artist based in Oregon.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iusto delectus quod corrupti necessitatibus magnam perferendis voluptas voluptate totam enim animi rem neque nisi doloribus cumque quis, laborum cum at?
        </p>
      </>
    )
  }
}