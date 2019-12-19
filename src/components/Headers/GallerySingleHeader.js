import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function AboutUsHeader({ title, biliner, img }) {
  const imgUrl = img !== '' ? `url('${img}')` : "url(" + require("assets/img/campus/2.jpeg") + ")";
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
            <h1>{title}</h1>
            <h3>{biliner}</h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;
