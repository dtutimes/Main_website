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
    src: "https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg",
    content: (
      <CardBody>
        <h5 className="card-description">
          "I'm newer to the front-end... With my creative side lacking in
          experience this really put me in the right spot to speed through the
          fast lane. I love this Design kit so much!"
        </h5>
        <CardFooter>
          <CardTitle tag="h4">Chase Jackson</CardTitle>
          <h6 className="card-category">Web Developer</h6>
          <div className="card-stars">
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star" />
          </div>
        </CardFooter>
      </CardBody>
    ),
    altText: "",
    caption: ""
  },
  {
    src:
      "https://s3.amazonaws.com/creativetim_bucket/photos/134607/thumb.?1487680276",
    content: (
      <CardBody>
        <h5 className="card-description">
          "Love the shapes and color palette on this one! Perfect for one of my
          pet projects!"
        </h5>
        <CardFooter>
          <CardTitle tag="h4">Robin Leysen</CardTitle>
          <h6 className="card-category">Web Developer</h6>
          <div className="card-stars">
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star" />
          </div>
        </CardFooter>
      </CardBody>
    ),
    altText: "",
    caption: ""
  },
  {
    src:
      "https://s3.amazonaws.com/creativetim_bucket/photos/125268/thumb.jpeg?1497799215",
    content: (
      <CardBody>
        <h5 className="card-description">
          "Love it. Use it for prototypes and along with Paper Dashboard."
        </h5>
        <CardFooter>
          <CardTitle tag="h4">Cristi Jora</CardTitle>
          <h6 className="card-category">Web Developer</h6>
          <div className="card-stars">
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star" />
          </div>
        </CardFooter>
      </CardBody>
    ),
    altText: "",
    caption: ""
  }
];

