import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Import des styles globales
import './styles/index.css'

// import des pages
import Home from './pages/Home.js'
import About from './pages/About.js'
import Housing from './pages/Housing.js'
import Error from './pages/Error.js'

// Import des composants
import Header from './components/Header.js'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/Housing/:id'
        render={props => <Housing {...props} />}
        element={<Housing />}
      />
      <Route path='*' element={<Error />} />
      <Route path='about' element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
