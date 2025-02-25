import Navbar from '@/Components/Navbar'
import WelcomeSection from '@/Components/WelcomeSection'
import Services from '@/Components/Services'
import React from 'react'
import Blog from '@/Components/Blog'
import LPLiveStreaming from '@/Components/LPLiveStreaming'
import Footer from '@/Components/Footer'
import ContactUs from '@/Components/LPContactUs'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <WelcomeSection />
    <Services />
    <Blog />
    <LPLiveStreaming />
    <ContactUs />
    <Footer />
    </>
  )
}

export default LandingPage