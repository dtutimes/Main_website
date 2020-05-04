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


export const ContentLoaderBlogSingle = () => (
  <ContentLoader 
    speed={2}
    width={606}
    height={475}
    viewBox="0 0 606 475"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="96" cy="325" r="17" /> 
    <rect x="77" y="11" rx="2" ry="2" width="400" height="280" /> 
    <rect x="124" y="317" rx="2" ry="2" width="140" height="6" /> 
    <rect x="124" y="327" rx="2" ry="2" width="140" height="6" />
  </ContentLoader>
)
export default ContentLoaderBlog;