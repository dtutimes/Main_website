import React from "react";
import {
  Button,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Modal,
} from "reactstrap";
import { api } from "api";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
function FooterEcommerce() {
  const [loginModal, setLoginModal] = React.useState(false);
  const [errors, setErrors] = React.useState(false);
  const [sub, setSub] = React.useState("");
  const [disable, setDisable] = React.useState(true);
  const [success, setSuccess] = React.useState("");
  const [err, setErr] = React.useState("");
  return (
    <>
      <div className="subscribe-line subscribe-line-black">
        <Container>
          <Row>
            <Col md="9" sm="8">
              <p style={{ color: "white", fontSize: "0.95rem" }}>
                <strong>
                  If you liked what you saw, subscribe for more! We deliver out
                  new Editions every quarter, from interviews to creative
                  content, there is something in store for everyone!
                </strong>
              </p>
            </Col>
            <Col md="3" sm="4">
              <Button
                block
                className="btn-neutral"
                color="default"
                size="lg"
                type="button"
                onClick={() => setLoginModal(true)}
              >
                Join Newsletter
              </Button>
              <Modal
                isOpen={loginModal}
                toggle={() => setLoginModal(false)}
                modalClassName="modal-register"
              >
                <div className="modal-header no-border-header text-center">
                  <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => setLoginModal(false)}
                  >
                    <span aria-hidden={true} style={{ color: "red" }}>
                      ×
                    </span>
                  </button>
                  <h3 className="modal-title text-center">
                    <strong>
                      Subscribe to our{" "}
                      <span style={{ color: "#6bd098" }}>Newsletter</span>
                    </strong>
                  </h3>
                </div>
                <div className="modal-body">
                  <FormGroup
                    className={errors === true ? "has-danger" : "has-success"}
                  >
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <Input
                      className={
                        errors === true
                          ? "form-control-danger"
                          : "form-control-success"
                      }
                      aria-describedby="emailHelp"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                      type="email"
                      // defaultValue=""
                      onChange={(e) => {
                        setSub(e.target.value);
                        let x = validEmailRegex.test(e.target.value)
                          ? false
                          : true;
                        setErrors(x);
                        setDisable(x);
                      }}
                    ></Input>
                  </FormGroup>
                  <div className="form-control-feedback text-primary mb-2">
                    {success}
                  </div>
                  <div className="form-control-feedback text-danger mb-2">
                    {err}
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      className="btn-round"
                      style={{
                        backgroundColor: "#6bd098",
                        borderColor: "#6bd098",
                      }}
                      type="submit"
                      disabled={disable === true ? true : false}
                      onClick={(e) => {
                        e.preventDefault();
                        api
                          .post("/subscriber", {
                            email: sub,
                          })
                          .then((res) => {
                            if (res.status === 201) {
                              setErr("");
                              setSuccess("Subscribed, woohoo!!");
                            }
                          })
                          .catch((err) => {
                            setSuccess("");
                            setErr("Already in our mailing list.");
                          });
                      }}
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="footer footer-big">
        <Container>
          <Row>
            <Col md="6" sm="9">
              <div className="links">
                <p
                  style={{
                    color: "#494850",
                    paddingTop: "1rem",
                    fontWeight: "400 !important",
                  }}
                >
                  <strong>
                    We extend a warm welcome to all of you to the new DTU Times
                    website, explore the societies of the college, read blog
                    articles by our editors, or just get up to date with what’s
                    happening, you are sure to find something catered to your
                    taste!
                  </strong>
                </p>
              </div>
            </Col>
            <Col className="ml-auto" md="4" sm="2">
              <div className="social-area">
                <Button
                  className="btn-just-icon mr-1"
                  color="youtube"
                  id="top1"
                  href="mailto:dtutimes@dtu.ac.in"
                >
                  <UncontrolledTooltip placement="top" target="top1" delay={0}>
                    Email us at dtutimes@dtu.ac.in
                  </UncontrolledTooltip>
                  <i className="nc-icon nc-email-85" />
                </Button>
                <Button
                  className="btn-just-icon mr-1"
                  color="facebook"
                  id="top2"
                  href="https://www.facebook.com/dtutimes"
                >
                  <UncontrolledTooltip placement="top" target="top2" delay={0}>
                    25K Likes
                  </UncontrolledTooltip>
                  <i className="fa fa-facebook" />
                </Button>
                <Button
                  className="btn-just-icon mr-1"
                  color="twitter"
                  id="top3"
                  href="https://www.instagram.com/dtu_times/"
                >
                  <UncontrolledTooltip placement="top" target="top3" delay={0}>
                    6.1K Followers
                  </UncontrolledTooltip>
                  <i className="fa fa-instagram" />
                </Button>
                <Button
                  className="btn-just-icon mr-1"
                  color="linkedin"
                  id="top4"
                  href="https://www.linkedin.com/company/dtutimes/"
                >
                  <UncontrolledTooltip placement="top" target="top4" delay={0}>
                    Connect with us on LinkedIn
                  </UncontrolledTooltip>
                  <i className="fa fa-linkedin" />
                </Button>
              </div>
              {/* <hr /> */}
              <div className="copyright" style={{ color: "#494850" }}>
                <strong>
                  © {new Date().getFullYear()}, made with{" "}
                  <i className="fa fa-heart heart" /> by Times Developers
                </strong>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterEcommerce;
