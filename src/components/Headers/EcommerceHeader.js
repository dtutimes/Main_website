import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function EcommerceHeader() {
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/ecommerce/balmain_runway.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container className="text-center">
            <h1>Brace yourself!</h1>
            <h3>25% Off and Free global delivery for all products</h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default EcommerceHeader;
