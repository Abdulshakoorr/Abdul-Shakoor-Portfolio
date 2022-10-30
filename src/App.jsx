import React from 'react'
import './App.css'
import About from './components/About'
import Herosec from './components/Herosec'
import Middle from './components/Middle'
import Nav from './components/Nav'
import ImageSlider from './components/ImageSlider'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
const App = () => {
  return (
    <>
      <Nav/>
      <div className='bg-[#FFFAE7] max-w-screen px-4 sm:px-12 md:px-16 lg:px-24 relative'>
        <Herosec/>
        <Middle/>
        <About/>
        <ImageSlider/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <hr />
        <footer className='h-10 text-center'>
          <p>copyright 2022 || Abdul Shakoor</p> 
        </footer>
      </div>
    </>
  )
}

export default App