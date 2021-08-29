import React from "react";
import { Container, Row, Col, Button,Modal } from "reactstrap";
import { Animated } from "react-animated-css";
import api from 'api';
var https = require('https');
const agent = new https.Agent({  
  rejectUnauthorized: false
});
class SocHeader extends React.Component {
  
  
    // api.get('/edition', {httpsAgent: agent}).then(res => {
    //  this.setState({ data: res.data, loaded: true });
    // })
    // console.log(this.state.loaded)
  
  
  render() {
  
  return (
    
      <div
        className="page-header"
        ref={this.pageHeader}
        style={{
          backgroundImage:
            "url(" + require("assets/img/header/image-3.jpg") + ")",
          backgroundSize: "cover",
        }}
      >
      
        <div className="filter" />
        <div className="content-center">
          <Container>
            
            <Animated
              animationIn="zoomIn"
              animationInDelay={500}
              isVisible={true}
            >
              <h1 className="text-left"><strong>Societies of DTU</strong></h1>
            </Animated>
            <br></br>
            <Animated
              animationIn="fadeIn"
              animationInDelay={1000}
              isVisible={true}
            >
              <h3 className="text-left" >
              <strong>The societies of DTU are the ones to credit for the exhilarating 
              whirlwind of activity all year long. 
              DTU has technical teams, cultural societies and a slew of others for one and all to showcase their talents.</strong>
              </h3>
            </Animated>
            
          </Container>
          
        </div>

      </div>
    
  );
};
};
export default SocHeader;


// import React from "react";
// import { Container } from "reactstrap";
// import { Animated } from "react-animated-css";
// import { Blob } from "react-blob";

// const SocHeader = () => {
//   return (
//     <>
//       <section
//         className="section pb-0"
//         style={{
//           height: "100vh",
//           paddingTop: "10rem",
//           position: "relative",
//           overflow: "hidden",
//           paddingBottom: "0 !important"
//         }}
//       >
//         <div className="filter " />
//         <BackgroundBlob />
//         {/* <BackgroundBlobSmallBlue /> */}
//         <BackgroundBlobSmall />
//         <div className="content-center">
//           <Container className="text-left">
//             <Animated
//               animationIn="fadeIn"
//               animationInDelay={500}
//               isVisible={true}
//             >
//               <h1><strong>SOCIETIES OF DTU</strong></h1>
//             </Animated>
//               <br />
//               <br />
//             <Animated
//               animationIn="fadeInUp"
//               animationInDelay={1000}
//               animationInDuration={1000}
//               isVisible={true}
//             >
//               <h3 style={{ marginTop: "2rem", color: "#494850" }}>
//                 <strong>The societies of DTU are the ones to credit for the exhilarating
//                 whirlwind of activity all year long. <br />
//                 DTU has technical teams, cultural societies and a slew of others
//                 for one and all to showcase their talents.</strong>
//               </h3>
//             </Animated>
//           </Container>
//         </div>
//       </section>
//     </>
//   );
// };

// const BackgroundBlob = ({ style, props }) => (
//   <Blob
//     size="155vh"
//     style={{
//       position: "absolute",
//       top: "-60%",
//       left: "25%",
//       zIndex: 0,
//       backgroundColor: "#9CBFA7",
//       color: "white",
//       opacity: 0.98,
//       fontSize: "50vh",
//       ...style
//     }}
//     {...props}
//   />
// );

// const BackgroundBlobSmallBlue = ({ style, props }) => (
//   <Blob
//     size="40vh"
//     style={{
//       position: "absolute",
//       top: "-15%",
//       right: "10%",
//       zIndex: 0,
//       backgroundColor: "#64E9EE",
//       color: "white",
//       opacity: 0.9,
//       fontSize: "50vh",
//       ...style
//     }}
//     {...props}
//   />
// );

// const BackgroundBlobSmall = ({ style, props }) => (
//   <Blob
//     size="50vh"
//     style={{
//       position: "absolute",
//       top: "-15%",
//       left: "5%",
//       zIndex: 0,
//       backgroundColor: "#8FA998",
//       color: "white",
//       opacity: 0.9,
//       fontSize: "50vh",
//       ...style
//     }}
//     {...props}
//   />
// );

// export default SocHeader;