import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionTeam() {
  return (
    <>
      <div className="section section-team cd-section" id="teams">
        {/* ********* TEAM 1 ********* */}
        <div className="team-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Our Stunning Team 1</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category text-muted">
                          Product Manager
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category text-muted">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category text-muted">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Patrick Lencioni</CardTitle>
                        <h6 className="card-category text-muted">
                          Brand Manager
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Great teams do not hold back with one another. They are
                      unafraid to air their dirty laundry. They admit their
                      mistakes, their weaknesses and their concerns without fear
                      of reprisal.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END TEAM 1 ********* */}
        {/* ********* TEAM 2 ********* */}
        <div
          className="team-2 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/jan-sendereks.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 2</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/faces/kaci-baum-1.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <CardTitle tag="h4">Alec Thompson</CardTitle>
                    <h6 className="card-category">Managing Partner</h6>
                    <CardFooter>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-twitter" />
                      </Button>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-facebook" />
                      </Button>
                      <Button
                        className="btn-link btn-just-icon"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-dribbble" />
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/faces/clem-onojeghuo-1.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <CardTitle tag="h4">George Lincoln</CardTitle>
                    <h6 className="card-category">Backend Hacker</h6>
                    <CardFooter>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-facebook" />
                      </Button>
                      <Button
                        className="btn-link btn-just-icon"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-dribbble" />
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/faces/joe-gardner-1.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <CardTitle tag="h4">Sophie West</CardTitle>
                    <h6 className="card-category">Photographer</h6>
                    <CardFooter>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-twitter" />
                      </Button>
                      <Button
                        className="btn-link btn-just-icon"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END TEAM 2 ********* */}
        {/* ********* TEAM 3 ********* */}
        <div className="team-3">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 3</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Alec Thompson</CardTitle>
                        <h6 className="card-category">Founder</h6>
                        <p className="card-description">
                          Individual commitment to a group effort – that’s what
                          makes a team work, a society work...
                        </p>
                        <CardFooter className="pull-left">
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="twitter"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="facebook"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-facebook" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link"
                            color="google"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-google-plus" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Ethan Smith</CardTitle>
                        <h6 className="card-category">Founder</h6>
                        <p className="card-description">
                          Don't be scared of the truth because we need to
                          restart the human foundation in truth...
                        </p>
                        <CardFooter className="pull-left">
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="linkedin"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="dribbble"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link"
                            color="pinterest"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-pinterest" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Lucas Andrew</CardTitle>
                        <h6 className="card-category">Web Designer</h6>
                        <p className="card-description">
                          I love you like Kanye loves Kanye. Don't be scared of
                          the truth. Kanye loves himself like Kanye loves Kanye.
                        </p>
                        <CardFooter className="pull-left">
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="youtube"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-youtube" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="twitter"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link"
                            color="instagram"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-instagram" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/kaci-baum-2.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Backend Hacker</h6>
                        <p className="card-description">
                          It is literally true that you can succeed best and
                          quickest by helping others to succeed because they
                          care about.
                        </p>
                        <CardFooter className="pull-left">
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="linkedin"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link mr-1"
                            color="instagram"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-instagram" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link"
                            color="dribbble"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END TEAM 3 ********* */}
        {/* ********* TEAM 4 ********* */}
        <div
          className="team-4 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/fabio-mangione.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 4</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                        />
                        <CardTitle tag="h4">Eric Thomson</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="instagram"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/joe-gardner-2.jpg")}
                        />
                        <CardTitle tag="h4">Sophia West</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="pinterest"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-pinterest" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                        />
                        <CardTitle tag="h4">Lucas Andrew</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      Great teams do not hold back with one another. They are
                      unafraid to air their dirty laundry. They admit their
                      mistakes, their weaknesses and their concerns without fear
                      of reprisal.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="youtube"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-youtube" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="instagram"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END TEAM 4 ********* */}
        {/* ********* TEAM 5 ********* */}
        <div
          className="team-5 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/martin-knize.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 5</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/erik-lucatero-2.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Andrew Carnegie</CardTitle>
                        <h6 className="card-category">Project Manager</h6>
                        <p className="card-description">
                          If a team is to reach its potential, each player must
                          be willing to subordinate his personal goals.
                        </p>
                        <CardFooter>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-facebook" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-google-plus" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/kaci-baum-2.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Alec Thompson</CardTitle>
                        <h6 className="card-category">Founder</h6>
                        <p className="card-description">
                          Interdependent people combine their own efforts with
                          the efforts of others to achieve their greatest
                          success.
                        </p>
                        <CardFooter>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-pinterest" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Gine Andrew</CardTitle>
                        <h6 className="card-category">Web Designer</h6>
                        <p className="card-description">
                          When he took time to help the man up the mountain, lo,
                          he scaled it himself. Sticks in a bundle are
                          unbreakable.
                        </p>
                        <CardFooter>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-youtube" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-instagram" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">George West</CardTitle>
                        <h6 className="card-category">Backend Hacker</h6>
                        <p className="card-description">
                          I love you like Kanye loves Kanye. Don't be scared of
                          the truth because we need to restart the human
                          foundation.
                        </p>
                        <CardFooter>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-instagram" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END TEAM 5 ********* */}
      </div>
    </>
  );
}

export default SectionTeam;
