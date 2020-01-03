import React from 'react'

import Header from "components/PageHeaders/EditionHeader";
import LoaderComponent from "components/LoaderComponent";

import EditionTagline from "sections/EditionSections/EditionTagline";
import EditionFeature from "sections/EditionSections/EditionFeature";
 
const Sections = () => (
    <>
        <Header />
        <EditionTagline />
        <EditionFeature />
    </>
);

const EditionPage = () => <LoaderComponent component={<Sections />} />

export default EditionPage;