import React from "react";
import { Container } from "reactstrap";
import { Animated } from "react-animated-css";

const TeamHeader = () => {
  let pageHeader = React.createRef();
  return (
    <>
      <div
        className="page-header page-header-large"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + require("assets/img/header/team2018.jpeg") + ")"
        }}
      >
        <div className="filter " />
        <div className="content-center">
          <Container className="text-left">
            <Animated
              animationIn="zoomIn"
              animationInDelay={500}
              isVisible={true}
            >
              <h1>
                Team Times
              </h1>
            </Animated>

            <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              animationInDuration={1000}
              isVisible={true}
            >
              <h3>Here's the group of magicians who create magic out of thin air</h3>
            </Animated>
          </Container>
        </div>
      </div>
    </>
  );
};

export default TeamHeader;
