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
  height={400}
  viewBox="0 0 606 400"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
>
  <rect x="121" y="341" rx="3" ry="3" width="88" height="6" /> 
  <rect x="123" y="356" rx="3" ry="3" width="49" height="6" /> 
  <rect x="59" y="231" rx="3" ry="3" width="410" height="6" /> 
  <rect x="61" y="249" rx="3" ry="3" width="380" height="6" /> 
  <rect x="62" y="268" rx="3" ry="3" width="178" height="6" /> 
  <circle cx="80" cy="346" r="25" /> 
  <rect x="58" y="-3" rx="0" ry="0" width="439" height="223" />
</ContentLoader>
)
export default ContentLoaderBlog;