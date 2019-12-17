import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import { Button, FormGroup, Container, Row, Col } from "reactstrap";

// core components

function SectionFooterAreas() {
  const [languageSelect, setLanguageSelect] = React.useState({
    value: "en",
    label: "English"
  });
  const [curencySelect, setCurencySelect] = React.useState({
    value: "USD",
    label: "USD"
  });
  return (
    <>
      <div className="wrapper">
        <div className="section">
          <Container className="tim-container">
            <div className="title" id="footers">
              <h3>Footers</h3>
            </div>
          </Container>
        </div>
      </div>
      <footer className="footer footer-big">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="6" sm="9">
              <div className="links">
                <ul className="uppercase-links">
                  <li className="mr-1">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Home
                    </a>
                  </li>
                  <li className="mr-1">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Company
                    </a>
                  </li>
                  <li className="mr-1">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Portfolio
                    </a>
                  </li>
                  <li className="mr-1">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Team
                    </a>
                  </li>
                  <li className="mr-1">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Contact
                    </a>
                  </li>
                </ul>
                <hr />
                <div className="copyright">
                  © {new Date().getFullYear()}, made with{" "}
                  <i className="fa fa-heart heart" /> by Creative Tim
                </div>
              </div>
            </Col>
            <Col md="4" sm="2">
              <div className="social-area">
                <Button
                  className="btn-round btn-just-icon mr-1"
                  color="facebook"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-facebook" />
                </Button>
                <Button
                  className="btn-just-icon btn-round mr-1"
                  color="twitter"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-twitter" />
                </Button>
                <Button
                  className="btn-just-icon btn-round mr-1"
                  color="google"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-google-plus" />
                </Button>
                <Button
                  className="btn-just-icon btn-round"
                  color="pinterest"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-pinterest-p" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="separator" />
      <footer className="footer footer-black footer-big">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="4" sm="4">
              <div className="logo text-center">
                <h3>Creative Tim</h3>
              </div>
            </Col>
            <Col className="offset-md-2" md="6" sm="8">
              <div className="links">
                <ul>
                  <li className="mr-1">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Home
                    </a>
                  </li>
                  <li className="mr-1">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Company
                    </a>
                  </li>
                  <li className="mr-1">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Portfolio
                    </a>
                  </li>
                  <li className="mr-1">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Team
                    </a>
                  </li>
                  <li className="mr-1">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      We're Hiring!
                    </a>
                  </li>
                </ul>
                <hr />
                <div className="copyright">
                  <div className="pull-left">
                    © {new Date().getFullYear()}, made with{" "}
                    <i className="fa fa-heart heart" /> in Bucharest
                  </div>
                  <div className="pull-right">
                    <ul>
                      <li className="mr-1">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Terms
                        </a>
                      </li>
                      |{" "}
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Privacy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="separator" />
      <footer className="footer footer-big">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="3" sm="3" xs="6">
              <FormGroup>
                <Select
                  className="react-select react-select-default"
                  classNamePrefix="react-select"
                  name="languageSelect"
                  value={languageSelect}
                  placeholder=""
                  onChange={value => setLanguageSelect(value)}
                  options={[
                    { value: "id", label: "Bahasa Indonesia" },
                    { value: "ms", label: "Bahasa Melayu" },
                    { value: "ca", label: "Català" },
                    { value: "da", label: "Dansk" },
                    { value: "de", label: "Deutsch" },
                    { value: "en", label: "English" },
                    { value: "es", label: "Español" },
                    { value: "el", label: "Eλληνικά" },
                    { value: "fr", label: "Français" },
                    { value: "it", label: "Italiano" },
                    { value: "hu", label: "Magyar" },
                    { value: "nl", label: "Nederlands" },
                    { value: "no", label: "Norsk" },
                    { value: "pl", label: "Polski" },
                    { value: "pt", label: "Português" },
                    { value: "fi", label: "Suomi" },
                    { value: "sv", label: "Svenska" },
                    { value: "tr", label: "Türkçe" },
                    { value: "is", label: "Íslenska" },
                    { value: "cs", label: "Čeština" },
                    { value: "ru", label: "Русский" },
                    { value: "th", label: "ภาษาไทย" },
                    { value: "zh", label: "中文 (简体)" },
                    { value: "zh-TW", label: "中文 (繁體)" },
                    { value: "ja", label: "日本語" },
                    { value: "ko", label: "한국어" }
                  ]}
                />
              </FormGroup>
              <FormGroup>
                <Select
                  className="react-select react-select-default"
                  classNamePrefix="react-select"
                  name="curencySelect"
                  value={curencySelect}
                  placeholder=""
                  onChange={value => setCurencySelect(value)}
                  options={[
                    { value: "ARS", label: "ARS" },
                    { value: "AUD", label: "AUD" },
                    { value: "BRL", label: "BRL" },
                    { value: "CAD", label: "CAD" },
                    { value: "CHF", label: "CHF" },
                    { value: "CNY", label: "CNY" },
                    { value: "CZK", label: "CZK" },
                    { value: "DKK", label: "DKK" },
                    { value: "EUR", label: "EUR" },
                    { value: "GBP", label: "GBP" },
                    { value: "HKD", label: "HKD" },
                    { value: "HUF", label: "HUF" },
                    { value: "IDR", label: "IDR" },
                    { value: "ILS", label: "ILS" },
                    { value: "INR", label: "INR" },
                    { value: "JPY", label: "JPY" },
                    { value: "KRW", label: "KRW" },
                    { value: "MYR", label: "MYR" },
                    { value: "MXN", label: "MXN" },
                    { value: "NOK", label: "NOK" },
                    { value: "NZD", label: "NZD" },
                    { value: "PHP", label: "PHP" },
                    { value: "PLN", label: "PLN" },
                    { value: "RUB", label: "RUB" },
                    { value: "SEK", label: "SEK" },
                    { value: "SGD", label: "SGD" },
                    { value: "TWD", label: "TWD" },
                    { value: "USD", label: "USD" },
                    { value: "VND", label: "VND" },
                    { value: "ZAR", label: "ZAR" }
                  ]}
                />
              </FormGroup>
            </Col>
            <Col className="ml-auto mr-auto" md="9" sm="9" xs="12">
              <Row>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Discover
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          We're Hiring
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          How it works
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Testimonials
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" xs="6">
                  <div className="social-area">
                    <Button
                      className="btn-just-icon btn-round mr-1"
                      color="facebook"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-round mr-1"
                      color="twitter"
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-round mr-1"
                      color="google"
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-round mr-1"
                      color="pinterest"
                    >
                      <i className="fa fa-pinterest-p" />
                    </Button>
                  </div>
                </Col>
              </Row>
              <hr />
              <div className="copyright">
                <div className="pull-left">
                  © {new Date().getFullYear()} Creative Tim, made with love
                </div>
                <div className="links pull-right">
                  <ul>
                    <li className="mr-1">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Company Policy
                      </a>
                    </li>
                    |{" "}
                    <li className="mr-1">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Terms
                      </a>
                    </li>
                    |{" "}
                    <li>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="separator" />
      <footer className="footer footer-black footer-big">
        <Container>
          <Row>
            <Col className="text-center ml-auto mr-auto" md="2" sm="3" xs="12">
              <h4>Creative Tim</h4>
              <div className="social-area">
                <Button
                  className="btn-just-icon btn-round mr-1"
                  color="facebook"
                >
                  <i className="fa fa-facebook" />
                </Button>
                <Button
                  className="btn-just-icon btn-round mr-1"
                  color="twitter"
                >
                  <i className="fa fa-twitter" />
                </Button>
                <Button className="btn-just-icon btn-round" color="google">
                  <i className="fa fa-google-plus" />
                </Button>
              </div>
            </Col>
            <Col className="ml-auto mr-auto" md="9" sm="9" xs="12">
              <Row>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Discover
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Live Support
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Money Back
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          We're Hiring
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          How it works
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Testimonials
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="stacked-links">
                      <li>
                        <h4>
                          13.723 <br />
                          <small>accounts</small>
                        </h4>
                      </li>
                      <li>
                        <h4>
                          55.234 <br />
                          <small>downloads</small>
                        </h4>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <hr />
              <div className="copyright">
                <div className="pull-left">
                  © {new Date().getFullYear()} Creative Tim, made with love
                </div>
                <div className="links pull-right">
                  <ul>
                    <li className="mr-1">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Company Policy
                      </a>
                    </li>
                    |{" "}
                    <li className="mr-1">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Terms
                      </a>
                    </li>
                    |{" "}
                    <li>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default SectionFooterAreas;
