import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeScreenCard = ({ show }) => {
  return (
    <Card className="my-3 p-3 rounded" style={{ height: "28rem" }}>
      <Link to={`/show-info/${show._id}`}>
        <Card.Img
          className="rounded"
          src={show.image}
          variant="top"
          style={{ height: "18rem" }}
        />
      </Link>

      <Card.Body>
        <Link to={`/show-info/${show._id}`}>
          <Card.Title as="div">
            <center>
              <h5>
                <strong>{show.originalTitle}</strong>
              </h5>
            </center>
          </Card.Title>
        </Link>
        <div>
          {" "}
          <center>
            {show.isMovie && (
              <Badge pill variant="warning">
                Movie
              </Badge>
            )}{" "}
            {show.isSeries && (
              <Badge pill variant="primary">
                Series
              </Badge>
            )}
          </center>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HomeScreenCard;
