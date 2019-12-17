import React from "react";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionPreFooterAreas() {
  return (
    <>
      <div className="wrapper">
        <div className="section">
          <Container className="tim-container">
            <div className="title" id="subscription">
              <h3>Pre-footer Areas</h3>
            </div>
            <h4>
              <small>Subscription</small>
            </h4>
          </Container>
        </div>
      </div>
      <div className="subscribe-line">
        <Container>
          <Row>
            <Col lg="9" md="8" sm="8">
              <Form>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Enter your email..."
                    type="text"
                  />
                </FormGroup>
              </Form>
            </Col>
            <Col md="3" sm="4">
              <Button block color="danger" size="lg" type="button">
                Subscribe Now!
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="separator" />
      <div className="subscribe-line subscribe-line-black">
        <Container>
          <Row>
            <Col lg="9" md="8" sm="8">
              <Form>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Enter your email..."
                    type="text"
                  />
                </FormGroup>
              </Form>
            </Col>
            <Col md="3" sm="4">
              <Button
                block
                className="btn-neutral"
                color="default"
                size="lg"
                type="button"
              >
                Join Newsletter
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="separator" />
      <div
        className="subscribe-line subscribe-line-transparent"
        style={{
          backgroundImage:
            "url(" + require("assets/img/sections/pavel-kosov.jpg") + ")"
        }}
      >
        <Container>
          <Row>
            <Col lg="9" md="8" sm="8">
              <Form>
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Enter your email..."
                    type="text"
                  />
                </FormGroup>
              </Form>
            </Col>
            <Col md="3" sm="4">
              <Button block className="btn-round" color="info" type="button">
                Subscribe Now!
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="separator" />
      {/* social and sharing areas */}
      <div className="section">
        <Container className="tim-container">
          <div className="title">
            <h4>Social and Sharing</h4>
          </div>
        </Container>
      </div>
      <div className="social-line" id="sharing">
        <Container>
          <Row>
            <Col md="4" sm="12">
              <h4 className="title">We are social</h4>
            </Col>
            <Col md="2" sm="3">
              <Button
                className="btn-link btn-just-icon"
                color="facebook"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-facebook mr-1" />
                Facebook
              </Button>
            </Col>
            <Col md="2" sm="3">
              <Button
                className="btn-link btn-just-icon"
                color="twitter"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-twitter mr-1" />
                Twitter
              </Button>
            </Col>
            <Col md="2" sm="3">
              <Button
                className="btn-link btn-just-icon"
                color="dribbble"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-dribbble mr-1" />
                Dribbble
              </Button>
            </Col>
            <Col md="2" sm="3">
              <Button
                className="btn-link btn-just-icon"
                color="youtube"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-youtube mr-1" />
                Youtube
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="separator" />
      <div className="social-line social-line-black">
        <Container>
          <Row>
            <Col md="4" sm="12">
              <h4 className="title">Follow Us</h4>
            </Col>
            <Col md="2" sm="3">
              <Button
                className="btn-neutral"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-twitter mr-1" />
                Twitter
              </Button>
            </Col>
            <Col md="2" sm="3">
              <Button
                className="btn-neutral"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-dribbble mr-1" />
                Dribbble
              </Button>
            </Col>
            <Col md="2" sm="3">
              <Button
                className="btn-neutral"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-youtube mr-1" />
                Youtube
              </Button>
            </Col>
            <Col md="2" sm="3">
              <Button
                className="btn-neutral"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-google-plus mr-1" />
                Google+
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="separator" />
      <div className="social-line" id="social-sharing">
        <Container>
          <Row>
            <Col md="4">
              <h4 className="title">Thank you for sharing!</h4>
            </Col>
            <Col md="2" sm="6">
              <Button
                className="btn-round"
                color="facebook"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-facebook mr-1" />
                Share · 753
              </Button>
            </Col>
            <Col md="2" sm="6">
              <Button
                className="btn-round"
                color="twitter"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-twitter mr-1" />
                Tweet · 832
              </Button>
            </Col>
            <Col md="2" sm="6">
              <Button
                className="btn-round"
                color="google"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-google-plus mr-1" />
                Share · 131
              </Button>
            </Col>
            <Col md="2" sm="6">
              <Button
                className="btn-round"
                color="youtube"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-pinterest-p mr-1" />
                Pin it · 323
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionPreFooterAreas;
