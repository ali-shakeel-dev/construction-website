'use client'

import { motion } from 'framer-motion'
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
      image: '/images/manpower-4.jpg',
    },
    {
      icon: Shield,
      title: 'Safety Professionals',
      description:
        'Safety officers ensuring compliance and zero-incident site operations.',
      image: '/images/manpower-5.jpg',
    },
    {
      icon: Briefcase,
      title: 'Professional Engineers',
      description:
        'Experienced engineers overseeing design, execution, and site coordination.',
      image: '/images/manpower-6.jpg',
    },
  ]

  const activeCategory = categories[activeTab]
  const Icon = activeCategory.icon

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % categories.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="manpower" className="py-20 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header — system aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex flex-col items-center">
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-orange-500 mb-3">
              Workforce & Expertise
            </p>

            <h2 className="text-4xl md:text-5xl font-medium text-center text-charcoal leading-tight">
              Skilled Manpower Solutions
            </h2>

            <div className="w-16 h-[3px] bg-orange-500 mt-4 rounded-sm" />

            <p className="text-[15px] text-gray-500 max-w-lg text-center mt-4 leading-[1.5]">
              Reliable, trained, and project-ready workforce for every stage of construction.
            </p>
          </div>
        </motion.div>

        {/* Tabs — softened (not SaaS UI anymore) */}
        <div className="hidden md:flex justify-center mb-10">
          <div className="flex gap-1 border border-gray-100 bg-white p-1">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2 text-[12px] font-medium transition-all ${
                  activeTab === idx
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 hover:text-charcoal hover:bg-gray-50'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Dropdown (unchanged behavior, refined styling only) */}
        <div className="md:hidden mb-8">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-full bg-orange-500 text-white px-4 py-3 text-sm font-medium flex items-center justify-between"
          >
            <span>{activeCategory.title}</span>
            <ChevronDown
              size={20}
              className={`transition-transform ${
                mobileOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-gray-100 bg-white"
            >
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveTab(idx)
                    setMobileOpen(false)
                  }}
                  className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                >
                  {category.title}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Content Card — industrial system style */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-gray-100 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Image */}
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={activeCategory.image}
                alt={activeCategory.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-10 flex flex-col justify-center gap-6">

              <div className="flex items-center gap-3">
                <Icon className="text-orange-500 opacity-90" size={28} />

                <h3 className="text-[20px] font-medium text-charcoal leading-[1.4]">
                  {activeCategory.title}
                </h3>
              </div>

              <p className="text-[14px] text-gray-500 leading-[1.5]">
                {activeCategory.description}
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-600 text-[13px]">
                  <span className="w-1.5 h-1.5 mt-[6px] bg-orange-500 rounded-full"></span>
                  Project-ready workforce
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-[13px]">
                  <span className="w-1.5 h-1.5 mt-[6px] bg-orange-500 rounded-full"></span>
                  Certified and trained professionals
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-[13px]">
                  <span className="w-1.5 h-1.5 mt-[6px] bg-orange-500 rounded-full"></span>
                  Safety and quality assured
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