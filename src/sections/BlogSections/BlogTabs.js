import React from "react";
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
} from "reactstrap";
import { api } from "api";
import ContentLoaderBlog from "components/ContentLoader";
import BlogCard from "sections/BlogSections/BlogCard";
// import BlogCategorySection from "sections/BlogSections/BlogCategorySection";

const BlogTabs = ({
  categories,
  posts,
  loading,
  category,
  changeCategory,
  lpage,
}) => {
  const [hTabs, setHTabs] = React.useState("1");
  return (
    <>
      <div className="nav-tabs-navigation">
        <div className="nav-tabs-wrapper">
          <Nav id="tabs" role="tablist" tabs>
            <NavItem>
              <NavLink
                style={{ cursor: "pointer" }}
                className={hTabs === "1" ? "active" : ""}
                onClick={() => {
                  setHTabs("1");
                  api.get("/story?page=1").then((res) => {
                    posts = res.data.data;
                    lpage = res.data.meta.last_page;
                    changeCategory(0, posts, lpage);
                  });
                }}
              >
                All
              </NavLink>
            </NavItem>
            {categories.map((item) => (
              <NavItem key={item.id}>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={hTabs === item.id ? "active" : ""}
                  onClick={() => {
                    setHTabs(item.id);
                    api.get("/category/" + item.id + "?page=1").then((res) => {
                      posts = res.data.data;
                      lpage = res.data.meta.last_page;
                      changeCategory(item.id, posts, lpage);
                    });
                  }}
                >
                  {item.name}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </div>
      <TabContent className="text-center" activeTab={"hTabs" + hTabs}>
        <TabPane tabId={"hTabs" + "1"}>
          <Container style={{ minHeight: "100vh" }}>
            {loading &&
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <ContentLoaderBlog key={item} />
              ))}
            {!loading && <BlogCard posts={posts} />}
          </Container>
        </TabPane>
        {/* {category != 0 &&} */}
        {categories.map((item) => (
          <TabPane tabId={"hTabs" + item.id} key={item.id}>
            <Container style={{ minHeight: "100vh" }}>
              {loading &&
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <ContentLoaderBlog key={item} />
                ))}
              {!loading && <BlogCard posts={posts} />}
            </Container>
          </TabPane>
        ))}
      </TabContent>
    </>
  );
};

export default BlogTabs;
