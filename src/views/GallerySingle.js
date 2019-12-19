import React from "react";
import Axios from "axios";

// // Sections and Components
// import GallerySingleHeader from "components/Headers/GallerySingleHeader";
// import GalleryHeader from "components/Headers/GalleryHeader";
// import GalleryCarousel from "./gallery-sections/GalleryCarousel";

class GallerySingle extends React.Component {
  componentWillMount = () => {
    console.log(this.props.match.params);
    const { slug } = this.props.match.params;
    Axios.get(`https://api.dtutimes.live/v1/gallery/${slug}`).then(res => {
      this.setState({ slug: slug, album: res.data });
      //   console.log(this.state)
    });
  };

  render() {
    //   console.log(this.props.match)
    return <>{this.props.match.params.slug}</>;
  }
}

// class GallerySingle extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       slug: "",
//       album: {}
//     };
//   }
//   componentWillMount = () => this.setState({slug: ""})

//   componentDidMount = () => {
//     let { slug } = this.props.match.params;
//     console.log(slug);
//     if (slug === undefined) slug = "";
//     Axios.get(`https://api.dtutimes.live/v1/gallery/${slug}`).then(res =>
//       this.setState({ slug: slug, album: res.data })
//     );
//   };

//   render() {
//     console.log(this.state);
//     const { album } = this.state;
//     return (
//       <>
//         {album.name && (
//           <>
//             <GallerySingleHeader
//               title={album.name}
//               biliner={album.biliner}
//               img={album.album_imgUrl}
//             />
//             <GalleryCarousel albums={album} />
//           </>
//         )}
//         {!album.name && (
//           <>
//             <GalleryHeader />
//             {album && <GalleryCarousel albums={album} />}
//           </>
//         )}
//       </>
//     );
//   }
// }

export default GallerySingle;
