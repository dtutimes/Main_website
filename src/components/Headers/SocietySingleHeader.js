import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function SocietySingleHeader(props) {
  let pageHeader = React.createRef();
  // React.useEffect(() => {
  //   if (window.innerWidth > 991) {
  //     const updateScroll = () => {
  //       let windowScrollTop = window.pageYOffset / 3;
  //       pageHeader.current.style.transform =
  //         "translate3d(0," + windowScrollTop + "px,0)";
  //     };
  //     window.addEventListener("scroll", updateScroll);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll);
  //     };
  //   }
  // });
  return (
    <>
      <div
        className="page-header page-header-small"
        ref={pageHeader}
        style={{
          backgroundImage:
          "url(" + require("assets/img/campus/2.jpeg") + ")"
        }}
        // style={{
          
        //   backgroundImage:
        //     "url(" + require("assets/img/campus/2.jpeg") + ")"
        // }}
      >
        <div className="filter filter-primary" />
        <div className="content-center">
          <Container>
            <h1>
                {props.name}
            </h1>
            <h3>{props.des}</h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SocietySingleHeader;
