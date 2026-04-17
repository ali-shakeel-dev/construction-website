'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wrench, Zap, Flame, Users, Shield, Briefcase, ChevronDown } from 'lucide-react'

const Manpower = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  const categories = [
    {
      icon: Wrench,
      title: 'Skilled Trades',
      description: 'Expert carpenters, plumbers, and HVAC specialists ready for any project phase.',
      image: '/images/manpower-1.jpg',
    },
    {
      icon: Zap,
      title: 'Electrical & Technical',
      description: 'Certified electricians and technical experts ensuring code compliance and safety.',
      image: '/images/manpower-2.jpg',
    },
    {
      icon: Flame,
      title: 'Welding & Fabrication',
      description: 'Certified welders delivering precise metalwork and structural fabrication.',
      image: '/images/manpower-3.jpg',
    },
    {
      icon: Users,
      title: 'General Labor',
      description: 'Reliable workforce for foundational and support operations.',
      image: '/images/manpower-4.jpg',
    },
    {
      icon: Shield,
      title: 'Safety Professionals',
      description: 'Safety officers ensuring compliance and zero-incident operations.',
      image: '/images/manpower-5.jpg',
    },
    {
      icon: Briefcase,
      title: 'Professional Engineers',
      description: 'Experienced engineers overseeing design and execution.',
      image: '/images/manpower-6.jpg',
    },
  ]

  const activeCategory = categories[activeTab]
  const Icon = activeCategory.icon

  return (
    <section id="manpower" className="py-20 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">Skilled Manpower Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reliable, trained, and project-ready workforce for every stage of construction.
          </p>
        </motion.div>

        {/* Desktop Tabs */}
        <div className="hidden md:block mb-8">
          <div className="flex gap-2 border-b border-gray-300 flex items-center justify-center">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`cursor-pointer px-6 py-3 font-semibold text-sm transition-all ${activeTab === idx
                  ? 'bg-orange-500 text-white'
                  : 'bg-transparent text-gray-600 hover:text-charcoal'
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
            className="w-full bg-orange-500 text-white px-4 py-3 font-semibold flex items-center justify-between"
          >
            <span>{activeCategory.title}</span>
            <ChevronDown size={20} className={`transition-transform ${mobileOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border border-gray-300 border-t-0 bg-white"
            >
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveTab(idx)
                    setMobileOpen(false)
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-off-white transition-colors text-gray-700 font-medium border-b border-gray-300 last:border-b-0"
                >
                  {category.title}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden border border-gray-300 shadow-sm bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="aspect-square bg-gray-300 overflow-hidden">
              <img
                src={activeCategory.image}
                alt={activeCategory.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <Icon className="text-orange-500 flex-shrink-0" size={40} />
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal">{activeCategory.title}</h3>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                {activeCategory.description}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-orange-500"></span>
                  <span>Project-ready workforce</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-orange-500"></span>
                  <span>Certified and trained professionals</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-orange-500"></span>
                  <span>Safety and quality assured</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Manpower
