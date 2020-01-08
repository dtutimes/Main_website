import React from 'react'
import Header from "components/PageHeaders/GallerySingleHeader";
import Gallery from "sections/GallerySingleSections/GallerySingle";
import LoaderComponent from "components/LoaderComponent";

 
const Sections = () => (
    <>
        <Header />
        <Gallery />

    </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />

export default LandingPage;