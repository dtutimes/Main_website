import React from "react";
import api from "api";
import GalleryCarousel from "./GalleryCarousel";
// import { Animated } from "react-animated-css";

export default class GalleryLanding extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }

  componentDidMount = () => {
    document.documentElement.classList.remove("nav-open");
    api.get("/gallery").then(res => {
      if (res && res.data) this.setState({ albums: res.data });
    });
  };

  render() {
    // console.log(this.state);
    return (
      <>
        {this.state.albums.length && (
          <GalleryCarousel albums={this.state.albums} />
        )}
      </>
    );
  }
}
