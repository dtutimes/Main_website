import React, { Component } from "react";
import { api } from "api";
import { Container, Col, Row } from "reactstrap";

import BlogTabs from "sections/BlogSections/BlogTabs";
import BlogSubsciber from "sections/BlogSections/BlogSubsciber";


export class BlogHero extends Component {
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
          style={{ minHeight: "100vh !important" }}
        >
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
                <hr style={{borderTop: '1px solid black', borderColor: 'black'}} />
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}

export default BlogHero;
