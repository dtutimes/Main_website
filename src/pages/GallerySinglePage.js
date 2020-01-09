import React from 'react'
import Header from "components/PageHeaders/GallerySingleHeader";
import Gallery from "sections/GallerySingleSections/GallerySingle";
import LoaderComponent from "components/LoaderComponent";

 
class Sections extends React.Component {

    render(){
    return (
    <>
        <Header slug={this.props.slug}/>
        <Gallery slug={this.props.slug} />

    </>
    )
    };
}

const LandingPage = (props) =>{ 
const url = props.match.params
return (
<LoaderComponent component={<Sections slug={url} />} /> )}

export default LandingPage;