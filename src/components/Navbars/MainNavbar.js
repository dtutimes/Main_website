import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
// core components

function ColorNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        expand="lg"
        id="navbar-main"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/" tag={Link}>
              DTU TIMES
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              The Official Newsletter of DTU
            </UncontrolledTooltip>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="navlink nav-link" to="/about">
                  about
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink nav-link" to="/editions">
                  editions
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink nav-link" to="/blog">
                  blog
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink nav-link" to="/gallery">
                  gallery
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink nav-link" to="/societies">
                  Societies
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink nav-link" to="/team">
                  team
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink nav-link" to="/contact">
                  contact us
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorNavbar;
