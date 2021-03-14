import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-dark bg-primary'>
        <Container>
          <a class='navbar-brand' href='/'>
            Rev-Taku
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarColor01'
            aria-controls='navbarColor01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>

          <div class='collapse navbar-collapse' id='navbarColor01'>
            <ul class='navbar-nav mr-auto'>
              <li class='nav-item'>
                <a class='nav-link' href='/movies'>
                  Movies
                  <span class='sr-only'>(current)</span>
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='/series'>
                  Series
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='/animes'>
                  Anime
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='/about'>
                  About
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default Header
