import React from "react";
import { Row, Col } from "reactstrap";

const EditionCards = () => {
  const [mob, setMob] = React.useState(true);
  const [editions, setEditions] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Handle window resize
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setMob(width <= 900);
    };

    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch editions from API
  React.useEffect(() => {
    const fetchEditions = async () => {
      try {
        setLoading(true);
        // Replace 'your-api-base-url' with your actual API base URL
        const response = await fetch('https://api.dtutimes.com/v1/edition');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        if (!Array.isArray(data)) { setError('Received malformed data from the API'); return; }
        // Take only the first 8 editions (newest)
        const latestEditions = data.slice(0, 8);
        setEditions(latestEditions);
        setError(null);
      } catch (err) {
        console.error('Error fetching editions:', err);
        setError('Failed to load editions');
      } finally {
        setLoading(false);
      }
    };

    fetchEditions();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="section section-cards" style={{ paddingTop: "0rem", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div>Loading editions...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="section section-cards" style={{ paddingTop: "0rem", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div>Error: {error}</div>
      </div>
    );
  }

  // Grid item class names for positioning
  const gridClasses = [
    "first-card", "second-card", "third-card", "fourth-card",
    "fifth-card", "sixth-card", "seventh-card", "eight-card", "ninth-card"
  ];

  const renderEditionGrid = () => {
    return editions.map((edition, index) => (
      <li key={edition.id} className={`grid__item ${gridClasses[index] || 'grid__item'}`}>
        <a
          className="grid__link"
          href={edition.link || `/editions/${edition.id}`}
          target={edition.link ? "_blank" : "_self"}
          rel={edition.link ? "noopener noreferrer" : ""}
        >
          <img
            alt={edition.name || `Edition ${edition.id}`}
            className="grid__img layer"
            src={edition.imgUrl || '/placeholder-edition.jpg'}
            onError={(e) => {
              e.target.src = '/placeholder-edition.jpg'; // Fallback
            }}
          />
        </a>
      </li>
    ));
  };

  if (mob === false) {
    return (
      <>
        <div
          className="section section-cards"
          style={{
            paddingTop: "0rem",
          }}
        >
          <div className="codrops-header">
            <Row>
              <Col lg="4" md="6">
                <div className="section-description">
                  <img
                    width="10%"
                    style={{
                      minWidth: "4rem",
                    }}
                    src={require("assets/img/icons/newspaper.png")}
                    alt="..."
                  />
                  <h2
                    style={{
                      marginBottom: "1rem",
                      fontWeight: "8rem !important",
                    }}
                  >
                    <span style={{ color: "#040403" }}>
                      <strong>Latest</strong>
                    </span>{" "}
                    <span style={{ color: "#6bd098" }}>
                      <strong>Editions</strong>
                    </span>
                  </h2>
                  <h6 className="category">By DTU Times </h6>
                  <h5
                    style={{
                      fontSize: "1.1rem",
                      color: "#494850",
                      fontWeight: "400 !important",
                    }}
                    className="description"
                  >
                    The DTU Snapshot at a glance. Check out our latest editions,
                    containing interviews of the dignitaries and the celebrities
                    that visited DTU to the news of societies, faculties,
                    students and the University itself. And while you are at it
                    be sure to visit the Pulse section, filled to the brim with
                    the creativity of some of the most talented writers of our
                    University.
                  </h5>
                </div>
              </Col>
            </Row>
          </div>
          <section className="section-intro">
            <div className="isolayer isolayer--deco1 isolayer--shadow js">
              <ul className="grid grid--loaded">
                {renderEditionGrid()}
              </ul>
            </div>
          </section>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="section section-cards"
          style={{
            paddingTop: "0rem",
            minHeight: "900px !important",
          }}
        >
          <div className="codrops-header">
            <Row>
              <Col lg="4" md="6">
                <div className="section-description">
                  <img
                    width="10%"
                    style={{
                      minWidth: "3rem",
                    }}
                    src={require("assets/img/icons/newspaper.png")}
                    alt="..."
                  />
                  <h2
                    style={{
                      marginBottom: "1rem",
                      fontWeight: "8rem !important",
                    }}
                  >
                    <span style={{ color: "#040403" }}>
                      <strong>Latest</strong>
                    </span>{" "}
                    <span style={{ color: "#6bd098" }}>
                      <strong>Editions</strong>
                    </span>
                  </h2>
                  <h6 className="category">By DTU Times </h6>
                  <h5
                    style={{
                      fontSize: "1.1rem",
                      color: "#494850",
                      fontWeight: "400 !important",
                    }}
                    className="description"
                  >
                    The DTU snapshot at a glance. Check out our latest editions
                    for a comprehensive summary of the happenings over the past
                    quarter.
                  </h5>
                </div>
              </Col>
            </Row>
          </div>
          <section className="section-intro">
            <div className="isolayer isolayer--deco1 isolayer--shadow js">
              <ul className="grid grid--loaded">
                {renderEditionGrid()}
              </ul>
            </div>
          </section>
        </div>
      </>
    );
  }
};

export default EditionCards;
