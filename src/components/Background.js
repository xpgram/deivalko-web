import { Component } from "react";

import image from "../public/img/PixilBG_faded.png";
import logo from "../public/img/d.V.png";

export class Background extends Component {
    render() {
        return (
            <div style={style}>
                <img src={logo} style={{
                    width: "50%",
                    minWidth: "200px",
                    maxWidth: "900px",
                    margin: "0",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }} />
                <img src={image} style={{
                    width: "100%"
                }} />
            </div>
        );
    }
}

const style = {
    backgroundColor: "#242424",
    width: "100%",
    height: "100%"
};