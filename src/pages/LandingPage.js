import React from 'react'

import Header from "components/PageHeaders/LandingHeader";
import LoaderComponent from "components/LoaderComponent";

import EditionsSection from "sections/LandingSections/EditionsSection";
import FeaturedPosts from 'sections/LandingSections/FeaturedPosts'
 
const Sections = () => (
    <>
        <Header />
        <EditionsSection />
        <FeaturedPosts />
    </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />

export default LandingPage;


