import React, { Component } from "react";
import { getInstance } from "../../services/axiosInstance";
import { Badge, Button, Card, Media, Container, Row, Col } from "reactstrap";
import BlogPostHeader from "components/Headers/BlogPostHeader.js";
import AboutUsHeader from "components/Headers/AboutUsHeader";
import ColorNavbar from "components/Navbars/ColorNavbar.js";
var HtmlToReactParser = require("html-to-react").Parser;
const instance = getInstance();
class Single extends Component {
  state = {
    index: 0,
    currentBlogData: {},
    nextBlogData: {},
    blogBody: "",
    nextBlogSlug: "",
    currentblogSlug: "",
    blogPosts: []
  };
  componentDidMount() {
    var slug = window.location.pathname;
    instance
      .get(slug)
      .then(res => {
        const { data } = res;
        var htmlToReactParser = new HtmlToReactParser();
        var blogBody = htmlToReactParser.parse(data.body);
        if (data) {
          this.setState({
            currentBlogData: data,
            nextBlogData: data.prev,
            blogBody: blogBody,
            nextBlogSlug: data.prev.slug,
            currentblogSlug: data.slug
          });
        }
      })
      .catch(err => {
        console.log(err);
      });

      //call for related posts
      instance
      .get("/story?page=1")
      .then(res => {
        let temp = [{ ...res.data }];
        let resData = temp[0]["data"];
        console.log("hhhhhhhhhhhhhhhhh")
        console.log(resData);
        this.setState({
          blogPosts: resData,
        });
      })
      .catch(err => {
        console.log(err);
      });

  }
  render() {
    var { currentBlogData, blogBody, blogPosts } = this.state;
    if (!currentBlogData) {
      console.log("no data");
      return <div></div>;
    }
    if(!blogPosts) {
        console.log("no data");
        return <div></div>;
    }
    var htmlToReactParser = new HtmlToReactParser();
    blogBody = htmlToReactParser.parse(currentBlogData.body);
    return (
      <>
      <AboutUsHeader />
        {/* <ColorNavbar /> */}
        <div className="wrapper">
          <div className="main">
            <div className="section section-white">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center title" md="6">
                    <h2>{currentBlogData && currentBlogData.title}</h2>
                  </Col>
                </Row>
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <div className="text-center">
                    <Row md="8">
                          <a>
                            <img
                              alt="..."
                              className="img-rounded img-responsive"
                              src={currentBlogData && currentBlogData.imgUrl}
                            />
                          </a>
                        </Row>
                        <br />
                        <br />
                        <br />
                      <Badge className="main-tag" color="warning">
                        Trending
                      </Badge>
                      <h6 className="title-uppercase">
                        {currentBlogData.media &&
                          " " + currentBlogData.media[0].created_at}
                      </h6>
                    </div>
                  </Col>
                  <Col className="ml-auto mr-auto" md="8"> 
                    <div className="article-content">
                      {blogBody}
                    </div>
                    <hr />
                    <Container>
                      <Row>
                        <Media>
                          <a
                            className="pull-left"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <div className="avatar big-avatar">
                              <Media
                                alt="..."
                                object
                                src={require("assets/img/faces/kaci-baum-2.jpg")}
                              />
                            </div>
                          </a>
                          <Media body>
                            <Media heading>
                              {currentBlogData.user && (
                                <span>{currentBlogData.user.name}</span>
                              )}
                            </Media>
                            <p>
                              {currentBlogData.user && (
                                <span>{currentBlogData.user.bio}</span>
                              )}
                            </p>
                          </Media>
                        </Media>
                      </Row>
                    </Container>
                  </Col>
                </Row>
                {/* <Row>
                  <div className="related-articles">
                    <h3 className="title">Recent Articles</h3>
                    <legend />
                    <Container>
                      <Row>
                        <Col md="4">
                          <a>
                            <img
                              alt="..."
                              className="img-rounded img-responsive"
                              src={blogPosts && (blogPosts[0].imgUrl)}
                            />
                          </a>
                          <p className="blog-title">
                            {blogPosts && (blogPosts[0].title)}
                          </p>
                        </Col>
                        <Col md="4">
                          <a>
                            <img
                              alt="..."
                              className="img-rounded img-responsive"
                              src={blogPosts && (blogPosts[0].imgUrl)}
                            />
                          </a>
                              <p className="blog-title">{blogPosts && (blogPosts[0].title)}</p>
                        </Col>
                        <Col md="4">
                          <a>
                            <img
                              alt="..."
                              className="img-rounded img-responsive"
                              src={blogPosts && (blogPosts[0].imgUrl)}
                            />
                          </a>
                          <p className="blog-title">
                          {blogPosts && (blogPosts[0].title)}
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Row> */}
              </Container>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Single;

