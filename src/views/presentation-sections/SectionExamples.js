import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function SectionExamples() {
  return (
    <>
      <div className="section section-examples section-dark" id="examples">
        <Container>
          <Row>
            <div className="title text-center">
              <h2 className="title">Ready to use Page Examples</h2>
              <h5 className="description">
                Paper Kit 2 Pro comes with a large number of example pages, that
                give you the option to quickly setup the basic flows for your
                website. From registering to building your profile or setting a
                blog, we've got you covered.
              </h5>
            </div>
          </Row>
          <Row>
            <Col md="4">
              <div className="details-text">Twitter Redesign</div>
              <Card className="card-image card-hover-effect">
                <Link to="/twitter-redesign" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/twitter.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Error Page (422)</div>
              <Card className="card-image">
                <Link to="/error-422" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/422.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Discover Page</div>
              <Card className="card-image">
                <Link to="/discover" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/discover.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Login Page</div>
              <Card className="card-image">
                <Link to="/login-page" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/login-page.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Blog Post</div>
              <Card className="card-image">
                <Link to="/blog-post" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/blog-post.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">User Settings</div>
              <Card className="card-image">
                <Link to="/settings" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/settings.png")}
                  />
                </Link>
              </Card>
            </Col>
            <Col md="4">
              <div className="details-text">Register Page</div>
              <Card className="card-image">
                <Link to="/register-page" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/register.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Public Profile</div>
              <Card className="card-image">
                <Link to="/profile-page" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/profile.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Product Page</div>
              <Card className="card-image">
                <Link to="/product-page" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/product.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Contact Us</div>
              <Card className="card-image">
                <Link to="/contact-us" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/contact-us.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Search Page</div>
              <Card className="card-image">
                <Link to="/search-with-sidebar" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/search.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Error Page (404)</div>
              <Card className="card-image">
                <Link to="/error-404" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/404.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Add Product Page</div>
              <Card className="card-image">
                <Link to="/add-product" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/add-product.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">About Us</div>
              <Card className="card-image card-hover-effect">
                <Link to="/about-us" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/about-us.png")}
                  />
                </Link>
              </Card>
            </Col>
            <Col md="4">
              <div className="details-text">Blog Posts</div>
              <Card className="card-image">
                <Link to="/blog-posts" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/blog-posts.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Error Page (500)</div>
              <Card className="card-image">
                <Link to="/error-500" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/500.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Landing Page</div>
              <Card className="card-image">
                <Link to="/landing-page" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/landing.png")}
                  />
                </Link>
              </Card>
              <div className="details-text">Ecommerce Page</div>
              <Card className="card-image">
                <Link to="/e-commerce" target="_blank">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/examples/ecommerce.png")}
                  />
                </Link>
              </Card>
              <Card className="card-image">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/examples/more-brown.png")}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionExamples;
