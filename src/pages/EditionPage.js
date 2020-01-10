import React from 'react'
import {Container} from "reactstrap";
import Header from "components/PageHeaders/EditionHeader";
import LoaderComponent from "components/LoaderComponent";

import EditionTagline from "sections/EditionSections/EditionTagline";
import EditionFeature from "sections/EditionSections/EditionFeature";
const Sections = () => (
    <>
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

const EditionPage = () => <LoaderComponent component={<Sections />} />

export default EditionPage;