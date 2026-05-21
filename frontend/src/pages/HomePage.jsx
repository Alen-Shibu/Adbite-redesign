import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import HeroSection from '../components/home/HeroSection'
import Ticker from '../components/home/Ticker'
import ServicesSection from '../components/home/ServicesSection'
import LocationsSection from '../components/home/LocationsSection'
import ContactSection from '../components/home/ContactSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Ticker />
        <ServicesSection />
        <LocationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
