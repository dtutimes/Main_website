import React from "react";
import axios from "axios";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";
import TeamHeader from "components/Headers/ProfilePageHeader";
import TeamCard from "./TeamCard";
export default class Example extends React.Component {
  // const [activePill, setActivePill] = React.useState("1");
  state = {
    activePill: "1",
    data: [],
    loaded: false
  };
  componentDidMount() {
    axios({
      method: "get",
      url: "https://api.dtutimes.live/v1/user/"
    }).then(res => {
      const info = res.data;
      this.setState({
        data: info,
        loaded: true
      });
      console.log(this.state.data);
    });
  }
  council(element) {
    if (element.position === "council") {
      return true;
    } else {
      return false;
    }
  }
  advisors(element) {
    if (element.position === "advisor") {
      return true;
    } else {
      return false;
    }
  }
  columnist(element) {
    if (element.position === "columnist") {
      return true;
    } else {
      return false;
    }
  }
  designer(element) {
    if (element.position === "designer") {
      return true;
    } else {
      return false;
    }
  }
  photographer(element) {
    if (element.position === "photographer") {
      return true;
    } else {
      return false;
    }
  }
  illustrator(element) {
    if (element.posiiton === "illustrator") {
      return true;
    } else {
      return false;
    }
  }
  developer(element) {
    if (element.position === "developer") {
      return true;
    } else {
      return false;
    }
  }
  alumni(element) {
    if (element.position === "alumni") {
      return true;
    } else {
      return false;
    }
  }
  render() {
    if (this.state.loaded === true) {
      const { data } = this.state;
      var arr1 = data.filter(this.council);
      var arr2 = data.filter(this.advisors);
      var arr3 = data.filter(this.columnist);
      var arr4 = data.filter(this.designer);
      var arr5 = data.filter(this.photographer);
      var arr6 = data.filter(this.illustrator);
      var arr7 = data.filter(this.developer);
      var arr8 = data.filter(this.alumni);
      return (
        <>
          <TeamHeader />
          <div style={{ marginTop: "2rem" }}>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">The Executive Team 3</h2>
                  <h5 className="description">
                    This is the paragraph where you can write more details about
                    your team. Keep you user engaged by providing meaningful
                    information.
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
                        onClick={e => {
                          e.preventDefault();
                          this.setState({
                            activePill: "1"
                          });
                        }}
                      >
                        Council
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          this.state.activePill === "2" ? "active" : ""
                        }
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          this.setState({
                            activePill: "2"
                          });
                        }}
                      >
                        Advisors
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={
                          this.state.activePill === "3" ? "active" : ""
                        }
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          this.setState({
                            activePill: "3"
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
                        onClick={e => {
                          e.preventDefault();
                          this.setState({
                            activePill: "4"
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
                        onClick={e => {
                          e.preventDefault();
                          this.setState({
                            activePill: "5"
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
                        onClick={e => {
                          e.preventDefault();
                          this.setState({
                            activePill: "6"
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
                        onClick={e => {
                          e.preventDefault();
                          this.setState({
                            activePill: "7"
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
                        onClick={e => {
                          e.preventDefault();
                          this.setState({
                            activePill: "8"
                          });
                        }}
                      >
                        Alumni Advisors
                      </NavLink>
                    </NavItem>
                  </Nav>
                  {/* Pill panes */}
                  <div style={{ display: "flex" }}>
                    <TabContent activeTab={"pill-" + this.state.activePill}>
                      <TabPane tabId={"pill-1"}>
                        <Row>
                          {arr1.map(element => {
                            return (
                              <Col md="6" key={element.id}>
                                <TeamCard
                                  name={element.name}
                                  bio={element.bio}
                                  img={element.userImg}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </TabPane>
                      <TabPane tabId={"pill-2"}>
                        <Row>
                          {arr2.map(element => {
                            return (
                              <Col md="6" key={element.id}>
                                <TeamCard
                                  name={element.name}
                                  bio={element.bio}
                                  img={element.userImg}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </TabPane>
                      <TabPane tabId={"pill-3"}>
                        <Row>
                          {arr3.map(element => {
                            return (
                              <Col md="3" key={element.id}>
                                <TeamCard
                                  name={element.name}
                                  bio={element.bio}
                                  img={element.userImg}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </TabPane>
                      <TabPane tabId={"pill-4"}>
                        <Row>
                          {arr4.map(element => {
                            return (
                              <Col md="6" key={element.id}>
                                <TeamCard
                                  name={element.name}
                                  bio={element.bio}
                                  img={element.userImg}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </TabPane>
                      <TabPane tabId={"pill-5"}>
                        <Row>
                          {arr5.map(element => {
                            return (
                              <Col md="6" key={element.id}>
                                <TeamCard
                                  name={element.name}
                                  bio={element.bio}
                                  img={element.userImg}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </TabPane>
                      <TabPane tabId={"pill-6"}>
                        <Row>
                          {arr6.map(element => {
                            return (
                              <Col md="6" key={element.id}>
                                <TeamCard
                                  name={element.name}
                                  bio={element.bio}
                                  img={element.userImg}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </TabPane>
                      <TabPane tabId={"pill-7"}>
                        <Row>
                          {arr7.map(element => {
                            return (
                              <Col md="6" key={element.id}>
                                <TeamCard
                                  name={element.name}
                                  bio={element.bio}
                                  img={element.userImg}
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </TabPane>
                      <TabPane tabId={"pill-8"}>
                        <Row>
                          {arr8.map(element => {
                            return (
                              <Col md="6" key={element.id}>
                                <TeamCard
                                  name={element.name}
                                  bio={element.bio}
                                  img={element.userImg}
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
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
  }
}
