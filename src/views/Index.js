import React from "react";
import IndexHeader from "components/Headers/IndexHeader.js";
import Section1 from "./homepage-sections/Section1";
import EditionCards from "./homepage-sections/abc";
const Index = () => (
  <>
    <IndexHeader />
    <div className="section section-gold"></div>
    <EditionCards />

    <Section1 />
  </>
);

export default Index;
