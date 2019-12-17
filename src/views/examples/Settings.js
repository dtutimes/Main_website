import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
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
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import SettingsHeader from "components/Headers/SettingsHeader.js";
import FooterWhite from "components/Footers/FooterWhite.js";

function Settings() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("settings-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("settings-page");
    };
  });
  return (
    <>
      <ColorNavbar />
      <div className="wrapper">
        <SettingsHeader />
        <div className="profile-content section">
          <Container>
            <Row>
              <div className="profile-picture">
                <div
                  className="fileinput fileinput-new"
                  data-provides="fileinput"
                >
                  <div className="fileinput-new img-no-padding">
                    <img
                      alt="..."
                      src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                    />
                  </div>
                  <div className="fileinput-preview fileinput-exists img-no-padding" />
                  <div>
                    <Button
                      className="btn-file btn-round"
                      color="default"
                      outline
                    >
                      <span className="fileinput-new">Change Photo</span>
                      <span className="fileinput-exists">Change</span>
                      <input name="..." type="file" />
                    </Button>
                    <br />
                    <Button
                      className="btn-link fileinput-exists"
                      color="danger"
                      data-dismiss="fileinput"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <Form className="settings-form">
                  <Row>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          className="border-input"
                          placeholder="First Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="6">
                      <FormGroup>
                        <label>Last Email</label>
                        <Input
                          className="border-input"
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <label>Job Title</label>
                    <Input
                      className="border-input"
                      placeholder="Job Title"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Description</label>
                    <Input
                      placeholder="This is a textarea limited to 150 characters."
                      className="textarea-limited"
                      type="textarea"
                      maxLength="150"
                      rows="3"
                    />
                    <h5>
                      <small>
                        <span
                          className="pull-right"
                          id="textarea-limited-message"
                        >
                          150 characters left
                        </span>
                      </small>
                    </h5>
                  </FormGroup>
                  <label>Notifications</label>
                  <ul className="notifications">
                    <li className="notification-item">
                      Updates regarding platform changes{" "}
                      <Switch onColor="info" offColor="info" />
                    </li>
                    <li className="notification-item">
                      Updates regarding product changes{" "}
                      <Switch onColor="info" offColor="info" />
                    </li>
                    <li className="notification-item">
                      Weekly newsletter{" "}
                      <Switch onColor="info" offColor="info" />
                    </li>
                  </ul>
                  <div className="text-center">
                    <Button
                      className="btn-wd btn-round"
                      color="info"
                      type="submit"
                    >
                      Save
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterWhite />
    </>
  );
}

export default Settings;
