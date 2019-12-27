import React from "react";
// reactstrap components
import {
  Button,
  Form,
  Input,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

function ContactUs() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
    };
  });
  return (
    <>
      <div className="main">
        <div className="section section-gray">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Get in touch with us</h2>
                <p>
                  <Row>
                    <Col>
                      <h3 className="title">Editor-in-Chief</h3>
                      Shivam Jha
                      <br />
                      shivam.jha3@gmail.com
                    </Col>
                    <Col>
                      <h3 className="title">Student Head</h3>
                      Zara Khan
                      <br />
                      zarakhan9278@gmail.com
                    </Col>
                  </Row>
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h3 className="title">
                  <small>Find us on social networks</small>
                </h3>
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
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h3 className="title">
                  <small>Or drop us a note</small>
                </h3>
                <Form className="contact">
                  <Row>
                    <Col md="6">
                      <Input placeholder="First Name" type="text" />
                    </Col>
                    <Col md="6">
                      <Input placeholder="Last Name" type="text" />
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Input placeholder="Email" type="text" />
                    </Col>
                    <Col md="6">
                      <Input placeholder="Subject" type="text" />
                    </Col>
                  </Row>
                  <Input placeholder="Message" rows="7" type="textarea" />
                  <Row>
                    <Col className="ml-auto mr-auto" md="6">
                      <Button block className="btn-round" color="primary">
                        Send
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
