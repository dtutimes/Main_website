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
          height: "100vh",
          paddingTop: "10rem",
          position: "relative",
          overflow: "hidden",
          paddingBottom: "0 !important"
        }}
      >
        <div className="filter " />
        <BackgroundBlob />
        {/* <BackgroundBlobSmallBlue /> */}
        <BackgroundBlobSmall />
        <div className="content-center">
          <Container className="text-left">
            <Animated
              animationIn="fadeIn"
              animationInDelay={500}
              isVisible={true}
            >
              <h1>SOCIETIES OF DTU</h1>
            </Animated>
              <br />
              <br />
              <br />
              <br />
              <br />
            <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              animationInDuration={1000}
              isVisible={true}
            >
              <h3 style={{ marginTop: "2rem", color: "#494850" }}>
                The societies of DTU are the ones to credit for the exhilarating
                whirlwind of activity all year long. <br />
                DTU has technical teams, cultural societies and a slew of others
                for one and all to showcase their talents.
              </h3>
              <br />
              <br />
            </Animated>
            {/* <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              animationInDuration={1000}
              isVisible={true}
            >
              <h5 style={{ marginTop: 2, color: "#494850" }}>
                The seventy plus societies of DTU are the crown jewels of the
                university. If electric circuits spark your interest, if you
                feel that you and Python were meant to be, if you want to
                conquer the podium or already have or if you feel you’ve found
                your break in break dancing, these societies will stoke that
                raging fire inside of you or better yet, ignite a spark for
                something that stays with you for life.
              </h5>
            </Animated> */}
          </Container>
        </div>
      </section>
    </>
  );
};

const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="150vh"
    style={{
      position: "absolute",
      top: "-60%",
      left: "25%",
      zIndex: 0,
      backgroundColor: "#9CBFA7",
      color: "white",
      opacity: 0.95,
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
      backgroundColor: "#64E9EE",
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
    size="50vh"
    style={{
      position: "absolute",
      top: "-15%",
      left: "5%",
      zIndex: 0,
      backgroundColor: "#8FA998",
      color: "white",
      opacity: 0.9,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);

export default SocHeader;
