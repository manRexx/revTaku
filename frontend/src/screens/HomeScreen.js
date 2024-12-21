import React, { useEffect, useState } from "react";
import { Row, Col, Jumbotron, Button, Alert } from "react-bootstrap";
import HomeScreenCard from "../components/HomeScreenCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listShows } from "../actions/showActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import CarouselPage from "../components/CarouselPage";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();

  const showList = useSelector((state) => state.showList);
  const { error, shows, loading } = showList;
  useEffect(() => {
    dispatch(listShows(keyword));
  }, [dispatch]);

  return (
    <>
      <Alert variant="primary" className="rounded">
        <Alert.Heading>
          Welcome to <strong>Rev-Taku!!</strong>
        </Alert.Heading>
        <p>Place for reviewing your favourite shows, series and movies.</p>
      </Alert>
      <CarouselPage />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <Row>
          {shows.map((show) => (
            <Col key={show._id} sm={12} md={6} lg={4} xl={3}>
              <HomeScreenCard show={show} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
export default HomeScreen;
