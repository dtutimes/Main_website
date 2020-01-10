import React, { Component } from "react";
import { getInstance } from "../../services/axiosInstance";
import { Badge, Media, Container, Row, Col } from "reactstrap";

import { Parser } from "html-to-react";

const BlogContent = ({ blog }) => {
  const body = Parser().parse(blog.body);

  return (
    <>
      <div className="section pt-1">
        <Container>
          <Row>
            <Col md="8">
              <div
                className="blog-content"
                style={{ textAlign: "justify", color: "#494850" }}
              >
                <img
                  alt="..."
                  className="img-rounded img-responsive mb-5"
                  src={blog.imgUrl}
                />
                {body}
                <hr />
                <Container>
                  <Row>
                    <Media>
                      <a className="pull-left">
                        <div className="avatar big-avatar">
                          <Media
                            alt="..."
                            object
                            src={blog.user && blog.user.imgUrl}
                          />
                        </div>
                      </a>
                      <Media body>
                        <Media heading>
                          {blog.user && <span>{blog.user.name}</span>}
                        </Media>
                        <p>{blog.user && <span>{blog.user.bio}</span>}</p>
                      </Media>
                    </Media>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

class Single extends Component {
  state = {
    index: 0,
    currentBlogData: {},
    nextBlogData: {},
    blogBody: "",
    nextBlogSlug: "",
    currentblogSlug: "",
    blogPosts: [],
    loaded: false,
    scrollPosition: 0
  };

  componentDidMount() {
    //call for related posts
  }
  render() {
    if (this.state.loaded === true) {
      var { currentBlogData, blogBody, blogPosts } = this.state;
      if (!currentBlogData) {
        console.log("no data");
        return <div></div>;
      }
      if (!blogPosts) {
        console.log("no data");
        return <div></div>;
      }
      var htmlToReactParser = new Parser();
      blogBody = htmlToReactParser.parse(currentBlogData.body);
      return (
        <>
          <div className="wrapper">
            <div className="main">
              <div className="section section-white">
                <Container>
                  <Row>
                    <Col className="ml-auto mr-auto" md="8">
                      <div className="text-center">
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
                      <div className="article-content">{blogBody}</div>
                      <hr />
                      <Container>
                        <Row>
                          <Media>
                            <a className="pull-left">
                              <div className="avatar big-avatar">
                                <Media
                                  alt="..."
                                  object
                                  src={
                                    currentBlogData.user &&
                                    currentBlogData.user.imgUrl
                                  }
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
    } else {
      return (
        <>
          <p>Loading...</p>
        </>
      );
    }
  }
}

export default BlogContent;
