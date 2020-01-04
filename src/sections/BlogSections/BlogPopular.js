import React, { Component } from "react";
import { Link } from "react-router-dom";
import { api } from "api";
import { ContentLoaderPopular } from "components/ContentLoader";
import { CardTitle } from "reactstrap";

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
        this.setState({ loading: false});
      }, 2000);
    });
  }

  render() {
    const { popular, loading } = this.state;
    return (
      <div>
        <h6>Popular Posts</h6>
        <p className="mb-3">Your daily dose of write some tag line here. </p>
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
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  {item.title}
                </a>
              </CardTitle>
              <Link to="" className="mt-0 small">
                Read More
              </Link>
            </div>
          ))}
      </div>
    );
  }
}
