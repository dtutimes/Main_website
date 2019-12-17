import React from "react";

// reactstrap components
import {
  Button,
  Input,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
  Row,
  Col,
  Form,
  FormGroup
} from "reactstrap";

// core components

function SectionComments() {
  return (
    <>
      <div className="section section-nude-gray">
        <Container className="container-tim">
          <div className="title" id="comments">
            <h3>Comments Area</h3>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <div className="media-area">
                <h3>Comments · 10</h3>
                <Media>
                  <a
                    className="pull-left"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <div className="avatar">
                      <Media
                        alt="..."
                        object
                        src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                      />
                    </div>
                  </a>
                  <Media body>
                    <Media heading tag="h5">
                      John Wayne
                    </Media>
                    <div className="pull-right">
                      <h6 className="text-muted">Sep 11, 11:53 AM</h6>
                      <Button
                        className="btn-link pull-right"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-reply mr-1" />
                        Reply
                      </Button>
                    </div>
                    <p>
                      Hello guys, nice to have you on the platform! There will
                      be a lot of great stuff coming soon. We will keep you
                      posted for the latest news.
                    </p>
                    <p>Don't forget, You're Awesome!</p>
                    <div className="media-footer">
                      <Button
                        className="btn-link mr-1"
                        color="danger"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-thumbs-up mr-1" />
                        243
                      </Button>
                      <Button
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-thumbs-down mr-1" />2
                      </Button>
                      <Button
                        color="link mr-1"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Follow · 3
                      </Button>
                    </div>
                    <Media className="media-post">
                      <a
                        className="pull-left author"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <div className="avatar">
                          <Media
                            alt="..."
                            object
                            src={require("assets/img/faces/kaci-baum-2.jpg")}
                          />
                        </div>
                      </a>
                      <Media body>
                        <Input
                          placeholder="Write a nice reply or go home..."
                          rows="4"
                          type="textarea"
                        />
                        <div className="media-footer">
                          <Button
                            className="pull-right"
                            color="info"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Reply
                          </Button>
                        </div>
                      </Media>
                    </Media>
                    {/* end media-post */}
                  </Media>
                </Media>
                {/* end media */}
                {/* Comment */}
                <Media>
                  <a
                    className="pull-left"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <div className="avatar">
                      <Media
                        alt="..."
                        object
                        src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                      />
                    </div>
                  </a>
                  <Media body>
                    <Media heading tag="h5">
                      Flume
                    </Media>
                    <div className="pull-right">
                      <h6 className="text-muted">Sep 11, 11:54 AM</h6>
                      <Button
                        className="btn-link pull-right"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-reply mr-1" />
                        Reply
                      </Button>
                    </div>
                    <p>
                      Hello guys, nice to have you on the platform! There will
                      be a lot of great stuff coming soon. We will keep you
                      posted for the latest news.
                    </p>
                    <div className="media-footer">
                      <Button
                        color="link mr-1"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-thumbs-up mr-1" />
                        243
                      </Button>
                      <Button
                        className="btn-link mr-1"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-thumbs-down mr-1" />2
                      </Button>
                      <Button
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Follow · 3
                      </Button>
                    </div>
                    <Media>
                      <a
                        className="pull-left"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <div className="avatar">
                          <Media
                            alt="..."
                            object
                            src={require("assets/img/faces/erik-lucatero-2.jpg")}
                          />
                        </div>
                      </a>
                      <Media body>
                        <Media heading tag="h5">
                          Eric Faker
                        </Media>
                        <div className="pull-right">
                          <h6 className="text-muted">Sep 11, 11:56 AM</h6>
                          <Button
                            className="btn-link pull-right"
                            color="info"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-reply mr-1" />
                            Reply
                          </Button>
                        </div>
                        <p>
                          Hello guys, nice to have you on the platform! There
                          will be a lot of great stuff coming soon. We will keep
                          you posted for the latest news.
                        </p>
                        <p>Don't forget, You're Awesome!</p>
                        <div className="media-footer">
                          <Button
                            className="btn-link mr-1"
                            color="danger"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-thumbs-up mr-1" />
                            243
                          </Button>
                          <Button
                            color="link mr-1"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i
                              aria-hidden={true}
                              className="fa fa-thumbs-down"
                            />
                            2
                          </Button>
                          <Button
                            className="btn-link"
                            color="info"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Follow · 3
                          </Button>
                        </div>
                      </Media>
                    </Media>
                    {/* end media */}
                  </Media>
                </Media>
                {/* end media */}
                <Media>
                  <a
                    className="pull-left"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <div className="avatar">
                      <Media
                        alt="..."
                        object
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </div>
                  </a>
                  <Media body>
                    <Media heading tag="h5">
                      Banks
                    </Media>
                    <div className="pull-right">
                      <h6 className="text-muted">Sep 11, 11:57 AM</h6>
                      <Button
                        className="btn-link pull-right"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-reply mr-1" />
                        Reply
                      </Button>
                    </div>
                    <p>
                      Hello guys, nice to have you on the platform! There will
                      be a lot of great stuff coming soon. We will keep you
                      posted for the latest news.
                    </p>
                    <p>Don't forget, You're Awesome!</p>
                    <div className="media-footer">
                      <Button
                        color="link mr-1"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-thumbs-up mr-1" />
                        243
                      </Button>
                      <Button
                        color="link mr-1"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-thumbs-down mr-1" />2
                      </Button>
                      <Button
                        color="link"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Follow · 3
                      </Button>
                    </div>
                  </Media>
                </Media>
                {/* end media */}
                <br />
                <div className="pagination-area">
                  <Pagination
                    className="pagination pagination-primary pagination-no-border justify-content-center"
                    listClassName="pagination-primary pagination-no-border justify-content-center"
                  >
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="fa fa-angle-double-left"
                        />
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        4
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        5
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="fa fa-angle-double-right"
                        />
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </div>
              </div>
              {/* end media-area */}
            </Col>
            {/* end col-md-8 */}
          </Row>
          {/* end row */}
        </Container>
      </div>
      <div className="section section-gray">
        <Container className="tim-container">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h3 className="text-center">Post your comment</h3>
              <Media className="media-post">
                <Form className="form">
                  <a
                    className="pull-left author"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <div className="avatar">
                      <Media
                        alt="..."
                        object
                        src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                      />
                    </div>
                  </a>
                  <Media body>
                    <Input
                      className="border-input"
                      placeholder="Write some nice stuff or nothing..."
                      rows="6"
                      type="textarea"
                    />
                    <div className="media-footer">
                      <Button
                        className="btn-wd pull-right"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Post Comment
                      </Button>
                    </div>
                  </Media>
                </Form>
              </Media>
              {/* end media-post */}
              <h3 className="text-center">Post your comment</h3>
              <Media className="media-post">
                <Form className="form">
                  <a
                    className="pull-left author"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <div className="avatar">
                      <Media
                        alt="..."
                        object
                        src={require("assets/img/faces/kaci-baum-2.jpg")}
                      />
                    </div>
                  </a>
                  <Media body>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Input
                            className="border-input"
                            placeholder="Your Name"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <Input
                            className="border-input"
                            placeholder="Your email"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Input
                      className="border-input"
                      placeholder="Write some nice stuff or nothing..."
                      rows="6"
                      type="textarea"
                    />
                    <div className="media-footer">
                      <h6 className="text-muted">Sign in with</h6>
                      <Button
                        className="btn-just-icon btn-round mr-1"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-twitter" />
                      </Button>
                      <Button
                        className="btn-round btn-just-icon mr-1"
                        color="facebook"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-facebook" />
                      </Button>
                      <Button
                        className="btn-just-icon btn-round"
                        color="google"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-google-plus" />
                      </Button>
                      <Button
                        className="pull-right"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Post Comment
                      </Button>
                    </div>
                  </Media>
                  {/* end media-body */}
                </Form>
              </Media>
              {/* end media-post */}
            </Col>
          </Row>
          {/* end row */}
        </Container>
      </div>
    </>
  );
}

export default SectionComments;
