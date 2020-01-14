import React, { Component } from "react";
import { api } from "api";
import { Row, Card, Col, CardBody, CardTitle } from "reactstrap";
import { ContentLoaderMagzine } from "components/ContentLoader";

export default class BlogMagzine extends Component {
  state = {
    magzines: [],
    loading: true
  };

  componentDidMount() {
    api.get("/edition").then(res => {
      this.setState({ magzines: [res.data[0], res.data[1]] });
      // console.log("hhelllllloooooooooooooooooo")
      console.log(this.state.magzines);
      setTimeout(() => {
        this.setState({ loading: false });
      }, 2000);
    });
  }

  render() {
    const { magzines, loading } = this.state;

    return (
      <div>
        <h6 className="mb-3">Latest Editions</h6>
        <Card className="card-plain card-blog">
          <Row>
            {loading &&
              [1, 2].map(item => (
                <Col md="6" key={item}>
                  <ContentLoaderMagzine />
                </Col>
              ))}
            {!loading &&
              magzines.length &&
              magzines.map(magzine => (
                <Col md="6" key={magzine.id}>
                  <div className="card-image">
                    <img alt="..." className="img" src={magzine.imgUrl} />
                  </div>
                  <CardTitle tag="h5" className="text-center mt-2">
                    <a href="/editions" >
                      {magzine.name}
                    </a>
                  </CardTitle>
                </Col>
              ))}
          </Row>
        </Card>
      </div>
    );
  }
}
