import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselPage = () => {
  const data = [
    {
      whatIsIt: "highestRated",
      showName: "Panchayat",
      showImageURL:
        "https://i.gadgets360cdn.com/large/panchayat_season_2_1651209306392.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=738",
      showId: "6061e694c3c93f3e08c5a097",
    },
    {
      whatIsIt: "trending",
      showName: "House of the Dragon",
      showImageURL: "https://wallpapercave.com/wp/wp13963036.jpg",
      showId: "605430c116c06f5a0c8d8b5f",
    },
    {
      whatIsIt: "highestRated",
      showName: "The Witcher",
      showImageURL:
        "https://images.hdqwalls.com/wallpapers/the-witcher-season-3-2023-hy.jpg",
      showId: "6061e694c3c93f3e08c5a097",
    },
    {
      whatIsIt: "mostPopular",
      showName: "The Boys",
      showImageURL:
        "https://wallpapers.com/images/hd/the-boys-character-cutouts-1xba4ywhbt3tgy3c.jpg",
      showId: "6061e595c3c93f3e08c5a096",
    },
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
      showImageURL:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1VFLnow6ghvAbI0YvY93oQ2jyyiKoYacDMBTQ9q5FNLmda1uliI9V-qhMt2Lqlk12PgbDgi6b3mk1wRA9KmHL-kxM4Lx1V3cONKEpvXcN0QLeCPo9EKLMjswsVe-cdgMYXruLSi_u8NjF/w0/game-of-thrones-iron-throne-uhdpaper.com-4K-75.jpg",
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
