import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Label,
  FormGroup,
  Input,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components

function SectionTables() {
  return (
    <>
      <div className="section section-gray">
        <Container className="tim-container">
          <div className="title">
            <h3>Tables</h3>
          </div>
          <Row>
            <Col md="12">
              <h4>Simple Table</h4>
            </Col>
            <Col className="ml-auto mr-auto" md="8">
              <h4 className="title">
                <small>Simple With Actions</small>
              </h4>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th>Name</th>
                    <th>Job Position</th>
                    <th>Since</th>
                    <th className="text-right">Salary</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td>Andrew Mike</td>
                    <td>Develop</td>
                    <td>2013</td>
                    <td className="text-right">€ 99,225</td>
                    <td className="td-actions text-right">
                      <Button
                        className="btn-link mr-1"
                        color="info"
                        data-toggle="tooltip"
                        id="tooltip542628903"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-user" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip542628903"
                      >
                        View Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link mr-1"
                        color="success"
                        data-toggle="tooltip"
                        id="tooltip278266693"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-edit" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip278266693"
                      >
                        Edit Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link"
                        color="danger"
                        data-toggle="tooltip"
                        id="tooltip16493734"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-times" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip16493734"
                      >
                        Remove
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">2</td>
                    <td>John Doe</td>
                    <td>Design</td>
                    <td>2012</td>
                    <td className="text-right">€ 89,241</td>
                    <td className="td-actions text-right">
                      <Button
                        className="btn-link mr-1"
                        color="info"
                        data-toggle="tooltip"
                        id="tooltip835309420"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-user" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip835309420"
                      >
                        View Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link mr-1"
                        color="success"
                        data-toggle="tooltip"
                        id="tooltip287674338"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-edit" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip287674338"
                      >
                        Edit Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link"
                        color="danger"
                        data-toggle="tooltip"
                        id="tooltip479370246"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-times" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip479370246"
                      >
                        Remove
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">3</td>
                    <td>Alex Mike</td>
                    <td>Design</td>
                    <td>2010</td>
                    <td className="text-right">€ 92,144</td>
                    <td className="td-actions text-right">
                      <Button
                        className="btn-link mr-1"
                        color="info"
                        data-toggle="tooltip"
                        id="tooltip594620504"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-user" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip594620504"
                      >
                        View Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link mr-1"
                        color="success"
                        data-toggle="tooltip"
                        id="tooltip716621284"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-edit" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip716621284"
                      >
                        Edit Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link"
                        color="danger"
                        data-toggle="tooltip"
                        id="tooltip329473987"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-times" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip329473987"
                      >
                        Remove
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">4</td>
                    <td>Mike Monday</td>
                    <td>Marketing</td>
                    <td>2013</td>
                    <td className="text-right">€ 49,990</td>
                    <td className="td-actions text-right">
                      <Button
                        className="btn-link mr-1"
                        color="info"
                        data-toggle="tooltip"
                        id="tooltip673879542"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-user" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip673879542"
                      >
                        View Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link mr-1"
                        color="success"
                        data-toggle="tooltip"
                        id="tooltip661394722"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-edit" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip661394722"
                      >
                        Edit Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link"
                        color="danger"
                        data-toggle="tooltip"
                        id="tooltip755642510"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-times" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip755642510"
                      >
                        Remove
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">5</td>
                    <td>Paul Dickens</td>
                    <td>Communication</td>
                    <td>2016</td>
                    <td className="text-right">€ 69,201</td>
                    <td className="td-actions text-right">
                      <Button
                        className="btn-link mr-1"
                        color="info"
                        data-toggle="tooltip"
                        id="tooltip836884478"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-user" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip836884478"
                      >
                        View Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link mr-1"
                        color="success"
                        data-toggle="tooltip"
                        id="tooltip531808427"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-edit" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip531808427"
                      >
                        Edit Profile
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link"
                        color="danger"
                        data-toggle="tooltip"
                        id="tooltip875159762"
                        size="sm"
                        type="button"
                      >
                        <i className="fa fa-times" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip875159762"
                      >
                        Remove
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h4 className="title">
                <small>Striped With Checkboxes</small>
              </h4>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th />
                    <th>Product Name</th>
                    <th>Type</th>
                    <th>Qty</th>
                    <th className="text-right">Price</th>
                    <th className="text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">1</td>
                    <td>
                      <FormGroup check>
                        <Label check>
                          <Input defaultValue="" type="checkbox" />
                          <span className="form-check-sign" />
                        </Label>
                      </FormGroup>
                    </td>
                    <td>Moleskine Agenda</td>
                    <td>Office</td>
                    <td>25</td>
                    <td className="text-right">€ 49</td>
                    <td className="text-right">€ 1,225</td>
                  </tr>
                  <tr>
                    <td className="text-center">2</td>
                    <td>
                      <FormGroup check>
                        <Label check>
                          <Input
                            defaultChecked
                            defaultValue=""
                            type="checkbox"
                          />
                          <span className="form-check-sign" />
                        </Label>
                      </FormGroup>
                    </td>
                    <td>Stabilo Pen</td>
                    <td>Office</td>
                    <td>30</td>
                    <td className="text-right">€ 10</td>
                    <td className="text-right">€ 300</td>
                  </tr>
                  <tr>
                    <td className="text-center">3</td>
                    <td>
                      <FormGroup check>
                        <Label check>
                          <Input
                            defaultChecked
                            defaultValue=""
                            type="checkbox"
                          />
                          <span className="form-check-sign" />
                        </Label>
                      </FormGroup>
                    </td>
                    <td>A4 Paper Pack</td>
                    <td>Office</td>
                    <td>50</td>
                    <td className="text-right">€ 10.99</td>
                    <td className="text-right">€ 109</td>
                  </tr>
                  <tr>
                    <td className="text-center">4</td>
                    <td>
                      <FormGroup check>
                        <Label check>
                          <Input defaultValue="" type="checkbox" />
                          <span className="form-check-sign" />
                        </Label>
                      </FormGroup>
                    </td>
                    <td>Apple iPad</td>
                    <td>Meeting</td>
                    <td>10</td>
                    <td className="text-right">€ 499.00</td>
                    <td className="text-right">€ 4,990</td>
                  </tr>
                  <tr>
                    <td className="text-center">5</td>
                    <td>
                      <FormGroup check>
                        <Label check>
                          <Input defaultValue="" type="checkbox" />
                          <span className="form-check-sign" />
                        </Label>
                      </FormGroup>
                    </td>
                    <td>Apple iPhone</td>
                    <td>Communication</td>
                    <td>10</td>
                    <td className="text-right">€ 599.00</td>
                    <td className="text-right">€ 5,999</td>
                  </tr>
                  <tr>
                    <td colSpan="5" />
                    <td className="td-total">Total</td>
                    <td className="td-price">
                      <small>€</small>
                      12,999
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <h4 className="title">Shopping Cart Table</h4>
            </Col>
            <Col className="ml-auto mr-auto" md="10">
              <Table className="table-shopping" responsive>
                <thead>
                  <tr>
                    <th className="text-center" />
                    <th />
                    <th className="text-right">Price</th>
                    <th className="text-right">Quantity</th>
                    <th className="text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="img-container">
                        <img
                          alt="..."
                          src={require("assets/img/tables/agenda.png")}
                        />
                      </div>
                    </td>
                    <td className="td-product">
                      <strong>Get Shit Done Notebook</strong>
                      <p>
                        Most beautiful agenda for the office, really nice paper
                        and black cover. Most beautiful agenda for the office.
                      </p>
                    </td>
                    <td className="td-price">
                      <small>€</small>
                      49
                    </td>
                    <td className="td-number td-quantity">
                      1{" "}
                      <ButtonGroup>
                        <Button
                          className="btn-border btn-round"
                          color="default"
                          size="sm"
                        >
                          -
                        </Button>
                        <Button
                          className="btn-border btn-round"
                          color="default"
                          size="sm"
                        >
                          +
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td className="td-number">
                      <small>€</small>
                      49
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="img-container">
                        <img
                          alt="..."
                          src={require("assets/img/tables/stylus.jpg")}
                        />
                      </div>
                    </td>
                    <td className="td-product">
                      <strong>Stylus</strong>
                      <p>
                        Design is not just what it looks like and feels like.
                        Design is how it works.
                      </p>
                    </td>
                    <td className="td-price">
                      <small>€</small>
                      499
                    </td>
                    <td className="td-number td-quantity">
                      2{" "}
                      <ButtonGroup>
                        <Button
                          className="btn-border btn-round"
                          color="default"
                          size="sm"
                        >
                          -
                        </Button>
                        <Button
                          className="btn-border btn-round"
                          color="default"
                          size="sm"
                        >
                          +
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td className="td-number">
                      <small>€</small>
                      998
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="img-container">
                        <img
                          alt="..."
                          src={require("assets/img/tables/evernote.png")}
                        />
                      </div>
                    </td>
                    <td className="td-product">
                      <strong>Evernote iPad Stander</strong>
                      <p>
                        A groundbreaking Retina display. All-flash architecture.
                        Fourth-generation Intel processors.
                      </p>
                    </td>
                    <td className="td-price">
                      <small>€</small>
                      799
                    </td>
                    <td className="td-number td-quantity">
                      1{" "}
                      <ButtonGroup>
                        <Button
                          className="btn-border btn-round"
                          color="default"
                          size="sm"
                        >
                          -
                        </Button>
                        <Button
                          className="btn-border btn-round"
                          color="default"
                          size="sm"
                        >
                          +
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td className="td-number">
                      <small>€</small>
                      799
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" />
                    <td />
                    <td className="td-total">Total</td>
                    <td className="td-total">
                      <small>€</small>
                      12,999
                    </td>
                  </tr>
                  <tr className="tr-actions">
                    <td colSpan="3" />
                    <td className="text-right" colSpan="2">
                      <Button color="danger" size="lg" type="button">
                        Complete Purchase <i className="fa fa-chevron-right" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionTables;
