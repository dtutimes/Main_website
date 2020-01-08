import React from 'react'

import Header from "components/PageHeaders/GalleryHeader";
import Gallery from "sections/GallerySections/GalleryLandingSecton";
import LoaderComponent from "components/LoaderComponent";

 
const Sections = () => (
    <>
        <Header />
        <Gallery />

    </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />

export default LandingPage;