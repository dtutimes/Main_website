import React from "react";
import { Container } from "reactstrap";
import { Animated } from "react-animated-css";
import { Blob } from "react-blob";

const BlogHeader = () => {
  return (
    <>
      <section
        className="section pb-0"
        style={{
          height: "55vh",
          paddingTop: "10rem",
          position: "relative",
          overflow: "hidden",
          paddingBottom: "0 !important"
        }}
      >
        <div className="filter " />
        <BackgroundBlob />
        <BackgroundBlobSmallRight />
        <BackgroundBlobSmall />
        {/* <BackgroundBlobBig /> */}

        <div className="content-center">
          <Container className="text-left">
            <Animated
              animationIn="fadeIn"
              animationInDelay={500}
              isVisible={true}
            >
              <h1>
                <strong>BLOG</strong>
              </h1>
            </Animated>

            <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              animationInDuration={1000}
              isVisible={true}
            >
              <h5 className="herosaver">
                <strong>
                  Dive headlong into a world of illuminating interviews, <br />
                  enlightening editorials and potent prose written by some of
                  the brightest minds of DTU.
                </strong>
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
      left: "37%",
      zIndex: 0,
      backgroundColor: "#C76D7E",
      color: "white",
      opacity: 0.25,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);

const BackgroundBlobSmallRight = ({ style, props }) => (
  <Blob
    size="55vh"
    style={{
      position: "absolute",
      top: "-15%",
      right: "-2%",
      zIndex: 0,
      backgroundColor: "#E85D75",
      color: "white",
      opacity: 0.5,
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
      backgroundColor: "#E85D75",
      color: "white",
      opacity: 0.9,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);
// const BackgroundBlobBig = ({ style, props }) => (
//   <Blob
//     size="165vh"
//     style={{
//       position: "absolute",
//       bottom: "10%",
//       right: "35%",
//       zIndex: 0,
//       backgroundColor: "#E85D75",
//       color: "white",
//       opacity: 0.25,
//       fontSize: "50vh",
//       ...style
//     }}
//     {...props}
//   />
// );
export default BlogHeader;
