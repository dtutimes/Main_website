/*eslint-disable*/
import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// react plugin used to create an image gallery
import { PhotoSwipeGallery } from "react-photoswipe";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
  Modal,
  Input,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

// core components
import ImageUpload from "components/CustomUpload/ImageUpload.js";

// PhotoSwipe items

let options = {
  //http://photoswipe.com/documentation/options.html
};

let getThumbnailContent = item => {
  return (
    <div
      className="gallery-item"
      itemProp="associatedMedia"
      itemScope=""
      itemType="http://schema.org/ImageObject"
    >
      <a data-size="750x1002" href={item.src} itemProp="contentUrl">
        <img
          alt="..."
          className="vertical-image img-rounded img-responsive"
          itemProp="thumbnail"
          src={item.src}
        />
      </a>
      <figcaption className="gallery-caption" itemProp="caption description">
        {item.title}
      </figcaption>
    </div>
  );
};

const photoSwipeItems = [
  {
    src: require("assets/img/gallery/outfit-gucci.jpg"),
    title: "Gucci",
    w: "750",
    h: "1002"
  },
  {
    src: require("assets/img/gallery/outfit-paul-smith.jpg"),
    title: "Paul Smith",
    w: "750",
    h: "1002"
  },
  {
    src: require("assets/img/gallery/outfit-maison-margiela.jpg"),
    title: "Maison Margiela",
    w: "750",
    h: "1002"
  },
  {
    src: require("assets/img/gallery/outfit-burberry.jpg"),
    title: "Burberry",
    w: "750",
    h: "1002"
  },
  {
    src: require("assets/img/gallery/ressence.jpg"),
    title: "",
    w: "960",
    h: "800"
  },
  {
    src: require("assets/img/gallery/gucci-sun.jpg"),
    title: "",
    w: "960",
    h: "800"
  },
  {
    src: require("assets/img/gallery/bottega.jpg"),
    title: "",
    w: "960",
    h: "800"
  },
  {
    src: require("assets/img/gallery/bracelet.jpg"),
    title: "",
    w: "960",
    h: "800"
  }
];
// carousel items
const carouselItems = [
  {
    src: require("assets/img/sections/pedro-lastra.jpg"),
    altText: "Somewhere",
    caption: "Somewhere"
  },
  {
    src: require("assets/img/sections/fabio-mangione.jpg"),
    altText: "Somewhere else",
    caption: "Somewhere else"
  },
  {
    src: require("assets/img/cover.jpg"),
    altText: "Here it is",
    caption: "Here it is"
  }
];

