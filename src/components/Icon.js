import React, { Component } from "react";

class IconGeneric extends Component {
  shape = <></>;
  render() {
    return React.cloneElement(this.shape, this.props);
  }
}

export class IExternalLink extends IconGeneric {
  shape = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 1200 1200"
    >
      <path fill="none" d="M0 0h1200v1200H0z"></path>
      <path d="M640.841 240l-140-140H100v824.756C100 1021.54 178.46 1100 275.243 1100H1100V701.005l-140-140V960H240V240h400.842zM850.5 250.503L700 100h400v400L949.5 349.497 698.994 600 600 501.005l250.5-250.502z"></path>
    </svg>
  );
}