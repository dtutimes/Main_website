import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionNavbars() {
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
      <div className="section section-navbars">
        <Container id="menu-dropdown">
          <div className="title">
            <h3>Menu</h3>
          </div>
          <Row>
            <Col md="12">
              <Navbar className="bg-warning" expand="lg">
                <Container>
                  <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                    Yellow Menu
                  </NavbarBrand>
                  <button
                    className="navbar-toggler navbar-toggler-right"
                    id="navbarSupportedContent5"
                    type="button"
                    onClick={() => {
                      document.documentElement.classList.toggle("nav-open");
                      setBodyClick(true);
                    }}
                  >
                    <span className="navbar-toggler-icon" />
                    <span className="navbar-toggler-icon" />
                    <span className="navbar-toggler-icon" />
                  </button>
                  <UncontrolledCollapse
                    navbar
                    toggler="#navbarSupportedContent5"
                  >
                    <Nav className="mr-auto" navbar>
                      <NavItem>
                        <NavLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Link
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Link
                        </NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle
                          aria-expanded={false}
                          aria-haspopup={true}
                          caret
                          color="default"
                          data-toggle="dropdown"
                          href="#pablo"
                          nav
                          onClick={e => e.preventDefault()}
                          role="button"
                        >
                          Dropdown
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-warning" right>
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
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Navbar className="bg-success" expand="lg">
                <Container>
                  <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                    Green Menu
                  </NavbarBrand>
                  <button
                    className="navbar-toggler navbar-toggler-right"
                    id="navbarSupportedContent7"
                    type="button"
                    onClick={() => {
                      document.documentElement.classList.toggle("nav-open");
                      setBodyClick(true);
                    }}
                  >
                    <span className="navbar-toggler-icon" />
                    <span className="navbar-toggler-icon" />
                    <span className="navbar-toggler-icon" />
                  </button>
                  <UncontrolledCollapse
                    navbar
                    toggler="#navbarSupportedContent7"
                  >
                    <Nav className="ml-auto" navbar>
                      <Form className="form-inline">
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
                          <i className="nc-icon nc-zoom-split" />
                        </Button>
                      </Form>
                      <NavItem className="active">
                        <NavLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Link <span className="sr-only">(current)</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Another Link
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </UncontrolledCollapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionNavbars;
