import React from "react";
import axios from "axios";

import GalleryCarousel from './gallery-sections/GalleryCarousel';
import GalleryHeader from "components/Headers/GalleryHeader";

export default class GalleryLanding extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }

  componentDidMount = () => {
    axios.get("https://api.dtutimes.live/v1/gallery").then(res => {
      if (res && res.data) this.setState({ albums: res.data });
    });
  };

  render() {
    // console.log(this.state);
    return (
      <>
        <GalleryHeader />
        {this.state.albums.length && <GalleryCarousel albums={this.state.albums} /> }
      </>
    );
  }
}
