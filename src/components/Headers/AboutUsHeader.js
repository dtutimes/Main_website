import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function AboutUsHeader() {
  return (
    <>
      <div
        className="page-header page-header-large"
        style={{
          backgroundImage:
            "url(" + require("assets/img/campus/2.jpeg") + ")"
        }}
      >
        <div className="filter filter-primary" />
        <div className="content-center">
          <Container>
            <h1>
              Hello, <br />
              We are DTU Times
            </h1>
            <h3>Let us tell you more about what we do.</h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;
