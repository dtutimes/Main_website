import React from "react";
// import { Link } from "react-router-dom";
import ItemsCarousel from "react-items-carousel";

//styles
import "./styles/landing.scss";



const noOfItems = 12;
const noOfCards = 3;

export default class GalleryCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItemIndex: 0,
      data: [],
      loaded: false,
      mob: false
    };
  }

  componentDidMount = () => {
    this.interval = setInterval(this.tick, 2500);
    const a = window.innerWidth;
    if (a <= 800) {
      this.setState({
        mob: true
      });
    } else {
      this.setState({
        mob: false
      });
    }
    window.addEventListener("resize", () => {
      const b = window.innerWidth;
      if (b <= 800) {
        this.setState({
          mob: true
        });
      } else {
        this.setState({
          mob: false
        });

      }
    });
  };
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  }));

  render() {
    //   console.log('Gallery Carousal ')
    // // console.log(this.state);
    // console.log(this.props)
    return (
      <>
        <ItemsCarousel
          infiniteLoop={true}
          gutter={0}
          activePosition={"center"}
          chevronWidth={60}
          disableSwipe={false}
          alwaysShowChevrons={true}
          numberOfCards={this.state.mob ? 1 : 3}
          slidesToScroll={1}
          outsideChevron={false}
          showSlither={false}
          firstAndLastGutter={false}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={value =>
            this.setState({ activeItemIndex: value })
          }
          rightChevron={<i className="nc-icon nc-minimal-right" style={{color:'white',fontSize:'1.8em',fontWeight:'800'}} />}
          leftChevron={<i className="nc-icon nc-minimal-left" style={{color:'white',fontSize:'1.8em',fontWeight:'800'}} />}
          className="gal-flex"
        >
          {this.props.albums &&
            this.props.albums.map(album => {
              const style = {
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)),'+ 'url("' + album.album_imgUrl + '")',
                backgroundSize: "cover",
                
              };
              return (
                <div
                  className="item text-center align-center"
                  key={album.slug}
                  style={style}
                >
                  <h5 className="" >
                    <a className="item-inner" href={`/gallery/${album.slug}`}>{album.name}</a>
                  </h5>
                </div>
              );
            })}
        </ItemsCarousel>
      </>
    );
  }
}
