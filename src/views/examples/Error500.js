import React from "react";

// reactstrap components
import { Button, Container, Row } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

function Error500() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("error-500");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("error-500");
    };
  });
  return (
    <>
      <ColorNavbar />
      <div
        className="background-img"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/sections/the-how-photographer.jpg") +
            ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <h1 className="title">
               500 <br />
              <p className="error-msg">
                We're sorry, but something went wrong. We are working an fixing
                this. <br />
                Please refresh the page in a couple of seconds.
              </p>
            </h1>
          </Row>
          <div className="container-cards space-top">
            <Row>
              <h5 className="discover-pages text-center">
                Meanwhie, you can check our social pages...
              </h5>
            </Row>
            <div className="offset-md-5 social-buttons">
              <Button
                className="btn-just-icon"
                color="facebook"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                size="lg"
                target="_blank"
              >
                <i aria-hidden={true} className="fa fa-facebook" />
              </Button>
              <Button
                className="btn-just-icon"
                color="twitter"
                href="https://twitter.com/CreativeTim?ref=creativetim"
                size="lg"
                target="_blank"
              >
                <i aria-hidden={true} className="fa fa-twitter" />
              </Button>
              <Button
                className="btn-just-icon"
                color="linkedin"
                href="https://www.instagram.com/creativetimofficial/?ref=creativetim"
                size="lg"
                target="_blank"
              >
                <i aria-hidden={true} className="fa fa-linkedin" />
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Error500;
