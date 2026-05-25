import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../sections/HeroSection'
import Ticker from '../components/Ticker'
import Services from '../sections/Services'
import Footer from '../components/Footer'
import Contact from '../sections/Contact'
import Locations from '../sections/Location'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Ticker />
      <Services />
      <Locations />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage
