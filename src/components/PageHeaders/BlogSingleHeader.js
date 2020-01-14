import React from "react";
import { Container } from "reactstrap";
import { Animated } from "react-animated-css";
import { Blob } from "react-blob";

const BlogSingleHeader = ({title, biliner, timestamp}) => {
  const ts = new Date(timestamp);
  return (
    <>
      <section
        className="section"
        style={{
          height: "50vh",
          paddingTop: '10rem',
          position: "relative",
          overflow: "hidden",
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
            <h1>{title}</h1>
            </Animated>

            <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              animationInDuration={1000}
              isVisible={true}
            >
              <h5 style={{marginTop: 2, fontSize:""}}>
                  {biliner}
              </h5>
            </Animated>
            <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              animationInDuration={1000}
              isVisible={true}
            >
              <h6 style={{marginTop: 2}}>
                  {ts.toDateString()}
              </h6>
            </Animated>
          </Container>
        </div>
      </section>
    </>
  );
};

const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="85vh"
    style={{
      position: "absolute",
      top: "-80%",
      left: "-5%",
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
        top: "-35%",
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
    size="60vh"
    style={{
      position: "absolute",
      top: "-55%",
      left: "45%",
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

export default BlogSingleHeader;
