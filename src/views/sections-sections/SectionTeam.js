import React from "react";
import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import TeamCard from 'components/TeamCard/teamCard';
import TeamHeader from 'components/Headers/ProfilePageHeader';

export default class SectionTeam extends React.Component {
  state = {
    activePill: "1",
    data: [],
    loaded: false
  };
  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://api.dtutimes.live/v1/user/'
    }).then(res => {
      const info = res.data
      this.setState({
        data: info,
        loaded: true
      })
      console.log(this.state.data)
    })
  }
  render() {
  if(this.state.loaded===true) {
  return (
    <>
      <div className="section section-team cd-section" id="teams">
        <TeamHeader />
        {/* ********* TEAM 1 *********/}
        {/* <div className="team-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Our Stunning Team 1</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category text-muted">
                          Product Manager
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category text-muted">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category text-muted">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Patrick Lencioni</CardTitle>
                        <h6 className="card-category text-muted">
                          Brand Manager
                        </h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Great teams do not hold back with one another. They are
                      unafraid to air their dirty laundry. They admit their
                      mistakes, their weaknesses and their concerns without fear
                      of reprisal.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-link btn-just-icon"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> */}
        {/* ********* END TEAM 1 ********* */}
        {/* ********* TEAM 2 ********* */}
        {/* <div
          className="team-2 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/jan-sendereks.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 2</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/faces/kaci-baum-1.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <CardTitle tag="h4">Alec Thompson</CardTitle>
                    <h6 className="card-category">Managing Partner</h6>
                    <CardFooter>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-twitter" />
                      </Button>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-facebook" />
                      </Button>
                      <Button
                        className="btn-link btn-just-icon"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-dribbble" />
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/faces/clem-onojeghuo-1.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <CardTitle tag="h4">George Lincoln</CardTitle>
                    <h6 className="card-category">Backend Hacker</h6>
                    <CardFooter>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-facebook" />
                      </Button>
                      <Button
                        className="btn-link btn-just-icon"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-dribbble" />
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/faces/joe-gardner-1.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <CardTitle tag="h4">Sophie West</CardTitle>
                    <h6 className="card-category">Photographer</h6>
                    <CardFooter>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-twitter" />
                      </Button>
                      <Button
                        className="btn-link btn-just-icon"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> */}
        {/* ********* END TEAM 2 ********* */}
        {/* ********* TEAM 3 ********* */}
        <div className="team-3">
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
            <Row>
            <div className="project-pills mt-4">
                <Nav className="nav-pills-info" pills>
                  <NavItem>
                    <NavLink
                      className={this.state.activePill === "1" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        this.setState({
                          activePill: "1"
                        })
                      }}
                    >
                      Council
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={this.state.activePill === "2" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        this.setState({
                          activePill: "2"
                        })
                      }}
                    >
                      Advisiors
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={this.state.activePill === "3" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        this.setState({
                          activePill: "3"
                        })
                      }}
                    >
                      Columnists
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={this.state.activePill === "4" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        this.setState({
                          activePill: "4"
                        })
                      }}
                    >
                      Designers
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={this.state.activePill === "5" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        this.setState({
                          activePill: "5"
                        })
                      }}
                    >
                      Photographers
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={this.state.activePill === "6" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        this.setState({
                          activePill: "6"
                        })
                      }}
                    >
                      Illustrators
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={this.state.activePill === "7" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        this.setState({
                          activePill: "7"
                        })
                      }}
                    >
                      Developers
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={this.state.activePill === "8" ? "active" : ""}
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        this.setState({
                          activePill: "8"
                        })
                      }}
                    >
                      Alumni Advisiors
                    </NavLink>
                  </NavItem>
                </Nav>
                {/* Pill panes */}
                <TabContent activeTab={"pill-" + this.state.activePill}>
                  <TabPane tabId={"pill-1"}>
                    <div className="space-top" />
                <Row>
                  <Col md="6">
                    <TeamCard name={this.state.data[1].name} bio={this.state.data[1].bio} img= {this.state.data[1].userImg} post="Editor-in-Chief" />
                  </Col>
                  <Col md="6">
                    <TeamCard name={this.state.data[3].name} bio={this.state.data[3].bio} img= {this.state.data[3].userImg} post="Editor-in-Chief"/>
                  </Col>
                  <Col md="6">
                    <TeamCard name={this.state.data[40].name} bio={this.state.data[40].bio} img= {this.state.data[40].userImg} post="Student Head"/>
                  </Col>
                  <Col md="6">
                    <TeamCard name={this.state.data[37].name} bio={this.state.data[37].bio} img= {this.state.data[37].userImg} post="Student Head" />
                  </Col>
                  <Col md="6">
                    <TeamCard name={this.state.data[0].name} bio={this.state.data[0].bio} img= {this.state.data[0].userImg} post="Head of Web Development"/>
                  </Col>
                  <Col md="6">
                  <TeamCard name={this.state.data[38].name} bio={this.state.data[38].bio} img= {this.state.data[38].userImg} post="Head Of Illustrations"/>
                  </Col>
                  <Col md="6">
                    <TeamCard name={this.state.data[31].name} bio={this.state.data[31].bio} img= {this.state.data[31].userImg} post="Head of Photography" />
                  </Col>
                  <Col md="6">
                    <TeamCard name={this.state.data[39].name} bio={this.state.data[39].bio} img= {this.state.data[39].userImg} post="Head of Photography"/>
                  </Col>
                  <Col md="6">
                    <TeamCard name={this.state.data[7].name} bio={this.state.data[7].bio} img= {this.state.data[7].userImg} post="Head Of Design"/>
                  </Col>
                  <Col md="6">
                  <TeamCard name={this.state.data[44].name} bio={this.state.data[44].bio} img= {this.state.data[44].userImg} post="Managing Editor" />
                  </Col>
                  <Col md="6">
                  <TeamCard name={this.state.data[42].name} bio={this.state.data[42].bio} img= {this.state.data[42].userImg} post="Managing Editior"/>
                  </Col>
                  <Col md="6">
                    <TeamCard name={this.state.data[19].name} bio={this.state.data[19].bio} img= {this.state.data[19].userImg} post="Student Coordinator"/>
                  </Col>
                </Row>
            </TabPane>
                  <TabPane tabId={"pill-2"}>
                    <Row>
                    <Col md="6">
                      <TeamCard name={this.state.data[19].name} bio={this.state.data[19].bio} img= {this.state.data[19].userImg} post="Student Coordinator"/>
                    </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId={"pill-3"}>
                    <Row>
                    <Col md="6">
                      <TeamCard name={this.state.data[49].name} bio={this.state.data[49].bio} img= {this.state.data[49].userImg} post="Associate Editior" />
                    </Col>
                    <Col md="6">
                      <TeamCard name={this.state.data[2].name} bio={this.state.data[2].bio} img= {this.state.data[2].userImg} post="Associate Editor"/>
                    </Col>
                    <Col md="6">
                      <TeamCard name={this.state.data[41].name} bio={this.state.data[41].bio} img= {this.state.data[41].userImg} post="Associate Editor"/>
                    </Col>
                    <Col md="6">
                      <TeamCard name={this.state.data[21].name} bio={this.state.data[21].bio} img= {this.state.data[21].userImg} post="Associate Editor" /> 
                    </Col>
                    <Col md="6">
                    <TeamCard name={this.state.data[23].name} bio={this.state.data[23].bio} img= {this.state.data[23].userImg} post="Associate Editor"/>
                    </Col>
                    <Col md="6">
                    <TeamCard name={this.state.data[27].name} bio={this.state.data[27].bio} img= {this.state.data[27].userImg} post="Associate Editor"/>
                    </Col>
                    <Col md="6">
                    <TeamCard name={this.state.data[4].name} bio={this.state.data[4].bio} img= {this.state.data[4].userImg} post="Associate Editor" />
                    </Col>
                    <Col md="6">
                    <TeamCard name={this.state.data[43].name} bio={this.state.data[43].bio} img= {this.state.data[43].userImg} post="Associate Editor"/>
                    </Col>
                    <Col md="6">
                    <TeamCard name={this.state.data[17].name} bio={this.state.data[17].bio} img= {this.state.data[17].userImg} post=""/>
                    </Col>
                    <Col md="6">
                    <TeamCard name={this.state.data[18].name} bio={this.state.data[18].bio} img= {this.state.data[18].userImg} post="" />
                    </Col>
                    <Col md="6">
                    <TeamCard name={this.state.data[20].name} bio={this.state.data[20].bio} img= {this.state.data[20].userImg} post=""/>
                    </Col>
                    <Col md="6">
                    <TeamCard name={this.state.data[22].name} bio={this.state.data[22].bio} img= {this.state.data[22].userImg} post=""/>
                    </Col>
                    <Col md="6">
                    <TeamCard name={this.state.data[25].name} bio={this.state.data[25].bio} img= {this.state.data[25].userImg} post="" />
                    </Col>
                    <Col md="6">
                    <TeamCard name={this.state.data[24].name} bio={this.state.data[24].bio} img= {this.state.data[24].userImg} post=""/>
                    </Col>
                    <Col md="6">
                    <TeamCard name={this.state.data[29].name} bio={this.state.data[29].bio} img= {this.state.data[29].userImg} post=""/>
                    </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId={"pill-4"}>
                    <Row>
                      <Col md="6">
                      <TeamCard name={this.state.data[45].name} bio={this.state.data[45].bio} img= {this.state.data[45].userImg} post="Associate Designer" />
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[61].name} bio={this.state.data[61].bio} img= {this.state.data[61].userImg} post="Associate Designer"/>
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[6].name} bio={this.state.data[6].bio} img= {this.state.data[6].userImg} post="Associate Designer"/>
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[82].name} bio={this.state.data[82].bio} img= {this.state.data[82].userImg} post="Associate Designer" />
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[5].name} bio={this.state.data[5].bio} img= {this.state.data[5].userImg} post=""/>
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[10].name} bio={this.state.data[10].bio} img= {this.state.data[10].userImg} post=""/>
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[8].name} bio={this.state.data[8].bio} img= {this.state.data[8].userImg} post="" />
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[9].name} bio={this.state.data[9].bio} img= {this.state.data[9].userImg} post=""/>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId={"pill-5"}>
                    <Row>
                      <Col md="6">
                      <TeamCard name={this.state.data[55].name} bio={this.state.data[55].bio} img= {this.state.data[55].userImg} post="" />
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[30].name} bio={this.state.data[30].bio} img= {this.state.data[30].userImg} post=""/>
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[34].name} bio={this.state.data[34].bio} img= {this.state.data[34].userImg} post=""/>
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[32].name} bio={this.state.data[32].bio} img= {this.state.data[32].userImg} post=""/>
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[35].name} bio={this.state.data[35].bio} img= {this.state.data[35].userImg} post=""/>
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[33].name} bio={this.state.data[33].bio} img= {this.state.data[33].userImg} post="" />
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[36].name} bio={this.state.data[36].bio} img= {this.state.data[36].userImg} post=""/>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId={"pill-6"}>
                    <Row>
                      <Col md="6">
                      <TeamCard name={this.state.data[12].name} bio={this.state.data[12].bio} img= {this.state.data[12].userImg} post="Assistant Illustrator" />
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[46].name} bio={this.state.data[46].bio} img= {this.state.data[46].userImg} post="Associate  Illustrator" />
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[13].name} bio={this.state.data[13].bio} img= {this.state.data[13].userImg} post=""/>
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[11].name} bio={this.state.data[11].bio} img= {this.state.data[11].userImg} post=""/>
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[15].name} bio={this.state.data[15].bio} img= {this.state.data[15].userImg} post=""/>
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[14].name} bio={this.state.data[14].bio} img= {this.state.data[14].userImg} post=""/>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId={"pill-7"}>
                  <Row>
                      <Col md="6">
                      <TeamCard name={this.state.data[56].name} bio={this.state.data[56].bio} img= {this.state.data[56].userImg} post="Associate Developer" />
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[51].name} bio={this.state.data[51].bio} img= {this.state.data[51].userImg} post="Associate Developer"/>
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[50].name} bio={this.state.data[50].bio} img= {this.state.data[50].userImg} post="Associate Developer"/>
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[60].name} bio={this.state.data[60].bio} img= {this.state.data[60].userImg} post="" />
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[57].name} bio={this.state.data[57].bio} img= {this.state.data[57].userImg} post=""/>
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[58].name} bio={this.state.data[58].bio} img= {this.state.data[58].userImg} post=""/>
                      </Col>
                      <Col md="6">
                      <TeamCard name={this.state.data[59].name} bio={this.state.data[59].bio} img= {this.state.data[59].userImg} post="" />
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId={"pill-8"}>
                  <Row>
                      <Col md="6">
                      </Col>
                      <Col md="6">
                      </Col>
                      <Col md="6">
                      </Col>
                      <Col md="6">
                      </Col>
                      <Col md="6">
                      </Col>
                      <Col md="6">
                      </Col>
                      <Col md="6">
                      </Col>
                      <Col md="6">
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </Row>


          </Container>
        </div>
        {/* ********* END TEAM 3 ********* */}
        {/* ********* TEAM 4 ********* */}
        {/* <div
          className="team-4 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/fabio-mangione.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 4</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                        />
                        <CardTitle tag="h4">Eric Thomson</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="instagram"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/joe-gardner-2.jpg")}
                        />
                        <CardTitle tag="h4">Sophia West</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="pinterest"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-pinterest" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                        />
                        <CardTitle tag="h4">Lucas Andrew</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      Great teams do not hold back with one another. They are
                      unafraid to air their dirty laundry. They admit their
                      mistakes, their weaknesses and their concerns without fear
                      of reprisal.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="youtube"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-youtube" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="instagram"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> */}
        {/* ********* END TEAM 4 ********* */}
        {/* ********* TEAM 5 ********* */}
        {/* <div
          className="team-5 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/martin-knize.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">The Executive Team 5</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/erik-lucatero-2.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Andrew Carnegie</CardTitle>
                        <h6 className="card-category">Project Manager</h6>
                        <p className="card-description">
                          If a team is to reach its potential, each player must
                          be willing to subordinate his personal goals.
                        </p>
                        <CardFooter>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-facebook" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-google-plus" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/kaci-baum-2.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Alec Thompson</CardTitle>
                        <h6 className="card-category">Founder</h6>
                        <p className="card-description">
                          Interdependent people combine their own efforts with
                          the efforts of others to achieve their greatest
                          success.
                        </p>
                        <CardFooter>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-pinterest" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Gine Andrew</CardTitle>
                        <h6 className="card-category">Web Designer</h6>
                        <p className="card-description">
                          When he took time to help the man up the mountain, lo,
                          he scaled it himself. Sticks in a bundle are
                          unbreakable.
                        </p>
                        <CardFooter>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-youtube" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-twitter" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-instagram" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="7">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">George West</CardTitle>
                        <h6 className="card-category">Backend Hacker</h6>
                        <p className="card-description">
                          I love you like Kanye loves Kanye. Don't be scared of
                          the truth because we need to restart the human
                          foundation.
                        </p>
                        <CardFooter>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral mr-1"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-instagram" />
                          </Button>
                          <Button
                            className="btn-just-icon btn-neutral"
                            color="link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-dribbble" />
                          </Button>
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> */}
        {/* ********* END TEAM 5 ********* */}
      </div>
    </>
  )}
  else {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
}
}

