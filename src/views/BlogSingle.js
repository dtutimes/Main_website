import React from "react";
import Single from "./posts-sections/BlogSingle";

const BlogSingle = () => {
  document.documentElement.classList.remove("nav-open");
  return (
    <>
      <Single />
    </>
  );
};

export default BlogSingle;
