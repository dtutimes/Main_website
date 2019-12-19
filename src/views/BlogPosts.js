import React from "react";

import BlogPosts from "./posts-sections/Posts";
import BlogIndexHeader from "components/Headers/AboutUsHeader";

const Posts = () => {
  return (
    <>
      <BlogIndexHeader />
      <BlogPosts />
    </>
  );
};

export default Posts;
