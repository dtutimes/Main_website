import React from "react";
import { Container } from "reactstrap";
import { Animated } from "react-animated-css";

const LandingHeader = () => {
  let pageHeader = React.createRef();
  return (
    <>
      <div
        className="page-headerx page-header-large pgfa"
        ref={pageHeader}
        
      >
        <div className="filter " />
        <div className="content-center">
          <Container className="text-left">
            <Animated
              animationIn="fadeIn"
              animationInDelay={500}
              isVisible={true}
            >
              <h1 style={{"fontSize":"5em", "marginTop":"1em"}}>
                <strong>पहेली</strong>
              </h1>
            </Animated>

            <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              animationInDuration={1000}
              isVisible={true}
            >
              <h3><strong>College life is as puzzling as your partner’s anger tantrum after they so righteously declared their inability to consume even a morsel. पहेली is an all-in-good-fun, to-be-played-when-procrastinating platform which helps you decode the most meaningless parts of your life, 
              all while delivering laughs and embarrassing guffaws, so you can face life with no preparation but plentiful giggles.</strong></h3>
            </Animated>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
