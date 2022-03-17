import React, { Component } from 'react'
import Header from './Components/header'
import About from './Components/about'
import Resume from './Components/resume'
import Contact from './Components/contact'
import Home from './Components/home'
import './App.css'

import './css/styles.css'

import Portfolio from './Components/portfolio'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    )
  }
}

export default App
