import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

// core components

function SectionNavigation() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null}
      <div className="section section-navigation">
        <Container className="tim-container">
          <div className="title">
            <h3>Navigation Areas</h3>
          </div>
        </Container>
        <div id="navbar-full">
          <div className="navigation-example">
            {/* default navbar with search form */}
            <Navbar className="bg-primary" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                  Brand
                </NavbarBrand>
                <button
                  className="navbar-toggler navbar-toggler-right"
                  id="navbarSupportedContent2"
                  type="button"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    setBodyClick(true);
                  }}
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbarSupportedContent2">
                  <Nav className="mr-auto" navbar>
                    <NavItem className="active">
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        Home <span className="sr-only">(current)</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        Link
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="disabled"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Disabled
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <Form className="form-inline ml-auto">
                    <Input
                      className="mr-sm-2 no-border"
                      placeholder="Search"
                      type="text"
                    />
                    <Button
                      className="btn-just-icon btn-round"
                      color="primary"
                      type="submit"
                    >
                      <i aria-hidden={true} className="nc-icon nc-zoom-split" />
                    </Button>
                  </Form>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            {/* default navbar with profile photo */}
            <Navbar className="bg-info" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                  Navbar with icon
                </NavbarBrand>
                <button
                  className="navbar-toggler navbar-toggler-right"
                  id="navbarSupportedContent3"
                  type="button"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    setBodyClick(true);
                  }}
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbarSupportedContent3">
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        Discover
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        Wishlist
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <Button className="btn-just-icon" color="warning">
                        <i className="nc-icon nc-sound-wave" />
                      </Button>
                    </NavItem>
                    <NavItem className="position-relative">
                      <Button
                        className="btn-just-icon"
                        color="default"
                        data-toggle="dropdown"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="nc-icon nc-email-85" />
                      </Button>
                      <Badge
                        className="notification-bubble"
                        color="danger"
                        pill
                      >
                        2
                      </Badge>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        data-toggle="dropdown"
                        height="30"
                        width="30"
                        tag={NavLink}
                      >
                        <div className="profile-photo-small">
                          <img
                            alt="..."
                            className="img-circle img-responsive img-no-padding"
                            src={require("assets/img/faces/joe-gardner-2.jpg")}
                          />
                        </div>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-info" right>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Me
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Settings
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Sign out
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            {/* default navbar with notifications */}
            <Navbar className="bg-danger" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                  Navbar with notification
                </NavbarBrand>
                <button
                  className="navbar-toggler navbar-toggler-right"
                  id="navbarSupportedContent4"
                  type="button"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    setBodyClick(true);
                  }}
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbarSupportedContent4">
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        Discover
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        Wishlist
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        className="btn-just-icon"
                        color="warning"
                        data-toggle="dropdown"
                      >
                        <i className="nc-icon nc-sound-wave" />
                      </DropdownToggle>
                      <DropdownMenu
                        className="dropdown-notification"
                        tag="ul"
                        right
                      >
                        <li className="no-notification">You're all clear!</li>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        className="btn-just-icon"
                        color="danger"
                        data-toggle="dropdown"
                      >
                        <i className="nc-icon nc-email-85" />
                      </DropdownToggle>
                      <DropdownMenu
                        className="dropdown-wide dropdown-notification"
                        tag="ul"
                        right
                      >
                        <DropdownItem header>
                          You have 7 unread notifications
                        </DropdownItem>
                        <li>
                          <ul className="dropdown-notification-list scroll-area">
                            <a
                              className="notification-item"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <div className="notification-text">
                                <Badge color="success" pill>
                                  <i className="nc-icon nc-chat-33" />
                                </Badge>
                                <span className="message">
                                  <b>Patrick</b>
                                  mentioned you in a comment.
                                </span>
                                <br />
                                <span className="time">20min ago</span>
                                <Button
                                  className="btn-just-icon read-notification btn-round"
                                  color="default"
                                >
                                  <i className="nc-icon nc-check-2" />
                                </Button>
                              </div>
                            </a>
                            <a
                              className="notification-item"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <div className="notification-text">
                                <Badge color="info" pill>
                                  <i className="nc-icon nc-alert-circle-i" />
                                </Badge>
                                <span className="message">
                                  Our privacy policy changed!
                                </span>
                                <br />
                                <span className="time">1day ago</span>
                              </div>
                            </a>
                            <a
                              className="notification-item"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <div className="notification-text">
                                <Badge color="warning" pill>
                                  <i className="nc-icon nc-ambulance" />
                                </Badge>
                                <span className="message">
                                  Please confirm your email address.
                                </span>
                                <br />
                                <span className="time">2days ago</span>
                              </div>
                            </a>
                            <a
                              className="notification-item"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <div className="notification-text">
                                <Badge color="primary" pill>
                                  <i className="nc-icon nc-paper" />
                                </Badge>
                                <span className="message">
                                  Have you thought about marketing?
                                </span>
                                <br />
                                <span className="time">3days ago</span>
                              </div>
                            </a>
                          </ul>
                        </li>
                        {/* end scroll area */}
                        <li className="dropdown-footer">
                          <ul className="dropdown-footer-menu">
                            <li>
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Mark all as read
                              </a>
                            </li>
                          </ul>
                        </li>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        data-toggle="dropdown"
                        height="30"
                        width="30"
                        tag={NavLink}
                      >
                        <div className="profile-photo-small">
                          <img
                            alt="..."
                            className="img-circle img-responsive img-no-padding"
                            src={require("assets/img/faces/erik-lucatero-2.jpg")}
                          />
                        </div>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-danger" right>
                        <DropdownItem header>Dropdown header</DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Separated link
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Another separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionNavigation;
