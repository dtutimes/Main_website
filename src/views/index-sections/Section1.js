import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components

function SectionCards() {
  return (
    <>
      <div className="section section-gray" id="cards">
        <Container className="tim-container">
          <div className="title">
            <h2>Cards</h2>
          </div>
          <h4 className="title">Blog cards</h4>
          <Row>
            <Col md="4" sm="6">
              <Card className="card-blog">
                <div className="card-image">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/neill-kumar.jpg")}
                    />
                  </a>
                </div>
                <CardBody className="text-center">
                  <CardTitle tag="h4">
                    We will create a great experience
                  </CardTitle>
                  <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div>
                  <CardFooter>
                    <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      View Article
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
              <Card data-color="purple">
                <CardBody className="text-center">
                  <h6 className="card-category">
                    <i className="fa fa-dribbble mr-1" />
                    Dribbble
                  </h6>
                  <CardTitle tag="h5">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      "Good Design Is as Little Design as Possible"
                    </a>
                  </CardTitle>
                  <p className="card-description">
                    Design makes an important contribution to the preservation
                    of the environment. It conserves resources and minimises
                    physical and visual pollution throughout the lifecycle of
                    the product....
                  </p>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-round btn-just-icon mr-1"
                      color="neutral"
                      href="#pablo"
                      outline
                      id="tooltip275070155"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-bookmark-o" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip275070155">
                      Bookmark
                    </UncontrolledTooltip>
                    <Button
                      className="btn-neutral btn-round"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-newspaper-o mr-1" />
                      Read
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <h6 className="author pull-left">Ronna Johnson</h6>
                  <span className="category-social text-info pull-right">
                    <i className="fa fa-twitter" />
                  </span>
                  <div className="clearfix" />
                  <p className="card-description">
                    {'"'}It clarifies the product's structure. Better still, it
                    can make the product clearly express its function by making
                    use of the{" "}
                    <a
                      className="text-danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      @mike
                    </a>
                    {"'"}s intuition. At best, it is self-explanatory.{'"'}
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" sm="6">
              <Card className="card-blog">
                <div className="card-image">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/anders-jilden.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <CardTitle tag="h4">Good Design Is Aesthetic</CardTitle>
                  <div className="card-description">
                    Cards are an interaction model that are spreading pretty
                    widely, in fact. What all of these have in common is that
                    they're pulling...
                  </div>
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
              <Card
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" +
                    require("assets/img/sections/rawpixel-com.jpg") +
                    ")"
                }}
              >
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <CardTitle tag="h3">
                      Ten Principles of {"“Good Design”"}
                    </CardTitle>
                  </a>
                  <p className="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens{"’ "}bed design but the back is...
                  </p>
                  <CardFooter>
                    <Button
                      className="btn-round"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-file-pdf-o mr-1" />
                      Download PDF
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col md="4" sm="6">
              <Card data-color="orange">
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
                    {'"'}Less, but better – because it concentrates on the
                    essential aspects, and the products are not burdened with
                    non-essentials. Back to purity, back to simplicity. At best,
                    it is self-explanatory.{'"'}
                  </p>
                </CardBody>
              </Card>
              <Card>
                <CardBody className="text-center">
                  <span className="category-social text-info pull-right">
                    <i className="fa fa-twitter" />
                  </span>
                  <div className="clearfix" />
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar-big img-raised border-gray"
                        src={require("assets/img/faces/kaci-baum-2.jpg")}
                      />
                    </a>
                    <CardTitle tag="h5">Kaci Baum</CardTitle>
                    <p className="category">
                      <a
                        className="text-danger"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        @kacibaum
                      </a>
                    </p>
                  </div>
                  <p className="card-description">
                    {'"'}Less, but better – because it concentrates on the
                    essential aspects, and the products are not burdened with
                    non-essentials.{'"'}
                  </p>
                </CardBody>
              </Card>
              <Card>
                <div className="card-image">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img"
                      src={require("assets/img/sections/david-marcu.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <Badge color="warning" pill>
                    Travel
                  </Badge>
                  <CardTitle tag="h5">
                    Currently at the San Francisco Museum of Modern Art
                  </CardTitle>
                  <hr />
                  <CardFooter>
                    <div className="author">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="avatar img-raised mr-2"
                          src={require("assets/img/rihanna.jpg")}
                        />
                        <span>Lord Alex</span>
                      </a>
                    </div>
                    <div className="stats">
                      <i className="fa fa-heart mr-1" />
                      5.3k
                    </div>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <h4 className="title">Text Coloured Cards</h4>
          <Row className="coloured-cards">
            <Col md="4" sm="6">
              <div className="card-big-shadow">
                <Card
                  className="card-just-text"
                  data-color="blue"
                  data-radius="none"
                >
                  <CardBody>
                    <h6 className="card-category">Best cards</h6>
                    <CardTitle tag="h4">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Blue Card
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      What all of these have in common is that they're pulling
                      information out of the app or the service and making it
                      relevant to the moment.
                    </p>
                  </CardBody>
                </Card>
                {/* end card */}
              </div>
            </Col>
            <Col md="4" sm="6">
              <div className="card-big-shadow">
                <Card
                  className="card-just-text"
                  data-color="green"
                  data-radius="none"
                >
                  <CardBody>
                    <h6 className="card-category">Best cards</h6>
                    <CardTitle tag="h4">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Green Card
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      What all of these have in common is that they're pulling
                      information out of the app or the service and making it
                      relevant to the moment.
                    </p>
                  </CardBody>
                </Card>
                {/* end card */}
              </div>
            </Col>
            <Col md="4" sm="6">
              <div className="card-big-shadow">
                <Card
                  className="card-just-text"
                  data-color="yellow"
                  data-radius="none"
                >
                  <CardBody>
                    <h6 className="card-category">Best cards</h6>
                    <CardTitle tag="h4">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Yellow Card
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      What all of these have in common is that they're pulling
                      information out of the app or the service and making it
                      relevant to the moment.
                    </p>
                  </CardBody>
                </Card>
                {/* end card */}
              </div>
            </Col>
            <Col md="4" sm="6">
              <div className="card-big-shadow">
                <Card
                  className="card-just-text"
                  data-color="brown"
                  data-radius="none"
                >
                  <CardBody>
                    <h6 className="card-category">Best cards</h6>
                    <CardTitle tag="h4">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Brown Card
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      What all of these have in common is that they're pulling
                      information out of the app or the service and making it
                      relevant to the moment.
                    </p>
                  </CardBody>
                </Card>
                {/* end card */}
              </div>
            </Col>
            <Col md="4" sm="6">
              <div className="card-big-shadow">
                <Card
                  className="card-just-text"
                  data-color="purple"
                  data-radius="none"
                >
                  <CardBody>
                    <h6 className="card-category">Best cards</h6>
                    <CardTitle tag="h4">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Purple Card
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      What all of these have in common is that they're pulling
                      information out of the app or the service and making it
                      relevant to the moment.
                    </p>
                  </CardBody>
                </Card>
                {/* end card */}
              </div>
            </Col>
            <Col md="4" sm="6">
              <div className="card-big-shadow">
                <Card
                  className="card-just-text"
                  data-color="orange"
                  data-radius="none"
                >
                  <CardBody>
                    <h6 className="card-category">Best cards</h6>
                    <CardTitle tag="h4">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Orange Card
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      What all of these have in common is that they're pulling
                      information out of the app or the service and making it
                      relevant to the moment.
                    </p>
                  </CardBody>
                </Card>
                {/* end card */}
              </div>
            </Col>
          </Row>
          <h4 className="title">Pricing cards</h4>
          <Row>
            <Col md="3">
              <Card className="card-pricing">
                <CardBody>
                  <h6 className="card-category">Enterprise</h6>
                  <CardTitle tag="h1">$139</CardTitle>
                  <ul>
                    <li>
                      <i className="fa fa-check text-success mr-1" />
                      Sharing Tools
                    </li>
                    <li>
                      <i className="fa fa-check text-success mr-1" />
                      Design Tools
                    </li>
                    <li>
                      <i className="fa fa-times text-danger mr-1" />
                      Private Messages
                    </li>
                    <li>
                      <i className="fa fa-times text-danger mr-1" />
                      Personal Brand
                    </li>
                    <li>
                      <i className="fa fa-times text-danger mr-1" />
                      Twitter API
                    </li>
                  </ul>
                  <Button
                    className="btn-round card-link"
                    color="success"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Get Started
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-pricing" data-color="orange">
                <CardBody>
                  <div className="card-icon">
                    <span className="icon-simple">
                      <i className="nc-icon nc-istanbul" />
                    </span>
                  </div>
                  <CardTitle tag="h3">$249</CardTitle>
                  <p className="card-description">
                    This is good if your company size is between 100 and 299
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
              <Card className="card-pricing">
                <CardBody>
                  <h6 className="card-category">Premium</h6>
                  <CardTitle tag="h1">€89</CardTitle>
                  <ul>
                    <li>
                      <b>10</b> Projects
                    </li>
                    <li>
                      <b>80</b> Team Members
                    </li>
                    <li>
                      <b>Unlimited</b> Contacts
                    </li>
                    <li>
                      <b>Unlimited</b> Messages
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
            <Col md="3">
              <Card
                className="card-pricing"
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/sections/mika-matin.jpg") + ")"
                }}
              >
                <CardBody>
                  <h6 className="card-category">Single User</h6>
                  <div className="card-icon">
                    <i className="nc-icon nc-user-run" />
                  </div>
                  <CardTitle tag="h3">$29</CardTitle>
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
          <h4 className="title">Full background cards</h4>
          <Row>
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
                  <h6 className="card-category">
                    <i className="fa fa-newspaper-o mr-1" />
                    Technology
                  </h6>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <CardTitle tag="h3">
                      The aesthetic quality of a product
                    </CardTitle>
                  </a>
                  <p className="card-description">
                    It clarifies the product{"’"}s structure. Better still, it
                    can make the product clearly express its function by making
                    use of the user{"’"}s intuition.
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
            <Col md="4">
              <Card
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" +
                    require("assets/img/sections/david-marcu.jpg") +
                    ")"
                }}
              >
                <CardBody>
                  <h6 className="card-category">Travel</h6>
                  <div className="card-icon">
                    <i className="nc-icon nc-spaceship" />
                  </div>
                  <p className="card-description">
                    Unlike fashionable design, it lasts many years – even in
                    today's throwaway society.
                  </p>
                  <CardFooter>
                    <Button
                      className="btn-round card-link"
                      color="danger"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-book mr-1" />
                      Read Article
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
                    require("assets/img/sections/leonard-cotte.jpg") +
                    ")"
                }}
              >
                <CardBody>
                  <Badge color="info" pill>
                    Web Design
                  </Badge>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <CardTitle tag="h3">
                      San Francisco Museum of Modern Art
                    </CardTitle>
                  </a>
                  <p className="card-description">
                    Nothing must be arbitrary or left to chance. Care and
                    accuracy in the design process show respect towards the
                    consumer.
                  </p>
                  <CardFooter>
                    <Button
                      className="btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-book mr-1" />
                      Read
                    </Button>
                    <Button
                      className="btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-clock-o mr-1" />
                      Bookmark
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <h4 className="title">Team Members Cards</h4>
          <Row>
            <Col md="3" sm="6">
              <Card className="card-profile">
                <div
                  className="card-cover"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/angelo-pantazis.jpg") +
                      ")"
                  }}
                />
                <div className="card-avatar border-white">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <CardTitle tag="h4">Ayo Michael</CardTitle>
                  <h6 className="card-category">Designer</h6>
                  <p className="card-description">
                    Hey there! Welcome to your user card. As you can see, it is
                    already looking great.
                  </p>
                </CardBody>
              </Card>
              {/* end card */}
            </Col>
            <Col md="3" sm="6">
              <Card className="card-profile">
                <div
                  className="card-cover"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/pavel-kosov.jpg") +
                      ")"
                  }}
                />
                <div className="card-avatar border-white">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/joe-gardner-2.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <CardTitle tag="h4">Audrey Hepburn</CardTitle>
                  <h6 className="card-category">Developer</h6>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
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
                      className="btn-just-icon mr-1"
                      color="facebook"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-facebook-square" />
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
              {/* end card */}
            </Col>
            <Col md="3" sm="6">
              <Card className="card-profile">
                <div className="card-avatar border-white">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/kaci-baum-2.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <CardTitle tag="h4">Laci Thor</CardTitle>
                  <h6 className="card-category">Marketing Specialist</h6>
                  <p className="card-description">
                    British actress and humanitarian recognised as a film and
                    fashion icon.
                  </p>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      outline
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      outline
                    >
                      <i className="fa fa-github-alt" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      outline
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
              {/* end card */}
            </Col>
            <Col md="3" sm="6">
              <Card className="card-profile">
                <div className="card-avatar border-white">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/erik-lucatero-2.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <CardTitle tag="h4">Joe Gardner</CardTitle>
                  <h6 className="card-category">Artist and Music Composer</h6>
                  <p className="card-description">
                    One of the co-founders. Joe drives the technical strategy of
                    the platform, customer support and brand.
                  </p>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-icon btn-border btn-round"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      outline
                    >
                      <i className="fa fa-check mr-1" />
                      Following
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
              {/* end card */}
            </Col>
          </Row>
          <h4 className="title">
            <small>Plain</small>
          </h4>
          <Row>
            <Col className="ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain">
                <div className="card-avatar border-white">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/placeholder.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <CardTitle tag="h4">Anonymous Tim</CardTitle>
                  <h6 className="card-category">A private guy</h6>
                  <p className="card-description">
                    Hey there! Welcome to your user card. As you can see, it is
                    already looking great. But if you want to tell us more about
                    yourself by adding details in the settings page.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-icon btn-rotate btn-round"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-cog mr-1" />
                    Settings
                  </Button>
                </CardFooter>
              </Card>
              {/* end card */}
            </Col>
            <Col className="ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain">
                <div className="card-avatar border-white">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/joe-gardner-2.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <CardTitle tag="h4">Joe Gardner</CardTitle>
                  <h6 className="card-category">Artist and Music Composer</h6>
                  <p className="card-description">
                    Joe Garnder is one of the co-founders and drives the
                    technical strategy of the platform, customer support and
                    brand. Talk with Joe only interesting topics.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-icon btn-border btn-round"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    outline
                  >
                    <i className="fa fa-check mr-1" />
                    Following
                  </Button>
                </CardFooter>
              </Card>
              {/* end card */}
            </Col>
          </Row>
          <h4 className="title">Image Cards</h4>
          <h4 className="title">
            <small>Cards with creators</small>
          </h4>
          <Row>
            <Col md="3" sm="6">
              <Card className="card-plain">
                <div className="card-image">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/img/sections/ilya-yakover.jpg")}
                    />
                  </a>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <img
                          alt="..."
                          className="img-circle img-no-padding img-responsive img-raised mr-2"
                          src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                        />
                      </div>
                      <span className="name">Eric Faker</span>
                    </a>
                    <div className="meta">Thinking in Textures</div>
                  </CardBody>
                </div>
              </Card>
            </Col>
            <Col md="4" sm="6">
              <div className="card-image text-center">
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/sections/rawpixel-coms.jpg")}
                  />
                </a>
                <CardBody className="details-center">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        className="img-circle img-no-padding img-responsive"
                        src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                      />
                      <div className="text">
                        <span className="name">Tom Hanks</span>
                        <div className="meta">Drawn on 23 Jan</div>
                      </div>
                    </div>
                  </a>
                </CardBody>
              </div>
            </Col>
            <Col md="3">
              <div className="card-image text-center">
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/sections/joshua-stannard.jpg")}
                  />
                </a>
                <CardBody className="details-center">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        className="img-circle img-no-padding img-responsive"
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                      <div className="text">
                        <span className="name">Sunset Bling</span>
                        <div className="meta">Lincoln</div>
                      </div>
                    </div>
                  </a>
                </CardBody>
              </div>
            </Col>
          </Row>
          <h4 className="title">
            <small>Cards with products</small>
          </h4>
          <Row>
            <Col md="3" sm="4">
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
                      <CardTitle tag="h5">Double Breasted Mini Dress</CardTitle>
                      <p className="card-description">Dresses &amp; Skirts</p>
                    </div>
                    <div className="actions">
                      <h5>$300</h5>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
            <Col md="3" sm="4">
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
                      <div className="meta">Dresses &amp; Skirts</div>
                    </div>
                    <div className="actions">
                      <Button className="btn-just-icon mr-1" color="link">
                        <i className="fa fa-star-o" />
                      </Button>
                      <Button className="btn-just-icon" color="link">
                        <i className="nc-icon nc-simple-delete" />
                      </Button>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
            <Col md="3" sm="4">
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
                      <Button className="btn-link btn-just-icon" color="danger">
                        234 <i className="nc-icon nc-favourite-28" />
                      </Button>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionCards;
