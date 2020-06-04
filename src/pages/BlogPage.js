import React from "react";

import Header from "components/PageHeaders/BlogHeader";
import LoaderComponent from "components/LoaderComponent";
import BlogHero from "sections/BlogSections/BlogHero";
import { Helmet } from "react-helmet";
const title = "DTU Times | Blog";
const Sections = () => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header />
    <div style={{ margin: "3rem" }}></div>
    <BlogHero />
  </>
);

const LandingPage = () => {
  document.documentElement.classList.remove("nav-open");
  return <LoaderComponent component={<Sections />} />;
};

export default LandingPage;
