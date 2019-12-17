import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + require("assets/img/sections/david-marcu.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto">
              <h1 className="title">Landing page</h1>
              <h3 className="description">
                Start designing your landing page here.
              </h3>
              <br />
              <Button
                className="btn-round mr-1"
                color="neutral"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ?ref=creativetim"
                target="_blank"
              >
                <i className="fa fa-play" />
                Watch video
              </Button>
              <Button
                className="btn-round"
                color="neutral"
                type="button"
                outline
              >
                Download
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
