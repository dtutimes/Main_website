import React from 'react';
import ContentLoader from "react-content-loader";

export const ContentLoaderPopular = () => (
  <ContentLoader 
    height={60}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="11" y="15" rx="3" ry="3" width="380" height="10" /> 
    <rect x="11" y="34" rx="3" ry="3" width="380" height="10" /> 
    <rect x="11" y="49" rx="3" ry="3" width="38" height="10" />
  </ContentLoader>
)

export const ContentLoaderMagzine = () => (
  <ContentLoader 
    height={500}
    width={400}
    speed={1}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="11" y="15" rx="3" ry="3" width="380" height="400" /> 
    <rect x="11" y="49" rx="3" ry="3" width="38" height="10" />
  </ContentLoader>
)



const ContentLoaderBlog = () => (
  <ContentLoader 
    height={270}
    width={400}
    speed={1}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="11" y="15" rx="3" ry="3" width="380" height="10" /> 
    <rect x="11" y="34" rx="3" ry="3" width="380" height="10" /> 
    <rect x="11" y="49" rx="3" ry="3" width="380" height="200" />
  </ContentLoader>
)

export default ContentLoaderBlog;