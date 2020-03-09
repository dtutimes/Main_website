import React from 'react'

import Header from "components/PageHeaders/LandingHeader";
import LoaderComponent from "components/LoaderComponent";

import EditionsSection from "sections/LandingSections/EditionsSection";
import FeaturedPosts from 'sections/LandingSections/FeaturedPosts';
// import LandingModal from 'sections/LandingSections/LandingModal';
const Sections = () => (
    <>
        <Header />
        <div>
        <EditionsSection />
        <FeaturedPosts />
        {/* window.setTimeout(() => {
            <LandingModal isOpen={true}/>
        }, 5000); */}
        </div>
    </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />

export default LandingPage;


