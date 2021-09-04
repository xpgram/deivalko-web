import "./Navbar.scss";
import { Component } from "react"
import { HeaderLogo } from "./HeaderLogo"
import { Button } from "./Button";

export class Navbar extends Component {

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <a href='#landing' className="navbar-logo">
              <HeaderLogo />
            </a>

            <ul className="nav-menu">

              <li className="nav-item">
                <Button link='#bio'>
                  BIO
                </Button>
              </li>

              <li className="nav-item">
                <Button link='#portfolio'>
                  WORK
                </Button>
              </li>

              <li className="nav-item">
                <Button link='https://www.linkedin.com/in/deivn-vkola' external >
                  LINKEDIN
                </Button>
              </li>

              <li className="nav-item">
                <Button link='https://github.com/xpgram' external >
                  GITHUB
                </Button>
              </li>

            </ul>

          </div>
        </nav>
      </>
    )
  }
}