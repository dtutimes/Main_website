import React from "react";
// react plugin that creates an input with badges
import TagsInput from "react-tagsinput";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  Badge,
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

const selectOptions = [
  { value: "", label: " Choose city", isDisabled: true },
  { value: "1", label: "Paris " },
  { value: "2", label: "Bucharest" },
  { value: "3", label: "Rome" },
  { value: "4", label: "New York" },
  { value: "5", label: "Miami " },
  { value: "6", label: "Piatra Neamt" },
  { value: "7", label: "Paris " },
  { value: "8", label: "Bucharest" },
  { value: "9", label: "Rome" },
  { value: "10", label: "New York" },
  { value: "11", label: "Miami " }
];

function SectionButtons() {
  const [regularTags, setRegularTags] = React.useState([
    "Minimal",
    " Light",
    " New",
    " Friends"
  ]);
  const [defaultSelect, setDefaultSelect] = React.useState(null);
  const [successSelect, setSuccessSelect] = React.useState(null);
  const [dangerSelect, setDangerSelect] = React.useState(null);
  const [infoSelect, setInfoSelect] = React.useState(null);

  const handleTags = regularTags => {
    setRegularTags(regularTags);
  };

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
      <div className="section section-buttons section-gray">
        <Container>
          <div className="title">
            <h2>Basic Elements</h2>
          </div>
          <div id="buttons">
            <div className="title">
              <h3>
                Buttons <br />
                <small>Pick your style</small>
              </h3>
            </div>
            <Row>
              <Col md="8">
                <Button color="info" type="button" className="mr-1">
                  Default
                </Button>
                <Button className="btn-round mr-1" color="info" type="button">
                  Round
                </Button>
                <Button className="btn-round mr-1" color="info" type="button">
                  <i className="fa fa-heart mr-1" />
                  With Icon
                </Button>
                <Button
                  className="btn-just-icon mr-1"
                  color="info"
                  type="button"
                >
                  <i className="fa fa-heart" />
                </Button>
                <Button className="btn-link" color="info" type="button">
                  Simple
                </Button>
              </Col>
            </Row>
            <div className="title">
              <h3>
                <small>Pick your size</small>
              </h3>
            </div>
            <Row>
              <Col md="8">
                <Button
                  color="danger"
                  outline
                  size="sm"
                  type="button"
                  className="mr-1"
                >
                  Small
                </Button>
                <Button color="danger" outline type="button" className="mr-1">
                  Regular
                </Button>
                <Button color="danger" outline size="lg" type="button">
                  Large
                </Button>
              </Col>
            </Row>
            <div className="title">
              <h3>
                <small>Pick your color</small>
              </h3>
            </div>
            <Row>
              <Col md="8">
                <Button
                  className="btn-round mr-1"
                  color="default"
                  outline
                  type="button"
                >
                  Default
                </Button>
                <Button
                  className="btn-round mr-1"
                  color="primary"
                  outline
                  type="button"
                >
                  Primary
                </Button>
                <Button
                  className="btn-round mr-1"
                  color="info"
                  outline
                  type="button"
                >
                  Info
                </Button>
                <Button
                  className="btn-round mr-1"
                  color="success"
                  outline
                  type="button"
                >
                  Success
                </Button>
                <Button
                  className="btn-round mr-1"
                  color="warning"
                  outline
                  type="button"
                >
                  Warning
                </Button>
                <Button
                  className="btn-round mr-1"
                  color="danger"
                  outline
                  type="button"
                >
                  Danger
                </Button>
                <Button
                  className="btn-round"
                  color="neutral"
                  outline
                  type="button"
                >
                  Neutral
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md="8">
                <Button
                  className="btn-round mr-1"
                  color="default"
                  type="button"
                >
                  Default
                </Button>
                <Button
                  className="btn-round mr-1"
                  color="primary"
                  type="button"
                >
                  Primary
                </Button>
                <Button className="btn-round mr-1" color="info" type="button">
                  Info
                </Button>
                <Button
                  className="btn-round mr-1"
                  color="success"
                  type="button"
                >
                  Success
                </Button>
                <Button
                  className="btn-round mr-1"
                  color="warning"
                  type="button"
                >
                  Warning
                </Button>
                <Button className="btn-round mr-1" color="danger" type="button">
                  Danger
                </Button>
                <Button className="btn-round" color="neutral" type="button">
                  Neutral
                </Button>
              </Col>
            </Row>
          </div>
          <div className="title">
            <h3>Links</h3>
          </div>
          <Row>
            <Col md="8">
              <Button
                className="mr-1"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Default
              </Button>
              <Button
                className="btn-link mr-1"
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Primary
              </Button>
              <Button
                className="btn-link mr-1"
                color="success"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Success
              </Button>
              <Button
                className="btn-link mr-1"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Info
              </Button>
              <Button
                className="btn-link mr-1"
                color="warning"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Warning
              </Button>
              <Button
                className="btn-link mr-1"
                color="danger"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Danger
              </Button>
              <Button
                className="btn-neutral"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Neutral
              </Button>
            </Col>
          </Row>
          <div id="icon-buttons">
            <div className="title">
              <h3>Buttons with icons</h3>
            </div>
            <Row>
              <Col md="8">
                <Button
                  className="btn-just-icon mr-1"
                  color="default"
                  type="button"
                >
                  <i className="fa fa-twitter" />
                </Button>
                <Button
                  className="btn-just-icon mr-1"
                  color="default"
                  outline
                  type="button"
                >
                  <i className="fa fa-twitter" />
                </Button>
                <Button
                  className="btn-just-icon mr-1"
                  color="link"
                  type="button"
                >
                  <i className="fa fa-twitter" />
                </Button>
                <Button
                  className="btn-round mr-1"
                  color="default"
                  type="button"
                >
                  <i className="nc-icon nc-settings-gear-65 mr-1" />
                  Settings
                </Button>
                <Button
                  className="btn-border btn-round mr-1"
                  color="default"
                  outline
                  type="button"
                >
                  <i className="nc-icon nc-settings-gear-65 mr-1" />
                  Settings
                </Button>
                <Button className="btn-round" color="link" type="button">
                  <i className="nc-icon nc-settings-gear-65 mr-1" />
                  Settings
                </Button>
                <br />
                <br />
                <Button
                  className="btn-just-icon mr-1"
                  color="warning"
                  size="sm"
                  type="button"
                >
                  <i className="nc-icon nc-sound-wave" />
                </Button>
                <Button
                  className="btn-just-icon mr-1"
                  color="danger"
                  type="button"
                >
                  <i className="nc-icon nc-simple-remove" />
                </Button>
                <Button
                  className="btn-just-icon"
                  color="default"
                  size="lg"
                  type="button"
                >
                  <i className="nc-icon nc-chat-33" />
                </Button>
              </Col>
            </Row>
          </div>
          <br />
          <div id="social-buttons">
            <div className="title">
              <h3>Social buttons</h3>
              <h3>
                <small>Default</small>
              </h3>
            </div>
            <Row>
              <Col md="8">
                <Button className="btn-just-icon mr-1" color="twitter">
                  <i className="fa fa-twitter" />
                </Button>
                <Button className="btn-just-icon mr-1" color="facebook">
                  <i className="fa fa-facebook" />
                </Button>
                <Button className="btn-just-icon mr-1" color="google">
                  <i className="fa fa-google-plus" />
                </Button>
                <Button className="btn-just-icon mr-1" color="linkedin">
                  <i className="fa fa-linkedin" />
                </Button>
                <Button className="btn-just-icon mr-1" color="pinterest">
                  <i className="fa fa-pinterest-p" />
                </Button>
                <Button className="btn-just-icon mr-1" color="youtube">
                  <i className="fa fa-youtube" />
                </Button>
                <Button className="btn-just-icon mr-1" color="tumblr">
                  <i className="fa fa-tumblr" />
                </Button>
                <Button className="btn-just-icon mr-1" color="github">
                  <i className="fa fa-github-alt" />
                </Button>
                <Button className="btn-just-icon mr-1" color="dribbble">
                  <i className="fa fa-dribbble" />
                </Button>
                <Button className="btn-just-icon mr-1" color="reddit">
                  <i className="fa fa-reddit-alien" />
                </Button>
                <Button className="btn-just-icon" color="instagram">
                  <i className="fa fa-instagram" />
                </Button>
              </Col>
            </Row>
            <div className="title">
              <h3>
                <small>Bordered</small>
              </h3>
            </div>
            <Row>
              <Col md="8">
                <Button
                  className="btn-just-icon btn-border mr-1"
                  color="twitter"
                >
                  <i className="fa fa-twitter" />
                </Button>
                <Button
                  className="btn-just-icon btn-border mr-1"
                  color="facebook"
                >
                  <i className="fa fa-facebook" />
                </Button>
                <Button
                  className="btn-just-icon btn-border mr-1"
                  color="google"
                >
                  <i className="fa fa-google-plus" />
                </Button>
                <Button
                  className="btn-just-icon btn-border mr-1"
                  color="linkedin"
                >
                  <i className="fa fa-linkedin" />
                </Button>
                <Button
                  className="btn-just-icon btn-border mr-1"
                  color="pinterest"
                >
                  <i className="fa fa-pinterest-p" />
                </Button>
                <Button
                  className="btn-just-icon btn-border mr-1"
                  color="youtube"
                >
                  <i className="fa fa-youtube" />
                </Button>
                <Button
                  className="btn-just-icon btn-border mr-1"
                  color="tumblr"
                >
                  <i className="fa fa-tumblr" />
                </Button>
                <Button
                  className="btn-just-icon btn-borde mr-1r"
                  color="github"
                >
                  <i className="fa fa-github-alt" />
                </Button>
                <Button
                  className="btn-just-icon btn-border mr-1"
                  color="dribbble"
                >
                  <i className="fa fa-dribbble" />
                </Button>
                <Button
                  className="btn-just-icon btn-border mr-1"
                  color="reddit"
                >
                  <i className="fa fa-reddit-alien" />
                </Button>
                <Button className="btn-just-icon btn-border" color="instagram">
                  <i className="fa fa-instagram" />
                </Button>
              </Col>
            </Row>
            <div className="title">
              <h3>
                <small>Links</small>
              </h3>
            </div>
            <Row>
              <Col md="8">
                <Button className="btn-just-icon btn-link mr-1" color="twitter">
                  <i className="fa fa-twitter" />
                </Button>
                <Button
                  className="btn-just-icon btn-link mr-1"
                  color="facebook"
                >
                  <i className="fa fa-facebook" />
                </Button>
                <Button className="btn-just-icon btn-link mr-1" color="google">
                  <i className="fa fa-google-plus" />
                </Button>
                <Button
                  className="btn-just-icon btn-link mr-1"
                  color="linkedin"
                >
                  <i className="fa fa-linkedin" />
                </Button>
                <Button
                  className="btn-just-icon btn-link mr-1"
                  color="pinterest"
                >
                  <i className="fa fa-pinterest-p" />
                </Button>
                <Button className="btn-just-icon btn-link mr-1" color="youtube">
                  <i className="fa fa-youtube" />
                </Button>
                <Button className="btn-just-icon btn-link mr-1" color="tumblr">
                  <i className="fa fa-tumblr" />
                </Button>
                <Button className="btn-just-icon btn-link mr-1" color="github">
                  <i className="fa fa-github-alt" />
                </Button>
                <Button
                  className="btn-just-icon btn-link mr-1"
                  color="dribbble"
                >
                  <i className="fa fa-dribbble" />
                </Button>
                <Button className="btn-just-icon btn-link mr-1" color="reddit">
                  <i className="fa fa-reddit-alien" />
                </Button>
                <Button
                  className="btn-just-icon btn-link mr-1"
                  color="instagram"
                >
                  <i className="fa fa-instagram" />
                </Button>
              </Col>
            </Row>
          </div>
          <div id="animated-buttons">
            <div className="title">
              <h3>Animated Buttons</h3>
            </div>
            <Row>
              <Col md="8">
                <Button className="btn-rotate btn-round mr-1" color="default">
                  <i className="nc-icon nc-settings-gear-65 mr-1" />
                  Settings
                </Button>
                <Button className="btn-magnify btn-round mr-1" color="default">
                  <i className="nc-icon nc-zoom-split mr-1" />
                  Search
                </Button>
                <Button
                  className="btn-move-left btn-round mr-1"
                  color="default"
                >
                  <i className="nc-icon nc-minimal-left mr-1" />
                  Back
                </Button>
                <Button className="btn-move-right btn-round" color="default">
                  Next <i className="nc-icon nc-minimal-right" />
                </Button>
              </Col>
            </Row>
          </div>
          <div id="inputs">
            <div className="title">
              <h3>Inputs</h3>
            </div>
            <Row>
              <Col sm="3">
                <FormGroup>
                  <Input defaultValue="" placeholder="Simple" type="text" />
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <Input
                    className="no-border"
                    defaultValue=""
                    placeholder="No Border"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <Input
                    defaultValue=""
                    disabled
                    placeholder="Disabled"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="3">
                <InputGroup>
                  {/* Since the css properties cannot check the previous sibling of an element and for the design consistency we recommend to use the "input-group-addon" after the "form-control" like in this example */}
                  <Input placeholder="Group Addon" type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="fa fa-group" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
              <Col sm="3">
                <InputGroup className="no-border">
                  <Input
                    className="no-border"
                    placeholder="No Border"
                    type="text"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>%</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
              <Col sm="3">
                <InputGroup disabled>
                  <Input disabled placeholder="Group Disabled" type="text" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="fa fa-group" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="3">
                <FormGroup className="has-success">
                  <Input
                    className="form-control-success"
                    defaultValue="Success"
                    id="inputSuccess"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup className="has-success">
                  <Input
                    className="form-control-success no-border"
                    defaultValue="Success"
                    id="inputSuccess1"
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="3">
                <FormGroup className="has-danger">
                  <Input
                    className="form-control-danger"
                    defaultValue="Error"
                    id="inputDanger"
                    type="text"
                  />
                  <div className="form-control-feedback">
                    Sorry, that username's taken. Try another?
                  </div>
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup className="has-danger">
                  <Input
                    className="form-control-danger no-border"
                    defaultValue="Error"
                    id="inputDanger1"
                    type="text"
                  />
                  <div className="form-control-feedback">
                    Sorry, that username's taken. Try another?
                  </div>
                </FormGroup>
              </Col>
            </Row>
            {/* end row */}
          </div>
          <br />
          <Row>
            <Col lg="3" sm="6">
              <div className="title">
                <h3>Checkboxes</h3>
              </div>
              <FormGroup check>
                <Label check>
                  <Input defaultValue="" type="checkbox" />
                  Unchecked <span className="form-check-sign" />
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input defaultChecked defaultValue="" type="checkbox" />
                  Checked <span className="form-check-sign" />
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input defaultValue="" disabled type="checkbox" />
                  Disabled unchecked <span className="form-check-sign" />
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue=""
                    disabled
                    type="checkbox"
                  />
                  Disabled checked <span className="form-check-sign" />
                </Label>
              </FormGroup>
            </Col>
            <Col lg="3" sm="6">
              <div className="title">
                <h3>Radio Buttons</h3>
              </div>
              <div className="form-check-radio">
                <Label check>
                  <Input
                    defaultValue="option1"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  />
                  Radio is off <span className="form-check-sign" />
                </Label>
              </div>
              <div className="form-check-radio">
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option2"
                    id="exampleRadios2"
                    name="exampleRadios"
                    type="radio"
                  />
                  Radio is on <span className="form-check-sign" />
                </Label>
              </div>
              <div className="form-check-radio disabled">
                <Label check>
                  <Input
                    defaultValue="option3"
                    disabled
                    id="exampleRadios3"
                    name="exampleRadios"
                    type="radio"
                  />
                  Disabled radio is off <span className="form-check-sign" />
                </Label>
              </div>
              <div className="form-check-radio disabled">
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option4"
                    disabled
                    id="exampleRadios4"
                    name="exampleRadioz"
                    type="radio"
                  />
                  Disabled radio is on <span className="form-check-sign" />
                </Label>
              </div>
            </Col>
          </Row>
          <div id="textarea">
            <div className="title">
              <h3>Textarea</h3>
            </div>
            <Row>
              <Col md="5" sm="6">
                <Input
                  className="border-input"
                  placeholder="This is a textarea with border. Here can be your nice text"
                  rows="3"
                  type="textarea"
                />
              </Col>
              <Col md="5" sm="6">
                <Input
                  className="textarea-limited"
                  maxLength="150"
                  placeholder="This is a textarea limited to 150 characters."
                  rows="3"
                  type="textarea"
                />
                <h5>
                  <small>
                    <span className="pull-right" id="textarea-limited-message">
                      150 characters left
                    </span>
                  </small>
                </h5>
              </Col>
            </Row>
          </div>
          <div id="switches">
            <div className="title">
              <h3>Switches</h3>
            </div>
            <label className="mr-1">
              <Switch onColor="default" offColor="default" />
            </label>
            <label className="mr-1">
              <Switch
                onColor="default"
                offColor="default"
                defaultValue={false}
              />
            </label>
            <label className="mr-1">
              <Switch onColor="primary" offColor="primary" />
            </label>
            <label className="mr-1">
              <Switch
                onColor="primary"
                offColor="primary"
                defaultValue={false}
              />
            </label>
            <label className="mr-1">
              <Switch onColor="info" offColor="info" />
            </label>
            <label>
              <Switch onColor="info" offColor="info" defaultValue={false} />
            </label>
            <div className="title">
              <h3>Switches with icons</h3>
            </div>
            <label className="mr-1">
              <Switch
                offColor="success"
                offText={<i className="nc-icon nc-simple-remove" />}
                onColor="success"
                onText={<i className="nc-icon nc-check-2" />}
              />
            </label>
            <label className="mr-1">
              <Switch
                defaultValue={false}
                offColor="success"
                offText={<i className="nc-icon nc-simple-remove" />}
                onColor="success"
                onText={<i className="nc-icon nc-check-2" />}
              />
            </label>
            <label className="mr-1">
              <Switch
                offColor="warning"
                offText={<i className="nc-icon nc-simple-remove" />}
                onColor="warning"
                onText={<i className="nc-icon nc-check-2" />}
              />
            </label>
            <label className="mr-1">
              <Switch
                defaultValue={false}
                offColor="warning"
                offText={<i className="nc-icon nc-simple-remove" />}
                onColor="warning"
                onText={<i className="nc-icon nc-check-2" />}
              />
            </label>
            <label className="mr-1">
              <Switch
                offColor="danger"
                offText={<i className="nc-icon nc-simple-remove" />}
                onColor="danger"
                onText={<i className="nc-icon nc-check-2" />}
              />
            </label>
            <label>
              <Switch
                defaultValue={false}
                offColor="danger"
                offText={<i className="nc-icon nc-simple-remove" />}
                onColor="danger"
                onText={<i className="nc-icon nc-check-2" />}
              />
            </label>
          </div>
          <div id="labels">
            <div className="title">
              <h3>Badges</h3>
              <h3>
                <small>Simple</small>
              </h3>
            </div>
            <Badge className="mr-1" pill>
              Default
            </Badge>
            <Badge className="mr-1" color="primary" pill>
              Primary
            </Badge>
            <Badge className="mr-1" color="info" pill>
              Info
            </Badge>
            <Badge className="mr-1" color="success" pill>
              Success
            </Badge>
            <Badge className="mr-1" color="warning" pill>
              Warning
            </Badge>
            <Badge color="danger" pill>
              Danger
            </Badge>
            <br />
            <div className="title">
              <h3>
                <small>Icons</small>
              </h3>
            </div>
            <Badge className="mr-1" pill>
              <i className="fa fa-unlock-alt" />
            </Badge>
            <Badge className="mr-1" color="primary" pill>
              <i className="fa fa-id-card-o" />
            </Badge>
            <Badge className="mr-1" color="info" pill>
              <i className="fa fa-info" />
            </Badge>
            <Badge className="mr-1" color="success" pill>
              <i className="fa fa-comments" />
            </Badge>
            <Badge className="mr-1" color="warning" pill>
              <i className="fa fa-cog" />
            </Badge>
            <Badge color="danger" pill>
              <i className="fa fa-battery-half" />
            </Badge>
          </div>
          <div id="tags">
            <div className="title">
              <h3>Tags</h3>
            </div>
            <TagsInput
              onChange={handleTags}
              tagProps={{ className: "react-tagsinput-tag badge-success" }}
              value={regularTags}
            />
          </div>
          <div id="select">
            <div className="title">
              <h3>Select</h3>
            </div>
            <Row>
              <Col md="3" sm="3">
                <FormGroup>
                  <Select
                    className="react-select react-select-default"
                    classNamePrefix="react-select"
                    name="defaultSelect"
                    value={defaultSelect}
                    onChange={value => setDefaultSelect(value)}
                    options={selectOptions}
                    placeholder="CHOOSE CITY"
                  />
                </FormGroup>
              </Col>
              <Col md="3" sm="3">
                <FormGroup>
                  <Select
                    className="react-select react-select-success"
                    classNamePrefix="react-select"
                    name="successSelect"
                    value={successSelect}
                    onChange={value => setSuccessSelect(value)}
                    options={selectOptions}
                    placeholder="CHOOSE CITY"
                  />
                </FormGroup>
              </Col>
              <Col md="3" sm="3">
                <FormGroup>
                  <Select
                    className="react-select react-select-danger"
                    classNamePrefix="react-select"
                    name="dangerSelect"
                    value={dangerSelect}
                    onChange={value => setDangerSelect(value)}
                    options={selectOptions}
                    placeholder="CHOOSE CITY"
                  />
                </FormGroup>
              </Col>
              <Col md="3" sm="3">
                <FormGroup>
                  <Select
                    className="react-select react-select-info"
                    classNamePrefix="react-select"
                    name="infoSelect"
                    value={infoSelect}
                    onChange={value => setInfoSelect(value)}
                    options={selectOptions}
                    placeholder="CHOOSE CITY"
                  />
                </FormGroup>
              </Col>
            </Row>
            <div id="preloaders">
              <div className="title">
                <h3>Preloaders</h3>
              </div>
              <div className="uil-reload-css mr-1">
                <div />
              </div>
              <div className="uil-reload-css reload-small mr-1">
                <div />
              </div>
              <div className="uil-reload-css reload-background mr-1">
                <div />
              </div>
              <div className="uil-reload-css reload-background reload-small mr-1">
                <div />
              </div>
              <Button className="btn-round" color="default">
                <div className="uil-reload-css reload-small mr-1">
                  <div />
                </div>
                Something
              </Button>
            </div>
            <div id="menu-dropdown">
              <div className="title">
                <h3>Dropdown</h3>
                <br />
                <div id="navbar-dropdown">
                  <Navbar className="navbar-default" expand="lg">
                    <Container>
                      <NavbarBrand
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Dropdown colors
                      </NavbarBrand>
                      <button
                        className="navbar-toggler navbar-toggler-right"
                        id="navbarSupportedContent1"
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
                        toggler="#navbarSupportedContent1"
                      >
                        <Nav className="ml-auto" navbar>
                          {/* default color */}
                          <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                              caret
                              className="btn-round"
                              color="default"
                              data-toggle="dropdown"
                            >
                              Default <b className="caret" />
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem header>
                                Dropdown header
                              </DropdownItem>
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
                          {/* primary color */}
                          <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                              caret
                              className="btn-round"
                              color="primary"
                              data-toggle="dropdown"
                            >
                              Primary <b className="caret" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-primary" right>
                              <DropdownItem header>
                                Dropdown header
                              </DropdownItem>
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
                          {/* info color */}
                          <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                              caret
                              className="btn-round"
                              color="info"
                              data-toggle="dropdown"
                            >
                              Info <b className="caret" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-info" right>
                              <DropdownItem header>
                                Dropdown header
                              </DropdownItem>
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
                          {/* success color */}
                          <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                              caret
                              className="btn-round"
                              color="success"
                              data-toggle="dropdown"
                            >
                              Success <b className="caret" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-success" right>
                              <DropdownItem header>
                                Dropdown header
                              </DropdownItem>
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
                          {/* warning color */}
                          <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                              caret
                              className="btn-round"
                              color="warning"
                              data-toggle="dropdown"
                            >
                              Warning <b className="caret" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-warning" right>
                              <DropdownItem header>
                                Dropdown header
                              </DropdownItem>
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
                          {/* danger color */}
                          <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                              caret
                              className="btn-round"
                              color="danger"
                              data-toggle="dropdown"
                            >
                              Danger <b className="caret" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-danger" right>
                              <DropdownItem header>
                                Dropdown header
                              </DropdownItem>
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
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionButtons;
