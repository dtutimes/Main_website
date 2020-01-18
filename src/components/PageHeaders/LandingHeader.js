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
            "url(" + require("assets/img/header/image-1.jpg") + ")"
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
                <strong>Hello,</strong><br />
                <strong>We are DTU Times</strong>
              </h1>
            </Animated>

            <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              animationInDuration={1000}
              isVisible={true}
            >
              <h3><strong>Let us tell you more about what we do.</strong></h3>
            </Animated>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
