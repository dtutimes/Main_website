import React from "react";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components

function FooterEcommerce() {
  return (
    <>
      <div className="subscribe-line subscribe-line-black">
        <Container>
          <Row>
            <Col md="9" sm="8">
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
      <footer className="footer footer-big">
        <Container>
          <Row>
            <Col md="6" sm="9">
              <div className="links">
                <p>
                  We extend a warm welcome to all of you to the new DTU Times
                  website, explore the societies of the college, read blog
                  articles by our editors, or just get up to date with what’s
                  happening, you are sure to find something catered to your
                  taste!
                </p>
                <hr />
                <div className="copyright">
                  © {new Date().getFullYear()}, made with{" "}
                  <i className="fa fa-heart heart" /> by DTU Times Developers
                  Team
                </div>
              </div>
            </Col>
            <Col className="ml-auto" md="4" sm="2">
              <div className="social-area">
              <Button className="btn-just-icon mr-1" color="youtube" id="top1">
                  <UncontrolledTooltip placement="top" target="top1" delay={0}>
                    Email us at dtutimes@dtu.ac.in
                  </UncontrolledTooltip>
                  <i className="nc-icon nc-email-85" />
                </Button>
                <Button className="btn-just-icon mr-1" color="facebook" id="top2">
                  <UncontrolledTooltip placement="top" target="top2" delay={0}>
                    25K Likes
                  </UncontrolledTooltip>
                  <i className="fa fa-facebook" />
                </Button>
                <Button className="btn-just-icon mr-1" color="twitter" id="top3">
                  <UncontrolledTooltip placement="top" target="top3" delay={0}>
                    6.1K Followers
                  </UncontrolledTooltip>
                  <i className="fa fa-instagram" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterEcommerce;
