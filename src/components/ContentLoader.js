import React from 'react';
import ContentLoader from "react-content-loader"

const ContentLoaderBlog = () => (
  <ContentLoader 
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="11" y="15" rx="3" ry="3" width="380" height="10" /> 
    <rect x="11" y="34" rx="3" ry="3" width="380" height="10" /> 
    <rect x="11" y="49" rx="3" ry="3" width="380" height="400" />
    <rect x="11" y="15" rx="3" ry="3" width="380" height="6" /> 
    <rect x="11" y="34" rx="3" ry="3" width="380" height="6" /> 
  </ContentLoader>
)

export default ContentLoaderBlog;