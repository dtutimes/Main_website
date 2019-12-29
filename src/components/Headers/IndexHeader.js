import React from "react";

// reactstrap components
import {
    Button,
    Container,
} from "reactstrap";

// core components

const IndexHeader = (props) => {

    // video - header 4
    const [videoPlaying, setVideoPlaying] = React.useState(false);

    const videoRef = React.createRef();

    const videoButtonClick = (e) => {
        e.preventDefault();
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
