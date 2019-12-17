/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
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

function SectionProject() {
  const [activePill, setActivePill] = React.useState("1");
  return (
    <>
      <div className="section section-project cd-section" id="projects">
        {/* ********* PROJECTS 1 ********* */}
        <div className="projects-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Some of Our Awesome Products - 1</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your projects. Keep you user engaged by providing meaningful
                  information.
                </h5>
              </Col>
              <div className="project-pills">
                <Nav className="nav-pills-danger" pills>
                  <NavItem>
                    <NavLink
                      className={activePill === "1" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setActivePill("1");
                      }}
                    >
                      All categories
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
                      Marketing
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activePill === "3" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setActivePill("3");
                      }}
                    >
                      Development
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activePill === "4" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setActivePill("4");
                      }}
                    >
                      Productivity
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activePill === "5" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        setActivePill("5");
                      }}
                    >
                      Web Design
                    </NavLink>
                  </NavItem>
                </Nav>
                {/* Pill panes */}
                <TabContent activeTab={"pill-" + activePill}>
                  <TabPane tabId={"pill-" + activePill} />
                  <TabPane tabId={"pill-" + activePill} />
                  <TabPane tabId={"pill-" + activePill} />
                  <TabPane tabId={"pill-" + activePill} />
                  <TabPane tabId={"pill-" + activePill} />
                </TabContent>
              </div>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="5">
                <Card
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/pavel-kosov.jpg") +
                      ")"
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">Productivy Apps</h6>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <CardTitle tag="h3">The Best Productivity Apps</CardTitle>
                    </a>
                    <p className="card-description">
                      Don't be scared of the truth because we need to restart
                      the human foundation in truth And I love you like Kanye
                      loves Kanye I love Rick Owens’ bed design but the back
                      is...
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-book mr-1" />
                      Read Article
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="7">
                <Card
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/gukhwa-jang.jpg") +
                      ")"
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">Materials</h6>
                    <CardTitle tag="h3">
                      US venture investment ticks up
                    </CardTitle>
                    <p className="card-description">
                      Venture investment in U.S. startups rose sequentially in
                      the second quarter of 2017, boosted by large, late-stage
                      financings and a few outsized early-stage rounds....
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-book mr-1" />
                      Read Article
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="7">
                <Card
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/joshua-stannard.jpg") +
                      ")"
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">Productivy Apps</h6>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <CardTitle tag="h3">MateLabs mixes machine</CardTitle>
                    </a>
                    <p className="card-description">
                      If you’re not familiar with IFTTT, it’s an automation tool
                      for creating your own if/then statements without any
                      programming knowledge. The service makes it possible...
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-book mr-1" />
                      Read Article
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="5">
                <Card
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/ilya-yakover.jpg") +
                      ")"
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">Materials</h6>
                    <CardTitle tag="h3">
                      How to find the ‘right’ contacts.
                    </CardTitle>
                    <p className="card-description">
                      Boom, the invitations start flying and Brella makes it
                      easy to accept/decline, schedule a time and reserve a
                      meeting space in Disrupt’s white-glove CrunchMatch
                      meeting...
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="warning"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-book mr-1" />
                      Read Article
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END PROJECTS 1 ********* */}
        {/* ********* PROJECTS 2 ********* */}
        <div className="projects-2 section section-dark">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h6 className="text-muted">Our work</h6>
                <h2 className="title">Some of Our Awesome Products - 2</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your projects. Keep you user engaged by providing meaningful
                  information.
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="4">
                <Card className="card-plain">
                  <CardImg top tag="div">
                    <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/sections/opt_pk_react_thumbnail.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <CardTitle tag="h4">Paper Kit Free React</CardTitle>
                      <br />
                    </a>
                    <h6 className="card-category text-muted">Free Ui kit</h6>
                    <p className="card-description">
                      Paper Kit React is a free Bootstrap 4, React, React Hooks
                      and Reactstrap UI Kit with pale colors, beautiful
                      typography and thoughtful drawings. We've created it
                      having paper and drawings in mind.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain">
                  <CardImg top tag="div">
                    <a
                      href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/sections/argon-dashboard-pro-react.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <a
                      href="https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <CardTitle tag="h4">Argon Dashboard PRO React</CardTitle>
                      <br />
                    </a>
                    <h6 className="card-category text-muted">
                      Premium template
                    </h6>
                    <p className="card-description">
                      Argon is a completly new product built on our newest
                      re-built from scratch framework structure that is meant to
                      make our products more intuitive, more adaptive and,
                      needless to say, so much easier to customize. Let Argon
                      amaze you with its cool features and build tools and get
                      your project to a whole new level.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-plain">
                  <CardImg top tag="div">
                    <a
                      href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/sections/blk-design-system-pro-react.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <a
                      href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <CardTitle tag="h4">
                        BLK Design System PRO React
                      </CardTitle>
                    </a>
                    <h6 className="card-category text-muted">Premium UI kit</h6>
                    <p className="card-description">
                      Start your development with a Premium Black Design System
                      for Bootstrap 4 made with React, Reactstrap and
                      create-react-app. It combines colors that are easy on the
                      eye, spacious cards, beautiful typography, and graphics.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END PROJECTS 2 ********* */}
        {/* ********* PROJECTS 3 ********* */}
        <div className="projects-3" id="projects-3">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <div className="space-top" />
                <h6 className="category">Our work</h6>
                <h2 className="title">Some of Our Awesome Projects - 3</h2>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/sections/angelo-pantazis.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <h6 className="card-category">Productivity tools</h6>
                    <CardTitle tag="h4">
                      Beautiful Desktop for Designers
                    </CardTitle>
                    <p className="card-description">
                      As this technology matures it will be cool to see what
                      hackers are able to do with it.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/sections/patrick-tomasso.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <h6 className="card-category">Web Design</h6>
                    <CardTitle tag="h4">
                      Famous Website Redesign Implementation
                    </CardTitle>
                    <p className="card-description">
                      Streaming services once again top the list of this year’s
                      Emmy nominations
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/sections/luke-chesser.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <h6 className="card-category">Marketing tools</h6>
                    <CardTitle tag="h4">
                      The Best Productivity Applications
                    </CardTitle>
                    <p className="card-description">
                      Dietary supplements don’t need approval from the Food and
                      Drug Administration.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/sections/rawpixel-coms.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <h6 className="card-category">Website</h6>
                    <CardTitle tag="h4">Behance Redesign</CardTitle>
                    <p className="card-description">
                      The HDR rollout is being enabled via support from two
                      major studio partners.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/sections/patrick-tomasso.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <h6 className="card-category">Android App</h6>
                    <CardTitle tag="h4">Analytics for Android</CardTitle>
                    <p className="card-description">
                      Google did not offer an estimate as to when HDR support
                      reaches its other global markets.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/sections/rawpixel-coms.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <h6 className="card-category">Material</h6>
                    <CardTitle tag="h4">How to find the contacts.</CardTitle>
                    <p className="card-description">
                      Boom, the invitations start flying and Brella makes it
                      easy to accept/decline
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          {/* ********* END PROJECTS 3 ********* */}
          {/* ********* PROJECTS 4 ********* */}
          <div className="project-4 section section-dark">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Some of Our Awesome Projects - 4</h2>
                  <h5 className="description">
                    This is the paragraph where you can write more details about
                    your projects. Keep you user engaged by providing meaningful
                    information.
                  </h5>
                </Col>
              </Row>
              <div className="space-top" />
              <Row>
                <Col className="ml-auto" md="5">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/sections/sebastien-gabrieles.jpg") +
                        ")"
                    }}
                  >
                    <div className="card-icon">
                      <i className="nc-icon nc-mobile" />
                    </div>
                  </Card>
                </Col>
                <Col className="mr-auto" md="5">
                  <Card className="card-plain">
                    <CardBody>
                      <h6 className="card-category">Technology</h6>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <CardTitle tag="h3">
                          The need of a great product
                        </CardTitle>
                      </a>
                      <p className="card-description">
                        Artificial intelligence-focused investment funds are a
                        dime a dozen these days. Everyone knows there’s money to
                        be made from AI, but to capture value, good VCs know
                        they need to back products and not technologies.
                      </p>
                      <CardFooter>
                        <Button
                          className="btn-neutral mr-1"
                          color="link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-book mr-1" />
                          Read More
                        </Button>
                        <Button
                          className="btn-just-icon btn-neutral mr-1"
                          color="link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-apple" />
                        </Button>
                        <Button
                          className="btn-just-icon btn-neutral mr-1"
                          color="link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-android" />
                        </Button>
                        <Button
                          className="btn-just-icon btn-neutral"
                          color="link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-windows" />
                        </Button>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <br />
              <hr />
              <br />
              <Row>
                <Col className="ml-auto" md="5">
                  <Card className="card-plain">
                    <CardBody>
                      <h6 className="card-category">Design</h6>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <CardTitle tag="h3">
                          The aesthetic quality of a product
                        </CardTitle>
                      </a>
                      <p className="card-description">
                        Eventually, the data collected from the grant program
                        could allow the two to play a bit of machine learning
                        moneyball — valuing machine learning engineers without
                        traditional metrics (like having a PhD from Stanford)...
                      </p>
                      <CardFooter>
                        <Button
                          className="btn-neutral mr-1"
                          color="link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-book mr-1" />
                          Read More
                        </Button>
                        <Button
                          className="btn-just-icon btn-neutral mr-1"
                          color="link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-apple" />
                        </Button>
                        <Button
                          className="btn-just-icon btn-neutral mr-1"
                          color="link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-android" />
                        </Button>
                        <Button
                          className="btn-just-icon btn-neutral"
                          color="link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-windows" />
                        </Button>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="mr-auto" md="5">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/sections/john-towner.jpg") +
                        ")"
                    }}
                  >
                    <div className="card-icon">
                      <i className="nc-icon nc-controller-modern" />
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* ********* END PROJECTS 4 ********* */}
      </div>
    </>
  );
}

export default SectionProject;
