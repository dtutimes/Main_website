import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  UncontrolledCollapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components
const items = [
  {
    src: "url(" + require("assets/img/sections/section-header-1.jpg") + ")",
    content: (
      <Container>
        <Row>
          <Col className="text-left" md="6">
            <h1 className="title">Paper Kit 2 PRO</h1>
            <h5>
              Now you have no excuses, it's time to surprise your clients, your
              competitors, and why not, the world. You probably won't have a
              better chance to show off all your potential if it's not by
              designing a website for your own agency or web studio.
            </h5>
            <br />
            <div className="buttons">
              <Button
                className="btn-round"
                color="danger"
                href="#pablo"
                onClick={e => e.preventDefault()}
                size="lg"
              >
                Read More
              </Button>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-twitter" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-facebook-square" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-get-pocket" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: ""
  },
  {
    src: "url(" + require("assets/img/sections/section-header-2.jpg") + ")",
    content: (
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h1 className="title">Awesome Experiences</h1>
            <h5>
              Now you have no excuses, it's time to surprise your clients, your
              competitors, and why not, the world. You probably won't have a
              better chance to show off all your potential if it's not by
              designing a website for your own agency or web studio.
            </h5>
            <br />
            <h6>Connect with us:</h6>
            <div className="buttons">
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-twitter" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-facebook-square" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-instagram" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-google-plus" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: ""
  },
  {
    src: "url(" + require("assets/img/sections/section-header-3.jpg") + ")",
    content: (
      <Container>
        <Row>
          <Col className="ml-auto text-right" md="7">
            <h2 className="title">Premium Offers for Venice</h2>
            <h5>
              Now you have no excuses, it's time to surprise your clients, your
              competitors, and why not, the world. You probably won't have a
              better chance to show off all your potential if it's not by
              designing a website for your own agency or web studio.
            </h5>
            <br />
            <div className="buttons">
              <Button
                className="btn-neutral"
                color="link"
                href="#pablo"
                onClick={e => e.preventDefault()}
                size="lg"
              >
                <i className="fa fa-share-alt" />
                Share Offer
              </Button>
              <Button
                className="btn-round"
                color="success"
                href="#pablo"
                onClick={e => e.preventDefault()}
                size="lg"
              >
                <i className="fa fa-shopping-cart" />
                Shop Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: ""
  }
];

function SectionHeader() {
  // carousel - header 3
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
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  // video - header 4
  const [videoPlaying, setVideoPlaying] = React.useState(false);
  const videoRef = React.createRef();
  const videoButtonClick = () => {
    if (videoPlaying) {
      setVideoPlaying(false);
      videoRef.current.pause();
    } else {
      setVideoPlaying(true);
      videoRef.current.play();
    }
  };
  return (
    <>
      <div className="section section-header cd-section" id="headers">
        {/* ********* HEADER 1 ********* */}
        <div className="header-1">
          <Navbar className="navbar-transparent navbar-absolute" expand="lg">
            <Container>
              <NavbarBrand className="mb-0" href="www.creative-tim.com">
                Creative Tim
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarSupportedContent1"
                type="button"
              >
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarSupportedContent1">
                <Nav className="ml-auto" navbar>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Components
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Tutorial
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    target="_blank"
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    target="_blank"
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          <div
            className="page-header"
            style={{
              backgroundImage:
                "url(" + require("assets/img/sections/header-1.jpg") + ")"
            }}
          >
            <div className="filter" />
            <div className="content-center">
              <Container>
                <Row>
                  <Col md="5">
                    <div className="iframe-container">
                      <iframe
                        title="iframe-container"
                        allowFullScreen=""
                        frameBorder="0"
                        height="250"
                        src="https://www.youtube.com/embed/RcmrbNRK-jY?modestbranding=1&amp;autohide=1&amp;showinfo=0"
                      />
                    </div>
                  </Col>
                  <Col className="ml-auto" md="6">
                    <h2 className="title">Travel with us</h2>
                    <h5 className="description">
                      There's no doubt that Tesla is delighted with the
                      interest, but the data also raises a few questions. How
                      long will it take for Tesla to fulfill all those extra
                      orders?
                    </h5>
                    <br />
                    <Button
                      color="danger"
                      href="https://www.youtube.com/watch?v=RcmrbNRK-jY?ref=creativetim"
                      target="_blank"
                    >
                      <i className="nc-icon nc-cart-simple mr-1" />
                      Order Now
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        {/* ********* END HEADER 1 ********* */}
        {/* ********* HEADER 2 ********* */}
        <div className="header-2">
          <Navbar className="navbar-transparent navbar-absolute" expand="lg">
            <Container>
              <NavbarBrand className="mb-0" href="www.creative-tim.com">
                Creative Tim
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarSupportedContent2"
                type="button"
              >
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarSupportedContent2">
                <Nav className="ml-auto" navbar>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Components
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Tutorial
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    target="_blank"
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    target="_blank"
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          <div
            className="page-header"
            style={{
              backgroundImage:
                "url(" + require("assets/img/sections/header-2.jpg") + ")"
            }}
          >
            <div className="filter" />
            <div className="content-center">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <h1 className="title">Find your next trip</h1>
                    <h5 className="description">
                      Now you have no excuses, it's time to surprise your
                      clients, your competitors, and why not, the world. You
                      probably won't have a better chance to show off all your
                      potential if it's not by designing a website for your own
                      agency or web studio.
                    </h5>
                    <br />
                  </Col>
                  <Col className="ml-auto mr-auto" md="10">
                    <Card className="card-raised card-form-horizontal no-transition">
                      <CardBody>
                        <Form action="" method="">
                          <Row>
                            <Col md="3">
                              <FormGroup>
                                <Input
                                  defaultValue=""
                                  placeholder="City"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="3">
                              <FormGroup>
                                <Input
                                  defaultValue=""
                                  placeholder="Country"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="3">
                              <FormGroup>
                                <Input
                                  defaultValue=""
                                  placeholder="Date"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="3">
                              <Button block color="danger" type="button">
                                <i className="nc-icon nc-zoom-split" /> Search
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        {/* ********* END HEADER 2 ********* */}
        {/* ********* HEADER 3 ********* */}
        <div className="header-3">
          <Navbar className="navbar-transparent navbar-absolute" expand="lg">
            <Container>
              <NavbarBrand className="mb-0" href="www.creative-tim.com">
                Creative Tim
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarSupportedContent3"
                type="button"
              >
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarSupportedContent3">
                <Nav className="ml-auto" navbar>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Components
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Tutorial
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    target="_blank"
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    target="_blank"
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          <div className="page-carousel">
            <div className="filter" />
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {items.map(item => {
                return (
                  <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={item.src}
                  >
                    <div
                      className="page-header"
                      style={{ backgroundImage: item.src }}
                    >
                      <div className="filter" />
                      <div className="content-center">{item.content}</div>
                    </div>
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
          </div>
        </div>
        {/* ********* END HEADER 3 ********* */}
        {/* ********* HEADER 4 (w/ video) ********* */}
        <div className="header-4">
          <div className="header-wrapper">
            <Navbar className="navbar-transparent navbar-absolute" expand="lg">
              <Container>
                <NavbarBrand className="mb-0" href="www.creative-tim.com">
                  Creative Tim
                </NavbarBrand>
                <button
                  className="navbar-toggler"
                  id="navbarSupportedContent4"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbarSupportedContent4">
                  <Nav className="ml-auto" navbar>
                    <Button
                      className="btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Components
                    </Button>
                    <Button
                      className="btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Tutorial
                    </Button>
                    <Button
                      className="btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      target="_blank"
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <div className="page-header header-video">
              <div className="filter filter-danger" />
              {/* We show the video image placeholder instead of the video for small devices */}
              <div
                className="video-image"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/video-placeholder.png") + ")"
                }}
              />
              <video
                id="video-source"
                loop="loop"
                muted="muted"
                preload="auto"
                volume="0"
                ref={videoRef}
              >
                <source
                  src={require("assets/video/fireworks.mp4")}
                  type="video/mp4"
                ></source>
                Video not supported
              </video>
              <div className="content-center">
                <Container className="upper-container text-center">
                  <div className="video-text">
                    <h2>Make it</h2>
                    <h1 className="title-uppercase title-no-upper-margin">
                      Stand out
                    </h1>
                  </div>
                  <br />
                  {/* We hide the play button on small devices */}
                  <Button
                    color="neutral"
                    size="lg"
                    type="button"
                    onClick={videoButtonClick}
                  >
                    {videoPlaying ? (
                      <i className="fa fa-pause"></i>
                    ) : (
                      <i className="fa fa-play" />
                    )}
                    {videoPlaying ? " Pause Video" : " Play Video"}
                  </Button>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionHeader;
