import React, { Component } from "react";
import { getInstance } from "../../services/axiosInstance";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import PostCard from "./PostCard";
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
        console.log(res.data.last_page)
        for (let i = 1; i <= res.data.last_page; i++) {
          countPages[i - 1] = i;
        }
        this.setState({
          blogPosts: resData,
          lastPage: res.data.last_page,
          totalPages: countPages
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentWillUnmount() {}

  render() {
    var { blogPosts, pageNo, lastPage, totalPages } = this.state;
    return (
      <>
        <div className="wrapper">
          <div className="main">
            <div className="section section-white">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center title" md="6">
                    <h2>DTU Blogs</h2>
                    <h3 className="title-uppercase">
                      <small>Written by bloggers for readers</small>
                    </h3>
                  </Col>
                </Row>

                {/* blog posts come here */}

                {blogPosts.map(post => {
                  return (
                    <div key={post["id"]}>
                      <PostCard
                        key={post["id"]}
                        backText={post["views"]}
                        title={post["title"]}
                        biliner={post["biliner"]}
                        image={post["imgURL"]}
                        slug={post["slug"]}
                        created_at={post["created_at"]["date"]}
                        image={post["imgUrl"]}
                        slug={post["slug"]}
                      />
                    </div>
                  );
                })}

                {/* blog posts end here */}

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
        </div>
      </>
    );
  }
}

export default BlogPosts;

