import React from "react";

// reactstrap components
import { Button } from "reactstrap";

// core components

function BlogPostHeader() {
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
            "url(" + require("assets/img/sections/uriel-soberanes.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <div className="motto">
            <h1 className="title-uppercase text-center">Paper Kit</h1>
            <h3 className="text-center">Make your mark with a new design.</h3>
            <br />
            <Button
              className="btn-round"
              color="warning"
              href="#pablo"
              onClick={e => e.preventDefault()}
              size="lg"
            >
              <i className="fa fa-share-alt mr-1 " />
              Share Article
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostHeader;
