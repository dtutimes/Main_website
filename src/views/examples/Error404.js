import React from "react";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

function Error404() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("error-404");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("error-404");
    };
  });
  return (
    <>
      <ColorNavbar />
      <div
        className="background-img"
        style={{
          backgroundImage:
            "url(" + require("assets/img/sections/martin-knize.jpg") + ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <h1 class="title">
              404
              <br />
              <p class="error-msg">The page you requested could not be found</p>
            </h1>
          </Row>
          <div className="container-cards">
            <Row>
              <h5 className="discover-pages text-center">You can discover:</h5>
              <br />
              <br />
              <br />
            </Row>
            <Row>
              <Container>
                <Row>
                  <Col md="3">
                    <Card className="card-just-text">
                      <CardBody className="text-center">
                        <div className="card-icon">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <i aria-hidden={true} className="fa fa-desktop" />
                          </a>
                        </div>
                        <p className="card-description">
                          Admin &amp; Dashboards
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="3">
                    <Card className="card-hover-effect card-just-text">
                      <CardBody className="text-center">
                        <h4 className="card-icon">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <i aria-hidden={true} className="fa fa-scissors" />
                          </a>
                        </h4>
                        <p className="card-description">UI Kits</p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="3">
                    <Card className="card-hover-effect card-just-text">
                      <CardBody className="text-center">
                        <h4 className="card-icon">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <i aria-hidden={true} className="fa fa-gift" />
                          </a>
                        </h4>
                        <p className="card-description">Free Themes</p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="3">
                    <Card className="card-hover-effect card-just-text">
                      <CardBody className="text-center">
                        <h4 className="card-icon">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <i
                              aria-hidden={true}
                              className="fa fa-puzzle-piece"
                            />
                          </a>
                        </h4>
                        <p className="card-description">Bootstrap components</p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Error404;
