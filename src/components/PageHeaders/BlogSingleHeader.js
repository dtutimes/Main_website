import React from "react";
import { Container } from "reactstrap";
import { Animated } from "react-animated-css";
import { Blob } from "react-blob";

const BlogSingleHeader = ({ title, biliner, timestamp }) => {
  const [mob, setMob] = React.useState(false);
  React.useEffect(() => {
    const a = window.innerWidth;
    if (a <= 900) {
      setMob(true);
    } else {
      setMob(false);
    }
    window.addEventListener("resize", () => {
      const b = window.innerWidth;
      if (b <= 900) {
        setMob(true);
      } else {
        setMob(false);
      }
    });
  });
  const ts = new Date(timestamp);
  if (mob == true) {
    return (
      <>
        <section
          className="section"
          style={{
            height: "55vh",
            paddingTop: "10rem",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div className="filter " />
          <BackgroundBlob />
          <BackgroundBlobSmall />
          <BackgroundBlobSmallRight />
          <BackgroundBlobX />
          <div className="content-center">
            <Container className="text-left">
              <Animated
                animationIn="fadeIn"
                animationInDelay={500}
                isVisible={true}
              >
                <h2>
                  <strong>{title}</strong>
                </h2>
              </Animated>

              {/* <Animated
                animationIn="fadeInUp"
                animationInDelay={1000}
                animationInDuration={1000}
                isVisible={true}
              >
                <h5 style={{ marginTop: "3rem", fontSize: "" }}>
                  <strong>{biliner}</strong>
                </h5>
              </Animated> */}
              <Animated
                animationIn="fadeInUp"
                animationInDelay={1000}
                animationInDuration={1000}
                isVisible={true}
              >
                <h6 style={{ marginTop: "2rem" }}>{ts.toDateString()}</h6>
              </Animated>
            </Container>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section
          className="section"
          style={{
            height: "70vh",
            paddingTop: "10rem",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <div className="filter " />
          <BackgroundBlob />
          <BackgroundBlobSmall />
          <BackgroundBlobSmallRight />
          <BackgroundBlobX />
          <div className="content-center">
            <Container className="text-left">
              <Animated
                animationIn="fadeIn"
                animationInDelay={500}
                isVisible={true}
              >
                <h1>
                  <strong>{title}</strong>
                </h1>
              </Animated>

              {/* <Animated
                animationIn="fadeInUp"
                animationInDelay={1000}
                animationInDuration={1000}
                isVisible={true}
              >
                <h5 style={{ marginTop: "3rem", fontSize: "" }}>
                  <strong>{biliner}</strong>
                </h5>
              </Animated> */}
              <Animated
                animationIn="fadeInUp"
                animationInDelay={1000}
                animationInDuration={1000}
                isVisible={true}
              >
                <h6 style={{ marginTop: "2rem" }}>{ts.toDateString()}</h6>
              </Animated>
            </Container>
          </div>
        </section>
      </>
    );
  }
};

const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="75vh"
    style={{
      position: "absolute",
      top: "-60%",
      left: "35%",
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

const BackgroundBlobX = ({ style, props }) => (
  <Blob
    size="165vh"
    style={{
      position: "absolute",
      bottom: "8%",
      right: "35%",
      zIndex: 2,
      backgroundColor: "#F08BA5",
      color: "white",
      opacity: 0.25,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);

export default BlogSingleHeader;
