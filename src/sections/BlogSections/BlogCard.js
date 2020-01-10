import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const BlogCard = ({ posts }) => {
  if (!posts.length) return <></>;

  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <Card className="card-plain card-blog text-left">
            <CardBody>
              <CardTitle tag="h3">
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  {post.title}
                </a>
              </CardTitle>
              <br />
            </CardBody>
            <div className="card-image">
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img alt="..." className="img img-raised" src={post.imgUrl} />
              </a>
            </div>
            <CardBody>
              <p className="card-description" style={{ marginBottom: "1rem",color:"#494850" }}>
                {post.biliner}
                ..... <Link
                    to={`/story/${post.slug}`}
                    color="primay"
                    onClick={e => {
                    window.scrollTo(0, 0);
                    }}
                >
                    Read More
                </Link>
              </p>
            </CardBody>
          </Card>

        </div>
      ))}
    </>
  );
};

export default BlogCard;
