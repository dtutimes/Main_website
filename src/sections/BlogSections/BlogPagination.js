import React from "react";
import { api } from "api";
import {
  Button,
  // Card,
  // CardBody,
  // CardFooter,
  // CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import { newApi } from "api";

const BlogPosts = (props) => {
  var { pageNo, lastPage, changePage, category } = props;
  var handlePrevClick = async () => {
    if (category === 0) {
      if (pageNo > 1) {
        let newpage = pageNo - 1;
        //call for getting previous page's blog data
        newApi
          .get("/blog/published-blogs")
          .then((res) => {
            const start_idx = (newpage - 1) * 10;
            const end_idx = start_idx + 10;
            const resData = res.data.data.slice(start_idx, end_idx);
            // let temp = [{ ...res.data }];
            // console.log(temp);
            // let resData = temp[0]["data"];
            changePage(newpage, resData);
          })
          .catch((err) => {
            console.log(err);
          });
        window.scrollTo(0, 0);
      }
    } else {
      if (pageNo > 1) {
        let newpage = pageNo - 1;
        console.log("category: ", category);
        // api
        //   .get("/category/" + category + "?page=" + newpage)
        //   .then((res) => {
        //     let resData = res.data.data;
        //     changePage(newpage, resData);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        newApi
          .get("/blog/published-blogs")
          .then((res) => {
            const start_idx = (newpage - 1) * 10;
            const end_idx = start_idx + 10;
            const filteredData = res.data.data.filter((item) => item.category_id === category - 1);
            const resData = filteredData.slice(start_idx, end_idx);
            changePage(newpage, resData);
          })
        window.scrollTo(0, 0);
      }
    }
  };
  var handleNextClick = async () => {
    if (category === 0) {
      if (pageNo < lastPage) {
        let newpage = pageNo + 1;
        //call for getting next page's blog data
        newApi
          .get("/blog/published-blogs")
          .then((res) => {
            const start_idx = (newpage - 1) * 10;
            const end_idx = start_idx + 10;
            const resData = res.data.data.slice(start_idx, end_idx);
            console.log(resData);
            changePage(newpage, resData);
          })
          .catch((err) => {
            console.log(err);
          });
        window.scrollTo(0, 0);
      }
    } else {
      if (pageNo < lastPage) {
        let newpage = pageNo + 1;
        // api
        //   .get("/category/" + category + "?page=" + newpage)
        //   .then((res) => {
        //     let resData = res.data.data;
        //     changePage(newpage, resData);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        newApi
          .get("/blog/published-blogs")
          .then((res) => {
            const start_idx = (newpage - 1) * 10;
            const end_idx = start_idx + 10;
            const filteredData = res.data.data.filter((item) => item.category_id === category - 1);
            const resData = filteredData.slice(start_idx, end_idx);
            changePage(newpage, resData);
          })

        window.scrollTo(0, 0);
      }
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
