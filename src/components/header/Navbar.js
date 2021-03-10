import "./Navbar.css";
import { Component } from "react"
import { Link } from "react-router-dom"
import { HeaderLogo } from "./HeaderLogo"
import { Button } from "../Button";

class Navbar extends Component {

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to='/' className="navbar-logo">
              <HeaderLogo />
            </Link>

            <ul className="nav-menu">

              <li className="nav-item">
                <Link to='/' className="nav-links">
                  <Button buttonStyle='btn--outline'>
                    BIO
                  </Button>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/' className="nav-links">
                <Button buttonStyle='btn--outline'>
                    WORK
                  </Button>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/' className="nav-links">
                <Button buttonStyle='btn--outline'>
                    CONTACT
                  </Button>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/' className="nav-links">
                <Button buttonStyle='btn--outline'>
                    CONTACT
                  </Button>
                </Link>
              </li>

              <li className="nav-item">
                <Link to='/' className="nav-links">
                <Button buttonStyle='btn--outline'>
                    CONTACT
                  </Button>
                </Link>
              </li>

            </ul>

          </div>
        </nav>
      </>
    )
  }
}

export default Navbar;