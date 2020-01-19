import React, { Component } from "react";
import { Link } from "react-router-dom";
import { api } from "api";
import { ContentLoaderPopular } from "components/ContentLoader";
import { CardTitle } from "reactstrap";
import { Blob } from "react-blob";

const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="25vh"
    style={{
      position: "absolute",
      top: "10%",
      left: "35%",
      zIndex: 0,
      backgroundColor: "#F08BA5",
      color: "white",
      opacity: 0.25,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);

export default class BlogPopular extends Component {
  state = {
    popular: [],
    loading: true
  };

  componentDidMount() {
    api.get("/story").then(res => {
      this.setState({
        popular: [res.data.data[0], res.data.data[1], res.data.data[3]]
      });
      setTimeout(() => {
        this.setState({ loading: false });
      }, 2000);
    });
  }

  render() {
    const { popular, loading } = this.state;
    return (
      <div style={{ position: "relative", overflow: "hidden", }}>
        {/* height commented out */}
        {/* <BackgroundBlob /> */}
        <h6>Popular Posts</h6>
        <p className="mb-3">Our readers loved these articles so much, we just had to give them a space of their own</p>
        {loading &&
          [1, 2, 3].map(item => (
            <div key={item}>
              <ContentLoaderPopular />
            </div>
          ))}
        {!loading &&
          popular.map(item => (
            <div className="mb-1" key={item.id}>
              <CardTitle tag="h3" className="mb-0">
                <a
                  href={`/story/${item.slug}`}
                  // onClick={e => window.scrollTo(0, 0)}
                >
                  {item.title}
                </a>
              </CardTitle>
              {/* <Link to="" className="mt-0 small">
                Read More
              </Link> */}
            </div>
          ))}
      </div>
    );
  }
}
