import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselPage = () => {
  const data = [
    {
      whatIsIt: "trending",
      showName: "Attack on Titan",
      showImageURL: "https://wallpaperaccess.com/full/2725441.jpg",
      showId: "605430c116c06f5a0c8d8b5f",
    },
    {
      whatIsIt: "highestRated",
      showName: "Planet Earth II",
      showImageURL: "https://wallpapercave.com/wp/wp4729468.jpg",
      showId: "6061e694c3c93f3e08c5a097",
    },
    {
      whatIsIt: "mostPopular",
      showName: "Game of Thrones",
      showImageURL: "https://wallpapercave.com/wp/wp4285898.jpg",
      showId: "6061e595c3c93f3e08c5a096",
    },
  ];

  return (
    <Carousel data-bs-theme="dark">
      {data &&
        data.map((d) => (
          <Carousel.Item key={d.showId}>
            <img
              className="d-block w-100 rounded"
              src={d.showImageURL}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1 className="h1-responsive abc">{d.showName}</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default CarouselPage;
