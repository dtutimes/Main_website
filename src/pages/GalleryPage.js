import React from 'react'

import Header from "components/PageHeaders/GalleryHeader";
import Gallery from "sections/GallerySections/GalleryLandingSecton";
import LoaderComponent from "components/LoaderComponent";
import {Helmet} from 'react-helmet';
const title = "DTU Times | Gallery"
 
const Sections = () => (
    <>
    <Helmet>
        <title>{title}</title>
    </Helmet>
        <Header />
        <Gallery />

    </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />

export default LandingPage;