function SectionTestimonials() {
  // carousel - TESTIMONIALS 2
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
      <div
        className="section section-testimonials cd-section"
        id="testimonials"
      >
        {/* ********* TESTIMONIALS 1 ********* */}
        <div
          className="testimonials-1 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/uriel-soberanes.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Our Clients Love Us</h2>
                <h5 className="description">
                  You need more information? Check what other persons are saying
                  about our product. They are very happy with their purchase.
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-icon">
                    <i className="fa fa-quote-right" />
                  </div>
                  <CardBody>
                    <p className="card-description">
                      Your products, all the kits that I have downloaded from
                      your site and worked with are sooo cool! I love the color
                      mixtures, cards... everything. Keep up the great work!
                    </p>
                    <CardFooter>
                      <CardTitle tag="h4">Alec Thompson</CardTitle>
                      <h6 className="card-category">@alecthompson</h6>
                      <div className="card-avatar">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          />
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-icon">
                    <i className="fa fa-quote-right" />
                  </div>
                  <CardBody>
                    <p className="card-description">
                      "Don't be scared of the truth because we need to restart
                      the human foundation in truth. That's why I love you like
                      Kanye loves Kanye I love Rick Owens’ bed design but the
                      back is not so attractive"
                    </p>
                    <CardFooter>
                      <CardTitle tag="h4">Gina Andrew</CardTitle>
                      <h6 className="card-category">@ginaandrew</h6>
                      <div className="card-avatar">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/joe-gardner-2.jpg")}
                          />
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-icon">
                    <i className="fa fa-quote-right" />
                  </div>
                  <CardBody>
                    <p className="card-description">
                      "Your products, all the kits that I have downloaded from
                      your site and worked with are sooo cool! I love the color
                      mixtures, cards... everything. Keep up the great work!"
                    </p>
                    <CardFooter>
                      <CardTitle tag="h4">Joe West</CardTitle>
                      <h6 className="card-category">@georgewest</h6>
                      <div className="card-avatar">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/kaci-baum-2.jpg")}
                          />
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END TESTIMONIALS 1 ********* */}
        {/* ********* TESTIMONIALS 2 ********* */}
        <div className="testimonials-2 section section-testimonials">
          <Container>
            <Row>
              <Col className="mr-auto" md="2">
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
              <Col className="ml-auto mr-auto" md="6">
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
                    {items.map(item => {
                      return (
                        <CarouselItem
                          onExiting={onExiting}
                          onExited={onExited}
                          key={item.src}
                        >
                          <Card className="card-testimonial card-plain">
                            <div className="card-avatar">
                              <img alt="..." className="img" src={item.src} />
                            </div>
                            {item.content}
                          </Card>
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
              <Col className="ml-auto" md="2">
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
        </div>
        {/* ********* END TESTIMONIALS 2 ********* */}
        {/* ********* TESTIMONIALS 3 ********* */}
        <div className="testimonials-3">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">What Clients Say</h2>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="3">
                <Card data-background="color" data-color="orange">
                  <CardBody>
                    <div className="author">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="avatar img-raised mr-2"
                          src={require("assets/img/faces/joe-gardner-2.jpg")}
                        />
                        <span>Erik Johnson</span>
                      </a>
                    </div>
                    <span className="category-social pull-right">
                      <i className="fa fa-quote-right" />
                    </span>
                    <div className="clearfix" />
                    <p className="card-description">
                      "During the first selection of grant winners on the
                      essential aspects, and the products are not burdened with
                      non-essentials. Back to purity, back to simplicity. At
                      best, it is self-explanatory."
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card data-background="color" data-color="green">
                  <CardBody>
                    <div className="author">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="avatar img-raised mr-2"
                          src={require("assets/img/faces/erik-lucatero-2.jpg")}
                        />
                        <span>Erik Johnson</span>
                      </a>
                    </div>
                    <span className="category-social pull-right">
                      <i className="fa fa-quote-right" />
                    </span>
                    <div className="clearfix" />
                    <p className="card-description">
                      "The plan is to add additional flexibility in the future
                      to allow applicants to make a case for how much money they
                      actually need. Less, but better – because it concentrates
                      on the essential aspects, and the products are not
                      burdened with non-essentials..."
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="3">
                <Card data-background="color" data-color="yellow">
                  <CardBody>
                    <div className="author">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="avatar img-raised mr-2"
                          src={require("assets/img/faces/kaci-baum-2.jpg")}
                        />
                        <span>Erik Johnson</span>
                      </a>
                    </div>
                    <span className="category-social pull-right">
                      <i className="fa fa-quote-right" />
                    </span>
                    <div className="clearfix" />
                    <p className="card-description">
                      "Simulation of many-body quantum systems with neural
                      networks, and the products are not burdened with
                      non-essentials. Back to purity, back to simplicity. At
                      best, it is self-explanatory."
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="4">
                <Card data-background="color" data-color="blue">
                  <CardBody>
                    <div className="author">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="avatar img-raised mr-2"
                          src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                        />
                        <span>Erik Johnson</span>
                      </a>
                    </div>
                    <span className="category-social pull-right">
                      <i className="fa fa-quote-right" />
                    </span>
                    <div className="clearfix" />
                    <p className="card-description">
                      "Machine learning for motion recognition and trajectory
                      generation of human movement for rehabilitation with
                      non-essentials. Back to purity, back to simplicity. At
                      best, it is self-explanatory."
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="6">
                <Card data-background="color" data-color="purple">
                  <CardBody>
                    <div className="author">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                        />
                        <span>Erik Johnson</span>
                      </a>
                    </div>
                    <span className="category-social pull-right">
                      <i className="fa fa-quote-right" />
                    </span>
                    <div className="clearfix" />
                    <p className="card-description">
                      "Less, but better – because it concentrates on the
                      essential aspects, and the products are not burdened with
                      non-essentials. Back to purity, back to simplicity. At
                      best, it is self-explanatory. The entire AI Grant project
                      reminds me of a cross between a Thiel Fellowship and a
                      Kaggle competition."
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END TESTIMONIALS 3 ********* */}
      </div>
    </>
  );
}

export default SectionTestimonials;
