import React, { Component } from "react";
import { api } from "api";
import { Container, Col, Row } from "reactstrap";
import { Blob } from "react-blob";

import BlogTabs from "sections/BlogSections/BlogTabs";
import BlogSubsciber from "sections/BlogSections/BlogSubsciber";
import BlogPopular from "sections/BlogSections/BlogPopular";
import BlogMagzine from "./BlogMagzine";

export default class BlogHero extends Component {
  constructor(params) {
    super(params);
    this.state = {
      blogs: [],
      categories: [],
      pageNo: 1,
      lastPage: 0,
      totalPages: [],
      loading: true
    };
  }

  componentDidMount() {
    api.get("/story").then(res => {
      this.setState({ blogs: res.data.data });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 2000);
    });
    api.get("/category").then(res => this.setState({ categories: res.data }));
  }

  render() {
    const { blogs, categories, loading } = this.state;
    return (
      <>
        <Container
          className="tim-container"
          style={{ minHeight: "100vh !important", overflow: 'hidden'}}
        >
          <BackgroundBlob />
          <div id="description-areas">
            <Row>
              <Col md="8" sm="12">
                
                <BlogTabs
                  loading={loading}
                  posts={blogs}
                  categories={categories}
                />
              </Col>
              <Col className="pt-5" md="4" sm="12">
                <BlogSubsciber />
                <hr
                  style={{ borderTop: "1px solid black", borderColor: "black" }}
                />
                <BlogPopular />
                <hr
                  style={{ borderTop: "1px solid black", borderColor: "black" }}
                />
                <BlogMagzine />
                <hr
                  style={{ borderTop: "1px solid black", borderColor: "black" }}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}

const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="165vh"
    style={{
      position: "absolute",
      bottom: "10%",
      right: "35%",
      zIndex: 0,
      backgroundColor: "#F08BA5",
      color: "white",
      opacity: 0.25,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);
