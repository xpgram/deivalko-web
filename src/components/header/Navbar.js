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
                <a href='#bio' className="nav-links">
                  <Button buttonStyle='btn--navigation'>
                    BIO
                  </Button>
                </a>
              </li>

              <li className="nav-item">
                <a href='#portfolio' className="nav-links">
                  <Button buttonStyle='btn--navigation'>
                    WORK
                  </Button>
                </a>
              </li>

              <li className="nav-item">
                <a href='#contact' className="nav-links">
                  <Button buttonStyle='btn--navigation'>
                    CONTACT
                  </Button>
                </a>
              </li>

            </ul>

          </div>
        </nav>
      </>
    )
  }
}