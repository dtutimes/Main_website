import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionPricing() {
  const [activePill, setActivePill] = React.useState("1");
  // pills for the last pricing
  const [pillActive, setPillActive] = React.useState("personal");
  return (
    <>
      <div className="section section-pricing cd-section" id="pricing">
        {/* ********* PRICING 1 ********* */}
        <div className="pricing-1 section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Pick the best plan for you</h2>
                <h5 className="description">
                  You have Free Unlimited Updates and Premium Support on each
                  package.
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="3">
                <Card className="card-pricing" data-color="orange">
                  <CardBody>
                    <div className="card-icon">
                      <span className="icon-simple">
                        <i className="nc-icon nc-basket" />
                      </span>
                    </div>
                    <CardTitle tag="h3">$199</CardTitle>
                    <p className="card-description">
                      This is good if your company size is between 5 and 20
                      employees.
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-neutral btn-round"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Choose Plan
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing" data-color="yellow">
                  <CardBody>
                    <div className="card-icon">
                      <span className="icon-simple">
                        <i className="nc-icon nc-watch-time" />
                      </span>
                    </div>
                    <CardTitle tag="h3">$249</CardTitle>
                    <p className="card-description">
                      This is good if your company size is between 21 and 59
                      employees.
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-neutral btn-round"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Choose Plan
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing" data-color="green">
                  <CardBody>
                    <div className="card-icon">
                      <span className="icon-simple">
                        <i className="nc-icon nc-settings" />
                      </span>
                    </div>
                    <CardTitle tag="h3">$359</CardTitle>
                    <p className="card-description">
                      This is good if your company size is between 60 and 159
                      employees.
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-neutral btn-round"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Choose Plan
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing" data-color="blue">
                  <CardBody>
                    <div className="card-icon">
                      <span className="icon-simple">
                        <i className="nc-icon nc-istanbul" />
                      </span>
                    </div>
                    <CardTitle tag="h3">$599</CardTitle>
                    <p className="card-description">
                      This is good if your company size is between 160 and 299
                      employees.
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-neutral btn-round"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Choose Plan
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END PRICING 1 ********* */}
        {/* ********* PRICING 2 ********* */}
        <div className="pricing-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Pick the best plan for you</h2>
                <h5 className="description">
                  You have Free Unlimited Updates and Premium Support on each
                  package.
                </h5>
                <br />
                <Nav className="nav-pills-danger justify-content-center" pills>
                  <NavItem>
                    <NavLink
                      className={activePill === "1" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setActivePill("1");
                      }}
                    >
                      Monthly
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activePill === "2" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setActivePill("2");
                      }}
                    >
                      Yearly
                    </NavLink>
                  </NavItem>
                </Nav>
                {/* Pill panes */}
                <TabContent activeTab={"pill-" + activePill}>
                  <TabPane tabId={"pill-" + activePill} />
                  <TabPane tabId={"pill-" + activePill} />
                </TabContent>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="4">
                <Card
                  className="card-pricing"
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/daniel-olahh.jpg") +
                      ")"
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">Free</h6>
                    <CardTitle tag="h1">
                      <small>$</small>0 <small>/mo</small>
                    </CardTitle>
                    <ul>
                      <li>
                        <b>5</b> Sharing Tools
                      </li>
                      <li>
                        <b>10</b> Design Tools
                      </li>
                      <li>
                        <b>100</b> Private Messages
                      </li>
                      <li>
                        <b>2</b> Personal Brand
                      </li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="warning"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card
                  className="card-pricing"
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/forest-bg.jpg") +
                      ")"
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">Premium</h6>
                    <CardTitle tag="h1">
                      <small>$</small>
                      89 <small>/mo</small>
                    </CardTitle>
                    <ul>
                      <li>
                        <b>100</b> Projects
                      </li>
                      <li>
                        <b>5</b> Team Members
                      </li>
                      <li>
                        <b>55</b> Personal Contacts
                      </li>
                      <li>
                        <b>5.000</b> Messages
                      </li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card
                  className="card-pricing"
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/anders-jilden.jpg") +
                      ")"
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">Platinum</h6>
                    <CardTitle tag="h1">
                      <small>$</small>
                      199 <small>/mo</small>
                    </CardTitle>
                    <ul>
                      <li>
                        <b>1</b> Project
                      </li>
                      <li>
                        <b>5</b> Team Members
                      </li>
                      <li>
                        <b>55</b> Personal Contacts
                      </li>
                      <li>
                        <b>5.000</b> Messages
                      </li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END PRICING 2 ********* */}
        {/* ********* PRICING 3 ********* */}
        <div
          className="pricing-3 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/daniel-olahs.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Pick the best plan for you</h2>
                <h5 className="description">
                  You have Free Unlimited Updates and Premium Support on each
                  package.
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col className="ml-auto mr-auto" md="3">
                <Card className="card-pricing">
                  <CardBody>
                    <h6 className="card-category">Single User</h6>
                    <div className="card-icon">
                      <i className="nc-icon nc-user-run" />
                    </div>
                    <CardTitle tag="h3">$29</CardTitle>
                    <p className="card-description">
                      Here’s a sentence I never expected: we are making...
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-round card-link"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Choose Plan
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="4">
                <Card
                  className="card-pricing"
                  data-background="color"
                  data-color="blue"
                >
                  <CardBody>
                    <h6 className="card-category">Small company</h6>
                    <div className="card-icon">
                      <i className="nc-icon nc-air-baloon" />
                    </div>
                    <CardTitle tag="h3">$59</CardTitle>
                    <p className="card-description">
                      Sometimes combining two companies that compete in the same
                      market provides...
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-neutral btn-round card-link"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Choose Plan
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="3">
                <Card className="card-pricing">
                  <CardBody>
                    <h6 className="card-category">Large Company</h6>
                    <div className="card-icon">
                      <i className="nc-icon nc-istanbul" />
                    </div>
                    <CardTitle tag="h3">$199</CardTitle>
                    <p className="card-description">
                      This is good if you are a freelancer of photographer.
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-round card-link"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Choose Plan
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END PRICING 3 ********* */}
        {/* ********* PRICING 4 ********* */}
        <div className="pricing-4 section section-dark">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Pick the best plan for you</h2>
                <h5 className="description">
                  You have Free Unlimited Updates and Premium Support on each
                  package.
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="3">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h6 className="card-category text-success">Startup</h6>
                    <CardTitle tag="h1">$0</CardTitle>
                    <ul className="text-white">
                      <li>
                        <i className="fa fa-check mr-1" />
                        Sharing Tools
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Design Tools
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Private Messages
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Personal Brand
                      </li>
                    </ul>
                    <Button
                      className="btn-outline-neutral btn-round"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Downgrade plan
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing">
                  <CardBody>
                    <h6 className="card-category text-success">
                      Small company
                    </h6>
                    <CardTitle tag="h1">$89</CardTitle>
                    <ul>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Sharing Tools
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Design Tools
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Private Messages
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Personal Brand
                      </li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      outline
                    >
                      Current plan
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h6 className="card-category text-success">
                      Large Company
                    </h6>
                    <CardTitle tag="h1">$189</CardTitle>
                    <ul className="text-white">
                      <li>
                        <i className="fa fa-check mr-1" />
                        Sharing Tools
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Design Tools
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Private Messages
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Personal Brand
                      </li>
                    </ul>
                    <Button
                      className="btn-outline-neutral btn-round"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Upgrade plan
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h6 className="card-category text-success">Enterprise</h6>
                    <CardTitle tag="h1">$389</CardTitle>
                    <ul className="text-white">
                      <li>
                        <i className="fa fa-check mr-1" />
                        Sharing Tools
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Design Tools
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Private Messages
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Personal Brand
                      </li>
                    </ul>
                    <Button
                      className="btn-outline-neutral btn-round"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Upgrade plan
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END PRICING 4 ********* */}
        {/* ********* PRICING 5 ********* */}
        <div className="pricing-5 section-gray">
          <Container>
            <Row>
              <Col md="4">
                <h2 className="title">Choose a plan for your next project</h2>
                <div className="choose-plan">
                  <Nav className="nav-pills-danger" pills role="tablist">
                    <NavItem>
                      <NavLink
                        className={pillActive === "personal" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPillActive("personal");
                        }}
                      >
                        Personal
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pillActive === "commercial" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPillActive("commercial");
                        }}
                      >
                        Commercial
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <br />
                <p className="description text-gray">
                  You have Free Unlimited Updates and Premium Support on each
                  package. You also have 20 days to request a refund if you're
                  not happy with your purchase.
                </p>
              </Col>
              <Col className="ml-auto" md="7">
                <TabContent className="text-center" activeTab={pillActive}>
                  <TabPane tabId="personal">
                    <div className="space-top" />
                    <Row>
                      <Col md="6">
                        <Card className="card-pricing">
                          <CardBody>
                            <h6 className="card-category text-primary">
                              HTML Package
                            </h6>
                            <CardTitle tag="h1">$0</CardTitle>
                            <ul>
                              <li>
                                <b>1</b> Developer
                              </li>
                              <li>
                                <b>99+</b> Components
                              </li>
                              <li>
                                <b>HTML</b> Elements
                              </li>
                              <li>
                                <b>14</b> Page Examples
                              </li>
                            </ul>
                            <Button
                              className="btn-round"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Free download
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="6">
                        <Card className="card-pricing" data-color="orange">
                          <CardBody>
                            <h6 className="card-category text-success">
                              HTML Package
                            </h6>
                            <CardTitle tag="h1">$59</CardTitle>
                            <ul>
                              <li>
                                <b>5</b> Developer
                              </li>
                              <li>
                                <b>129+</b> Components
                              </li>
                              <li>
                                <b>HTML</b> Elements
                              </li>
                              <li>
                                <b>24</b> Page Examples
                              </li>
                            </ul>
                            <Button
                              className="btn-neutral btn-round"
                              color="default"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Free download
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="commercial">
                    <div className="space-top" />
                    <Row>
                      <Col md="6">
                        <Card className="card-pricing">
                          <CardBody>
                            <h6 className="card-category text-warning">
                              HTML Package
                            </h6>
                            <CardTitle tag="h1">$159</CardTitle>
                            <ul>
                              <li>
                                <b>5+</b> Developers
                              </li>
                              <li>
                                <b>199+</b> Components
                              </li>
                              <li>
                                <b>HTML</b> Elements
                              </li>
                              <li>
                                <b>34</b> Page Examples
                              </li>
                            </ul>
                            <Button
                              className="btn-round"
                              color="warning"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Buy Now !
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="6">
                        <Card className="card-pricing" data-color="orange">
                          <CardBody>
                            <h6 className="card-category text-success">
                              HTML Package
                            </h6>
                            <CardTitle tag="h1">$359</CardTitle>
                            <ul>
                              <li>
                                <b>15</b> Developer
                              </li>
                              <li>
                                <b>229+</b> Components
                              </li>
                              <li>
                                <b>HTML</b> Elements
                              </li>
                              <li>
                                <b>44</b> Page Examples
                              </li>
                            </ul>
                            <Button
                              className="btn-neutral btn-round"
                              color="default"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Free download
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END PRICING 5 ********* */}
      </div>
    </>
  );
}

export default SectionPricing;
