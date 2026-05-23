import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../sections/HeroSection'
import Ticker from '../components/Ticker'
import Services from '../sections/Services'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Ticker />
      <Services />
    </div>
  )
}

export default HomePage
