import React from "react";

import Header from "components/PageHeaders/BlogHeader";
import LoaderComponent from "components/LoaderComponent";
import BlogHero from "sections/BlogSections/BlogHero";

const Sections = () => (
  <>
    <Header />
    <BlogHero />
  </>
);

const LandingPage = () => {
  document.documentElement.classList.remove("nav-open");
  return <LoaderComponent component={<Sections />} />;
};

export default LandingPage;
