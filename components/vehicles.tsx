'use client'

import { motion } from 'framer-motion'
import { Bus, Truck, Check } from 'lucide-react'

const Vehicles = () => {
  const fleets = [
    {
      icon: Bus,
      title: 'Buses',
      capacity: '25–50 passengers',
      features: [
        'Air Conditioning',
        'GPS Tracking',
        'Safety Equipment',
        'Professional Drivers',
        'Regular Maintenance',
      ],
      description: 'Efficient and safe workforce transportation for large construction teams.',
      image: '/images/buses.jpg',
    },
    {
      icon: Truck,
      title: 'Pickup Trucks',
      capacity: 'Tools & equipment',
      features: [
        '4WD capability',
        'Cargo beds',
        'Towing support',
        'Fuel efficient',
        'All-weather ready',
      ],
      description: 'Flexible mobility for supervisors and site operations.',
      image: '/images/trucks.jpg',
    },
  ]

  return (
    <section id="vehicles" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">Fleet & Transportation</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reliable transportation and logistics support for seamless project execution.
          </p>
        </motion.div>

        {/* Fleet Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {fleets.map((fleet, idx) => {
            const Icon = fleet.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="overflow-hidden border border-gray-300 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="aspect-square bg-gray-300 overflow-hidden md:order-1">
                    <img
                      src={fleet.image}
                      alt={fleet.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:order-2 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="text-orange-500" size={32} />
                      <div>
                        <h3 className="text-2xl font-bold text-charcoal">{fleet.title}</h3>
                        <p className="text-sm text-gray-600">{fleet.capacity}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {fleet.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-2">
                          <Check size={18} className="text-orange-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed">{fleet.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Vehicles
