/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core comments

function PresentationHeader() {
  return (
    <>
      <div className="wrapper">
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/pk-pro-cover.jpg") + ")"
          }}
        >
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1 className="presentation-title">Paper Kit React</h1>
                <div className="type">PRO</div>
                <div className="fog-low">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png")}
                  />
                </div>
                <div className="fog-low right">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png")}
                  />
                </div>
              </div>
              <h2 className="presentation-subtitle text-center">
                Make your mark with a premium Bootstrap 4, React, React Hooks
                and Reactstrap UI Kit!
              </h2>
            </Container>
          </div>
          <h6 className="category category-absolute">
            Designed and coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=pkpr-presentation-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png")}
              />
            </a>
          </h6>
        </div>
      </div>
    </>
  );
}

export default PresentationHeader;
