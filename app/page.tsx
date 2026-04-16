'use client'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Portfolio from '@/components/portfolio'
import Manpower from '@/components/manpower'
import Vehicles from '@/components/vehicles'
import Safety from '@/components/safety'
import Clients from '@/components/clients'
import AreasOfOperation from '@/components/areas-of-operation'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scroll-to-top'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Portfolio />
      <Manpower />
      <Vehicles />
      <Safety />
      <Clients />
      <AreasOfOperation />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
