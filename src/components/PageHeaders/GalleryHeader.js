import React from "react";
import {
  Button,
  Card,
  CardBody,
  UncontrolledCollapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";
import { Animated } from "react-animated-css";
const items = [
  {
    src: "url(" + require("assets/img/campus/6.jpeg") + ")",
    content: (
      <div className="content-center">
        <Container className="text-left">
          <Animated
            animationIn="fadeIn"
            animationInDelay={500}
            isVisible={true}
          >
            <h1>Gallery</h1>
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
    ),
    altText: "",
    caption: ""
  },
  {
    src:
      "url(" +
      require("assets/img/campus/10.jpeg") +
      ")",
    content: (
      <div className="content-center">
        <Container className="text-left">
          <h1>Gallery</h1>
          <h3>When we’re not writing, we let our pictures do the talking.</h3>
        </Container>
      </div>
    ),
    altText: "",
    caption: ""
  },
  {
    src: "url(" + require("assets/img/campus/5.jpeg") + ")",
    content: (
      <div className="content-center">
        <Container className="text-left">
          <h1>Gallery</h1>
          <h3>When we’re not writing, we let our pictures do the talking.</h3>
        </Container>
      </div>
    ),
    altText: "",
    caption: ""
  }
];

const GalleryHeader = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <>
      <div className="section-header cd-section" id="headers">
        <div className="header-3">
          <div className="page-carousel">
            <div className="filter" />
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {items.map(item => {
                return (
                  <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={item.src}
                  >
                    <div
                      className="page-header"
                      style={{ backgroundImage: item.src }}
                    >
                      <div className="filter" />
                      <div className="content-center">{item.content}</div>
                    </div>
                  </CarouselItem>
                );
              })}
              <a
                className="left carousel-control carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  previous();
                }}
                role="button"
              >
                <span className="fa fa-angle-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  next();
                }}
                role="button"
              >
                <span className="fa fa-angle-right" />
                <span className="sr-only">Next</span>
              </a>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};
export default GalleryHeader;
