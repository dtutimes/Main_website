import React from "react";
import { api } from "api";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

const BlogPosts = props => {
  var { pageNo, lastPage, changePage } = props;
  // console.log(pageNo);
  // console.log("hhhhhhhhaaaaaaa");
  // console.log(lastPage);
  var handlePrevClick = async () => {
    if (pageNo > 1) {
      let newpage = pageNo - 1;
      //call for getting previous page's blog data
      api
        .get("/story?page=" + newpage)
        .then(res => {
          let temp = [{ ...res.data }];
          let resData = temp[0]["data"];
          changePage(newpage, resData);
        })
        .catch(err => {
          console.log(err);
        });
      window.scrollTo(0, 0);
    }
  };
  var handleNextClick = async () => {
    if (pageNo < lastPage) {
      let newpage = pageNo + 1;
      //call for getting next page's blog data
      api
        .get("/story?page=" + newpage)
        .then(res => {
          let temp = [{ ...res.data }];
          let resData = temp[0]["data"];
          changePage(newpage, resData);
        })
        .catch(err => {
          console.log(err);
        });
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      <>
        <div className="section secion-blog cd-section" id="blogs">
          <div className="blog-4">
            <Container>
              <Row>
                <Col md="12">
                  <div className="pull-left">
                    <Button
                      className="btn-link btn-move-left"
                      color="default"
                      size="sm"
                      onClick={handlePrevClick.bind(this)}
                      disabled={pageNo === 1 ? true : false}
                    >
                      <i className="fa fa-angle-left mr-1" />
                      Previous
                    </Button>
                  </div>
                  <div className="pull-right">
                    <Button
                      className="btn-link btn-move-right"
                      color="default"
                      size="sm"
                      disabled={pageNo === lastPage ? true : false}
                      onClick={handleNextClick.bind(this)}
                    >
                      Next <i className="fa fa-angle-right" />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    </>
  );
};
export default BlogPosts;
