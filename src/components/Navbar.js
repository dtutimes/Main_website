import React, {useState} from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import Headroom from "headroom.js";
import useDarkMode from 'use-dark-mode';

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
} from "reactstrap";
import DarkModeToggle from "react-dark-mode-toggle";

function ColorNavbar(props) {
  const darkMode = useDarkMode(false);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = useState(darkMode);
  
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        document.getElementById("img").src = require("assets/img/icons/B.png");
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        document.getElementById("img").src = require("assets/img/icons/W.png");
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
            // setBodyClick(false);
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
          <div className="navbar-translate flex-grow-2">
            
            <NavbarBrand id="navbar-brand" to="/" tag={Link} style={{fontSize:"14px"}} className="flex-grow-0">
            {/* <a href="#pablo"> */}
            <img alt="..." id="img" src={require("assets/img/icons/W.png")} style={{height:"60px", paddingRight:"1rem"}}/>
            {/* </a> */}
              DTU TIMES
            </NavbarBrand>
            
            {/* <UncontrolledTooltip placement="bottom" target="navbar-brand">
              The Official Newsletter of DTU
            </UncontrolledTooltip> */}
            <DarkModeToggle
          className ="ml-auto"
           onChange={darkMode.toggle}
           checked={darkMode.value}
           size={50}
         />
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                // setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          
          <Collapse navbar isOpen={collapseOpen} className="flex-grow-0">
          
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <Link className="navlink nav-link" to="/about" style={{fontSize:"14px"}}>
                  about
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink nav-link" to="/editions" style={{fontSize:"14px"}}>
                  editions
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink nav-link" to="/blog" style={{fontSize:"14px"}}>
                  blog
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink nav-link" to="/gallery" style={{fontSize:"14px"}}>
                  gallery
                </Link>
              </NavItem>
              {/* <NavItem>
                <Link className="navlink nav-link" to="/societies" style={{fontSize:"14px"}}>
                  Societies
                </Link>
              </NavItem> */}
              <NavItem>
                <Link className="navlink nav-link" to="/team" style={{fontSize:"14px"}}>
                  team
                </Link>
              </NavItem>
              <NavItem>
                <Link className="navlink nav-link" to="/contact" style={{fontSize:"14px"}}>
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
