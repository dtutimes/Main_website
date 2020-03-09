import React from "react";
import { useState } from "react";
import { Blob } from "react-blob";
// reactstrap components

// core components
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";
import { Card, Container } from "reactstrap";

// sections for this page
import SectionComponents from "../../views/presentation-sections/SectionComponents.js";
import SocHeader from "components/PageHeaders/SocHeader.js";

function Presentation() {
  const [mob, setMob] = useState(false);

  document.documentElement.classList.remove("nav-open");
  // function that is being called on scroll of the page
  const checkScroll = () => {
    // it takes all the elements that have the .add-animation class on them
    const componentPosition = document.getElementsByClassName("add-animation");
    const scrollPosition = window.pageYOffset;
    for (var i = 0; i < componentPosition.length; i++) {
      var rec =
        componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
      // when the element with the .add-animation is in the scroll view,
      // the .animated class gets added to it, so it creates a nice fade in animation
      if (scrollPosition + window.innerHeight >= rec) {
        componentPosition[i].classList.add("animated");
        // when the element with the .add-animation is not in the scroll view,
        // the .animated class gets removed from it, so it creates a nice fade out animation
      } else if (scrollPosition + window.innerHeight * 0.8 < rec) {
        componentPosition[i].classList.remove("animated");
      }
    }
  };

  React.useEffect(() => {
    document.body.classList.add("presentation-page");
    window.addEventListener("scroll", checkScroll);
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    const a = window.innerWidth;
    // console.log(a);
    if (a <= 780) {
      setMob(true);
      // console.log(mob);
    } else {
      setMob(false);
      // console.log(mob);
    }
    window.addEventListener("resize", () => {
      const b = window.innerWidth;
      if (b <= 780) {
        setMob(true);
        // console.log(mob);
      } else {
        setMob(false);
        // console.log(mob);
      }
    });
    return function cleanup() {
      document.body.classList.remove("presentation-page");
      window.removeEventListener("scroll", checkScroll);
    };
  });
  if (mob === false)
    return (
      <>
        <SocHeader />
        <Container>
          <Blob
            size="10rem"
            style={{
              backgroundColor: "#3AAFB9",
              color: "white",
              zIndex: -2
            }}
          >
            <img
              width="10%"
              style={{
                minWidth: "4rem"
              }}
              src={require("assets/img/icons/society.svg")}
              alt="..."
            />
          </Blob>
          {/* <h1 className="text-left" style={{marginBottom : "2rem"}}>Societies</h1> */}
          <p
            style={{ color: "#494850", fontSize: "1.2rem", marginTop: "3rem" }}
          >
            The seventy plus societies of DTU are the crown jewels of the
            university. If electric circuits spark your interest, if you feel
            that you and Python were meant to be, if you want to conquer the
            podium or already have or if you feel you’ve found your break in
            break dancing, these societies will stoke that raging fire inside of
            you or better yet, ignite a spark for something that stays with you
            for life.
          </p>
        </Container>
        <SectionComponents />
      </>
    );
  else {
    return (
      <>
        <SocHeader />
        <Carousel
          slidesToShow={1}
          swiping={true}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              onClick={previousSlide}
              className="btn-move-left btn-round btn btn-default"
            >
              <i className="nc-icon nc-minimal-left"></i>
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              className="btn-move-right btn-round btn btn-default"
              onClick={nextSlide}
            >
              <i className="nc-icon nc-minimal-right"></i>
            </button>
          )}
          renderBottomCenterControls={""}
          cellSpacing={20}
          className=""
        >
          <Link to="/societies/cultural">
            <Card>
              <img
                alt="CULTURAL"
                className=""
                src={require("assets/img/societies/cultural.jpg")}
                style={{ height: "400px" }}
              />
            </Card>
          </Link>

          <Link to="/societies/tech_team">
            <Card>
              <img
                alt="C"
                className=""
                src="https://raw.githubusercontent.com/mrFahrenhiet/Main-Web/master/src/assets/img/socity/tech-team.jpg"
                style={{ height: "400px" }}
              />
            </Card>
          </Link>

          <Link to="/societies/miscellaneous">
            <Card>
              <img
                alt="..."
                className=""
                src={
                  "https://cdn.shopify.com/s/files/1/0969/6554/products/Class_9_grande.jpg?v=1456113288"
                }
                style={{ height: "400px" }}
              />
            </Card>
          </Link>

          <Link to="/societies/technical">
            <Card>
              <img
                alt="..."
                className=""
                src={require("assets/img/societies/tech.jpg")}
                style={{ height: "400px" }}
              />
            </Card>
          </Link>
        </Carousel>
      </>
    );
  }
}

export default Presentation;
