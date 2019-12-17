import React from "react";
// react plugin that creates an input with badges
import TagsInput from "react-tagsinput";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterBlack from "components/Footers/FooterBlack.js";

import ImageUpload from "components/CustomUpload/ImageUpload.js";

function AddProduct() {
  const [tags, setTags] = React.useState([
    "Minimal",
    " Light",
    " New",
    " Friends"
  ]);
  const [categories, setCategories] = React.useState(["Food", " Drink"]);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("add-product");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("add-product");
    };
  });
  return (
    <>
      <DangerNavbar />
      <div className="main">
        <div className="section">
          <Container>
            <h3>Add Product</h3>
            <div>
              <Row>
                <Col md="5" sm="5">
                  <h6>Product Image</h6>
                  <ImageUpload />
                  <h6>Tags</h6>
                  <div id="tags">
                    <TagsInput
                      onlyUnique
                      onChange={value => setTags(value)}
                      tagProps={{
                        className: "react-tagsinput-tag badge-success"
                      }}
                      value={tags}
                    />
                  </div>
                  <h6>Categories</h6>
                  <div id="tags-2">
                    <TagsInput
                      onlyUnique
                      onChange={value => setCategories(value)}
                      tagProps={{
                        className: "react-tagsinput-tag badge-success"
                      }}
                      value={categories}
                    />
                  </div>
                  <h6>
                    Format <span className="icon-danger">*</span>
                  </h6>
                  <div className="form-check-radio">
                    <Label check>
                      <Input
                        defaultValue="option1"
                        id="exampleRadios1"
                        name="exampleRadios"
                        type="radio"
                      />
                      Digital <span className="form-check-sign" />
                    </Label>
                  </div>
                  <div className="form-check-radio">
                    <Label check>
                      <Input
                        defaultChecked
                        defaultValue="option2"
                        id="exampleRadios2"
                        name="exampleRadios"
                        type="radio"
                      />
                      Print <span className="form-check-sign" />
                    </Label>
                  </div>
                </Col>
                <Col md="7" sm="7">
                  <FormGroup>
                    <h6>
                      Name <span className="icon-danger">*</span>
                    </h6>
                    <Input
                      className="border-input"
                      placeholder="enter the product name here..."
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <h6>
                      Tagline <span className="icon-danger">*</span>
                    </h6>
                    <Input
                      className="border-input"
                      placeholder="enter the product tagline here..."
                      type="text"
                    />
                  </FormGroup>
                  <Row className="price-row">
                    <Col md="6">
                      <h6>
                        Price <span className="icon-danger">*</span>
                      </h6>
                      <InputGroup className="border-input">
                        <Input
                          className="border-input"
                          defaultValue=""
                          placeholder="enter price"
                          type="text"
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <i className="fa fa-euro" />
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <h6>Discount</h6>
                      <InputGroup className="border-input">
                        <Input
                          className="border-input"
                          defaultValue=""
                          placeholder="enter discount"
                          type="text"
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>%</InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <h6>Description</h6>
                    <Input
                      className="textarea-limited"
                      maxLength="150"
                      placeholder="This is a textarea limited to 150 characters."
                      rows="13"
                      type="textarea"
                    />
                    <h5>
                      <small>
                        <span
                          className="pull-right"
                          id="textarea-limited-message"
                        >
                          150 characters left
                        </span>
                      </small>
                    </h5>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input defaultValue="" type="checkbox" />
                      Display on landing page{" "}
                      <span className="form-check-sign" />
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="buttons-row">
                <Col md="4" sm="4">
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    outline
                    type="reset"
                  >
                    Cancel
                  </Button>
                </Col>
                <Col md="4" sm="4">
                  <Button
                    block
                    className="btn-round"
                    color="primary"
                    outline
                    type="submit"
                  >
                    Save
                  </Button>
                </Col>
                <Col md="4" sm="4">
                  <Button
                    block
                    className="btn-round"
                    color="primary"
                    type="submit"
                  >
                    Save &amp; Publish
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      <FooterBlack />
    </>
  );
}

export default AddProduct;
