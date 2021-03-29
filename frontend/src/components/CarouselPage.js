import React from 'react'
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from 'mdbreact'
import { Link } from 'react-router-dom'

const CarouselPage = () => {
  const data = [
    {
      whatIsIt: 'trending',
      showName: 'Attack on Titan',
      showImageURL: 'https://wallpapercave.com/wp/wp8359340.png',
      showId: '605430c116c06f5a0c8d8b5f',
    },
    {
      whatIsIt: 'highestRated',
      showName: 'Planet Earth II',
      showImageURL: 'https://wallpapercave.com/wp/wp4729468.jpg',
      showId: '6061e694c3c93f3e08c5a097',
    },
    {
      whatIsIt: 'mostPopular',
      showName: 'Game of Thrones',
      showImageURL: 'https://wallpapercave.com/wp/wp4285898.jpg',
      showId: '6061e595c3c93f3e08c5a096',
    },
  ]
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className='z-depth-1 rounded h-70'
      >
        <MDBCarouselInner>
          <Link to={`/show-info/${data[0].showId}`}>
            <MDBCarouselItem itemId='1'>
              <MDBView>
                <img
                  className='d-block w-100'
                  src={data[0].showImageURL}
                  alt='First slide'
                />
                <MDBMask overlay='black-light' />
              </MDBView>
              <MDBCarouselCaption>
                <h1 className='h1-responsive'>
                  <strong>{data[0].showName}</strong>
                </h1>
                <p></p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </Link>

          <Link to={`/show-info/${data[1].showId}`}>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                  className='d-block h-70 w-100'
                  src={data[1].showImageURL}
                  alt='Second slide'
                />
                <MDBMask overlay='black-strong' />
              </MDBView>
              <MDBCarouselCaption>
                <h1 className='h1-responsive'>
                  <strong>{data[1].showName}</strong>
                </h1>
                <p></p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </Link>

          <Link to={`/show-info/${data[2].showId}`}>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                  className='d-block h-70 w-100'
                  src={data[2].showImageURL}
                  alt='Third slide'
                />
                <MDBMask overlay='black-slight' />
              </MDBView>
              <MDBCarouselCaption>
                <h1 className='h1-responsive'>
                  <strong>{data[2].showName}</strong>
                </h1>
                <p></p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </Link>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  )
}

export default CarouselPage
