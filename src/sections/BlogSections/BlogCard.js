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
                <Link to={`/blog/${post.slug}`} onClick={()=> {
                  window.scrollTo(0,0);
                }}>
                  {post.title}
                </Link>
              </CardTitle>
              <br />
            </CardBody>
            <div className="card-image">
              <Link to={`/blog/${post.slug}`} onClick={()=> {
                  window.scrollTo(0,0);
                }}>
                <img alt="..." className="img img-raised" src={post.imgUrl} />
              </Link>
            </div>
            <CardBody>
              <p className="card-description" style={{ marginBottom: "1rem",color:"#494850",lineHeight:"2rem !important" }}>
                <strong>{post.biliner}</strong>
                ..... <Link
                    to={`/blog/${post.slug}`}
                    color="primay"
                    onClick={()=> {
                      window.scrollTo(0,0);
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
