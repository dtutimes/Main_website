import React, { Component } from "react";
import { getInstance } from "../../services/axiosInstance";
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
import PostCard from "./PostCard";
import { Link } from "react-router-dom";
const instance = getInstance();

class BlogPosts extends Component {
  state = {
    blogPosts: [],
    pageNo: 1,
    lastPage: 0,
    totalPages: []
  };
  handlePrevClick = async () => {
    if (this.state.pageNo >= 1) {
      let newpage = this.state.pageNo - 1;
      this.setState({ pageNo: newpage });
      //call for getting previous page's blog data
      instance
        .get("/story?page=" + newpage)
        .then(res => {
          let temp = [{ ...res.data }];
          let resData = temp[0]["data"];
          console.log(resData);
          this.setState({ blogPosts: resData });
        })
        .catch(err => {
          console.log(err);
        });
    }
    window.scrollTo(0, 0);
  };
  handleNextClick = async () => {
    if (this.state.pageNo < this.state.lastPage) {
      let newpage = this.state.pageNo + 1;
      this.setState({ pageNo: newpage });
      //call for getting next page's blog data
      instance
        .get("/story?page=" + newpage)
        .then(res => {
          let temp = [{ ...res.data }];
          let resData = temp[0]["data"];
          this.setState({ blogPosts: resData });
        })
        .catch(err => {
          console.log(err);
        });
    }
    window.scrollTo(0, 0);
  };
  componentDidMount() {
    instance
      .get("/story?page=" + this.state.pageNo)
      .then(res => {
        let temp = [{ ...res.data }];
        let resData = temp[0]["data"];

        let countPages = [];
        console.log(res.data.meta.last_page);
        for (let i = 1; i <= res.data.meta.last_page; i++) {
          countPages[i - 1] = i;
        }
        this.setState({
          blogPosts: resData,
          lastPage: res.data.meta.last_page,
          totalPages: countPages
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const posts = this.state.blogPosts;
    const rows = [];
    for (let i = 0; i < posts.length; i += 2) {
      rows.push(
        <Row key={Math.random()}>
          <Col md="6">
            <Card className="card-plain card-blog text-center">
              <div className="card-image">
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img
                    alt="..."
                    className="img img-raised"
                    src={posts[i].imgUrl}
                  />
                </a>
              </div>
              <CardBody>
                <h6 className="card-category text-warning">
                  posts[i].category.name
                </h6>
                <CardTitle tag="h3">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    {posts[i].title}
                  </a>
                </CardTitle>
                <p
                  className="card-description"
                  style={{ marginBottom: "1rem" }}
                >
                  {posts[i].biliner}
                </p>
                <Link
                  className="btn btn-primary btn-round"
                  color="warning"
                  to={`/story/${posts[i].slug}`}
                  onClick={e => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Read More
                </Link>
                <br />
                <br />
                <hr />
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
                    src={posts[i + 1].imgUrl}
                  />
                </a>
              </div>
              <CardBody>
                <h6 className="card-category text-warning">
                  posts[i + 1].category.name
                </h6>
                <CardTitle tag="h3">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    {posts[i + 1].title}
                  </a>
                </CardTitle>
                <p
                  className="card-description"
                  style={{ marginBottom: "1rem" }}
                >
                  {posts[i + 1].biliner}
                </p>
                <Link
                  className="btn btn-primary btn-round"
                  color="warning"
                  to={`/story/${posts[i + 1].slug}`}
                  onClick={e => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Read More
                </Link>
                <br />
                <br />
                <hr />
              </CardBody>
            </Card>
          </Col>
        </Row>
      );
    }

    return (
      <>
        <>
          <div className="section secion-blog cd-section" id="blogs">
            <div className="blog-4">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <h2 className="title text-center">DTU Blogs</h2>
                    <br />
                  </Col>
                </Row>
                {rows}
                <Row>
                  <Col md="12">
                    <div className="pull-left">
                      <Button
                        className="btn-link btn-move-left"
                        color="default"
                        size="sm"
                        onClick={this.handlePrevClick}
                      >
                        <i className="fa fa-angle-left mr-1" />
                        Previous Posts
                      </Button>
                    </div>
                    <div className="pull-right">
                      <Button
                        className="btn-link btn-move-right"
                        color="default"
                        size="sm"
                        onClick={this.handleNextClick}

                      >
                        Next Posts <i className="fa fa-angle-right" />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </>
        {/*  */}
      </>
    );
  }
}

export default BlogPosts;

// import React from "react";

// // reactstrap components

// // core components
