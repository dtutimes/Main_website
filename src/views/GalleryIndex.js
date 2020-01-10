import React from "react";
import axios from "axios";

import GalleryCarousel from "./gallery-sections/GalleryCarousel";
import GalleryHeader from "../components/PageHeaders/GalleryHeader";
import { Animated } from "react-animated-css";

export default class GalleryLanding extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }

  componentDidMount = () => {
    document.documentElement.classList.remove("nav-open");
    axios.get("https://api.dtutimes.live/v1/gallery").then(res => {
      if (res && res.data) this.setState({ albums: res.data });
    });
  };

  render() {
    // console.log(this.state);
    return (
      <>
        <GalleryHeader />
        <Animated 
        animationIn="slideInLeft"
        animationInDelay={1600}
        animationInDuration={1000}
        isVisible={true}
        >
        {this.state.albums.length && (
          <GalleryCarousel albums={this.state.albums} />
        )}
        </Animated>
      </>
    );
  }
}
