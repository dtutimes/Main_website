import React from "react";
// import { Container } from "reactstrap";
import Header from "components/PageHeaders/EditionHeader";
import LoaderComponent from "components/LoaderComponent";

// import EditionTagline from "sections/EditionSections/EditionTagline";
import EditionFeature from "sections/EditionSections/EditionFeature";
import {Helmet} from 'react-helmet';
const title = "DTU Times | Editions"
const Sections = () => (
  <>
  <Helmet>
    <title>{title}</title>
  </Helmet>
    <Header />
    {/* <div style={bgStyle}> */}

    {/* <Container> */}
    {/* <EditionTagline /> */}

    <EditionFeature />
    {/* </Container> */}
    {/* </div> */}
    {/* </div> */}
  </>
);

const EditionPage = () => {
  document.documentElement.classList.remove("nav-open");
  return (
    <>
      {" "}
      <LoaderComponent component={<Sections />} />
    </>
  );
};

export default EditionPage;
