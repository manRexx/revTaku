import './App.css'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.js'
import MovieScreen from './screens/MovieScreen'
import SeriesScreen from './screens/SeriesScreen'
import AnimeScreen from './screens/AnimeScreen'
import ShowInfoScreen from './screens/ShowInfoScreen'
import AboutScreen from './screens/AboutScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShowListScreen from './screens/ShowListScreen'
import ShowEditScreen from './screens/ShowEditScreen'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <main className='py-3'>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/movies' component={MovieScreen} />
            <Route path='/series' component={SeriesScreen} />
            <Route path='/animes' component={AnimeScreen} />
            <Route path='/show-info/:id' component={ShowInfoScreen} />{' '}
            <Route path='/about' component={AboutScreen} />
            <Route path='/admin/showlist' component={ShowListScreen} />
            <Route path='/admin/show/:id/edit' component={ShowEditScreen} />
          </main>
        </Container>
        <Footer />
      </Router>
    </>
  )
}

export default App
