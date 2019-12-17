import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  UncontrolledCollapse,
  FormGroup,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import ProductPageHeader from "components/Headers/ProductPageHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";

// carousel items
const carouselItems = [
  {
    src: require("assets/img/jacket-1.jpg"),
    altText: "Somewhere",
    caption: "Somewhere"
  },
  {
    src: require("assets/img/jacket-2.jpg"),
    altText: "Somewhere else",
    caption: "Somewhere else"
  },
  {
    src: require("assets/img/jacket-3.jpg"),
    altText: "Here it is",
    caption: "Here it is"
  },
  {
    src: require("assets/img/jacket-4.jpg"),
    altText: "Here it is",
    caption: "Here it is"
  }
];

function ProductPage() {
  // collapse states and functions
  const [collapseOne, setCollapseOne] = React.useState(false);
  const [collapseTwo, setCollapseTwo] = React.useState(false);
  const [collapseThree, setCollapseThree] = React.useState(false);
  // react-select states
  const [colorSelect, setColorSelect] = React.useState({
    value: "1",
    label: "Black "
  });
  const [sizeSelect, setSizeSelect] = React.useState({
    value: "1",
    label: "Small "
  });
  // carousel states and functions
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
    const nextIndex =
      activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("product-page");
    return function cleanup() {
      document.body.classList.remove("product-page");
    };
  });
  return (
    <>
      <ColorNavbar />
      <ProductPageHeader />
      <div className="main">
        <div className="section">
          <Container>
            <Row className="title-row">
              <Col md="2">
                <h4 className="shop">Shop</h4>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="pull-right">
                  <span className="text-muted">Order Status</span>
                  <Button color="link">
                    <i className="fa fa-shopping-cart" /> 0 Items
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="7" sm="6">
                <div className="ml-auto mr-auto" id="carousel">
                  <Card className="page-carousel">
                    <Carousel
                      activeIndex={activeIndex}
                      next={next}
                      previous={previous}
                    >
                      <CarouselIndicators
                        items={carouselItems}
                        activeIndex={activeIndex}
                        onClickHandler={goToIndex}
                      />
                      {carouselItems.map(item => {
                        return (
                          <CarouselItem
                            onExiting={onExiting}
                            onExited={onExited}
                            key={item.src}
                          >
                            <img src={item.src} alt={item.altText} />
                            <CarouselCaption
                              captionText={item.caption}
                              captionHeader=""
                            />
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
                  </Card>
                </div>
                {/* end carousel */}
              </Col>
              <Col md="5" sm="6">
                <h2>Suede Blazer</h2>
                <h4 className="price">
                  <strong>€ 2,900.00</strong>
                </h4>
                <hr />
                <p>
                  This blazer in suede is a must-have of your wardrobe. Team it
                  with a angora blazer and a angora sweater.
                </p>
                <span className="label label-default shipping">
                  Free shipping to Europe
                </span>
                <Row>
                  <Col md="6" sm="6">
                    <label>Select color</label>
                    <FormGroup>
                      <Select
                        className="react-select react-select-default"
                        classNamePrefix="react-select"
                        name="colorSelect"
                        value={colorSelect}
                        onChange={value => setColorSelect(value)}
                        options={[
                          { value: "1", label: "Black " },
                          { value: "2", label: "Gray" },
                          { value: "3", label: "White" }
                        ]}
                        placeholder="COLOR"
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6" sm="6">
                    <label>Select size</label>
                    <FormGroup>
                      <Select
                        className="react-select react-select-default"
                        classNamePrefix="react-select"
                        name="sizeSelect"
                        value={sizeSelect}
                        onChange={value => setSizeSelect(value)}
                        options={[
                          { value: "1", label: "Small " },
                          { value: "2", label: "Medium" },
                          { value: "3", label: "Large" }
                        ]}
                        placeholder="SIZE"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col className="offset-md-5" md="7" sm="8">
                    <Button block className="btn-round" color="danger">
                      Add to Cart  <i className="fa fa-chevron-right" />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="card-body-row">
              <Col md="4" sm="4">
                <div className="info">
                  <div className="icon icon-warning">
                    <i className="nc-icon nc-delivery-fast" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">2 Days Delivery</h4>
                    <p>
                      Spend your time generating new ideas. You don't have to
                      think of implementing anymore.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="4">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-credit-card" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Refundable Policy</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4" sm="4">
                <div className="info">
                  <div className="icon icon-success">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Popular Item</h4>
                    <p>
                      Choose from a veriety of colors resembling sugar paper
                      pastels.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <hr />
            <p>
              What to find out more about how we build our stuff?{" "}
              <a
                className="link-danger"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Learn more.
              </a>
            </p>
            <hr />
            <div className="faq">
              <h4>Frequently Asked Questions</h4>
              <br />
              <div id="acordeon">
                <div aria-multiselectable={true} id="accordion" role="tablist">
                  <Card className="no-transition">
                    <CardHeader
                      className="card-collapse"
                      id="headingOne"
                      role="tab"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-expanded={collapseOne}
                          href="#pablo"
                          id="collapseOne"
                          onClick={e => {
                            e.preventDefault();
                            setCollapseOne(!collapseOne);
                          }}
                        >
                          Default Collapsible Item 1{" "}
                          <i className="nc-icon nc-minimal-down" />
                        </a>
                      </h5>
                    </CardHeader>
                    <UncontrolledCollapse
                      aria-labelledby="headingOne"
                      role="tabpanel"
                      toggler="#collapseOne"
                    >
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </CardBody>
                    </UncontrolledCollapse>
                    <CardHeader
                      className="card-collapse"
                      id="headingTwo"
                      role="tab"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-expanded={collapseTwo}
                          href="#pablo"
                          id="collapseTwo"
                          onClick={e => {
                            e.preventDefault();
                            setCollapseTwo(!collapseTwo);
                          }}
                        >
                          Default Collapsible Item 2{" "}
                          <i className="nc-icon nc-minimal-down" />
                        </a>
                      </h5>
                    </CardHeader>
                    <UncontrolledCollapse
                      aria-labelledby="headingTwo"
                      role="tabpanel"
                      toggler="#collapseTwo"
                    >
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </CardBody>
                    </UncontrolledCollapse>
                    <CardHeader
                      className="card-collapse"
                      id="headingThree"
                      role="tab"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-expanded={collapseThree}
                          href="#pablo"
                          id="collapseThree"
                          onClick={e => {
                            e.preventDefault();
                            setCollapseThree(!collapseThree);
                          }}
                        >
                          Default Collapsible Item 3{" "}
                          <i className="nc-icon nc-minimal-down" />
                        </a>
                      </h5>
                    </CardHeader>
                    <UncontrolledCollapse
                      aria-labelledby="headingThree"
                      role="tabpanel"
                      toggler="#collapseThree"
                    >
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </CardBody>
                    </UncontrolledCollapse>
                  </Card>
                </div>
                {/* end acordeon */}
              </div>
            </div>
            <Row className="add-row">
              <Col md="4" sm="4">
                <h4>Complete the Look</h4>
              </Col>
              <Col md="4" sm="4">
                <h5>Full-Grain Leather Briefcase</h5>
                <p className="price">
                  <strong>€ 975.00</strong>
                </p>
                <p>
                  Constructed from robust full-grain leather, it's finished with
                  the label's 'city webbing' - a rich take on the brand's
                  signature stripes.
                </p>
                <br />
                <Button className="btn-round" color="danger">
                  Add to Cart
                </Button>
              </Col>
              <Col className="ml-auto" md="3" sm="4">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/gallery/paul-smith.jpg")}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark">
          <Container>
            <Row>
              <Col md="12">
                <h4>Similar Products</h4>
                <br />
              </Col>
              <Col md="4" sm="4">
                <Card className="card-product card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={require("assets/img/balmain-1.jpg")}
                      />
                    </a>
                    <CardBody>
                      <div className="card-description">
                        <CardTitle tag="h5">
                          Double Breasted Mini Dress
                        </CardTitle>
                        <p className="card-description">Dresses &amp; Skirts</p>
                      </div>
                      <div className="actions">
                        <h5 className="text-white">1.300 €</h5>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
              <Col md="4" sm="4">
                <Card className="card-product card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={require("assets/img/balmain-2.jpg")}
                      />
                    </a>
                    <CardBody>
                      <div className="card-description">
                        <CardTitle tag="h5">Chrystal Dress</CardTitle>
                        <p className="card-description">Dresses &amp; Skirts</p>
                      </div>
                      <div className="actions">
                        <h5 className="text-white">1.500 €</h5>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
              <Col md="4" sm="4">
                <Card className="card-product card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={require("assets/img/balmain-3.jpg")}
                      />
                    </a>
                    <CardBody>
                      <div className="card-description">
                        <CardTitle tag="h5">Chrystal Skirt</CardTitle>
                        <p className="card-description">Only on demand</p>
                      </div>
                      <div className="actions">
                        <h5 className="text-white">1.200 €</h5>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterBlack />
    </>
  );
}

export default ProductPage;
