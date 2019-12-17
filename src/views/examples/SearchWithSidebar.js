import React from "react";

// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterWhite from "components/Footers/FooterWhite.js";

function SearchWithSidebar() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("search-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("search-page");
    };
  });
  return (
    <>
      <DangerNavbar />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white section-search">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6" xs="12">
                  <Form className="form-inline search-form" role="search">
                    <InputGroup className="no-border">
                      <span
                        className="input-group-addon addon-xtreme no-border"
                        id="basic-addon1"
                      >
                        <i className="fa fa-search" />
                      </span>
                      <Input
                        aria-describedby="basic-addon1"
                        className="input-xtreme no-border"
                        placeholder="Find Stuff"
                        type="text"
                      />
                    </InputGroup>
                  </Form>
                  <h6 className="text-muted">
                    Is this what you are looking for?
                  </h6>
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col md="2" xs="3">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          />
                        </Col>
                        <Col className="description" md="6" xs="4">
                          <h5>
                            Erik Faker <br />
                            <small>
                              Musical Artist with <b>3</b> songs.
                            </small>
                          </h5>
                        </Col>
                        <Col md="2" xs="2">
                          <Button
                            className="btn-just-icon btn-round btn-tooltip"
                            color="danger"
                            id="tooltip565993392"
                            outline
                          >
                            <i className="fa fa-plus" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip565993392"
                          >
                            follow
                          </UncontrolledTooltip>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="3">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/kaci-baum-2.jpg")}
                          />
                        </Col>
                        <Col className="description" md="6" xs="4">
                          <h5>
                            Sophie Travolta <br />
                            <small>Singer</small>
                          </h5>
                        </Col>
                        <Col md="2" xs="2">
                          <Button
                            className="btn-just-icon btn-round btn-tooltip"
                            color="danger"
                            id="tooltip385246717"
                            outline
                          >
                            <i className="fa fa-plus" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip385246717"
                          >
                            follow
                          </UncontrolledTooltip>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="3">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/erik-lucatero-2.jpg")}
                          />
                        </Col>
                        <Col className="description" md="6" xs="4">
                          <h5>
                            John Lincoln <br />
                            <small>Musical Producer</small>
                          </h5>
                        </Col>
                        <Col md="2" xs="2">
                          <Button
                            className="btn-just-icon btn-round btn-tooltip"
                            color="danger"
                            id="tooltip890195664"
                            outline
                          >
                            <i className="fa fa-plus" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip890195664"
                          >
                            follow
                          </UncontrolledTooltip>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col md="2" xs="3">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                          />
                        </Col>
                        <Col className="description" md="6" xs="4">
                          <h5>
                            Oleg Clem <br />
                            <small>Web Designer</small>
                          </h5>
                        </Col>
                        <Col md="2" xs="2">
                          <Button
                            className="btn-just-icon btn-round btn-tooltip"
                            color="danger"
                            id="tooltip588441915"
                            outline
                          >
                            <i className="fa fa-plus" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip588441915"
                          >
                            follow
                          </UncontrolledTooltip>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                  <div className="text-missing">
                    <h5 className="text-muted">
                      If you are not finding who you’re looking for try using an
                      email address.
                    </h5>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <FooterWhite />
    </>
  );
}

export default SearchWithSidebar;
