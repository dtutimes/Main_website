import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionDescriptionAreas() {
  const [hTabs, setHTabs] = React.useState("1");
  const [vTabs, setVTabs] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <Container className="tim-container">
        <div id="description-areas">
          <div className="title">
            <h3>Description Areas</h3>
          </div>
          <Row>
            <Col md="5" sm="12">
              <h4>
                <small>Horizontal Tabs</small>
              </h4>
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={hTabs === "1" ? "active" : ""}
                        onClick={() => {
                          setHTabs("1");
                        }}
                      >
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={hTabs === "2" ? "active" : ""}
                        onClick={() => {
                          setHTabs("2");
                        }}
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={hTabs === "3" ? "active" : ""}
                        onClick={() => {
                          setHTabs("3");
                        }}
                      >
                        Messages
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent className="text-center" activeTab={"hTabs" + hTabs}>
                <TabPane tabId="hTabs1">
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient. With a smooth metal surface that
                    seamlessly meets the new Retina HD display.
                  </p>
                </TabPane>
                <TabPane tabId="hTabs2">
                  <p>Here is your profile.</p>
                </TabPane>
                <TabPane tabId="hTabs3">
                  <p>Here are your messages.</p>
                </TabPane>
              </TabContent>
            </Col>
            <Col md="7" sm="12">
              <h4>
                <small>Vertical Tabs</small>
              </h4>
              <Row>
                <Col md="4" sm="4" xs="6">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <Nav
                        className="flex-column nav-stacked"
                        role="tablist"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={vTabs === "1" ? "active" : ""}
                            onClick={() => {
                              setVTabs("1");
                            }}
                          >
                            Info
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "2" ? "active" : ""}
                            onClick={() => {
                              setVTabs("2");
                            }}
                          >
                            Description
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "3" ? "active" : ""}
                            onClick={() => {
                              setVTabs("3");
                            }}
                          >
                            Concept
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "4" ? "active" : ""}
                            onClick={() => {
                              setVTabs("4");
                            }}
                          >
                            Support
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "5" ? "active" : ""}
                            onClick={() => {
                              setVTabs("5");
                            }}
                          >
                            Extra
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </div>
                </Col>
                <Col md="8" sm="8" xs="6">
                  {/* Tab panes */}
                  <TabContent activeTab={"vTabs" + vTabs}>
                    <TabPane tabId="vTabs1">
                      <p>
                        Larger, yet dramatically thinner. More powerful, but
                        remarkably power efficient. With a smooth metal surface
                        that seamlessly meets the new Retina HD display.
                      </p>
                      <p>
                        It’s one continuous form where hardware and software
                        function in perfect unison, creating a new generation of
                        phone that's better by any measure.
                      </p>
                    </TabPane>
                    <TabPane tabId="vTabs2">
                      <p>
                        The first thing you notice when you hold the phone is
                        how great it feels in your hand. The cover glass curves
                        down around the sides to meet the anodized aluminum
                        enclosure in a remarkable, simplified design.
                      </p>
                      <p>
                        There are no distinct edges. No gaps. Just a smooth,
                        seamless bond of metal and glass that feels like one
                        continuous surface.
                      </p>
                    </TabPane>
                    <TabPane tabId="vTabs3">
                      <p>
                        It’s one continuous form where hardware and software
                        function in perfect unison, creating a new generation of
                        phone that's better by any measure.
                      </p>
                      <p>
                        Larger, yet dramatically thinner. More powerful, but
                        remarkably power efficient. With a smooth metal surface
                        that seamlessly meets the new Retina HD display.
                      </p>
                    </TabPane>
                    <TabPane tabId="vTabs4">
                      <p>
                        From the seamless transition of glass and metal to the
                        streamlined profile, every detail was carefully
                        considered to enhance your experience. So while its
                        display is larger, the phone feels just right.
                      </p>
                      <p>
                        It’s one continuous form where hardware and software
                        function in perfect unison, creating a new generation of
                        phone that's better by any measure.
                      </p>
                    </TabPane>
                    <TabPane tabId="vTabs5">
                      <p>
                        It’s one continuous form where hardware and software
                        function in perfect unison, creating a new generation of
                        phone that's better by any measure.
                      </p>
                      <p>
                        Larger, yet dramatically thinner. More powerful, but
                        remarkably power efficient. With a smooth metal surface
                        that seamlessly meets the new Retina HD display.
                      </p>
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* info areas */}
        <div id="info-areas">
          <div className="title">
            <h3>Info Areas</h3>
            <h4>
              <small>Simple</small>
            </h4>
          </div>
          <Row>
            <Col md="4">
              <div className="info">
                <div className="icon">
                  <i className="nc-icon nc-time-alarm" />
                </div>
                <div className="description">
                  <h4 className="info-title">Save Time</h4>
                  <p>
                    Spend your time generating new ideas. You don't have to
                    think of implementing anymore.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon">
                  <i className="nc-icon nc-delivery-fast" />
                </div>
                <div className="description">
                  <h4 className="info-title">Fast Prototyping</h4>
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon">
                  <i className="nc-icon nc-palette" />
                </div>
                <div className="description">
                  <h4 className="info-title">Beautiful Colors</h4>
                  <p>
                    Choose from a veriety of colors resembling sugar paper
                    pastels.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <h4>
            <small>Coloured Icons</small>
          </h4>
          <Row>
            <Col md="4">
              <div className="info">
                <div className="icon icon-primary">
                  <i className="nc-icon nc-album-2" />
                </div>
                <div className="description">
                  <h4 className="info-title">Beautiful Gallery</h4>
                  <p>
                    Spend your time generating new ideas. You don't have to
                    think of implementing anymore.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-warning">
                  <i className="nc-icon nc-bulb-63" />
                </div>
                <div className="description">
                  <h4 className="info-title">New Ideas</h4>
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-chart-bar-32" />
                </div>
                <div className="description">
                  <h4 className="info-title">Statistics</h4>
                  <p>
                    Choose from a veriety of colors resembling sugar paper
                    pastels.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <h4>
            <small>Horizontal</small>
          </h4>
          <Row>
            <Col md="4">
              <div className="info info-horizontal">
                <div className="icon">
                  <i className="nc-icon nc-camera-compact" />
                </div>
                <div className="description">
                  <h4 className="info-title">Beautiful Gallery</h4>
                  <p>
                    Spend your time generating new ideas. You don't have to
                    think of implementing anymore.
                  </p>
                  <Button
                    className="btn-link"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    See more
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info info-horizontal">
                <div className="icon icon-warning">
                  <i className="nc-icon nc-glasses-2" />
                </div>
                <div className="description">
                  <h4 className="info-title">New Ideas</h4>
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient.
                  </p>
                  <Button
                    className="btn-link"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    See more
                  </Button>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info info-horizontal">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-sound-wave" />
                </div>
                <div className="description">
                  <h4 className="info-title">Statistics</h4>
                  <p>
                    Choose from a veriety of colors resembling sugar paper
                    pastels.
                  </p>
                  <Button
                    className="btn-link"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    See more
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="title">
          <h3>Navigation Pills</h3>
        </div>
        <Col md="6">
          <Nav className="nav-pills-danger" pills>
            <NavItem>
              <NavLink
                className={pills === "1" ? "active" : ""}
                onClick={() => {
                  setPills("1");
                }}
              >
                Info
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={pills === "2" ? "active" : ""}
                onClick={() => {
                  setPills("2");
                }}
              >
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={pills === "3" ? "active" : ""}
                onClick={() => {
                  setPills("3");
                }}
              >
                Concept
              </NavLink>
            </NavItem>
          </Nav>
          {/* Pill panes */}
          <TabContent activeTab={"pills" + pills}>
            <TabPane tabId="pills1" />
            <TabPane tabId="pills2" />
            <TabPane tabId="pills3" />
          </TabContent>
        </Col>
        <div className="title">
          <h3>Progress Bar</h3>
        </div>
        <Col md="8">
          <Progress max="100" value="25" barClassName="progress-bar-success" />
          <br />
          <Progress max="100" value="50" barClassName="progress-bar-info" />
          <br />
          <Progress max="100" value="100" barClassName="progress-bar-danger" />
          <br />
          <Progress multi>
            <Progress bar max="100" value="15" />
            <Progress
              bar
              barClassName="progress-bar-success"
              max="100"
              value="30"
            />
            <Progress
              bar
              barClassName="progress-bar-warning"
              max="100"
              value="20"
            />
          </Progress>
        </Col>
        <Row>
          <Col md="6">
            <div className="title">
              <h3>Pagination</h3>
              <br />
            </div>
            <nav aria-label="Page navigation example">
              <Pagination>
                <PaginationItem>
                  <PaginationLink
                    aria-label="Previous"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i aria-hidden={true} className="fa fa-angle-double-left" />
                    <span className="sr-only">Previous</span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    5
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    aria-label="Next"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i
                      aria-hidden={true}
                      className="fa fa-angle-double-right"
                    />
                    <span className="sr-only">Next</span>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </nav>
            <br />
            <nav aria-label="...">
              <Pagination>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    tabIndex="-1"
                  >
                    Previous
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="active">
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    3 <span className="sr-only">(current)</span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    5
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Next
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </nav>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SectionDescriptionAreas;
