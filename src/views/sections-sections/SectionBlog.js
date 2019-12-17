import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionBlog() {
  return (
    <>
      <div className="section secion-blog cd-section" id="blogs">
        {/* ********* BLOGS 1 ********* */}
        <div className="blog-1" id="blog-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">Latest Blogposts</h2>
                <br />
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img"
                          src={require("assets/img/sections/stephanie-krist.jpg")}
                        />
                      </div>
                    </Col>
                    <Col md="7">
                      <CardBody>
                        <h6 className="card-category text-info">Enterprise</h6>
                        <CardTitle tag="h3">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            The four waves of augmented reality
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          Sharing processing, display and sensors across
                          smartphones and tethered smartglasses gives you two
                          batteries, each powering fewer individual systems. If
                          they’re connected by a cable, this could give a
                          healthy bump to battery life — and…{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Read More
                          </a>
                        </p>
                        <p className="author">
                          by{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <b>Tim Merel</b>
                          </a>
                          , 11 hours ago
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="7">
                      <CardBody>
                        <h6 className="card-category text-danger">
                          <i className="fa fa-free-code-camp mr-1" />
                          Trending
                        </h6>
                        <CardTitle tag="h3">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Okoli connects you with tour guides around the world
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          Okoli is a new service by developer Jack Deneut that
                          aims to replace those ugly little cards you find in
                          tourist hotels. The web app, which currently works in
                          Prague, Budapest, Berlin and Paris, lets you reserve a
                          nearly private tour with a professional guid — and…{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Read More
                          </a>
                        </p>
                        <p className="author">
                          by{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <b>John Biggs</b>
                          </a>
                          , 3 seconds ago
                        </p>
                      </CardBody>
                    </Col>
                    <Col md="5">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img"
                          src={require("assets/img/sections/federico-beccari.jpg")}
                        />
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END BLOGS 1 ********* */}
        {/* ********* BLOGS 2 ********* */}
        <div className="blog-2 section section-gray">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">Latest Blogposts 2</h2>
                <br />
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
                            <i className="fa fa-clock-o" /> 5 min read
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
                          The latest version of MIT’s Cheetah robot made its
                          stage debut today at TC Sessions: Robotics in
                          Cambridge, Mass. It’s a familiar project... <br />
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
                            <i className="fa fa-clock-o" /> 5 min read
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
                          Because developing a doctor-on-demand service that
                          would allow personalized medical visits, booked
                          through an app on a user’s phone is... <br />
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
                            <i className="fa fa-clock-o" /> 5 min read
                          </div>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END BLOGS 2 ********* */}
        {/* ********* BLOGS 3 ********* */}
        <div className="blog-3">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">Latest Blogposts 3</h2>
                <br />
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="4">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img"
                          src={require("assets/img/sections/jeff-sheldon.jpg")}
                        />
                      </div>
                    </Col>
                    <Col md="8">
                      <CardBody>
                        <h6 className="card-category text-info">Enterprise</h6>
                        <CardTitle tag="h3">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            SoundCloud says it’s going to survive, but how?
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          No matter what happens — funding versus acquisition
                          versus who knows what — Ljung says SoundCloud is not
                          going away “anytime in the foreseeable future.” I hope
                          that’s true, but I can’t help but feel a bit
                          skeptical. — and…{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Read More
                          </a>
                        </p>
                        <p className="author">
                          by{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <b>Megan Rose Dickey</b>
                          </a>
                          , 11 days ago
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="8">
                      <CardBody>
                        <h6 className="card-category text-danger">
                          <i className="fa fa-free-code-camp mr-1" />
                          Trending
                        </h6>
                        <CardTitle tag="h3">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Uber acqui-hires social app studio Swipe Labs
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          These issues might be making it a bit harder for Uber
                          to hire right now in the competitive Silicon Valley
                          job market. Acqui-hiring companies like it’s doing
                          here with Swipe Labs lets it roll up a bunch of good
                          talent — and…{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Read More
                          </a>
                        </p>
                        <p className="author">
                          by{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <b>Josh Constine</b>
                          </a>
                          , 2 days ago
                        </p>
                      </CardBody>
                    </Col>
                    <Col md="4">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/sections/rawpixel-comm.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="4">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/sections/jeremy-yap.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col md="8">
                      <CardBody>
                        <h6 className="card-category text-success">Startups</h6>
                        <CardTitle tag="h3">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            HBO and Netflix lead this year’s nominations
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          Streaming services once again top the list of this
                          year’s Emmy nominations – another indicator of the
                          shift in how today’s consumers are watching TV. HBO,
                          which has been available.{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Read More
                          </a>
                        </p>
                        <p className="author">
                          by{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <b>Sarah Perez</b>
                          </a>
                          , 14 Jul 2017
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END BLOGS 4 ********* */}
        <div className="blog-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title text-center">Latest Blogposts 4</h2>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/sections/val-vesa.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-warning">Travel</h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Learning different cultures through travel
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring which I enjoy
                      with my whole heart. I am alone, and feel the charm of
                      existence in this spot.
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="warning"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/sections/rodrigo-ardilha.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-info">Travel</h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Kick-Ass ways to disappear like a Ninja!
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      In the end, the judge ruled that Levandowski could be
                      brought in and examined, but that each question asked to
                      him would be vetted in advance and should have some basis
                      in evidence.
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/sections/federico-beccari.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-danger">Lifestyle</h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        We will breathe clean air and exercise
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Don't be scared of the truth because we need to restart
                      the human foundation in truth And I love you like Kanye
                      loves Kanye I love Rick Owens’ bed design but the back is
                      too high for the beams and angle of the ceiling...
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-plain card-blog text-center">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/sections/pedro-lastra.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Best Seller</h6>
                    <CardTitle tag="h3">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Readers Pick of The Month
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      “Raising equity is very expensive” In essence, it lets new
                      consumer businesses apply to raise funding on its
                      platform, and gives investors a new way to find and back
                      those tricks to finance their growing businesses.
                    </p>
                    <br />
                    <Button
                      className="btn-round"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Read More
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END BLOGS 4 ********* */}
        {/* ********* BLOGS 5 ********* */}
        <div className="blog-5">
          <Container>
            <h2 className="title text-center">Your Latest Blogpost 5</h2>
            <Row>
              <Col md="7">
                <Card
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/uriel-soberanes.jpg") +
                      ")"
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">
                      <i className="fa fa-newspaper-o mr-1" />
                      Lifestyle
                    </h6>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <CardTitle tag="h3">
                        Twenty-Something Travel - Virtual Wayfarer
                      </CardTitle>
                    </a>
                    <p className="card-description">
                      As happens in most of these hearings so far, that argument
                      led to a back-and-forth between Uber and Waymo’s lawyers
                      over the pre-trial discovery...
                    </p>
                    <CardFooter>
                      <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar img-raised mr-2"
                            src={require("assets/img/faces/joe-gardner-2.jpg")}
                          />
                          <span>Lynne Barrett</span>
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="5">
                <Card
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/forest-bg.jpg") +
                      ")"
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">
                      <i className="fa fa-newspaper-o mr-1" />
                      Media
                    </h6>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <CardTitle tag="h3">
                        The aesthetic quality of a product
                      </CardTitle>
                    </a>
                    <p className="card-description">
                      It clarifies the product’s structure. Better still, it can
                      make the product clearly express its function by making
                      use of the user’s intuition.
                    </p>
                    <CardFooter>
                      <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar img-raised mr-2"
                            src={require("assets/img/faces/erik-lucatero-2.jpg")}
                          />
                          <span>Eric J Barnes</span>
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="3">
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
                    <h6 className="card-category">
                      <i className="fa fa-newspaper-o mr-1" />
                      Design
                    </h6>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <CardTitle tag="h3">"Good Design"</CardTitle>
                    </a>
                    <p className="card-description">
                      Don't be scared of the truth because we need to restart
                      the human foundation in truth And I love you like Jay-z...
                    </p>
                    <CardFooter>
                      <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar img-raised mr-2"
                            src={require("assets/img/faces/kaci-baum-2.jpg")}
                          />
                          <span>Patricia Beatty</span>
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
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
                    <h6 className="card-category">
                      <i className="fa fa-newspaper-o mr-1" />
                      Development
                    </h6>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <CardTitle tag="h3">
                        In need of a good development
                      </CardTitle>
                    </a>
                    <p className="card-description">
                      Speed up your development time or get inspired with the
                      large number of example pages. You can jump start your
                      development with our pre-built example pages.
                    </p>
                    <CardFooter>
                      <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar img-raised mr-2"
                            src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                          />
                          <span>Robert Brandon</span>
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/vincent-versluis.jpg") +
                      ")"
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">
                      <i className="fa fa-newspaper-o mr-1" />
                      Technology
                    </h6>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <CardTitle tag="h3">A Little Adrift</CardTitle>
                    </a>
                    <p className="card-description">
                      But from the perspective of founders, there’s bound to be
                      some confusion. In an ideal world we will see a meeting of
                      the minds
                    </p>
                    <CardFooter>
                      <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar img-raised mr-2"
                            src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          />
                          <span>Ayo Michael</span>
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END BLOGS 5 ********* */}
      </div>
    </>
  );
}

export default SectionBlog;
