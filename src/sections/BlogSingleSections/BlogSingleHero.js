import React, { Component } from "react";
import { api } from "api";
import styled from "styled-components";
import BlogSingleHeader from "components/PageHeaders/BlogSingleHeader";
import BlogContent from './BlogContent'
import {ContentLoaderBlogSingle} from "components/ContentLoader";
const Progress = styled.div`
  position: fixed;
  background: linear-gradient(
    to right,
    rgb(225, 90, 151) ${props => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 5px;
  z-index: 1;
`;

export default class BlogSingleHero extends Component {
  constructor(props) {
      super(props);
      this.state = {
        blog: {},
        scrollPosition: 0,
        loaded: false,
      };
  }

  componentDidMount() {
    const slug = window.location.pathname;
    api.get(slug).then(res => this.setState({blog: res.data}));
    this.listenToScrollEvent();
  }

  listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        // Calculates the scroll distance
        this.calculateScrollDistance();
      });
    });
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1200);
  };

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = this.getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);

    this.setState({
      scrollPosition: scrollPostion
    });
  
  };

  render() {
    const {blog} = this.state;
    return (
      <div>
        <Progress scroll={`${this.state.scrollPosition}%`}  />
        <BlogSingleHeader timestamp={blog.updated_at} title={blog.title} biliner={blog.biliner} />
        {!this.state.loaded && <ContentLoaderBlogSingle />}
        {this.state.loaded && <BlogContent blog={blog} />}
      </div>
    );
  }
}
