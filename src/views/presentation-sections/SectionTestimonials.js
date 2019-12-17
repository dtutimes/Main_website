import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components

const items = [
  {
    content: (
      <Card className=" card-testimonial card-plain">
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src="https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg"
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description">
            "I'm newer to the front-end... With my creative side lacking in
            experience this really put me in the right spot to speed through the
            fast lane. I love this Design kit so much!"
          </h5>
          <CardFooter>
            <CardTitle tag="h4">Chase Jackson</CardTitle>
            <h6 className=" card-category">Web Developer</h6>
            <div className=" card-stars">
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star"></i>
            </div>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "0",
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className=" card-testimonial card-plain">
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src="https://s3.amazonaws.com/creativetim_bucket/photos/134607/thumb.?1487680276"
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description">
            "Love the shapes and color palette on this one! Perfect for one of
            my pet projects!"
          </h5>
          <CardFooter>
            <CardTitle tag="h4">Robin Leysen</CardTitle>
            <h6 className=" card-category">Web Developer</h6>
            <div className=" card-stars">
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star"></i>
            </div>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "1",
    altText: "",
    caption: ""
  },
  {
    content: (
      <Card className=" card-testimonial card-plain">
        <div className=" card-avatar">
          <img
            alt="..."
            className=" img"
            src="https://s3.amazonaws.com/creativetim_bucket/photos/125268/thumb.jpeg?1497799215"
          ></img>
        </div>
        <CardBody>
          <h5 className=" card-description">
            "Love it. Use it for prototypes and along with Paper Dashboard."
          </h5>
          <CardFooter>
            <CardTitle tag="h4">Cristi Jora</CardTitle>
            <h6 className=" card-category">Web Developer</h6>
            <div className=" card-stars">
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star mr-1"></i>
              <i aria-hidden={true} className=" fa fa-star"></i>
            </div>
          </CardFooter>
        </CardBody>
      </Card>
    ),
    src: "2",
    altText: "",
    caption: ""
  }
];

function SectionTestimonials() {
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
      <div className="section section-testimonials">
        <Container fluid>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Trusted by 790,000+ People</h2>
              <h5 className="description">
                The UI Kits, Templates and Dashboards that we've created are
                used by <b>790,000+ web developers</b> in over{" "}
                <b>1,400,00 Web Projects</b>. This is what some of them think:
              </h5>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto" md="2">
              <div className="testimonials-people">
                <img
                  alt="..."
                  className="left-first-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/110862/thumb.?1482812727"
                  }
                />
                <img
                  alt="..."
                  className="left-second-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/139481/thumb.jpg?1485460613"
                  }
                />
                <img
                  alt="..."
                  className="left-third-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/152441/thumb.jpg?1488233314"
                  }
                />
                <img
                  alt="..."
                  className="left-fourth-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/134607/thumb.?1487680276"
                  }
                />
                <img
                  alt="..."
                  className="left-fifth-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/161506/thumb.?1489848178"
                  }
                />
                <img
                  alt="..."
                  className="left-sixth-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/77627/thumb.jpg?1487360092"
                  }
                />
              </div>
            </Col>
            <Col md="6">
              <div className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item, key) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={key}
                      >
                        {item.content}
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
            </Col>
            <Col className="mr-auto" md="2">
              <div className="testimonials-people">
                <img
                  alt="..."
                  className="right-first-person add-animation"
                  src={
                    "https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg"
                  }
                />
                <img
                  alt="..."
                  className="right-second-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/125268/thumb.jpeg?1497799215"
                  }
                />
                <img
                  alt="..."
                  className="right-third-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/123334/thumb.JPG?1479459618"
                  }
                />
                <img
                  alt="..."
                  className="right-fourth-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/118235/thumb.?1477435947"
                  }
                />
                <img
                  alt="..."
                  className="right-fifth-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/18/thumb.png?1431433244"
                  }
                />
                <img
                  alt="..."
                  className="right-sixth-person add-animation"
                  src={
                    "https://s3.amazonaws.com/creativetim_bucket/photos/167683/thumb.?1491014996"
                  }
                />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="our-clients">
          <Container>
            <Row className="justify-content-center">
              <Col md="2" xs="5">
                <img alt="..." src={require("assets/img/demo/vodafone.jpg")} />
              </Col>
              <Col md="2" xs="5">
                <img alt="..." src={require("assets/img/demo/microsoft.jpg")} />
              </Col>
              <Col md="2" xs="5">
                <img alt="..." src={require("assets/img/demo/harvard.jpg")} />
              </Col>
              <Col md="2" xs="5">
                <img alt="..." src={require("assets/img/demo/stanford.jpg")} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionTestimonials;
