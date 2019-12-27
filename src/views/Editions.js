import React from 'react';

import SectionHeader from './sections-sections/SectionHeader';
import SectionFeature from './sections-sections/SectionFeature';
import LandingPageHeader from 'components/Headers/LandingPageHeader';
export default class Editions extends React.Component {
    render() {
        return (
        <>
        <LandingPageHeader/>
        <SectionFeature/>
        </>
        )
    }
}