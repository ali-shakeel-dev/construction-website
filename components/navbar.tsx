'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasBackground, setHasBackground] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Manpower', href: '#manpower' },
    { name: 'Vehicles', href: '#vehicles' },
    { name: 'Safety', href: '#safety' },
    { name: 'Clients', href: '#clients' },
    { name: 'Areas', href: '#areas' },
    { name: 'Contact', href: '#contact' },
  ]

  // Scroll background + active section
  useEffect(() => {
    const handleScroll = () => {
      setHasBackground(window.scrollY > 50)

      let current = ''
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = link.href
          }
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${hasBackground
        ? 'border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80'
        : 'border-none bg-transparent'
        }`}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`max-w-7xl mx-auto px-6 ${hasBackground ? 'py-3' : 'py-5'
          } flex items-center justify-between transition-all duration-300`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* <div className="w-8 h-8 border border-orange-500 flex items-center justify-center text-orange-500 text-[11px] font-semibold">
            MAK
          </div> */}
          <img
            src={
              hasBackground
                ? '/MAKContractingLOGO.png'
                : '/MAKContractingWhiteLOGO.png'
            }
            alt="MAK Contracting"
            className="transition-all duration-300"
            width={80}
          />
          <span
            className={`font-medium text-lg transition-colors ${hasBackground ? 'text-charcoal' : 'text-white'
              }`}
          >
            MAK Contracting
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href

              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors ${isActive
                    ? 'text-orange-500'
                    : hasBackground
                      ? 'text-gray-500 hover:text-charcoal'
                      : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {link.name}
                </button>
              )
            })}
          </div>

          {/* CTA */}
          <a
            href="tel:+966554051906"
            className="hidden md:block group relative bg-orange-500 text-white px-6 py-3 font-medium flex items-center justify-center overflow-hidden transition-transform duration-200 hover:scale-[1.03]"
          >
            <span className="relative z-10">Request Call</span>

            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/30"></div>
            </div>
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${hasBackground ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
          >
            {isOpen ? (
              <X
                size={24}
                className={hasBackground ? 'text-charcoal' : 'text-white'}
              />
            ) : (
              <Menu
                size={24}
                className={hasBackground ? 'text-charcoal' : 'text-white'}
              />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-gray-200 bg-white"
        >
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href

              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-left py-2 font-medium transition-colors ${isActive
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                    }`}
                >
                  {link.name}
                </button>
              )
            })}

            <a
              href="tel:0509784533"
              className="block w-full text-center bg-orange-500 text-white py-2 font-medium mt-4 transition-transform duration-200 hover:scale-[1.03]"
            >
              Request Call
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar