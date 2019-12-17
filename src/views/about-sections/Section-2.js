/*eslint-disable*/
import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    NavItem,
    Navdark,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col
} from "reactstrap";

// core components

function SectionProject() {
    const [activePill, setActivePill] = React.useState("1");
    return (
        <>
            <div className="section section-project cd-section" id="projects">
                <div className="project-4 section">
                    <Container>
                        <Row>
                            <Col className="ml-auto text-right" md="12">
                                <h2 className="title">Editors' message</h2>
                                <h5 className="description">
                                   
                                </h5>
                            </Col>
                        </Row>
                        <div className="space-top" />
                        <Row>
                            <Col className="mr-auto" md="4">
                                <Card
                                    data-background="image"
                                    style={{
                                        backgroundImage:
                                            "url('http://dtutimes.dtu.ac.in/storage/7/conversions/41632276_10209785566394318_2776254344599699456_n-thumb.jpg')"
                                    }}
                                >
                                    <div className="card-icon">
                                        <i className="nc-icon nc-mobile" />
                                    </div>
                                </Card>
                            </Col>
                            <Col className="ml-auto" md="7">
                                <Card className="card-plain">
                                    <CardBody>
                                        <h6 className="card-category">Shivam Jha</h6>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <CardTitle tag="h3">
                                                The need of a great product
                                            </CardTitle>
                                        </a>
                                        <p className="card-description">
                                        Back in 2009, DTU Times was started as an endeavour to bridge the gap between the administration and students of DTU (then DCE). Today, the team marks its presence on a multitude of portals, and apart from reporting news, is a content producer in its own merit. In this journey spanning nearly a decade, while DTU Times has evolved into a reliable media house with thousands of readers from DTU and beyond, the underlying philosophy of the team has remained unwavered.
                                        </p>
                                        <CardFooter>
                                            <Button
                                                className="btn-neutral mr-1"
                                                color="dark"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-book mr-1" />
                                                Read More
                                            </Button>
                                            <Button
                                                className="btn-just-icon btn-neutral mr-1"
                                                color="dark"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-apple" />
                                            </Button>
                                            <Button
                                                className="btn-just-icon btn-neutral mr-1"
                                                color="dark"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-android" />
                                            </Button>
                                            <Button
                                                className="btn-just-icon btn-neutral"
                                                color="dark"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-windows" />
                                            </Button>
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col className="mr-auto" md="7">
                                <Card className="card-plain">
                                    <CardBody>
                                        <h6 className="card-category">Vishesh</h6>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <CardTitle tag="h3">
                                                The aesthetic quality of a product
                                            </CardTitle>
                                        </a>
                                        <p className="card-description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptates exercitationem consectetur deleniti in vitae, a dolores hic debitis harum sed adipisci excepturi, iusto qui similique. Natus animi enim aspernatur!
                                        </p>
                                        <CardFooter>
                                            <Button
                                                className="btn-neutral mr-1"
                                                color="dark"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-book mr-1" />
                                                Read More
                                        </Button>
                                            <Button
                                                className="btn-just-icon btn-neutral mr-1"
                                                color="dark"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-apple" />
                                            </Button>
                                            <Button
                                                className="btn-just-icon btn-neutral mr-1"
                                                color="dark"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-android" />
                                            </Button>
                                            <Button
                                                className="btn-just-icon btn-neutral"
                                                color="dark"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className="fa fa-windows" />
                                            </Button>
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="ml-auto" md="4">
                                <Card
                                    data-background="image"
                                    style={{
                                        backgroundImage:
                                            "url('http://dtutimes.dtu.ac.in/storage/50/conversions/IMG_0092__02-thumb.jpg')"
                                    }}
                                >
                                    <div className="card-icon">
                                        <i className="nc-icon nc-controller-modern" />
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default SectionProject;
