import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    console.log('Logout')
  }
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
          <div>
            {!userInfo ? (
              <ul class='navbar-nav mr-auto'>
                <li class='nav-item'>
                  <a class='nav-link' href='/login'>
                    Log-in / Sign-up
                    <span class='sr-only'>(current)</span>
                  </a>
                </li>
              </ul>
            ) : (
              <ul class='navbar-nav mr-auto'>
                <li class='nav-item'>
                  <a class='nav-link' href='/profile'>
                    <strong>{userInfo.name}</strong>
                    <span class='sr-only'>(current)</span>
                  </a>
                </li>
                <li class='nav-item'>
                  <Button onClick={logoutHandler}>Logout</Button>
                </li>
              </ul>
            )}
          </div>
        </Container>
      </nav>
    </>
  )
}

export default Header
