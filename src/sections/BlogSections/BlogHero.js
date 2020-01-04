import React, { Component } from "react";
import { api } from "api";

import BlogTabs from "sections/BlogSections/BlogTabs";

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
        <BlogTabs loading={loading} posts={blogs} categories={categories} />
      </>
    );
  }
}

export default BlogHero;
