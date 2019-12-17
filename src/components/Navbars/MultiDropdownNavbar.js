import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

// core components

function MultiDropdownNavbar() {
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
        setNavbarColor("bg-info");
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
        id="navbar-main"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/index" tag={Link}>
              Paper Kit PRO React
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              Paper Kit PRO React
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
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color="default" caret nav>
                  Multilevel Dropdown
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger">
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Another action
                  </DropdownItem>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="dropdown-item"
                      color="default"
                      tag="a"
                      caret
                    >
                      Submenu
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-danger">
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Submenu action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Submenu action
                      </DropdownItem>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="dropdown-item"
                          color="default"
                          tag="a"
                          caret
                        >
                          Subsubmenu
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-danger">
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Subsubmenu action 1
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Subsubmenu action 2
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="dropdown-item"
                          color="default"
                          tag="a"
                          caret
                        >
                          Second Subsubmenu
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-danger">
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Subsubmenu action 1
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Subsubmenu action 2
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  Components
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/index" tag={Link}>
                    All Components
                  </DropdownItem>
                  <DropdownItem to="/presentation" tag={Link}>
                    Presentation
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/paper-kit-pro-react/#/documentation/introduction?ref=pkpr-multi-level-dropdown-navbar"
                    target="_blank"
                  >
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  Sections
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/sections#headers" tag={Link}>
                    <i className="nc-icon nc-tile-56" />
                    Headers
                  </DropdownItem>
                  <DropdownItem to="/sections#features" tag={Link}>
                    <i className="nc-icon nc-settings" />
                    Features
                  </DropdownItem>
                  <DropdownItem to="/sections#blogs" tag={Link}>
                    <i className="nc-icon nc-bullet-list-67" />
                    Blogs
                  </DropdownItem>
                  <DropdownItem to="/sections#teams" tag={Link}>
                    <i className="nc-icon nc-single-02" />
                    Teams
                  </DropdownItem>
                  <DropdownItem to="/sections#projects" tag={Link}>
                    <i className="nc-icon nc-calendar-60" />
                    Projects
                  </DropdownItem>
                  <DropdownItem to="/sections#pricing" tag={Link}>
                    <i className="nc-icon nc-money-coins" />
                    Pricing
                  </DropdownItem>
                  <DropdownItem to="/sections#testimonials" tag={Link}>
                    <i className="nc-icon nc-badge" />
                    Testimonials
                  </DropdownItem>
                  <DropdownItem to="/sections#contact-us" tag={Link}>
                    <i className="nc-icon nc-mobile" />
                    Contact Us
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color="default" caret nav>
                  Examples
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/about-us" tag={Link}>
                    <i className="nc-icon nc-bank" />
                    About-us
                  </DropdownItem>
                  <DropdownItem to="/add-product" tag={Link}>
                    <i className="nc-icon nc-basket" />
                    Add Product
                  </DropdownItem>
                  <DropdownItem to="/blog-post" tag={Link}>
                    <i className="nc-icon nc-badge" />
                    Blog Post
                  </DropdownItem>
                  <DropdownItem to="/blog-posts" tag={Link}>
                    <i className="nc-icon nc-bullet-list-67" />
                    Blog Posts
                  </DropdownItem>
                  <DropdownItem to="/contact-us" tag={Link}>
                    <i className="nc-icon nc-mobile" />
                    Contact Us
                  </DropdownItem>
                  <DropdownItem to="/discover" tag={Link}>
                    <i className="nc-icon nc-world-2" />
                    Discover
                  </DropdownItem>
                  <DropdownItem to="/e-commerce" tag={Link}>
                    <i className="nc-icon nc-send" />
                    Ecommerce
                  </DropdownItem>
                  <DropdownItem to="/landing-page" tag={Link}>
                    <i className="nc-icon nc-spaceship" />
                    Landing Page
                  </DropdownItem>
                  <DropdownItem to="/login-page" tag={Link}>
                    <i className="nc-icon nc-lock-circle-open" />
                    Login Page
                  </DropdownItem>
                  <DropdownItem to="/product-page" tag={Link}>
                    <i className="nc-icon nc-album-2" />
                    Product Page
                  </DropdownItem>
                  <DropdownItem to="/profile-page" tag={Link}>
                    <i className="nc-icon nc-single-02" />
                    Profile Page
                  </DropdownItem>
                  <DropdownItem to="/register-page" tag={Link}>
                    <i className="nc-icon nc-bookmark-2" />
                    Register Page
                  </DropdownItem>
                  <DropdownItem to="/search-with-sidebar" tag={Link}>
                    <i className="nc-icon nc-zoom-split" />
                    Search Page
                  </DropdownItem>
                  <DropdownItem to="/settings" tag={Link}>
                    <i className="nc-icon nc-settings-gear-65" />
                    Settings Page
                  </DropdownItem>
                  <DropdownItem to="/twitter-redesign" tag={Link}>
                    <i className="nc-icon nc-tie-bow" />
                    Twitter
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MultiDropdownNavbar;
