import React from "react";
import { Container } from "reactstrap";
import { Animated } from "react-animated-css";

const LandingHeader = () => {
  let pageHeader = React.createRef();
  return (
    <>
      <div
        className="page-header page-header-large"
        ref={pageHeader}
        style={{
          backgroundImage:
          "url(" + require("assets/img/campus/6.jpeg") + ")"
        }}
      >
        <div className="filter " />
        <div className="content-center">
          <Container className="text-left">
            <Animated
              animationIn="fadeIn"
              animationInDelay={500}
              isVisible={true}
            >
              <h1>
                Gallery
              </h1>
            </Animated>

            <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              animationInDuration={1000}
              isVisible={true}
            >
              <h3>When we’re not writing, we let our pictures do the talking.</h3>
            </Animated>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
