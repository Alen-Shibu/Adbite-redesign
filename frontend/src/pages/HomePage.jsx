import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../sections/HeroSection'
import Ticker from '../components/Ticker'
import Services from '../sections/Services'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Ticker />
      <Services />
      <Footer />
    </div>
  )
}

export default HomePage
