import React from "react";
// import axios from "axios";
import api from "api";
import SocietySingleHeader from "components/PageHeaders/SocietySingleHeader";
import SocietiesCard from "../sections/SocSingleSection/SocietiesCard";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import { Col,Row,Card,Button, Container } from "reactstrap";
import { Loader } from "components/LoaderComponent";
import Carousel from "nuka-carousel";
// import { PageTransition } from '@steveeeie/react-page-transition';
// import "./styles.css";
// import "react-tiger-transition/styles/main.min.css";
// import { Link, glide } from "react-tiger-transition";

// glide({
//   name: "glide-right",
//   direction: "right",
// });

let c = [];
let tt = [];
let t = [];
let m = [];
export default class SocietySingle extends React.Component {
  state = {
    data: [],
    loaded: false
  };

  componentDidMount() {
    c = [];
    tt = [];
    t = [];
    m = [];
    api.get("/society").then(res => {
      if (res && res.data) {
        this.setState({
          data: res.data,
          loaded: true
        });
      }
    });
  }
  componentWillUnmount() {}
  render() {
    const { location } = this.props;
    if (this.state.loaded) {
      for (let i = 0; i < this.state.data.length; i++) {
        if (this.state.data[i].category === "cultural") {
          c.push(i);
        } else if (this.state.data[i].category === "team") {
          tt.push(i);
        } else if (this.state.data[i].category === "technical") {
          t.push(i);
        } else {
          m.push(i);
        }
      }
      if (this.props.match.params.slug === "cultural") {
        return (
          <>
          
            <SocietySingleHeader
              name="Cultural Societies"
              des="The Cultural Societies of DTU blow the stereotypical image of an engineer to smithereens. These societies exude vibrancy and encompass every shade of the spectrum."
            />
            <Container>
            <Row>
            {c.map(cs => {
              return (
                
                <Col md="4" className="mt-5 p-0">
                  <Animated
                    animationIn="fadeIn"
                    animationInDelay={1500}
                    isVisible={true}
                  >
                  
                    <Link to={`/societies/${this.props.match.params.slug}/${this.state.data[cs].slug}`}>
                      <SocietiesCard 
                        img={this.state.data[cs].society_imgUrl}
                        name={this.state.data[cs].name}
                        des={this.state.data[cs].description}
                        head={this.state.data[cs].head_incharge}
                        prHead={this.state.data[cs].pr_incharge}
                        category = {this.state.data[cs].category}
                      />
                    </Link>
                    
                  </Animated>
                </Col>
                
              );
              
            })}
            </Row>
            </Container>
            
          </>
        );
      } else if (this.props.match.params.slug === "tech_team") {
        return (
          <>
            <SocietySingleHeader
              name="Tech Teams"
              des="Constantly pushing the limits of technology, channelizing their boundless creativity and foraying into uncharted territory, that’s a regular workday for DTU’s Tech Teams.
"
            />
            <Container>
            <Row>
            {tt.map(tts => {
              return (
                <Col md="4" className="mt-5">
                  <Animated
                    animationIn="fadeIn"
                    animationInDelay={1500}
                    isVisible={true}
                  >
                    <Link to={`/societies/${this.props.match.params.slug}/${this.state.data[tts].slug}`}>
                    <SocietiesCard
                      img={this.state.data[tts].society_imgUrl}
                      name={this.state.data[tts].name}
                      des={this.state.data[tts].description}
                      head={this.state.data[tts].head_incharge}
                      prHead={this.state.data[tts].pr_incharge}
                      category = {this.state.data[tts].category}
                    />
                    </Link>
                  </Animated>
                </Col>
              );
            })}
            </Row>
            </Container>
          </>
        );
      } else if (this.props.match.params.slug === "technical") {
        return (
          <>
            <SocietySingleHeader
              name="Technical Societies"
              des="The technical teams of DTU ensure that the stereotypical image of a coder is not tarnished. It lives up to its stellar reputation.
"
            />
            <Container>
            <Row>
            {t.map(ts => {
              return (
                <Col md="4" className="mt-5">
                  <Animated
                    animationIn="fadeIn"
                    animationInDelay={1500}
                    isVisible={true}
                  >
                    <Link to={`/societies/${this.props.match.params.slug}/${this.state.data[ts].slug}`}>
                    <SocietiesCard
                      img={this.state.data[ts].society_imgUrl}
                      name={this.state.data[ts].name}
                      des={this.state.data[ts].description}
                      head={this.state.data[ts].head_incharge}
                      prHead={this.state.data[ts].pr_incharge}
                      category = {this.state.data[ts].category}
                    />
                    </Link>
                  </Animated>
                </Col>
              );
            })}
           </Row> 
           </Container>
          </>
        );
      } else {
        return (
          <>
            <SocietySingleHeader
              name="Miscellaneous Societies"
              des="These societies are too unique to be labeled. These encompass social work, competitive quizzing. The range is so diverse, you name it, we have it."
            />
            <Container>
            <Row>
            {m.map(ms => {
              return (
                <Col md="4" className="mt-5">
                  <Animated
                    animationIn="fadeIn"
                    animationInDelay={1500}
                    isVisible={true}
                  >
                    <Link to={`/societies/${this.props.match.params.slug}/${this.state.data[ms].slug}`}>
                    <SocietiesCard
                      img={this.state.data[ms].society_imgUrl}
                      name={this.state.data[ms].name}
                      des={this.state.data[ms].description}
                      head={this.state.data[ms].head_incharge}
                      prHead={this.state.data[ms].pr_incharge}
                      category = {this.state.data[ms].category}
                    />
                    </Link>
                  </Animated>
                </Col>
              );
            })}
            </Row>
            </Container>
            
          </>
        );
      }
    } else {
      return <Loader/>
    }
  }
}
