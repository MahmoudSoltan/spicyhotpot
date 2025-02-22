import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import PopularDishes from './components/PopularDishes'
import Partners from './components/Partners'
import KeyFeatures from './components/KeyFeatures'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <PopularDishes/>
    <Partners/>
    <KeyFeatures/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App