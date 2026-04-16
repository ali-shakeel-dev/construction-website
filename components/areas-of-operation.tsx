'use client'

import { motion } from 'framer-motion'
import { Building2, Factory, Home, Zap } from 'lucide-react'

const AreasOfOperation = () => {
  const areas = [
    {
      icon: Building2,
      title: 'Commercial & High-Rise',
      specialties: [
        'Office towers',
        'Shopping centers',
        'Hotels & hospitality',
        'Mixed-use developments',
        'Modern facade systems',
      ],
    },
    {
      icon: Factory,
      title: 'Industrial & Manufacturing',
      specialties: [
        'Manufacturing facilities',
        'Warehouses',
        'Processing plants',
        'Heavy equipment installation',
        'Industrial infrastructure',
      ],
    },
    {
      icon: Home,
      title: 'Residential Development',
      specialties: [
        'Apartment complexes',
        'Villas & townhouses',
        'Residential compounds',
        'Master-planned communities',
        'Interior finishing',
      ],
    },
    {
      icon: Zap,
      title: 'Infrastructure & Utilities',
      specialties: [
        'Power plants',
        'Water treatment',
        'Utilities networks',
        'Transportation infrastructure',
        'Renewable energy projects',
      ],
    },
  ]

  return (
    <section id="areas" className="py-20 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">Areas of Operation</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction solutions across multiple sectors and scales.
          </p>
        </motion.div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, idx) => {
            const Icon = area.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="overflow-hidden border border-gray-300 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all bg-white p-6 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-orange-500 flex-shrink-0" size={32} />
                  <h3 className="text-lg font-bold text-charcoal">{area.title}</h3>
                </div>
                <ul className="space-y-2">
                  {area.specialties.map((specialty, sidx) => (
                    <li key={sidx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-orange-500 font-bold mt-1">•</span>
                      <span>{specialty}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AreasOfOperation
