import React from "react";
import { Container } from "reactstrap";
import { Animated } from "react-animated-css";
import { Blob } from "react-blob";

const SocHeader = () => {

  return (
    <>
      <section
        className="section pb-0"
        style={{
          height: "50vh",
          paddingTop: '10rem',
          position: "relative",
          overflow: "hidden",
          paddingBottom: '0 !important'
        }}
      >
        <div className="filter " />
        <BackgroundBlob />
        <BackgroundBlobSmallBlue />
        <BackgroundBlobSmall />
        <div
          className="content-center"
        >
          <Container className="text-left">
            <Animated
              animationIn="fadeIn"
              animationInDelay={500}
              isVisible={true}
            >
              <h1>SOCIETIES OF DTU</h1>
            </Animated>

            <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              animationInDuration={1000}
              isVisible={true}
            >
              <h5 style={{marginTop: 2}}>
              The societies of DTU are the ones to credit for the exhilarating whirlwind of activity all year long. <br/>
              DTU has technical teams, cultural societies and a slew of others for one and all to showcase their talents.
                  
              </h5>
            </Animated>
          </Container>
        </div>
      </section>
    </>
  );
};

const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="75vh"
    style={{
      position: "absolute",
      top: "-60%",
      left: "35%",
      zIndex: 0,
      backgroundColor: "#000333",
      color: "white",
      opacity: 0.25,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);

const BackgroundBlobSmallBlue = ({ style, props }) => (
    <Blob
      size="40vh"
      style={{
        position: "absolute",
        top: "-15%",
        right: "10%",
        zIndex: 0,
        backgroundColor: "#F08BA3",
        color: "white",
        opacity: 0.9,
        fontSize: "50vh",
        ...style
      }}
      {...props}
    />
  );

const BackgroundBlobSmall = ({ style, props }) => (
  <Blob
    size="30vh"
    style={{
      position: "absolute",
      top: "-15%",
      left: "5%",
      zIndex: 0,
      backgroundColor: "#F08BA5",
      color: "white",
      opacity: 0.9,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);

export default SocHeader;
