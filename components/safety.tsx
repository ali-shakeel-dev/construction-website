'use client'

import { motion } from 'framer-motion'
import { Shield, AlertCircle, Heart } from 'lucide-react'

const Safety = () => {
  const safetyServices = [
    {
      icon: Shield,
      title: 'Safety Equipment',
      description: 'Full PPE kits including helmets, vests, gloves, footwear, and respiratory protection.',
      image: '/images/safety-equipment.jpg',
    },
    {
      icon: AlertCircle,
      title: 'Safety Tools',
      description: 'Barriers, warning systems, fire extinguishers, fall protection, and first aid systems.',
      image: '/images/safety-tools.jpg',
    },
    {
      icon: Heart,
      title: 'On-Site Ambulance',
      description: '24/7 emergency response with trained personnel and medical equipment.',
      image: '/images/ambulance.jpg',
    },
  ]

  return (
    <section id="safety" className="py-20 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">Safety & Compliance Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ensuring the highest safety standards across all operations.
          </p>
        </motion.div>

        {/* Safety Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {safetyServices.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="overflow-hidden border border-gray-300 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all bg-white cursor-pointer"
              >
                <div className="aspect-square bg-gray-300 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="text-orange-500" size={28} />
                    <h3 className="text-xl font-bold text-charcoal">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Safety
