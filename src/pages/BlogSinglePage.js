import React from 'react'

import LoaderComponent from "components/LoaderComponent";
import BlogSingleHero from 'sections/BlogSingleSections/BlogSingleHero';
 
const Sections = () => (
    <>
        <BlogSingleHero />
    </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />

export default LandingPage;