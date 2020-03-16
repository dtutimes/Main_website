import React from "react";
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container
} from "reactstrap";

import ContentLoaderBlog from "components/ContentLoader";
import BlogCard from "sections/BlogSections/BlogCard";
import BlogCategorySection from "sections/BlogSections/BlogCategorySection";

const BlogTabs = ({ categories, posts, loading }) => {
  const [hTabs, setHTabs] = React.useState("1");
  return (
    <>
      <div className="nav-tabs-navigation">
        <div className="nav-tabs-wrapper">
          <Nav id="tabs" role="tablist" tabs>
            <NavItem>
              <NavLink
                className={hTabs === "1" ? "active" : ""}
                onClick={() => {
                  setHTabs("1");
                }}
              >
                All
              </NavLink>
            </NavItem>
            {categories.map(item => ( 
              <NavItem key={item.id}>
                <NavLink
                  className={hTabs === item.id ? "active" : ""}
                  onClick={() => {
                    setHTabs(item.id);
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
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                <ContentLoaderBlog key={item} />
              ))}
            {!loading && <BlogCard posts={posts} />}
          </Container>
        </TabPane>
        {categories.map(item => (
          <TabPane tabId={"hTabs" + item.id} key={item.id}>
            <BlogCategorySection category={item} />
          </TabPane>
        ))}
      </TabContent>
    </>
  );
};

export default BlogTabs;
