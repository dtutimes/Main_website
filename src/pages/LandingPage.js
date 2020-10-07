import React from 'react'

import Header from "components/PageHeaders/LandingHeader";
import LoaderComponent from "components/LoaderComponent";
import EditionsSection from "sections/LandingSections/EditionsSection";
import FeaturedPosts from 'sections/LandingSections/FeaturedPosts';
import {Helmet} from 'react-helmet';
const title = "DTU Times"

const Sections = () => {
    return(
    <div>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Header />
        <div>
        <EditionsSection />
        <FeaturedPosts />
        {/* window.setTimeout(() => {
            <LandingModal isOpen={true}/>
        }, 5000); */}
        </div>
    </div>
)};

const LandingPage = () => <LoaderComponent component={<Sections />} />

export default LandingPage;


