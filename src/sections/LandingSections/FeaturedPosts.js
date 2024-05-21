import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Blob } from "react-blob";
import { newApi } from "api"
import { Loader } from "components/LoaderComponent";

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
export default class FeaturedPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loaded: false
    };
  }

  componentDidMount = () => {
    newApi
      .get("/blog/published-blogs")
      .then(res => {
        console.log(res.data);
        this.setState({ posts: res.data.data, loaded: true })
      });
  }

  render() {
    if (!this.state.loaded) return <Loader />;
    const { posts } = this.state;
    // console.log(posts);
    return (
      <>
        <div className="section" id="cards">
          <Container className="tim-container">
            <div className="">
              <img
                width="9%"
                style={{
                  minWidth: "4rem"
                }}
                src={require("assets/img/campus/post.png")}
                alt="Campus"
              />
              <h2
                style={{
                  marginBottom: "1.4rem",
                  marginTop: "1.3rem",
                  fontWeight: "5rem"
                }}
              >
                <span style={{ color: "#040403" }}>
                  <strong>Featured</strong>
                </span>{" "}
                <span style={{ color: "#6bd098 " }}>
                  <strong>Posts</strong>
                </span>
              </h2>
            </div>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "1.1rem",
                fontWeight: "2rem",
                color: "#494850",
                marginBottom: "2rem"
              }}
            >
              Find out what's new in the mind's of the brightest of DTU. From
              interviews of alumni and students alike to opinions on current
              affairs to musings about philosophy and the conundrums of
              Engineering, you never know what you will find here.
            </p>
            <Row>
              <Col md="4" sm="6">
                <Card className="card-blog cardx">
                  <div className="card-image">
                    <Link
                      to={"/blog/" + posts[0].slug}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      {/* <a href={"/blog/" + posts[0].slug}> */}
                      <img alt={posts[0].title} className="img" src={`https://team.dtutimes.com/api/v1/images/get/${posts[0].cover}?thumbnail=true`} />
                      {/* </a> */}
                    </Link>
                  </div>
                  <CardBody className="text-center">
                    <Link
                      to={"/blog/" + posts[0].slug}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <CardTitle tag="h4" style={{ color: "#EBEBEB" }}>
                        <strong>{posts[0].title}</strong>
                      </CardTitle>
                    </Link>
                    <div
                      className="card-description"
                      style={{ color: "#EBEBEB" }}
                    >
                      {posts[0].biliner}
                    </div>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="success"
                        href={"/blog/" + posts[0].slug}
                      //   onClick={() => {
                      //     window.open("/blog/" + posts[0].slug);
                      //   }}
                      >
                        View Article
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
                <Card className="card-blog cardx">
                  <div className="card-image">
                    <Link
                      to={"/blog/" + posts[3].slug}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <img alt={posts[3].title} className="img" src={`https://team.dtutimes.com/api/v1/images/get/${posts[3].cover}?thumbnail=true`} />
                    </Link>
                  </div>
                  <CardBody className="text-center">
                    <Link
                      to={"/blog/" + posts[3].slug}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <CardTitle tag="h4" style={{ color: "#EBEBEB" }}>
                        <strong>{posts[3].title}</strong>
                      </CardTitle>
                    </Link>
                    <div
                      className="card-description"
                      style={{ color: "#EBEBEB" }}
                    >
                      {posts[3].biliner}
                    </div>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="success"
                        href={"/blog/" + posts[3].slug}
                      //   onClick={() => {
                      //     window.open("/blog/" + posts[6].slug);
                      //   }}
                      >
                        View Article
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
                <Card className="card-blog cardx">
                  <div className="card-image">
                    <Link
                      to={"/blog/" + posts[6].slug}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <img alt={posts[6].title} className="img" src={`https://team.dtutimes.com/api/v1/images/get/${posts[6].cover}?thumbnail=true`} />
                    </Link>
                  </div>
                  <CardBody className="text-center">
                    <Link
                      to={"/blog/" + posts[6].slug}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <CardTitle tag="h4" style={{ color: "#EBEBEB" }}>
                        <strong>{posts[6].title}</strong>
                      </CardTitle>
                    </Link>
                    <div
                      className="card-description"
                      style={{ color: "#EBEBEB" }}
                    >
                      {posts[6].biliner}
                    </div>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="success"
                        href={"/blog/" + posts[6].slug}
                      //   onClick={() => {
                      //     window.open("/blog/" + posts[2].slug);
                      //   }}
                      >
                        View Article
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" sm="6">
                <Card className="card-blog cardx">
                  <div className="card-image">
                    <Link
                      to={"/blog/" + posts[1].slug}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <img alt={posts[1].title} className="img" src={`https://team.dtutimes.com/api/v1/images/get/${posts[1].cover}?thumbnail=true`} />
                    </Link>
                  </div>
                  <CardBody className="text-center">
                    <Link
                      to={"/blog/" + posts[1].slug}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <CardTitle tag="h4" style={{ color: "#EBEBEB" }}>
                        <strong>{posts[1].title}</strong>
                      </CardTitle>
                    </Link>
                    <div
                      className="card-description"
                      style={{ color: "#EBEBEB" }}
                    >
                      {posts[1].biliner}
                    </div>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="success"
                        href={"/blog/" + posts[1].slug}
                      //   onClick={() => {
                      //     window.open("/blog/" + posts[7].slug);
                      //   }}
                      >
                        View Article
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
                <Card className="card-blog cardx">
                  <div className="card-image">
                    <Link
                      to={"/blog/" + posts[4].slug}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <img alt="..." className="img" src={`https://team.dtutimes.com/api/v1/images/get/${posts[4].cover}?thumbnail=true`} />
                    </Link>
                  </div>
                  <CardBody className="text-center">
                    <Link
                      to={"/blog/" + posts[4].slug}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <CardTitle tag="h4" style={{ color: "#EBEBEB" }}>
                        <strong>{posts[4].title}</strong>
                      </CardTitle>
                    </Link>
                    <div
                      className="card-description"
                      style={{ color: "#EBEBEB" }}
                    >
                      {posts[4].biliner}
                    </div>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="success"
                        href={"/blog/" + posts[4].slug}
                      //   onClick={() => {
                      //     window.open("/blog/" + posts[4].slug);
                      //   }}
                      >
                        View Article
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>

                <Card className="card-blog cardx">
                  <div className="card-image">
                    <Link
                      to={"/blog/" + posts[7].slug}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <img alt={posts[7].title} className="img" src={`https://team.dtutimes.com/api/v1/images/get/${posts[7].cover}?thumbnail=true`} />
                    </Link>
                  </div>
                  <CardBody className="text-center">
                    <Link
                      to={"/blog/" + posts[7].slug}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <CardTitle tag="h4" style={{ color: "#EBEBEB" }}>
                        <strong>{posts[7].title}</strong>
                      </CardTitle>
                    </Link>
                    <div
                      className="card-description"
                      style={{ color: "#EBEBEB" }}
                    >
                      {posts[7].biliner}
                    </div>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="success"
                        href={"/blog/" + posts[7].slug}
                      //   onClick={() => {
                      //     window.open("/blog/" + posts[8].slug);
                      //   }}
                      >
                        View Article
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>


              </Col>

              <Col md="4" sm="6">
                <Card className="card-blog cardx">
                  <div className="card-image">
                    <Link to={"/blog/" + posts[2].slug} onClick={() => {
                      window.scrollTo(0, 0);
                    }}>
                      <img alt={posts[2].title} className="img" src={`https://team.dtutimes.com/api/v1/images/get/${posts[2].cover}?thumbnail=true`} />
                    </Link>
                  </div>
                  <CardBody className="text-center">
                    <Link to={"/blog/" + posts[2].slug} onClick={() => {
                      window.scrollTo(0, 0);
                    }}>
                      <CardTitle tag="h4" style={{ color: "#EBEBEB" }}>
                        <strong>{posts[2].title}</strong>
                      </CardTitle>
                    </Link>
                    <div
                      className="card-description"
                      style={{ color: "#EBEBEB" }}
                    >
                      {posts[2].biliner}
                    </div>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="success"
                        href={"/blog/" + posts[2].slug}
                      //   onClick={() => {
                      //     window.open("/blog/" + posts[5].slug);
                      //   }}
                      >
                        View Article
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
                <Card className="card-blog cardx">
                  <div className="card-image">
                    <Link to={"/blog/" + posts[5].slug} onClick={() => {
                      window.scrollTo(0, 0);
                    }}>
                      <img alt={posts[5].title} className="img" src={`https://team.dtutimes.com/api/v1/images/get/${posts[5].cover}?thumbnail=true`} />
                    </Link>
                  </div>
                  <CardBody className="text-center">
                    <Link to={"/blog/" + posts[5].slug} onClick={() => {
                      window.scrollTo(0, 0);
                    }}>
                      <CardTitle tag="h4" style={{ color: "#EBEBEB" }}>
                        <strong>{posts[5].title}</strong>
                      </CardTitle>
                    </Link>
                    <div
                      className="card-description"
                      style={{ color: "#EBEBEB" }}
                    >
                      {posts[5].biliner}
                    </div>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="success"
                        href={"/blog/" + posts[5].slug}
                      //   onClick={() => {
                      //     window.open("/blog/" + posts[1].slug);
                      //   }}
                      >
                        View Article
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>

                <Card className="card-blog cardx">
                  <div className="card-image">
                    <Link to={"/blog/" + posts[8].slug} onClick={() => {
                      window.scrollTo(0, 0);
                    }}>
                      <img alt={posts[8].title} className="img" src={`https://team.dtutimes.com/api/v1/images/get/${posts[8].cover}?thumbnail=true`} />
                    </Link>
                  </div>
                  <CardBody className="text-center">
                    <Link to={"/blog/" + posts[8].slug} onClick={() => {
                      window.scrollTo(0, 0);
                    }}>
                      <CardTitle tag="h4" style={{ color: "#EBEBEB" }}>
                        <strong>{posts[8].title}</strong>
                      </CardTitle>
                    </Link>
                    <div
                      className="card-description"
                      style={{ color: "#EBEBEB" }}
                    >
                      {posts[8].biliner}
                    </div>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="success"
                        href={"/blog/" + posts[8].slug}
                      //   onClick={() => {
                      //     window.open("/blog/" + posts[3].slug);
                      //   }}
                      >
                        View Article
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
