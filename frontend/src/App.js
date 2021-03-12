import './App.css'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.js'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <main className='py-3'>
            <Route path='/' component={HomeScreen} exact />
          </main>
        </Container>
        <Footer />
      </Router>
    </>
  )
}

export default App
