/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer footer-white">
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=pkpr-white-footer"
                    target="_blank"
                    className="mr-1"
                  >
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a
                    href="http://blog.creative-tim.com/?ref=pkpr-white-footer"
                    target="_blank"
                    className="mr-1"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/license?ref=pkpr-white-footer"
                    target="_blank"
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}
                , made with <i className="fa fa-heart heart" /> by Creative Tim
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
