import React from "react";
// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function SectionCards() {
  return (
    <>
      <div className="section section-cards section-gold">
        <div className="codrops-header">
          <Row>
            <Col lg="4" md="6">
              <div className="section-description">
                <h3 className="title">Latest Editions</h3>
                <h6 className="category">By DTU Times </h6>
                <h5 className="description">
                  We have gone above and beyond with options for you to organise
                  your information. From cards designed for blog posts, to
                  product cards or user profiles, you will have many options to
                  choose from. All the cards follow the Paper Kit style
                  principles and have a design that stands out.
                </h5>
              </div>
            </Col>
          </Row>
        </div>
        <section className="section-intro">
          <div className="isolayer isolayer--deco1 isolayer--shadow js">
            <ul className="grid grid--loaded">
              <li className="grid__item first-card">
                <a
                  className="grid__link"
                  href="/editions"
                //   onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="http://dtutimes.dtu.ac.in/img/48.png"
                  />
                </a>
              </li>
              <li className="grid__item second-card">
                <a
                  className="grid__link"
                  href="/editions"
                //   onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="http://dtutimes.dtu.ac.in/img/47.png"
                  />
                </a>
              </li>
              <li className="grid__item third-card">
                <a
                  className="grid__link"
                  href="/editions"
                //   onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="http://dtutimes.dtu.ac.in/img/42.jpg"
                  />
                </a>
              </li>

              

              {/* <li className="grid__item fourth-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="http://dtutimes.dtu.ac.in/img/47.png"
                  />
                </a>
              </li> */}
              <li className="grid__item fifth-card">
                <a
                  className="grid__link"
                  href="/editions"
                //   onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="http://dtutimes.dtu.ac.in/img/44.jpg"
                  />
                </a>
              </li>
              <li className="grid__item sixth-card">
                <a
                  className="grid__link"
                  href="/editions"
                //   onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="http://dtutimes.dtu.ac.in/img/43.jpg"
                  />
                </a>
              </li>
              <li className="grid__item seventh-card">
                <a
                  className="grid__link"
                  href="/editions"
                //   onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="http://dtutimes.dtu.ac.in/img/46.png"
                  />
                </a>
              </li>
              <li className="grid__item eight-card">
                <a
                  className="grid__link"
                  href="/editions"
                //   onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="http://dtutimes.dtu.ac.in/img/45.png"
                  />
                </a>
              </li>
              <li className="grid__item ninth-card">
                <a
                  className="grid__link"
                  href="/editions"
                //   onClick={e => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="http://dtutimes.dtu.ac.in/img/41.jpg"
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default SectionCards;
