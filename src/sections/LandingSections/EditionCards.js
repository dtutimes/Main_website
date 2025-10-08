import React from "react";
import { Row, Col } from "reactstrap";

const EditionCards = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 900);
  const [editions, setEditions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchEditions = async () => {
      try {
        const response = await fetch(
          "https://team.dtutimes.com/api/v1/edition/published-editions"
        );
        const data = await response.json();
        setEditions(data.data.slice(0, 6)); 
      } catch (error) {
        console.error("Error fetching editions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEditions();
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return null;
  }

  const cardClasses = [
    "first-card",
    "second-card",
    "third-card",
    "fourth-card",
    "fifth-card",
    "sixth-card",
    "seventh-card",
    "eighth-card",
    "ninth-card",
    "tenth-card",
  ];

  const getCardClass = (index) => cardClasses[index] || "";

 const description = isMobile
    ? "The DTU snapshot at a glance. Check out our latest editions for a comprehensive summary of the happenings over the past quarter."
    : "The DTU Snapshot at a glance. Check out our latest editions, containing interviews of the dignitaries and the celebrities that visited DTU to the news of societies, faculties, students and the University itself.";

  const showThumbnail = !isMobile && editions.length >= 2;

  return (
    <div className="section section-cards" style={{ paddingTop: "0rem" }}>
      <div className="codrops-header">
        <Row>
          <Col lg="6" md="8">
            <div className="section-description">
              <img
                width="10%"
                style={{ minWidth: isMobile ? "3rem" : "4rem" }}
                src={require("assets/img/icons/newspaper.png")}
                alt="Newspaper icon"
              />
              <h2 style={{ marginBottom: "1rem" }}>
                <span style={{ color: "#040403" }}>
                  <strong>Latest</strong>
                </span>{" "}
                <span style={{ color: "#6bd098" }}>
                  <strong>Editions</strong>
                </span>
              </h2>
              <h6 className="category">By DTU Times</h6>
              <h5
                style={{
                  fontSize: "1.1rem",
                  color: "#494850",
                  fontWeight: "400",
                }}
                className="description"
              >
                {description}
              </h5>
            </div>
          </Col>
        </Row>
      </div>

      <section className="section-intro absolute">
        <div className="isolayer isolayer--deco1 isolayer--shadow">
          <ul className="grid grid--loaded effect-1" id="grid">
            {editions.map((edition, index) => (
              <li
                key={edition.id || index}
                className={`grid__item ${getCardClass(index)} ${
                  !isMobile ? "layer" : ""
                }`}
              >
                <a className="grid__link" href="/editions">
                  <img
                    alt={edition.title || "Edition cover"}
                    className="grid__img layer"
                    src={`https://team.dtutimes.com/api/v1/images/get/edition-${edition.edition_id}?thumbnail=true`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default EditionCards;