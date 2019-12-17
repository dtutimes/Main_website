/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Media,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import TwitterRedesignHeader from "components/Headers/TwitterRedesignHeader.js";
import FooterWhite from "components/Footers/FooterWhite.js";

function TwitterRedesign() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("twitter-redesign");
    return function cleanup() {
      document.body.classList.remove("twitter-redesign");
    };
  });
  return (
    <>
      <ColorNavbar />
      <div className="wrapper">
        <TwitterRedesignHeader />
        <div className="profile-content section-white-gray">
          <Container>
            <Row className="owner">
              <Col className="ml-auto mr-auto text-center" md="2" sm="4" xs="6">
                <div className="avatar">
                  <img
                    alt="..."
                    className="img-circle img-responsive"
                    src={require("assets/img/rihanna.jpg")}
                  />
                  <div className="following">
                    <Button
                      className="btn-just-icon"
                      color="info"
                      id="tooltip924342351"
                      size="sm"
                    >
                      <i className="nc-icon nc-simple-add" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip924342351">
                      Follow
                    </UncontrolledTooltip>
                  </div>
                </div>
                <div className="name">
                  <h4>
                    Rihanna <br />
                    <small>@rihanna</small>
                  </h4>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <p>
                  Excited to share this with you!{" "}
                  <a
                    className="link-danger twitter-hashtag"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    #ANTIdiaRy
                  </a>{" "}
                  —{" "}
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    http://smarturl.it
                  </a>
                </p>
                <div className="description-details">
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa fa-map-marker mr-1" />
                      ANTI
                    </li>
                    <li>
                      <i className="fa fa-link mr-1" />
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        rihanna.com
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-calendar mr-1" />
                      Joined October 2009
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <div className="profile-tabs">
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Tweets
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Connections
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        Media
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1" id="tweets">
                  <Row>
                    <Col md="8">
                      <div className="tweets">
                        <Media>
                          <a
                            className="pull-left"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <div className="avatar">
                              <Media
                                alt="..."
                                object
                                src={require("assets/img/rihanna.jpg")}
                              />
                            </div>
                          </a>
                          <Media body>
                            <strong className="mr-1">Rihanna</strong>
                            <Media heading tag="h5">
                              <small>@rihanna · 1h</small>
                            </Media>
                            <p>
                              It's just beyond the vault. Discover room 7 of the{" "}
                              <a
                                className="link-danger"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                #ANTIdiaRy
                              </a>{" "}
                              at{" "}
                              <a
                                className="link-info"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                {`http://smarturl.it/AntidiaRyTW`}
                              </a>
                            </p>
                            <div className="media-footer">
                              <Button
                                color="link"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-reply" />
                              </Button>
                              <Button
                                className="btn-link"
                                color="success"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-retweet mr-1" />
                                2.1k
                              </Button>
                              <Button
                                className="btn-link"
                                color="danger"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-heart mr-1" />
                                3.2k
                              </Button>
                              <UncontrolledDropdown>
                                <DropdownToggle
                                  className="btn-just-icon"
                                  color="link"
                                  size="lg"
                                >
                                  <i className="fa fa-ellipsis-h" />
                                </DropdownToggle>
                                <DropdownMenu right>
                                  <DropdownItem>
                                    <a
                                      href="#pablo"
                                      onClick={e => e.preventDefault()}
                                    >
                                      <Row>
                                        <Col sm="2">
                                          <span className="icon-simple">
                                            <i className="fa fa-envelope" />
                                          </span>
                                        </Col>
                                        <Col sm="9">Direct Message</Col>
                                      </Row>
                                    </a>
                                  </DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>
                                    <a
                                      href="#pablo"
                                      onClick={e => e.preventDefault()}
                                    >
                                      <Row>
                                        <Col sm="2">
                                          <span className="icon-simple">
                                            <i className="fa fa-microphone-slash" />
                                          </span>
                                        </Col>
                                        <Col sm="9">Mute</Col>
                                      </Row>
                                    </a>
                                  </DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>
                                    <a
                                      href="#pablo"
                                      onClick={e => e.preventDefault()}
                                    >
                                      <Row>
                                        <Col sm="2">
                                          <span className="icon-simple">
                                            <i className="fa fa-exclamation-circle" />
                                          </span>
                                        </Col>
                                        <Col sm="9">Report</Col>
                                      </Row>
                                    </a>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </div>
                          </Media>
                        </Media>
                        {/* end media */}
                        <Media>
                          <a
                            className="pull-left"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <div className="avatar">
                              <Media
                                alt="..."
                                object
                                src={require("assets/img/khaled.jpg")}
                              />
                            </div>
                            <div className="retweet">
                              <Button
                                className="btn-just-icon"
                                color="success"
                                id="tooltip397232910"
                                size="sm"
                              >
                                <i className="fa fa-retweet" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip397232910"
                              >
                                Follow
                              </UncontrolledTooltip>
                            </div>
                          </a>
                          <Media body>
                            <strong className="mr-1">DJ KHALED</strong>
                            <Media heading tag="h5">
                              <small>@djkhaled · 6 Jan 2016</small>
                            </Media>
                            <p>
                              <a
                                className="link-danger"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                #LA
                              </a>{" "}
                              fan luv I'm be{" "}
                              <a
                                className="link-info"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                @1oakla
                              </a>{" "}
                              tonight i want see fan luv let's win more !{" "}
                              <a
                                className="link-danger"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                #wethebest
                              </a>
                            </p>
                            <div className="tweet-link">
                              <Row>
                                <Col md="4">
                                  <img
                                    alt="..."
                                    className="img-rounded img-tweet-link img-responsive"
                                    src={require("assets/img/khaled_tweet.png")}
                                  />
                                </Col>
                                <Col md="8">
                                  <strong>Let's win more by DJ Khaled</strong>
                                  <a
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                  >
                                    <p>
                                      This is a 3-day event hosted by DJ Khaled
                                      for his fan luv in LA. Major{" "}
                                      <span role="img" aria-label="key emoji">
                                        🔑
                                      </span>{" "}
                                      to success. Bless up!
                                    </p>
                                  </a>
                                  <small>
                                    <a
                                      className="text-muted"
                                      href="#pablo"
                                      onClick={e => e.preventDefault()}
                                    >
                                      djkhaled.com
                                    </a>
                                  </small>
                                </Col>
                              </Row>
                            </div>
                            <div className="media-footer">
                              <Button
                                color="link"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-reply" />
                              </Button>
                              <Button
                                color="link"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-retweet mr-1" />
                                100
                              </Button>
                              <Button
                                className="btn-link"
                                color="danger"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-heart mr-1" />
                                234
                              </Button>
                              <UncontrolledDropdown>
                                <DropdownToggle
                                  className="btn-icon"
                                  color="link"
                                  size="lg"
                                >
                                  <i className="fa fa-ellipsis-h" />
                                </DropdownToggle>
                                <DropdownMenu right>
                                  <DropdownItem>
                                    <a
                                      href="#pablo"
                                      onClick={e => e.preventDefault()}
                                    >
                                      <Row>
                                        <Col sm="2">
                                          <span className="icon-simple">
                                            <i className="fa fa-envelope" />
                                          </span>
                                        </Col>
                                        <Col sm="9">Direct Message</Col>
                                      </Row>
                                    </a>
                                  </DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>
                                    <a
                                      href="#pablo"
                                      onClick={e => e.preventDefault()}
                                    >
                                      <Row>
                                        <Col sm="2">
                                          <span className="icon-simple">
                                            <i className="fa fa-microphone-slash" />
                                          </span>
                                        </Col>
                                        <Col sm="9">Mute</Col>
                                      </Row>
                                    </a>
                                  </DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>
                                    <a
                                      href="#pablo"
                                      onClick={e => e.preventDefault()}
                                    >
                                      <Row>
                                        <Col sm="2">
                                          <span className="icon-simple">
                                            <i className="fa fa-exclamation-circle" />
                                          </span>
                                        </Col>
                                        <Col sm="9">Report</Col>
                                      </Row>
                                    </a>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </div>
                          </Media>
                        </Media>
                        {/* end media */}
                        <Media>
                          <a
                            className="pull-left"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <div className="avatar">
                              <Media
                                alt="..."
                                object
                                src={require("assets/img/rihanna.jpg")}
                              />
                            </div>
                          </a>
                          <Media body>
                            <strong className="mr-1">Rihanna</strong>
                            <Media heading tag="h5">
                              <small>@rihanna · 8 Jan 2016</small>
                            </Media>
                            <p>
                              bitch better have my mistletoe{" "}
                              <a
                                className="link-danger"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                #rihannaxstance
                              </a>
                            </p>
                            <img
                              alt="..."
                              className="img-rounded img-tweet"
                              src={require("assets/img/rihanna_tweet.jpeg")}
                            />
                            <div className="media-footer">
                              <Button
                                color="link"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-reply" />
                              </Button>
                              <Button
                                color="link"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-retweet mr-1" />
                                5.8K
                              </Button>
                              <Button
                                className="btn-link"
                                color="danger"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-heart mr-1" />
                                12K
                              </Button>
                              <Button
                                color="link"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-ellipsis-h" />
                              </Button>
                            </div>
                          </Media>
                        </Media>
                        {/* end media */}
                        <Media>
                          <a
                            className="pull-left"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <div className="avatar">
                              <Media
                                alt="..."
                                object
                                src={require("assets/img/rihanna.jpg")}
                              />
                            </div>
                          </a>
                          <Media body>
                            <strong className="mr-1">Rihanna</strong>
                            <Media heading tag="h5">
                              <small>@rihanna · 9 Jan 2016</small>
                            </Media>
                            <p>
                              Thank you God for fulfilling Your plans in my
                              life.... All the Glory belongs to You!!!!{" "}
                              <a
                                href="https://instagram.com/p/4m5W4sBMzj/?ref=creativetim"
                                target="_blank"
                              >
                                {`https://instagram.com/p/4m5W4sBMzj/`}
                              </a>
                            </p>
                            <div className="media-footer">
                              <Button
                                color="link"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-reply" />
                              </Button>
                              <Button
                                color="link"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-retweet mr-1" />
                                5.9K
                              </Button>
                              <Button
                                color="link"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-heart mr-1" />
                                11K
                              </Button>
                              <UncontrolledDropdown>
                                <DropdownToggle
                                  className="btn-icon"
                                  color="link"
                                  size="lg"
                                >
                                  <i className="fa fa-ellipsis-h" />
                                </DropdownToggle>
                                <DropdownMenu right>
                                  <DropdownItem>
                                    <a
                                      href="#pablo"
                                      onClick={e => e.preventDefault()}
                                    >
                                      <Row>
                                        <Col sm="2">
                                          <span className="icon-simple">
                                            <i className="fa fa-envelope" />
                                          </span>
                                        </Col>
                                        <Col sm="9">Direct Message</Col>
                                      </Row>
                                    </a>
                                  </DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>
                                    <a
                                      href="#pablo"
                                      onClick={e => e.preventDefault()}
                                    >
                                      <Row>
                                        <Col sm="2">
                                          <span className="icon-simple">
                                            <i className="fa fa-microphone-slash" />
                                          </span>
                                        </Col>
                                        <Col sm="9">Mute</Col>
                                      </Row>
                                    </a>
                                  </DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>
                                    <a
                                      href="#pablo"
                                      onClick={e => e.preventDefault()}
                                    >
                                      <Row>
                                        <Col sm="2">
                                          <span className="icon-simple">
                                            <i className="fa fa-exclamation-circle" />
                                          </span>
                                        </Col>
                                        <Col sm="9">Report</Col>
                                      </Row>
                                    </a>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </div>
                          </Media>
                        </Media>
                        {/* end media */}
                        <Media className="last-media">
                          <a
                            className="pull-left"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <div className="avatar">
                              <Media
                                alt="..."
                                object
                                src={require("assets/img/billboard.jpeg")}
                              />
                            </div>
                            <div className="retweet">
                              <Button
                                className="btn-just-icon"
                                color="success"
                                id="tooltip673539083"
                                size="sm"
                              >
                                <i className="fa fa-retweet" />
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip673539083"
                              >
                                Follow
                              </UncontrolledTooltip>
                            </div>
                          </a>
                          <Media body>
                            <strong className="mr-1">billboard</strong>
                            <Media heading tag="h5">
                              <small>@billboard · 1 Jul 2016</small>
                            </Media>
                            <p>
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                @Rihanna
                              </a>{" "}
                              has become the first artist to surpass RIAA's 100
                              million cumulative singles award threshold:{" "}
                              <a
                                href="http://blbrd.cm/3rQ3Iq?ref=creativetim"
                                target="_blank"
                              >
                                {`http://blbrd.cm/3rQ3Iq`}
                              </a>
                            </p>
                            <div className="media-footer">
                              <Button
                                color="link"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-reply" />
                              </Button>
                              <Button
                                color="link"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-retweet" />
                                5.6K
                              </Button>
                              <Button
                                className="btn-link"
                                color="danger"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-heart" />
                                7.2K
                              </Button>
                              <UncontrolledDropdown>
                                <DropdownToggle
                                  className="btn-icon"
                                  color="link"
                                  size="lg"
                                >
                                  <i className="fa fa-ellipsis-h" />
                                </DropdownToggle>
                                <DropdownMenu right>
                                  <DropdownItem>
                                    <a
                                      href="#pablo"
                                      onClick={e => e.preventDefault()}
                                    >
                                      <Row>
                                        <Col sm="2">
                                          <span className="icon-simple">
                                            <i className="fa fa-envelope" />
                                          </span>
                                        </Col>
                                        <Col sm="9">Direct Message</Col>
                                      </Row>
                                    </a>
                                  </DropdownItem>
                                  <DropdownItem>
                                    <a
                                      href="#pablo"
                                      onClick={e => e.preventDefault()}
                                    >
                                      <Row>
                                        <Col sm="2">
                                          <span className="icon-simple">
                                            <i className="fa fa-microphone-slash" />
                                          </span>
                                        </Col>
                                        <Col sm="9">Mute</Col>
                                      </Row>
                                    </a>
                                  </DropdownItem>
                                  <DropdownItem>
                                    <a
                                      href="#pablo"
                                      onClick={e => e.preventDefault()}
                                    >
                                      <Row>
                                        <Col sm="2">
                                          <span className="icon-simple">
                                            <i className="fa fa-exclamation-circle" />
                                          </span>
                                        </Col>
                                        <Col sm="9">Report</Col>
                                      </Row>
                                    </a>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </div>
                          </Media>
                        </Media>
                        {/* end media */}
                        <br />
                        <div className="text-center">
                          <Button className="btn-round" color="info" outline>
                            Load more tweets
                          </Button>
                        </div>
                      </div>
                    </Col>
                    <Col md="4" sm="6">
                      <Card className="card-with-shadow">
                        <CardBody>
                          <CardTitle tag="h5">
                            Who to follow ·{" "}
                            <small>
                              <a
                                className="link-info"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                View all
                              </a>
                            </small>
                          </CardTitle>
                          <div className="accounts-suggestion">
                            <ul className="list-unstyled">
                              <li className="account">
                                <Row>
                                  <Col md="3">
                                    <div className="avatar">
                                      <img
                                        alt="..."
                                        className="img-circle img-no-padding img-responsive"
                                        src={require("assets/img/chet_faker_1.jpg")}
                                      />
                                    </div>
                                  </Col>
                                  <Col className="description-section" md="7">
                                    <span>
                                      Chet Faker{" "}
                                      <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                      >
                                        @chetfaker
                                      </a>
                                    </span>
                                    <br />
                                    <span className="text-muted">
                                      <small>
                                        Followed by{" "}
                                        <a
                                          className="link-info"
                                          href="#pablo"
                                          onClick={e => e.preventDefault()}
                                        >
                                          @banks
                                        </a>{" "}
                                        and{" "}
                                        <a
                                          className="link-info"
                                          href="#pablo"
                                          onClick={e => e.preventDefault()}
                                        >
                                          @rihanna
                                        </a>
                                      </small>
                                    </span>
                                  </Col>
                                  <Col className="follow" md="2">
                                    <Button
                                      className="btn-just-icon"
                                      color="info"
                                      outline
                                      size="sm"
                                    >
                                      <i className="fa fa-plus" />
                                    </Button>
                                  </Col>
                                </Row>
                              </li>
                              <li className="account">
                                <Row>
                                  <Col md="3">
                                    <div className="avatar">
                                      <img
                                        alt="..."
                                        className="img-circle img-no-padding img-responsive"
                                        src={require("assets/img/placeholder.jpg")}
                                      />
                                    </div>
                                  </Col>
                                  <Col className="description-section" md="7">
                                    <span>
                                      John Green{" "}
                                      <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                      >
                                        @johngreen
                                      </a>
                                    </span>
                                    <br />
                                    <span className="text-muted">
                                      <small>
                                        Followed by{" "}
                                        <a
                                          className="link-info"
                                          href="#pablo"
                                          onClick={e => e.preventDefault()}
                                        >
                                          @rihanna
                                        </a>
                                      </small>
                                    </span>
                                  </Col>
                                  <Col className="follow" md="2">
                                    <Button
                                      className="btn-just-icon"
                                      color="info"
                                      outline
                                      size="sm"
                                    >
                                      <i className="fa fa-plus" />
                                    </Button>
                                  </Col>
                                </Row>
                              </li>
                              <li className="account">
                                <Row>
                                  <Col md="3">
                                    <div className="avatar">
                                      <img
                                        alt="..."
                                        className="img-circle img-no-padding img-responsive"
                                        src={require("assets/img/drake.jpg")}
                                      />
                                    </div>
                                  </Col>
                                  <Col className="description-section" md="7">
                                    <span>
                                      Drake{" "}
                                      <a
                                        className="text-muted"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                      >
                                        @drake
                                      </a>
                                    </span>
                                    <br />
                                    <span className="text-muted">
                                      <small>
                                        Followed by{" "}
                                        <a
                                          className="link-info"
                                          href="#pablo"
                                          onClick={e => e.preventDefault()}
                                        >
                                          @chetfaker
                                        </a>
                                      </small>
                                    </span>
                                  </Col>
                                  <Col className="follow" md="2">
                                    <Button
                                      className="btn-just-icon"
                                      color="info"
                                      outline
                                      size="sm"
                                    >
                                      <i className="fa fa-plus" />
                                    </Button>
                                  </Col>
                                </Row>
                              </li>
                            </ul>
                          </div>
                        </CardBody>
                      </Card>
                      {/* end card */}
                      <Card className="card-with-shadow">
                        <CardBody>
                          <CardTitle tag="h5">
                            Trends ·{" "}
                            <small>
                              <a
                                className="link-info"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Change
                              </a>
                            </small>
                          </CardTitle>
                          <div className="hashtag-suggestions">
                            <ul className="list-unstyled">
                              <li>
                                <a
                                  className="link-danger"
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  #JeSuisToujoursCharlie
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Oculus Rift
                                </a>
                              </li>
                              <li>
                                <a
                                  className="link-danger"
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  #CarenAndLarryAreNotReal
                                </a>
                              </li>
                              <li>
                                <a
                                  className="link-danger"
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  #Twitter10k
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  EXCLUSIVE MOVE WITHINGTON
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  London
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  DJ Khaled Snapchat
                                </a>
                              </li>
                            </ul>
                          </div>
                        </CardBody>
                      </Card>
                      {/* end card */}
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2" id="connections" role="tabpanel" />
                <TabPane tabId="3" id="media" role="tabpanel" />
              </TabContent>
            </div>
          </Container>
        </div>
      </div>
      <FooterWhite />
    </>
  );
}

export default TwitterRedesign;
