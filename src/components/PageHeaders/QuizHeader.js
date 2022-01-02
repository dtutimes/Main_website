// import React from "react";
// import { Container } from "reactstrap";
// import { Animated } from "react-animated-css";
// import { Blob } from "react-blob";

// const AboutHeader = () => {
//   // let pageHeader = React.createRef();
//   // React.useEffect(() => {
//   //   if (window.innerWidth > 991) {
//   //     const updateScroll = () => {
//   //       let windowScrollTop = window.pageYOffset / 3;
//   //       pageHeader.current.style.transform =
//   //         "translate3d(0," + windowScrollTop + "px,0)";
//   //     };
//   //     window.addEventListener("scroll", updateScroll);
//   //     return function cleanup() {
//   //       window.removeEventListener("scroll", updateScroll);
//   //     };
//   //   }
//   // });

//   return (
//     <>
//       <section
//         // ref={pageHeader}
//         className="section"
//         style={{
//           height: "100vh",
//           position: "relative",
//           overflow: "hidden"
//           // background: '#E2174C'
//         }}
//       >
//         <div className="filter " />
//         <BackgroundBlob />
//         <BackgroundBlobSmall />
//         <div
//           className="content-center"
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-10%, -10%)"
//           }}
//         >
//           <Container className="text-left">
//             <Animated
//               animationIn="bounceInDown"
//               animationInDelay={500}
//               isVisible={true}
//             >
//               <h1>About Us</h1>
//             </Animated>

//             <Animated
//               animationIn="fadeInUp"
//               animationInDelay={1000}
//               animationInDuration={1000}
//               isVisible={true}
//             >
//               <h3>Get to know the team bringing you your favourite news better!</h3>
//             </Animated>
//           </Container>
//         </div>
//       </section>
//     </>
//   );
// };

// const BackgroundBlob = ({ style, props }) => (
//   <Blob
//     size="150vh"
//     style={{
//       position: "absolute",
//       top: "-60%",
//       left: "25%",
//       zIndex: 0,
//       backgroundColor: "#BCF8EC",
//       color: "white",
//       opacity: 0.95,
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
//       backgroundColor: "#84DCC6",
//       color: "white",
//       opacity: 0.9,
//       fontSize: "50vh",
//       ...style
//     }}
//     {...props}
//   />
// );

// export default AboutHeader;







import React from "react";
import { Container } from "reactstrap";
import { Animated } from "react-animated-css";

const LandingHeader = () => {
  let pageHeader = React.createRef();
  return (
    <>
      <div
        className="page-headerx page-header-large pgfa"
        ref={pageHeader}
        
      >
        <div className="filter " />
        <div className="content-center">
          <Container className="text-left">
            <Animated
              animationIn="fadeIn"
              animationInDelay={500}
              isVisible={true}
            >
              <h1>
                <strong>Quiz</strong>
              </h1>
            </Animated>

            <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              animationInDuration={1000}
              isVisible={true}
            >
              <h3><strong>Get to know the team bringing you your favourite news better!</strong></h3>
            </Animated>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
