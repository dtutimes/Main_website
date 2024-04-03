import React from "react";
// import axios from "axios";
import { api, newApi } from "api";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
// import TeamHeader from "components/Headers/ProfilePageHeader";
import TeamCard from "./TeamCard";
import "./team.css";
import { Loader } from "components/LoaderComponent";
import TeamCard2 from "./TeamCard2";
export default class Example extends React.Component {
  // const [activePill, setActivePill] = React.useState("1");
  state = {
    activePill: "1",
    data: [],
    loaded: false,
  };
  componentDidMount() {

    newApi.get("/user/get-team").then((res) => {
      console.log(res)
      const info = res.data.data;
      this.setState({
        data: info,
        loaded: true
      });
    });
    // api.get("/user").then(res => {
    //   console.log(res)
    //   const info = res.data;
    //   this.setState({
    //     data: info,
    //     loaded: true
    //   });
    // });

    // axios({
    //   method: "get",
    //   url: "https://api.dtutimes.com/v1/user/",
    // }).then((res) => {
    //   const info = res.data;
    //   this.setState({
    //     data: info,
    //     loaded: true,
    //   });
    // });
    // console.log(this.state.data);
  }
  Coordinator(element) {
    if (element.role === "Coordinator") {
      return true;
    } else {
      return false;
    }
  }
  // advisor(element) {
  //   if (element.position === "advisor") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  columnist(element) {
    if (element.role === "Columnist") {
      return true;
    } else {
      return false;
    }
  }
  designer(element) {
    if (element.role === "Designer") {
      return true;
    } else {
      return false;
    }
  }
  photographer(element) {
    if (element.role === "Photographer") {
      return true;
    } else {
      return false;
    }
  }
  illustrator(element) {
    if (element.role === "Illustrator") {
      return true;
    } else {
      return false;
    }
  }
  developer(element) {
    if (element.role === "Developer") {
      return true;
    } else {
      return false;
    }
  }
  alumni(element) {
    if (element.role === "Alumni") {
      return true;
    } else {
      return false;
    }
  }
  render() {
    if (this.state.loaded === true) {
      const { data } = this.state;
      const arr1 = data.filter(this.Coordinator);
      const arr2 = data.filter(this.columnist);
      const arr3 = data.filter(this.designer);
      const arr4 = data.filter(this.photographer);
      const arr5 = data.filter(this.illustrator);
      const arr6 = data.filter(this.developer);
      // var arr7 = data.filter(this.advisor);
      var arr8 = data.filter(this.alumni);

      return (
        <>
          {/* <TeamHeader /> */}
          <div style={{ marginTop: "2rem" }}>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">
                    <span style={{ color: "#040403" }}>
                      <strong>Team</strong>
                    </span>{" "}
                    <span style={{ color: "#6bd098" }}>
                      <strong>Times</strong>
                    </span>
                  </h2>
                  <h5 className="description" style={{ color: "#494850" }}>
                    The only way to create great things every day is with great
                    people who truly enjoy their job. So go ahead and meet this
                    tenacious group of people who work tirelessly behind the
                    scenes to bring you piping hot news, everyday.
                  </h5>
                </Col>

              </Row>
            </Container>
          </div>
          <div className="projects-1" style={{ paddingTop: "1rem" }}>
            <Container>
              <Row>
                <div className="project-pills">
                  <Nav className="nav-pills-danger" pills>
                    <NavItem>
                      <NavLink
                        className={
                          this.state.activePill === "1" ? "active" : ""
                        }
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          this.setState({
                            activePill: "1",
                          });
                        }}
                      >
                        Advisors
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          this.state.activePill === "2" ? "active" : ""
                        }
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          this.setState({
                            activePill: "2",
                          });
                        }}
                      >
                        Coordinator
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          this.state.activePill === "3" ? "active" : ""
                        }
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          this.setState({
                            activePill: "3",
                          });
                        }}
                      >
                        Columnists
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          this.state.activePill === "4" ? "active" : ""
                        }
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          this.setState({
                            activePill: "4",
                          });
                        }}
                      >
                        Designers
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          this.state.activePill === "5" ? "active" : ""
                        }
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          this.setState({
                            activePill: "5",
                          });
                        }}
                      >
                        Photographers
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          this.state.activePill === "6" ? "active" : ""
                        }
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          this.setState({
                            activePill: "6",
                          });
                        }}
                      >
                        Illustrators
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          this.state.activePill === "7" ? "active" : ""
                        }
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          this.setState({
                            activePill: "7",
                          });
                        }}
                      >
                        Developers
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={
                          this.state.activePill === "8" ? "active" : ""
                        }
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          this.setState({
                            activePill: "8",
                          });
                        }}
                      >
                        Alumni
                      </NavLink>
                    </NavItem>
                  </Nav>
                  {/* Pill panes */}
                  <div style={{ display: "flex" }}>
                    <TabContent activeTab={"pill-" + this.state.activePill}>
                      <TabPane tabId={"pill-2"}>
                        <Row>
                          {arr1.map((element) => {
                            return (
                              <Col md="3" key={element.id}>
                                <TeamCard
                                  name={element.name}
                                  bio={element.bio}
                                  img={`https://team.dtutimes.com/api/v1/images/get-avatar/${element.id}?thumbnail=true`}
                                  linkedin={element && element.linkedin}
                                  facebook={element && element.facebook}
                                  instagram={element && element.instagram}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </TabPane>
                      <TabPane tabId={"pill-3"}>
                        <Row>
                          {arr2.map((element) => {
                            return (
                              <Col md="3" key={element.id}>
                                <TeamCard
                                  name={element.name}
                                  bio={element.bio}
                                  img={`https://team.dtutimes.com/api/v1/images/get-avatar/${element.id}?thumbnail=true`}
                                  linkedin={element && element.linkedin}
                                  facebook={element && element.facebook}
                                  instagram={element && element.instagram}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </TabPane>
                      <TabPane tabId={"pill-4"}>
                        <Row>
                          {arr3.map((element) => {
                            return (
                              <Col md="3" key={element.id}>
                                <TeamCard
                                  name={element.name}
                                  bio={element.bio}
                                  img={`https://team.dtutimes.com/api/v1/images/get-avatar/${element.id}?thumbnail=true`}
                                  linkedin={element && element.linkedin}
                                  facebook={element && element.facebook}
                                  instagram={element && element.instagram}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </TabPane>
                      <TabPane tabId={"pill-5"}>
                        <Row>
                          {arr4.map((element) => {
                            return (
                              <Col md="3" key={element.id}>
                                <TeamCard
                                  name={element.name}
                                  bio={element.bio}
                                  img={`https://team.dtutimes.com/api/v1/images/get-avatar/${element.id}?thumbnail=true`}
                                  linkedin={element && element.linkedin}
                                  facebook={element && element.facebook}
                                  instagram={element && element.instagram}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </TabPane>
                      <TabPane tabId={"pill-6"}>
                        <Row>
                          {arr5.map((element) => {
                            return (
                              <Col md="3" key={element.id}>
                                <TeamCard
                                  name={element.name}
                                  bio={element.bio}
                                  img={`https://team.dtutimes.com/api/v1/images/get-avatar/${element.id}?thumbnail=true`}
                                  linkedin={element && element.linkedin}
                                  facebook={element && element.facebook}
                                  instagram={element && element.instagram}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </TabPane>
                      <TabPane tabId={"pill-7"}>
                        <Row>
                          {arr6.map((element) => {
                            return (
                              <Col md="3" key={element.id}>
                                <TeamCard
                                  name={element.name}
                                  bio={element.bio}
                                  img={`https://team.dtutimes.com/api/v1/images/get-avatar/${element.id}?thumbnail=true`}
                                  linkedin={element && element.linkedin}
                                  facebook={element && element.facebook}
                                  instagram={element && element.instagram}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </TabPane>
                      <TabPane tabId={"pill-1"}>
                        <Row>
                          <Col md="3">
                            <TeamCard2
                              name="Prof. J.P. Saini"
                              bio="Hon'ble Vice Chancellor"
                              img={require("assets/img/faculty/VC.jpg")}
                            // linkedin={element && element.linkedin}
                            // facebook={element && element.facebook}
                            // instagram={element && element.instagram}
                            />
                          </Col>
                          <Col md="3">
                            <TeamCard2
                              name="Prof. S. Indu"
                              bio="Dean, Student Welfare"
                              img={require("assets/img/faculty/sindu.jpg")}
                            // linkedin={element && element.linkedin}
                            // facebook={element && element.facebook}
                            // instagram={element && element.instagram}
                            />
                          </Col>
                          <Col md="3">
                            <TeamCard2
                              name="Prof. Rajeshwari Pandey"
                              bio="Associate Dean, Academics (UG)"
                              img={require("assets/img/faculty/rpandey.jpg")}
                            // linkedin={element && element.linkedin}
                            // facebook={element && element.facebook}
                            // instagram={element && element.instagram}
                            />
                          </Col>
                          <Col md="3">
                            <TeamCard2
                              name="Dr. Yashna Sharma"
                              bio="Assistant Professor, Dept. of Electronics & Communication Engineering"
                              img={require("assets/img/faculty/yashna.jpg")}
                            // linkedin={element && element.linkedin}
                            // facebook={element && element.facebook}
                            // instagram={element && element.instagram}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col md="3">
                            <TeamCard2
                              name="Mrs. Parinita Sinha"
                              bio="Assistant Professor, Dept. of Humanities"
                              img={require("assets/img/faculty/sinha.jpeg")}
                            // linkedin={element && element.linkedin}
                            // facebook={element && element.facebook}
                            // instagram={element && element.instagram}
                            />
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId={"pill-8"}>
                        <Row>
                          {arr8.map((element) => {
                            return (
                              <Col md="3" key={element.id}>
                                <TeamCard
                                  name={element.name}
                                  bio={element.bio}
                                  img={`https://team.dtutimes.com/api/v1/images/get-avatar/${element.id}?thumbnail=true`}
                                // linkedin={element && element.linkedin}
                                // facebook={element && element.facebook}
                                // instagram={element && element.instagram}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </TabPane>
                    </TabContent>
                  </div>
                </div>
              </Row>
            </Container>
          </div>
        </>
      );
    } else {
      return <Loader />;
    }
  }
}
