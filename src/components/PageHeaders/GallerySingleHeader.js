import React, { Component } from "react";
import { Container } from "reactstrap";
import { api } from "api";
import { Animated } from "react-animated-css";
class GallerySingleHeader extends Component {
  state = {
    album: {}
  };
  componentDidMount() {
    const { slug } = this.props.slug;
    api.get(`https://api.dtutimes.live/v1/gallery/${slug}`).then(res => {
      this.setState({ album: res.data });
      //   console.log(this.state)
    });
    console.log(slug);
  }
  render() {
    const { album } = this.state;
    const imgUrl =
      album.album_imgUrl !== ""
        ? `url('${album.album_imgUrl}')`
        : "url(" + require("assets/img/campus/2.jpeg") + ")";
    return (
      <>
        <div
          className="page-header page-header-small"
          style={{
            backgroundImage: imgUrl
          }}
        >
          <div className="filter filter-dark" />
          <div className="content-center">
            <Container>
              <Animated
                animationIn="fadeIn"
                animationInDelay={500}
                isVisible={true}
              >
                <h1><strong>{album.name}</strong></h1>
              </Animated>

              <Animated
                animationIn="fadeInUp"
                animationInDelay={1000}
                animationInDuration={1000}
                isVisible={true}
              >
                <h3><strong>{album.biliner}</strong></h3>
              </Animated>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default GallerySingleHeader;