function SectionJavaScript() {
  // modals states
  const [classic, setClassic] = React.useState(false);
  const [notice, setNotice] = React.useState(false);
  const [smallAlert, setSmallAlert] = React.useState(false);
  const [smallNotice, setSmallNotice] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  // collapse states and functions
  const [collapses, setCollapses] = React.useState([]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
  // carousel states and functions
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section section-blue javascript-components">
        <Container>
          <div className="title">
            <h2>Javascript Components</h2>
          </div>
          <Row id="modals">
            <Col md="12">
              <div className="title">
                <h3>Modals</h3>
              </div>
              <Row>
                {/* classicModal */}
                <Button
                  className="btn-round"
                  color="default"
                  type="button"
                  onClick={() => setClassic(true)}
                >
                  Classic modal
                </Button>
                {/* notice modal */}
                <Button
                  className="btn-round"
                  color="default"
                  type="button"
                  onClick={() => setNotice(true)}
                >
                  Notice modal
                </Button>
                {/* small modal */}
                <Button
                  className="btn-round"
                  color="danger"
                  type="button"
                  onClick={() => setSmallAlert(true)}
                >
                  Small alert modal
                </Button>
                {/* small notice modal */}
                <Button
                  className="btn-round"
                  color="danger"
                  type="button"
                  onClick={() => setSmallNotice(true)}
                >
                  Small norice modal
                </Button>
                {/* login modal */}
                <Button
                  className="btn-round"
                  color="primary"
                  type="button"
                  onClick={() => setLogin(true)}
                >
                  Login modal
                </Button>
                {/* register modal */}
                <Button
                  className="btn-round"
                  color="primary"
                  type="button"
                  onClick={() => setRegister(true)}
                >
                  Register modal
                </Button>
              </Row>
              {/* MODALS */}
              {/* classicModal */}
              <Modal isOpen={classic} toggle={() => setClassic(false)}>
                <div className="modal-header">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setClassic(false)}
                  >
                    <span>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    Modal title
                  </h5>
                </div>
                <div className="modal-body">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted
                  parts of sentences fly into your mouth. Even the all-powerful
                  Pointing has no control about the blind texts it is an almost
                  unorthographic life One day however a small line of blind text
                  by the name of Lorem Ipsum decided to leave for the far World
                  of Grammar.
                </div>
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={() => setClassic(false)}
                    >
                      Never mind
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button className="btn-link" color="danger" type="button">
                      Delete
                    </Button>
                  </div>
                </div>
              </Modal>
              {/* notice modal */}
              <Modal isOpen={notice} toggle={() => setNotice(false)}>
                <div className="modal-header no-border-header">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setNotice(false)}
                  >
                    ×
                  </button>
                  <h5 className="modal-title" id="myModalLabel">
                    How Do You Become an Affiliate?
                  </h5>
                </div>
                <div className="modal-body">
                  <div className="instruction">
                    <Row>
                      <Col md="8">
                        <p>
                          <strong>1. Register</strong> - the first step is to
                          create an account at{" "}
                          <a
                            href="http://www.creative-tim.com/?ref=pkpr-index-page"
                            target="_blank"
                          >
                            Creative Tim
                          </a>
                          . You can choose a social network or go for the
                          classic version, whatever works best for you.
                        </p>
                      </Col>
                      <Col md="4">
                        <div className="picture">
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/angelo-pantazis.jpg")}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="instruction">
                    <Row>
                      <Col md="8">
                        <p>
                          <strong>2. Apply</strong> - the first step is to
                          create an account at{" "}
                          <a
                            href="http://www.creative-tim.com/?ref=pkpr-index-page"
                            target="_blank"
                          >
                            Creative Tim
                          </a>
                          . You can choose a social network or go for the
                          classic version, whatever works best for you.
                        </p>
                      </Col>
                      <Col md="4">
                        <div className="picture">
                          <img
                            alt="..."
                            className="img-rounded img-responsive"
                            src={require("assets/img/sections/rawpixel-coms.jpg")}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <p>
                    If you have more questions, don't hesitate to contact us or
                    send us a tweet @creativetim. We{"'"}re here to help!
                  </p>
                </div>
                <div className="modal-footer">
                  <Button
                    className="btn-link"
                    color="primary"
                    type="button"
                    onClick={() => setNotice(false)}
                  >
                    Okay
                  </Button>
                </div>
              </Modal>
              {/* small modal */}
              <Modal
                size="sm"
                isOpen={smallAlert}
                toggle={() => setSmallAlert(false)}
              >
                <div className="modal-header no-border-header">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setSmallAlert(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body text-center">
                  <h5>Are you sure you want to do this?</h5>
                </div>
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={() => setSmallAlert(false)}
                    >
                      Never mind
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button className="btn-link" color="danger" type="button">
                      Yes
                    </Button>
                  </div>
                </div>
              </Modal>
              {/* small notice modal */}
              <Modal
                size="sm"
                isOpen={smallNotice}
                toggle={() => setSmallNotice(false)}
              >
                <div className="modal-header no-border-header">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setSmallNotice(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body text-center">
                  <p>
                    If you want to do this, you need to allow it in{" "}
                    <strong>Settings</strong>.
                  </p>
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Learn more
                  </Button>
                </div>
                <div className="modal-footer">
                  <Button
                    color="link"
                    type="button"
                    onClick={() => setSmallNotice(false)}
                  >
                    Okay
                  </Button>
                </div>
              </Modal>
              {/* login modal */}
              <Modal
                isOpen={login}
                toggle={() => setLogin(false)}
                className="modal-register"
              >
                <div className="modal-header no-border-header text-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setLogin(false)}
                  >
                    <span>×</span>
                  </button>
                  <h6 className="text-muted">Welcome</h6>
                  <h3 className="modal-title text-center">Paper Kit</h3>
                  <p>Log in to your account</p>
                </div>
                <div className="modal-body">
                  <FormGroup>
                    <label>Email</label>
                    <Input defaultValue="" placeholder="Email" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <label>Password</label>
                    <Input
                      defaultValue=""
                      placeholder="Password"
                      type="password"
                    />
                  </FormGroup>
                  <Button block className="btn-round" color="default">
                    Log in
                  </Button>
                </div>
                <div className="modal-footer no-border-footer">
                  <span className="text-muted text-center">
                    Looking{" "}
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      create an account
                    </a>{" "}
                    ?
                  </span>
                </div>
              </Modal>
              {/* register modal */}
              <Modal
                isOpen={register}
                toggle={() => setRegister(false)}
                className="modal-register"
              >
                <div className="modal-header no-border-header text-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setRegister(false)}
                  >
                    ×
                  </button>
                  <h6 className="text-muted">Welcome</h6>
                  <h3 className="modal-title">Paper Kit</h3>
                  <p>Create your account free and secure</p>
                </div>
                <div className="modal-body">
                  <Button block className="btn-round" color="default">
                    Sign Up with Email
                  </Button>
                  <Button block className="btn-round" color="default">
                    Connect with Facebook
                  </Button>
                  <Button block className="btn-round" color="default">
                    Connect with Twitter
                  </Button>
                  <Button
                    block
                    className="btn-round btn-simple"
                    color="info"
                    type="button"
                  >
                    Sign In with Email
                  </Button>
                </div>
                <div className="modal-footer no-border-footer" />
              </Modal>
              {/* END MODALS */}
            </Col>
          </Row>
          <div className="title">
            <h3>Collapse</h3>
          </div>
          <Row>
            <Col md="8">
              <div id="acordeon">
                <div aria-multiselectable={true} id="accordion" role="tablist">
                  <Card className="no-transition">
                    <CardHeader
                      className="card-collapse"
                      id="headingOne"
                      role="tab"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-expanded={collapses.includes(1)}
                          className="collapsed"
                          data-parent="#accordion"
                          href="#pablo"
                          id="collapseOne"
                          onClick={e => {
                            e.preventDefault();
                            changeCollapse(1);
                          }}
                        >
                          Default Collapsible Item 1{" "}
                          <i className="nc-icon nc-minimal-down" />
                        </a>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes(1)}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </CardBody>
                    </Collapse>
                    <CardHeader
                      className="card-collapse"
                      id="headingTwo"
                      role="tab"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-controls="collapseTwo"
                          aria-expanded={collapses.includes(2)}
                          className="collapsed"
                          data-parent="#accordion"
                          href="#pablo"
                          id="collapseTwo"
                          onClick={e => {
                            e.preventDefault();
                            changeCollapse(2);
                          }}
                        >
                          Default Collapsible Item 2{" "}
                          <i className="nc-icon nc-minimal-down" />
                        </a>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes(2)}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </CardBody>
                    </Collapse>
                    <CardHeader
                      className="card-collapse"
                      id="headingThree"
                      role="tab"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-controls="collapseThree"
                          aria-expanded={collapses.includes(3)}
                          className="collapsed"
                          data-parent="#accordion"
                          href="#pablo"
                          id="collapseThree"
                          onClick={e => {
                            e.preventDefault();
                            changeCollapse(3);
                          }}
                        >
                          Default Collapsible Item 3{" "}
                          <i className="nc-icon nc-minimal-down" />
                        </a>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={collapses.includes(3)}>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
                {/* end acordeon */}
              </div>
            </Col>
          </Row>
          <div className="title">
            <h3>Gallery</h3>
          </div>
          {/* gallery */}
          <PhotoSwipeGallery
            items={photoSwipeItems}
            options={options}
            thumbnailContent={getThumbnailContent}
          />
          <div className="clearfix" />
          <Col md="12">
            <div className="title">
              <h3>Tooltips</h3>
            </div>
            <Button
              className="btn-round mr-1"
              color="warning"
              id="tooltip883060620"
              type="button"
            >
              On left
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="left"
              target="tooltip883060620"
            >
              Tooltip on left
            </UncontrolledTooltip>
            <Button
              className="btn-round mr-1"
              color="warning"
              id="tooltip437036653"
              type="button"
            >
              On right
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="right"
              target="tooltip437036653"
            >
              Tooltip on right
            </UncontrolledTooltip>
            <Button
              className="btn-round mr-1"
              color="warning"
              id="tooltip611715831"
              type="button"
            >
              On top
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="top"
              target="tooltip611715831"
            >
              Tooltip on top
            </UncontrolledTooltip>
            <Button
              className="btn-round"
              color="warning"
              id="tooltip45188909"
              type="button"
            >
              On bottom
            </Button>
            <UncontrolledTooltip
              delay={0}
              placement="bottom"
              target="tooltip45188909"
            >
              Tooltip on bottom
            </UncontrolledTooltip>
          </Col>
          <Col md="12">
            <div className="title">
              <h3>Popovers</h3>
            </div>
            <Button
              className="btn-round mr-1"
              color="default"
              id="tooltip903164576"
              type="button"
            >
              Nude on top
            </Button>
            <UncontrolledPopover
              trigger="focus"
              placement="top"
              target="tooltip903164576"
            >
              <PopoverHeader>Popover on top</PopoverHeader>
              <PopoverBody>
                Here will be some very useful information about this popover.
              </PopoverBody>
            </UncontrolledPopover>
            <Button
              className="btn-round mr-1"
              color="default"
              id="tooltip65260554"
              type="button"
            >
              Nude on bottom
            </Button>
            <UncontrolledPopover
              trigger="focus"
              placement="bottom"
              target="tooltip65260554"
            >
              <PopoverHeader>Popover on bottom</PopoverHeader>
              <PopoverBody>
                Here will be some very useful information about this popover.
              </PopoverBody>
            </UncontrolledPopover>
            <Button
              className="btn-round mr-1"
              color="default"
              id="tooltip445514613"
              type="button"
            >
              Nude on left
            </Button>
            <UncontrolledPopover
              trigger="focus"
              placement={window.innerWidth < 768 ? "top" : "left"}
              target="tooltip445514613"
            >
              <PopoverHeader>Popover on left</PopoverHeader>
              <PopoverBody>
                Here will be some very useful information about this popover.
              </PopoverBody>
            </UncontrolledPopover>
            <Button
              className="btn-round"
              color="default"
              id="tooltip643478596"
              type="button"
            >
              Nude on right
            </Button>
            <UncontrolledPopover
              trigger="focus"
              placement={window.innerWidth < 768 ? "bottom" : "right"}
              target="tooltip643478596"
            >
              <PopoverHeader>Popover on right</PopoverHeader>
              <PopoverBody>
                Here will be some very useful information about this popover.
              </PopoverBody>
            </UncontrolledPopover>
          </Col>
          <Col md="12">
            <div className="title">
              <h3>Dropup</h3>
            </div>
            <div id="special-drowdown">
              <Row>
                <Col md="3" sm="6">
                  <h4 className="title">
                    <small>Dropup with sharing</small>
                  </h4>
                  <UncontrolledDropdown direction="up">
                    <DropdownToggle className="btn-round" block>
                      Sharing
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-sharing" right>
                      <DropdownItem className="text-center" header>
                        Sharing is caring!
                      </DropdownItem>
                      <a
                        className="dropup-item"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <div className="social-line">
                          <Row>
                            <Col xs="2">
                              <span className="icon-twitter">
                                <i className="fa fa-twitter" />
                              </span>
                            </Col>
                            <Col xs="6">Twitter</Col>
                            <Col xs="4">
                              <label>
                                <Switch
                                  offColor="success"
                                  offText={
                                    <i className="nc-icon nc-simple-remove" />
                                  }
                                  onColor="success"
                                  onText={<i className="nc-icon nc-check-2" />}
                                />
                              </label>
                            </Col>
                          </Row>
                        </div>
                      </a>
                      <DropdownItem divider />
                      <a
                        className="dropup-item"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <div className="social-line">
                          <Row>
                            <Col xs="2">
                              <span className="icon-facebook">
                                <i className="fa fa-facebook" />
                              </span>
                            </Col>
                            <Col xs="6">Facebook</Col>
                            <Col xs="4">
                              <label>
                                <Switch
                                  defaultValue={false}
                                  offColor="success"
                                  offText={
                                    <i className="nc-icon nc-simple-remove" />
                                  }
                                  onColor="success"
                                  onText={<i className="nc-icon nc-check-2" />}
                                />
                              </label>
                            </Col>
                          </Row>
                        </div>
                      </a>
                      <DropdownItem divider />
                      <a
                        className="dropup-item"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <div className="social-line">
                          <Row>
                            <Col xs="2">
                              <span className="icon-pinterest">
                                <i className="fa fa-pinterest" />
                              </span>
                            </Col>
                            <Col xs="6">Pinterest</Col>
                            <Col xs="4">
                              <label>
                                <Switch
                                  defaultValue={false}
                                  offColor="success"
                                  offText={
                                    <i className="nc-icon nc-simple-remove" />
                                  }
                                  onColor="success"
                                  onText={<i className="nc-icon nc-check-2" />}
                                />
                              </label>
                            </Col>
                          </Row>
                        </div>
                      </a>
                      <DropdownItem divider />
                      <a
                        className="dropup-item text-center"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <Button
                          className="btn-round ml-auto mr-auto"
                          color="info"
                        >
                          Share
                        </Button>
                      </a>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Col>
                <Col md="3" sm="6">
                  <h4 className="title">
                    <small>Dropup with actions</small>
                  </h4>
                  <UncontrolledDropdown direction="up">
                    <DropdownToggle block className="btn-round">
                      Actions
                    </DropdownToggle>
                    <DropdownMenu aria-labelledby="dLabel" right>
                      <DropdownItem>
                        <div
                          className="action-line"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <Row>
                            <Col sm="2">
                              <span className="icon-simple">
                                <i className="nc-icon nc-single-copy-04" />
                              </span>
                            </Col>
                            <Col sm="9">Duplicate</Col>
                          </Row>
                        </div>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <div
                          className="action-line"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <Row>
                            <Col sm="2">
                              <span className="icon-simple">
                                <i className="nc-icon nc-user-run" />
                              </span>
                            </Col>
                            <Col sm="9">Move from here</Col>
                          </Row>
                        </div>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <div
                          className="action-line link-danger"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <Row>
                            <Col sm="2">
                              <span className="icon-simple">
                                <i className="nc-icon nc-box-2" />
                              </span>
                            </Col>
                            <Col sm="9">Archive</Col>
                          </Row>
                        </div>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md="6">
            <div className="title">
              <h3>Datepicker</h3>
            </div>
            <Row>
              <Col sm="6">
                <FormGroup>
                  <InputGroup className="date" id="datetimepicker">
                    <ReactDatetime
                      inputProps={{
                        className: "form-control",
                        placeholder: "Datetime Picker Here"
                      }}
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <span className="glyphicon glyphicon-calendar">
                          <i className="fa fa-calendar" />
                        </span>
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
          </Col>
          {/* fileupload */}
          <div className="tim-tile">
            <h3>File Upload</h3>
          </div>
          <Row>
            <Col md="5" sm="8">
              <h4 className="title">
                <small>Regular Image</small>
              </h4>
              <ImageUpload />
            </Col>
            <Col md="3" sm="4">
              <h4 className="title">
                <small>Avatar</small>
              </h4>
              <ImageUpload avatar />
            </Col>
          </Row>
          <div className="title">
            <h3>Carousel</h3>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="card-raised page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={carouselItems}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {carouselItems.map(item => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionJavaScript;
