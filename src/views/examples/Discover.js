import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterWhite from "components/Footers/FooterWhite.js";

function Discover() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("discover");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("discover");
    };
  });
  return (
    <>
      <DangerNavbar />
      <div className="wrapper">
        <div className="wrapper">
          <div className="main">
            <div className="section">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="6" xs="12">
                    <h2 className="discover-title">
                      <small>See latest artwork</small>
                    </h2>
                    <Form className="form-inline" role="search">
                      <FormGroup>
                        <Input
                          className="border-input"
                          placeholder="Search..."
                          type="text"
                        />
                          
                      </FormGroup>
                      <Button
                        className="btn-just-icon"
                        color="default"
                        type="submit"
                      >
                        <i className="fa fa-search" />
                      </Button>
                    </Form>
                  </Col>
                </Row>
                <Row className="items-row">
                  <Col className="ml-auto" md="3" sm="4">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/pavel-kosov.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/faces/joe-gardner-2.jpg")}
                              />
                              <div className="text">
                                <span className="name">Jane Doe</span>
                                <div className="meta">Drawn on 23 Nov</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                  <Col md="4" sm="4">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/por7o.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/faces/erik-lucatero-2.jpg")}
                              />
                              <div className="text">
                                <span className="name">Tom Hanks</span>
                                <div className="meta">Drawn on 23 Jan</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                  <Col className="mr-auto" md="3" sm="4">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/vincent-versluis.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/chet_faker_2.jpg")}
                              />
                              <div className="text">
                                <span className="name">Chet Faker</span>
                                <div className="meta">Drawn on 20 Jan</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row className="items-row">
                  <Col className="ml-auto" md="4" sm="6">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/ilya-yakover.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                              />
                              <div className="text">
                                <span className="name">Tom Hank</span>
                                <div className="meta">Drawn on 23 Jan</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                  <Col md="3" sm="6">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/miguel-perales.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                              />
                              <div className="text">
                                <span className="name">Tom Banks</span>
                                <div className="meta">Drawn on 23 Jan</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                  <Col className="mr-auto d-sm-block" md="3">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/neill-kumar.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/flume.jpg")}
                              />
                              <div className="text">
                                <span className="name">Flume</span>
                                <div className="meta">Drawn on 4 Aug</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row className="items-row">
                  <Col className="ml-auto" md="2" sm="6">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/john-towner.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/placeholder.jpg")}
                              />
                              <div className="text">
                                <span className="name">Tom Hanks</span>
                                <div className="meta">Drawn on 23 Jan</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                  <Col md="4" sm="6">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/leonard-cotte.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/placeholder.jpg")}
                              />
                              <div className="text">
                                <span className="name">Banks</span>
                                <div className="meta">Drawn on 3 Mar</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                  <Col className="mr-auto" md="4" sm="6">
                    <Card className="card-plain text-center">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/anders-jilden.jpg")}
                          />
                        </a>
                        <CardBody className="details-center">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <div className="author">
                              <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={require("assets/img/faces/erik-lucatero-2.jpg")}
                              />
                              <div className="text">
                                <span className="name">Tom Hanks</span>
                                <div className="meta">Drawn on 23 Jan</div>
                              </div>
                            </div>
                          </a>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center ml-auto mr-auto" md="4">
                    <div className="preloader">
                      <div className="uil-reload-css mr-1" style={{}}>
                        <div />
                      </div>
                      <h5>Loading More</h5>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <FooterWhite />
    </>
  );
}

export default Discover;
