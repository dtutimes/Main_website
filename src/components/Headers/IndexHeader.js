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




const IndexHeader = (props) => {

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
    //   videoButtonClick();
    return (
        <>
            <div className="section section-header cd-section" id="headers" style={{ padding: 0 }}>
                <div className="header-4">
                    <div className="header-wrapper">
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
                                        <h1 className="title-uppercase title-no-upper-margin">
                                            Dtu Times
                                        </h1>
                                        <h3>The Official University Newsletter of DTU</h3>
                                    </div>
                                    <br/>
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

export default IndexHeader;
