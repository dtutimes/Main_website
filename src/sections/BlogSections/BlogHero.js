import React, { Component } from "react";
import { api } from "api";
import { Container, Col, Row } from "reactstrap";
import { Blob } from "react-blob";
// import { StickyContainer, Sticky } from "react-sticky";

import BlogTabs from "sections/BlogSections/BlogTabs";
import BlogSubsciber from "sections/BlogSections/BlogSubsciber";
import BlogPopular from "sections/BlogSections/BlogPopular";
import BlogMagzine from "./BlogMagzine";
import BlogPagination from "./BlogPagination";
export default class BlogHero extends Component {
  constructor(params) {
    super(params);
    this.state = {
      blogs: [],
      categories: [],
      pageNo: 1,
      lastPage: 0,
      totalPages: [],
      loading: true,
      mob: false,
      category: 0,
      cid: 0,
    };
  }
  componentDidMount() {
    if (this.state.category == 0) {
      api.get("/story?page=" + this.state.pageNo).then((res) => {
        this.setState({ blogs: res.data.data });
        let countPages = [];
        // console.log(res.data.meta.last_page);
        // for (let i = 1; i <= res.data.meta.last_page; i++) {
        //   countPages[i - 1] = i;
        // }
        this.setState({
          lastPage: res.data.meta.last_page,
          // totalPages: countPages,
        });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 1200);
      });
    }
    api.get("/category").then((res) => this.setState({ categories: res.data }));
    // console.log(this.state.categories);
    // window.addEventListener("resize", () => {
    //   const b = window.innerWidth;
    //   if (b <= 900) {
    //     this.setState({
    //       mob: true
    //     });
    //   } else {
    //     this.setState({
    //       mob: false
    //     });
    //   }
    // });
  }

  changePage(newpage, newposts) {
    this.setState({ pageNo: newpage, blogs: newposts, loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  changeCategory(category, posts, lpage) {
    this.setState({ cid: category, blogs: posts, loading: true, pageNo: 1, lastPage: lpage });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    const {
      blogs,
      categories,
      loading,
      pageNo,
      lastPage,
      mob,
      category,
      cid,
    } = this.state;
    if (window.innerWidth > 900) {
      return (
        <>
          <Container
            className="tim-container"
            style={{ minHeight: "200vh !important", overflow: "hidden" }}
          >
            <div
              style={{
                overflow: "hidden",
              }}
            >
              <BackgroundBlob />
            </div>
            <div id="description-areas">
              <Row>
                <Col md="8" sm="12">
                  <BlogTabs
                    loading={loading}
                    posts={blogs}
                    categories={categories}
                    changeCategory={this.changeCategory.bind(this)}
                    category={category}
                    lpage={lastPage}
                  />
                  <BlogPagination
                    pageNo={pageNo}
                    lastPage={lastPage}
                    changePage={this.changePage.bind(this)}
                    category={cid}
                  />
                </Col>
                <Col className="pt-5" md="4" sm="12" className="abc">
                  <div className="blog-attr">
                    <BlogPopular pageNo={pageNo} />
                    <hr
                      style={{
                        borderTop: "1px solid black",
                        borderColor: "black",
                      }}
                    />
                    <BlogMagzine />
                    <hr
                      style={{
                        borderTop: "1px solid black",
                        borderColor: "black",
                      }}
                    />
                    <BlogSubsciber />
                    <hr
                      style={{
                        borderTop: "1px solid black",
                        borderColor: "black",
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </>
      );
    } else {
      return (
        <>
          <Container
            className="tim-container"
            style={{ minHeight: "200vh !important", overflow: "hidden" }}
          >
            <div id="description-areas">
              <Row>
                <Col md="8" sm="12">
                  <BlogTabs
                    loading={loading}
                    posts={blogs}
                    categories={categories}
                    changeCategory={this.changeCategory.bind(this)}
                    category={category}
                  />
                  <BlogPagination
                    pageNo={pageNo}
                    lastPage={lastPage}
                    changePage={this.changePage.bind(this)}
                    category={cid}
                  />
                </Col>
                <Col className="pt-5" md="4" sm="12" className="abc">
                  <div className="blog-attr">
                    <BlogPopular pageNo={pageNo} />
                    <hr
                      style={{
                        borderTop: "1px solid black",
                        borderColor: "black",
                      }}
                    />
                    <BlogMagzine />
                    <hr
                      style={{
                        borderTop: "1px solid black",
                        borderColor: "black",
                      }}
                    />
                    <BlogSubsciber />
                    <hr
                      style={{
                        borderTop: "1px solid black",
                        borderColor: "black",
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </>
      );
    }
  }
}

const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="165vh"
    style={{
      position: "absolute",
      bottom: "8%",
      right: "35%",
      zIndex: 0,
      backgroundColor: "#F08BA5",
      color: "white",
      opacity: 0.25,
      fontSize: "50vh",
      ...style,
    }}
    {...props}
  />
);

// {/* <StickyContainer className="container">
//                   {/* Other elements can be in between `StickyContainer` and `Sticky`,
//         but certain styles can break the positioning logic used. */}
//                   <Sticky disableCompensation>
//                     {({
//                       style,

//                       // the following are also available but unused in this example
//                       isSticky,
//                       wasSticky,
//                       distanceFromTop,
//                       distanceFromBottom,
//                       calculatedHeight
//                     }) => (
//                       <header style={style}>
//                         <BlogSubsciber />
//                         <hr
//                           style={{
//                             borderTop: "1px solid black",
//                             borderColor: "black"
//                           }}
//                         />
//                         <BlogPopular />
//                         <hr
//                           style={{
//                             borderTop: "1px solid black",
//                             borderColor: "black"
//                           }}
//                         />
//                         <BlogMagzine />
//                         <hr
//                           style={{
//                             borderTop: "1px solid black",
//                             borderColor: "black"
//                           }}
//                         />
//                       </header>
//                     )}
//                   </Sticky>
//                 </StickyContainer> */}
