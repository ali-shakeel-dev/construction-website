'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  Wrench,
  Zap,
  Flame,
  Users,
  Shield,
  Briefcase,
  ChevronDown,
} from 'lucide-react'

const Manpower = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const categories = [
    {
      icon: Wrench,
      title: 'Skilled Trades',
      description:
        'Expert carpenters, plumbers, and HVAC specialists ready for every project phase.',
      image: '/images/manpower-1.jpg',
    },
    {
      icon: Zap,
      title: 'Electrical & Technical',
      description:
        'Certified electricians and technical experts ensuring compliance and safety.',
      image: '/images/manpower-2.jpg',
    },
    {
      icon: Flame,
      title: 'Welding & Fabrication',
      description:
        'Certified welders delivering precise structural fabrication and metalwork.',
      image: '/images/manpower-3.jpg',
    },
    {
      icon: Users,
      title: 'General Labor',
      description:
        'Reliable workforce for foundational construction and site support operations.',
      image: '/images/GeneralLabor.png',
    },
    {
      icon: Shield,
      title: 'Safety Professionals',
      description:
        'Safety officers ensuring compliance and zero-incident site operations.',
      image: '/images/SafetyProfessionals2.jpeg',
    },
    {
      icon: Briefcase,
      title: 'Professional Engineers',
      description:
        'Experienced engineers overseeing design, execution, and site coordination.',
      image: '/images/manpower-6.jpg',
    },
  ]

  const skilledImages = [
    '/images/SkilledTrades.png',
    '/images/SkilledTrades2.png',
  ]

  const activeCategory = categories[activeTab]
  const Icon = activeCategory.icon

  // Slower tab rotation (feels intentional now)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % categories.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  // Image crossfade loop ONLY for first tab
  useEffect(() => {
    if (activeTab !== 0) return

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % skilledImages.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [activeTab])

  return (
    <section id="manpower" className="py-20 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-orange-500 mb-3">
            Workforce & Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-medium text-center text-charcoal">
            Skilled Manpower Solutions
          </h2>

          <div className="w-16 h-[3px] bg-orange-500 mt-4 rounded-sm" />

          <p className="text-[15px] text-gray-500 max-w-lg text-center mt-4">
            Reliable, trained, and project-ready workforce for every stage of construction.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="hidden md:flex justify-center mb-10">
          <div className="flex gap-1 border border-gray-100 bg-white p-1">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2 text-[12px] font-medium ${activeTab === idx
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden mb-8">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-full bg-orange-500 text-white px-4 py-3 flex justify-between"
          >
            <span>{activeCategory.title}</span>
            <ChevronDown className={mobileOpen ? 'rotate-180' : ''} />
          </button>

          {mobileOpen && (
            <div className="border bg-white">
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveTab(idx)
                    setMobileOpen(false)
                  }}
                  className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50"
                >
                  {category.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-gray-100 overflow-hidden"
        >
          <div className="grid md:grid-cols-2">

            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-gray-100">

              {activeTab === 0 ? (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imageIndex}
                    src={skilledImages[imageIndex]}
                    alt="Skilled"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              ) : (
                <motion.img
                  key={activeCategory.image}
                  src={activeCategory.image}
                  alt={activeCategory.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              )}

            </div>

            {/* Content */}
            <div className="p-10 flex flex-col gap-6 justify-center">

              <div className="flex items-center gap-3">
                <Icon className="text-orange-500" size={28} />
                <h3 className="text-lg font-medium text-charcoal">
                  {activeCategory.title}
                </h3>
              </div>

              <p className="text-sm text-gray-500">
                {activeCategory.description}
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Project-ready workforce</li>
                <li>• Certified professionals</li>
                <li>• Safety assured</li>
              </ul>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Manpower