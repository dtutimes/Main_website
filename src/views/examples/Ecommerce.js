import React from "react";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Collapse,
  Label,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import EcommerceHeader from "components/Headers/EcommerceHeader.js";
import FooterEcommerce from "components/Footers/FooterEcommerce.js";

function Ecommerce() {
  // states for collapses
  const [priceRange, setPriceRange] = React.useState(true);
  const [clothing, setClothing] = React.useState(false);
  const [designer, setDesigner] = React.useState(false);
  const [color, setColor] = React.useState(false);
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 80],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    document.body.classList.add("ecommerce-page");
    return function cleanup() {
      document.body.classList.remove("ecommerce-page");
    };
  });
  return (
    <>
      <ColorNavbar />
      <EcommerceHeader />
      <div className="wrapper">
        <div className="section latest-offers">
          <Container>
            <h3 className="section-title">Latest Offers</h3>
            <Row>
              <Col md="4">
                <Card className="card-product card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={require("assets/img/ecommerce/balmain_5.jpg")}
                      />
                    </a>
                    <CardBody>
                      <div className="card-description">
                        <CardTitle tag="h5">Green Velvet Dress</CardTitle>
                        <p className="card-description">
                          This is a limited edition dress for the fall
                          collection. Comes in 3 colours.
                        </p>
                      </div>
                      <div className="price">
                        <s className="mr-1">3.520 €</s>
                        <span className="text-danger">2.900 €</span>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-product card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={require("assets/img/ecommerce/balmain_3.jpg")}
                      />
                    </a>
                    <CardBody>
                      <div className="card-description">
                        <CardTitle tag="h5">Crepe and Organza Dress</CardTitle>
                        <p className="card-description">
                          This is a limited edition dress for the fall
                          collection. Comes in 3 colours.
                        </p>
                      </div>
                      <div className="price">
                        <s className="mr-1">2.675 €</s>
                        <span className="text-danger">2.000 €</span>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-product card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={require("assets/img/ecommerce/balmain_4.jpg")}
                      />
                    </a>
                    <CardBody>
                      <div className="card-description">
                        <CardTitle tag="h5">Lace Mini Dress</CardTitle>
                        <p className="card-description">
                          This is a limited edition dress for the fall
                          collection. Comes in 3 colours.
                        </p>
                      </div>
                      <div className="price">
                        <s className="mr-1">3.915 €</s>
                        <span className="text-danger">3.125 €</span>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* section */}
        <div className="section section-gray">
          <Container>
            <h3 className="section-title">Find what you need</h3>
            <Row>
              <Col md="3">
                <Card className="card-refine">
                  <div
                    aria-expanded={true}
                    aria-multiselectable={true}
                    className="panel-group"
                    id="accordion"
                  >
                    <CardHeader
                      className="card-collapse"
                      id="priceRanger"
                      role="tab"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-expanded={priceRange}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setPriceRange(!priceRange);
                          }}
                        >
                          Price Range <i className="nc-icon nc-minimal-down" />
                        </a>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={priceRange}>
                      <CardBody>
                        <div className="slider slider-info" id="sliderDouble" />
                      </CardBody>
                    </Collapse>
                    <CardHeader
                      className="card-collapse"
                      id="clothingGear"
                      role="tab"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-expanded={clothing}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setClothing(!clothing);
                          }}
                        >
                          Clothing <i className="nc-icon nc-minimal-down" />
                        </a>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={clothing}>
                      <CardBody>
                        <FormGroup check>
                          <Label check>
                            <Input
                              defaultChecked
                              defaultValue=""
                              type="checkbox"
                            />
                            Blazers <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Casual Shirts <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Formal Shirts <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Jeans <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Polos <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Pyjamas <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Shorts <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Trousers <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                      </CardBody>
                    </Collapse>
                    <CardHeader
                      className="card-collapse"
                      id="designer"
                      role="tab"
                    >
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-expanded={designer}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setDesigner(!designer);
                          }}
                        >
                          Designer <i className="nc-icon nc-minimal-down" />
                        </a>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={designer}>
                      <CardBody>
                        <FormGroup check>
                          <Label check>
                            <Input
                              defaultChecked
                              defaultValue=""
                              type="checkbox"
                            />
                            All <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Acne Studio <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Alex Mill <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Alexander McQueen{" "}
                            <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Alfred Dunhill <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            AMI <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Berena <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Berluti <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Burberry Prorsum{" "}
                            <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Berluti <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Calvin Klein <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Club Monaco <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Dolce &amp; Gabbana{" "}
                            <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Gucci <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Kolor <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Lanvin <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Loro Piana <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Massimo Alba <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                      </CardBody>
                    </Collapse>
                    <CardHeader className="card-collapse" id="color" role="tab">
                      <h5 className="mb-0 panel-title">
                        <a
                          aria-expanded={color}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setColor(!color);
                          }}
                        >
                          Colour <i className="nc-icon nc-minimal-down" />
                        </a>
                      </h5>
                    </CardHeader>
                    <Collapse isOpen={color}>
                      <CardBody>
                        <FormGroup check>
                          <Label check>
                            <Input
                              defaultChecked
                              defaultValue=""
                              type="checkbox"
                            />
                            All <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Blue <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Brown <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Gray <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Green <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Neutrals <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            Purple <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                      </CardBody>
                    </Collapse>
                  </div>
                </Card>
                {/* end card */}
              </Col>
              <Col md="9">
                <div className="products">
                  <Row>
                    <Col md="4" sm="4">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img-rounded img-responsive"
                              src={require("assets/img/ecommerce/balmain_1.jpg")}
                            />
                          </a>
                          <CardBody>
                            <div className="card-description">
                              <CardTitle tag="h5">One Shoulder Dress</CardTitle>
                              <p className="card-description">
                                Dresses &amp; Skirts
                              </p>
                            </div>
                            <div className="price">
                              <h5>2.900 €</h5>
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
                              src={require("assets/img/ecommerce/balmain_2.jpg")}
                            />
                          </a>
                          <CardBody>
                            <div className="card-description">
                              <CardTitle tag="h5">Stretch-Knit Dress</CardTitle>
                              <p className="card-description">
                                Dresses &amp; Skirts
                              </p>
                            </div>
                            <div className="price">
                              <h5>1.700 €</h5>
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
                              src={require("assets/img/ecommerce/balmain_2.jpg")}
                            />
                          </a>
                          <CardBody>
                            <div className="card-description">
                              <CardTitle tag="h5">
                                Chrystal Sheer Dress
                              </CardTitle>
                              <p className="card-description">
                                Dresses &amp; Skirts
                              </p>
                            </div>
                            <div className="price">
                              <h5>1.500 €</h5>
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
                              src={require("assets/img/ecommerce/balmain_2.jpg")}
                            />
                          </a>
                          <CardBody>
                            <div className="card-description">
                              <CardTitle tag="h5">One Shoulder Dress</CardTitle>
                              <p className="card-description">
                                Dresses &amp; Skirts
                              </p>
                            </div>
                            <div className="price">
                              <h5>2.600 €</h5>
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
                              src={require("assets/img/ecommerce/balmain_8.jpg")}
                            />
                          </a>
                          <CardBody>
                            <div className="card-description">
                              <CardTitle tag="h5">Glass Beads Skirt</CardTitle>
                              <p className="card-description">
                                Dresses &amp; Skirts
                              </p>
                            </div>
                            <div className="price">
                              <h5>7.500 €</h5>
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
                              src={require("assets/img/ecommerce/balmain_8.jpg")}
                            />
                          </a>
                          <CardBody>
                            <div className="card-description">
                              <CardTitle tag="h5">Velvet Mini Dress</CardTitle>
                              <p className="card-description">
                                Dresses &amp; Skirts
                              </p>
                            </div>
                            <div className="price">
                              <h5>3.500 €</h5>
                            </div>
                          </CardBody>
                        </div>
                      </Card>
                    </Col>
                    <Col className="offset-md-4" md="3">
                      <Button
                        className="btn-round"
                        color="default"
                        data-rotation-color="gray"
                        id="successBtn"
                        outline
                      >
                        Load more...
                      </Button>
                      <UncontrolledTooltip delay={0} target="successBtn">
                        This is a morphing button
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* section */}
        <div className="section section-blog">
          <Container>
            <Row>
              <Col md="4">
                <Card className="card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/sections/miguel-perales.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-info">Enterprise</h6>
                    <CardTitle tag="h5">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        LinkedIn’s new desktop app arrives
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      LinkedIn is today launching its official desktop
                      application for Windows 10, allowing the professional
                      social networking service to... <br />
                    </p>
                    <hr />
                    <CardFooter>
                      <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar img-raised mr-2"
                            src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          />
                          <span>Mike John</span>
                        </a>
                      </div>
                      <div className="stats">
                        <i className="fa fa-clock-o mr-1" />5 min read
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/sections/roger-keller.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Startups</h6>
                    <CardTitle tag="h5">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        MIT’s Cheetah 3 robot is built to save lives
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      The latest version of MIT’s Cheetah robot made its stage
                      debut today at TC Sessions: Robotics in Cambridge, Mass.
                      It’s a familiar project... <br />
                    </p>
                    <hr />
                    <CardFooter>
                      <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar img-raised mr-2"
                            src={require("assets/img/faces/kaci-baum-2.jpg")}
                          />
                          <span>Nickie Kelly</span>
                        </a>
                      </div>
                      <div className="stats">
                        <i className="fa fa-clock-o mr-1" />5 min read
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/sections/joshua-earlesz.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-danger">
                      <i className="fa fa-free-code-camp mr-1" />
                      Enterprise
                    </h6>
                    <CardTitle tag="h5">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Lionel Richie says “Hello” to startup investors
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Because developing a doctor-on-demand service that would
                      allow personalized medical visits, booked through an app
                      on a user’s phone is... <br />
                    </p>
                    <hr />
                    <CardFooter>
                      <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar img-raised mr-2"
                            src={require("assets/img/faces/erik-lucatero-2.jpg")}
                          />
                          <span>Mike John</span>
                        </a>
                      </div>
                      <div className="stats">
                        <i className="fa fa-clock-o mr-1" />5 min read
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* section */}
        <FooterEcommerce />
      </div>
    </>
  );
}

export default Ecommerce;
