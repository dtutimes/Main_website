import React, { Component } from "react";
import { api } from "api";
// import styled from "styled-components";
import BlogSingleHeader from "components/PageHeaders/BlogSingleHeader";
import BlogContent from "./BlogContent";
import { ContentLoaderBlogSingle } from "components/ContentLoader";
import ProgressBar from "react-scroll-progress-bar";
import { newApi } from "api";
// const Progress = styled.div`
//   position: fixed;
//   background: linear-gradient(
//     to right,
//     rgb(225, 90, 151) ${props => props.scroll},
//     transparent 0
//   );
//   width: 100%;
//   height: 5px;
//   z-index: 1;
// `;
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
    var slug = window.location.pathname;
    slug = slug.substring(6);
    console.log(slug)
    newApi.get(`/blog/get-published-blog/${slug}`).then((res) => {
      this.setState({ blog: res.data.data })
      setTimeout(() => {
        this.setState({ loaded: true });
      }, 1200);
    });
    // slug = "/story" + slug;
    // // console.log(typeof(slug));
    // api.get(slug).then((res) => {
    //   this.setState({ blog: res.data });
    //   setTimeout(() => {
    //     this.setState({ loaded: true });
    //   }, 1200);
    // });
    // this.listenToScrollEvent();
  }

  // listenToScrollEvent = () => {
  //   document.addEventListener("scroll", () => {
  //     requestAnimationFrame(() => {
  //       // Calculates the scroll distance
  //       this.calculateScrollDistance();
  //     });
  //   });
  //   setTimeout(() => {
  //     this.setState({ loaded: true });
  //   }, 1200);
  // };

  // getDocHeight = () => {
  //   return Math.max(
  //     document.body.scrollHeight,
  //     document.documentElement.scrollHeight,
  //     document.body.offsetHeight,
  //     document.documentElement.offsetHeight,
  //     document.body.clientHeight,
  //     document.documentElement.clientHeight
  //   );
  // };

  // calculateScrollDistance = () => {
  //   const scrollTop = window.pageYOffset;
  //   const winHeight = window.innerHeight;
  //   const docHeight = this.getDocHeight();

  //   const totalDocScrollLength = docHeight - winHeight;
  //   const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);

  //   this.setState({
  //     scrollPosition: scrollPostion
  //   });

  // };

  render() {
    const { blog } = this.state;
    return (
      <div>
        <ProgressBar bgcolor="#e15a97" />
        {/* <Progress scroll={`${this.state.scrollPosition}%`}  /> */}
        <BlogSingleHeader
          timestamp={blog.published_at}
          title={blog.title}
          byliner={blog.byliner}
        />
        {!this.state.loaded && (
          <>
            {/* <div style={{ marginRight: "200px",/ marginLeft: "200px" }}> */}
            <ContentLoaderBlogSingle />
            {/* </div> */}
          </>
        )}
        {this.state.loaded && <BlogContent blog={blog} />}
      </div>
    );
  }
}
