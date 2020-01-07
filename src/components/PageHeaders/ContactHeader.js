import React from "react";
import { Container } from "reactstrap";
import { Animated } from "react-animated-css";
import { Blob } from "react-blob";

const ContactHeader = () => {

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
              <h1>Get in touch with us</h1>
            </Animated>

            <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              animationInDuration={1000}
              isVisible={true}
            >
              <h5 style={{marginTop: 2}}>
              We’d love to hear from you.<br />
               Talk to us about whatever you like, ask us a question or tell us about something you may be interested in. We are all ears.
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
    size="64vh"
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
      size="69vh"
      style={{
        position: "absolute",
        top: "-40%",
        right: "-1.5%",
        zIndex: 0,
        backgroundColor: "#37fc44",
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
    size="69vh"
    style={{
      position: "absolute",
      top: "-40%",
      left: "-1.5%",
      zIndex: 0,
      backgroundColor: "#37fc44",
      color: "white",
      opacity: 0.9,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);

export default ContactHeader;
