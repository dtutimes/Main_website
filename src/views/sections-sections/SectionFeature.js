import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionHeader() {
  return (
    <>
      <div className="section section-feature cd-section" id="features">
        {/* ********* FEATURES 1 ********* */}
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Why our product is the best</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-palette" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Beautiful Gallery</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END FEATURES 1 ********* */}
        {/* ********* FEATURES 2 ********* */}
        <div className="features-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Is this what you are looking for?</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here.
                </h5>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/jan-sendereks.jpg") +
                      ")"
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">Design</h6>
                    <div className="card-icon">
                      <i className="nc-icon nc-world-2" />
                    </div>
                    <p className="card-description">
                      Unlike fashionable design, it lasts many years – even in
                      today’s throwaway society
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-neutral"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-book mr-1" />
                        Show more
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/anders-jilden.jpg") +
                      ")"
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">UI Kits</h6>
                    <div className="card-icon">
                      <i className="nc-icon nc-single-copy-04" />
                    </div>
                    <p className="card-description">
                      Imagine if you could go to the profile of a friend and
                      instead of scrolling through...
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-neutral"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-book mr-1" />
                        Show more
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
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
                    <h6 className="card-category">Development</h6>
                    <div className="card-icon">
                      <i className="nc-icon nc-time-alarm" />
                    </div>
                    <p className="card-description">
                      For starters, it seemed like a good idea to keep a running
                      list of Vision investments.
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-neutral"
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-book mr-1" />
                        Show more
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END FEATURES 2 ********* */}
        {/* ********* FEATURES 3 ********* */}
        <div className="features-3">
          <Container>
            <Row>
              <Col md="6">
                <Row>
                  <Container>
                    <h2 className="title">Your life will be much easier</h2>
                  </Container>
                </Row>
                <Row>
                  <Col md="6">
                    <div className="info info-horizontal">
                      <div className="icon icon-success">
                        <i className="nc-icon nc-layout-11" />
                      </div>
                      <div className="description">
                        <h4 className="info-title">Components</h4>
                        <p>
                          The kit comes with a huge number of components
                          designed to look perfect together.
                        </p>
                        <Button
                          color="link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          See more
                        </Button>
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-warning">
                        <i className="nc-icon nc-palette" />
                      </div>
                      <div className="description">
                        <h4 className="info-title">Beautiful Gallery</h4>
                        <p>
                          Spend your time generating new ideas. You don't have
                          to think of implementing anymore.
                        </p>
                        <Button
                          color="link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          See more
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="info info-horizontal">
                      <div className="icon icon-danger">
                        <i className="nc-icon nc-touch-id" />
                      </div>
                      <div className="description">
                        <h4 className="info-title">Secured</h4>
                        <p>
                          Larger, yet dramatically thinner. More powerful, but
                          remarkably power is efficient.
                        </p>
                        <Button
                          color="link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          See more
                        </Button>
                      </div>
                    </div>
                    <div className="info info-horizontal">
                      <div className="icon icon-primary">
                        <i className="nc-icon nc-delivery-fast" />
                      </div>
                      <div className="description">
                        <h4 className="info-title">Fast Prototyping</h4>
                        <p>
                          Medium has a new head of product, while the startup
                          behind the defunct texting app...
                        </p>
                        <Button
                          color="link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          See more
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="ml-auto" md="5">
                <div className="iphone-container">
                  <img
                    alt="..."
                    src={require("assets/img/sections/iphone.png")}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END FEATURES 3 ********* */}
        {/* ********* FEATURES 4 ********* */}
        <div className="features-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Is this what you are looking for?</h2>
                <h5 className="description">
                  The more formalized version launching today brings a slate of
                  corporate partners and a more structured application review
                  process.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <div className="ipad-container">
                  <img
                    alt="..."
                    src={require("assets/img/sections/ipad.png")}
                  />
                </div>
              </Col>
              <Col className="offset-1" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i aria-hidden={true} className="nc-icon nc-atom" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">For Developers</h4>
                    <p>
                      The moment you use Paper Kit, you know you’ve never felt
                      anything like it. With a single use, is's a powerfull UI
                      Kit
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-success">
                    <i aria-hidden={true} className="nc-icon nc-ruler-pencil" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">For Designers Only</h4>
                    <p>
                      The moment you use Paper Kit, you know you’ve never felt
                      anything like it. With a single use, this powerfull UI Kit
                      lets you do more than ever before.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i aria-hidden={true} className="nc-icon nc-tie-bow" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Beautiful Examples</h4>
                    <p>
                      Speed up your development time or get inspired with the
                      large number of example pages.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END FEATURES 4 ********* */}
        {/* ********* FEATURES 5 ********* */}
        <div
          className="features-5 section-image"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/sections/the-how-photographer.jpg") +
              ")"
          }}
        >
          <Container>
            <Row>
              <div className="ml-auto mr-auto">
                <h2 className="title text-center">
                  Your life will be much easier
                </h2>
              </div>
            </Row>
            <Row>
              <Col className="ml-auto" sm="5">
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-atom" />
                  </div>
                  <h4 className="title">For Developers</h4>
                  <p>
                    While everyone technically has the feature now, that doesn’t
                    mean you’ll see it all the time. But in this case, the
                    feature wasn’t just randomly A/B tested.
                  </p>
                </div>
              </Col>
              <Col className="mr-auto" sm="5">
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-ruler-pencil" />
                  </div>
                  <h4 className="title">For Designers</h4>
                  <p>
                    Loveflutter has actually been around for a while, pivoting
                    from matches based on shared interests (innovative!) to now
                    focus on analyzing.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="bottom-line">
              <Col className="ml-auto" sm="5">
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-paper" />
                  </div>
                  <h4 className="title">Example Pages Included</h4>
                  <p>
                    As for the user backlash, it comes to the challenges faces
                    in building features to aid newcomers, which can impact its
                    growth and bottom line.
                  </p>
                </div>
              </Col>
              <Col className="mr-auto" sm="5">
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-time-alarm" />
                  </div>
                  <h4 className="title">Save Time</h4>
                  <p>
                    The feature itself had been developed via experimental
                    account, where it had tested how to better personalize its
                    service to end users.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END FEATURES 5 ********* */}
      </div>
    </>
  );
}

export default SectionHeader;
