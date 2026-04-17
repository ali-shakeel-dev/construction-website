'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasBackground, setHasBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasBackground(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Manpower', href: '#manpower' },
    { name: 'Vehicles', href: '#vehicles' },
    { name: 'Clients', href: '#clients' },
    { name: 'Safety', href: '#safety' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${hasBackground ? 'border-b border-gray-300 bg-white' : 'border-none bg-transparent '}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500" />
          <span className={`font-bold text-lg transition-colors ${hasBackground ? 'text-charcoal' : 'text-white'}`}>
            Rakan Al-Bina
          </span>
        </div>



        {/* CTA Button + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`cursor-pointer transition-colors text-sm font-medium ${hasBackground ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-300'}`}
              >
                {link.name}
              </button>
            ))}
          </div>
          <a
            href="tel:0509784533"
            className="hidden md:block group relative bg-orange-500 text-white px-6 py-3 font-semibold flex items-center justify-center overflow-hidden transition-transform duration-200 hover:scale-105 cursor-pointer"
          >
            <span className="relative z-10">
              Call Now
            </span>

            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/30"></div>
            </div>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-gray-300 bg-white"
        >
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-2 text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
            <a href="tel:0509784533" className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-2 font-semibold transition-colors mt-4 hover:scale-105 duration-200">
              Call Now
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
