import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionFreeDemo() {
  return (
    <>
      <div
        className="section section-free-demo section-dark"
        style={{ display: "none" }}
      >
        <Container>
          <Row>
            <Col md="5">
              <div className="icon-github">
                <i className="fa fa-github" />
              </div>
              <div className="section-description">
                <h3 className="title">Free Demo</h3>
                <h5 className="description">
                  Do you want to test and see the benefits of this kit before
                  purchasing it? You can give the demo version a try. It
                  features enough basic components for you to get a feel of the
                  design and also test the quality of the code. Get it free on
                  GitHub!
                </h5>
                <Row className="space-top">
                  <Col md="6">
                    <Button
                      className="btn-round btn-neutral"
                      color="default"
                      href="https://github.com/creativetimofficial/paper-kit-react?ref=creativetim"
                      target="_blank"
                    >
                      View Demo on Github
                    </Button>
                  </Col>
                  <Col md="6">
                    <a
                      aria-label="Star ntkme/github-buttons on GitHub"
                      className="github-button"
                      data-show-count={true}
                      data-size="large"
                      href="https://github.com/creativetimofficial/paper-kit-react?ref=creativetim"
                    >
                      Star
                    </a>
                    <a
                      aria-label="Fork ntkme/github-buttons on GitHub"
                      className="github-button"
                      data-icon="octicon-repo-forked"
                      data-size="large"
                      href="https://github.com/creativetimofficial/paper-kit-react?ref=creativetim"
                    >
                      Fork
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="offset-md-1" md="6">
              <Row>
                <Col md="6">
                  <Card className="card-pricing">
                    <CardBody>
                      <CardTitle tag="h3">Free Demo</CardTitle>
                      <ul>
                        <li>
                          <b>60</b>
                          Components*
                        </li>
                        <li>
                          <b>3</b>
                          Example Pages
                        </li>
                        <li>
                          <b>0</b>
                          Customised Plugins
                        </li>
                        <li>
                          <i className="fa fa-times text-danger" />
                          Customised Icons
                        </li>
                        <li>
                          <i className="fa fa-times text-danger" />
                          Beautiful Cards
                        </li>
                        <li>
                          <i className="fa fa-times text-danger" />
                          Sections
                        </li>
                        <li>
                          <i className="fa fa-times text-danger" />
                          Premium Support
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-pricing">
                    <CardBody>
                      <CardTitle tag="h3">PRO Version</CardTitle>
                      <ul>
                        <li>
                          <b>1000+</b>
                          Components*
                        </li>
                        <li>
                          <b>15</b>
                          Example Pages
                        </li>
                        <li>
                          <b>8</b>
                          Customised Plugins
                        </li>
                        <li>
                          <i className="fa fa-check text-success" />
                          Customised Icons
                        </li>
                        <li>
                          <i className="fa fa-check text-success" />
                          Beautiful Cards
                        </li>
                        <li>
                          <i className="fa fa-check text-success" />
                          Sections
                        </li>
                        <li>
                          <i className="fa fa-check text-success" />
                          Premium Support
                        </li>
                      </ul>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="12">
                  <br />
                  <p className="description">
                    *Components: buttons, social buttons, navbars, dropdowns,
                    tabs, tables, cards, select, tags, sliders etc. and their
                    customisation by classes.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionFreeDemo;
