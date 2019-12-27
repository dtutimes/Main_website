import React from "react";

import BlogPosts from "./posts-sections/Posts";
import BlogIndexHeader from "components/Headers/AboutUsHeader";

const Posts = () => {
  document.documentElement.classList.remove("nav-open");
  return (
    <>
      <BlogIndexHeader />
      <BlogPosts />
    </>
  );
};

export default Posts;
