import React from "react";
import { Container, Row, Col } from "reactstrap";
import Carousel from "nuka-carousel";

import api from "api";

import EditionCard from "views/edition_section/editionCards";

class SectionHeader extends React.Component {
  state = {
    mob: false,
    editions: []
  };

  componentDidMount() {
    api.get("/edition").then(res => this.setState({ editions: res.data }));

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
      if (b <= 600) {
        this.setState({
          mob: true
        });
      } else {
        this.setState({
          mob: false
        });
      }
    });
  }
  render() {
    const { editions } = this.state;

    let columns = [];
    let carousels = [];

    for (let index = 0; index < editions.length; index++) {
      if (index < 9)
        columns.push(
          <Col md="4" className="mb-5" key={index}>
            <EditionCard
              title={editions[index].name}
              des="Aug-19-Oct-19"
              img={editions[index].link}
            />
          </Col>
        );
      else
        carousels.push(
          <EditionCard
            title={editions[index].name}
            img={editions[index].link}
            style={{ height: "400px" }}
          />
        );
    }

    return (
      <>
        <div className="wrapper">
          <div className="features-2 section text-center landing-section">
            <Container>
              <Row>{columns}</Row>
              <div className="text-left" style={{padding: '5rem 0'}}>
                  <h1>Archived</h1>
              </div>
              <Row>
                <Carousel
                  slidesToShow={this.state.mob ? 1 : 3}
                  swiping={true}
                  renderCenterLeftControls={({ previousSlide }) => (
                    <button
                      onClick={previousSlide}
                      className="btn-move-left btn-round btn btn-default"
                    >
                      <i className="nc-icon nc-minimal-left"></i>
                    </button>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <button
                      className="btn-move-right btn-round btn btn-default"
                      onClick={nextSlide}
                    >
                      <i className="nc-icon nc-minimal-right"></i>
                    </button>
                  )}
                  renderBottomCenterControls={""}
                  cellSpacing={20}
                >
                  {carousels}
                </Carousel>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default SectionHeader;
