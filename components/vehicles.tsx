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
      description:
        'Efficient and safe workforce transportation for large construction teams.',
      image: '/images/buses.webp',
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
      description:
        'Flexible mobility for supervisors and site operations.',
      image: '/images/trucks.webp',
    },
  ]

  return (
    <section id="vehicles" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header — aligned with system */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex flex-col items-center">
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-orange-500 mb-3">
              Fleet & Logistics
            </p>

            <h2 className="text-4xl md:text-5xl font-medium text-center text-charcoal leading-tight">
              Transportation Fleet
            </h2>

            <div className="w-16 h-[3px] bg-orange-500 mt-4 rounded-sm" />

            <p className="text-[15px] text-gray-500 max-w-lg text-center mt-4 leading-[1.5]">
              Reliable transportation and logistics support for seamless project execution.
            </p>
          </div>
        </motion.div>

        {/* Fleet Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {fleets.map((fleet, idx) => {
            const Icon = fleet.icon

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="
                  group bg-white border border-gray-100 overflow-hidden
                  shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]
                  transition-all duration-300
                "
              >
                <div className="grid grid-cols-1 md:grid-cols-2">

                  {/* Image */}
                  <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden bg-gray-100">
                    <img
                      src={fleet.image}
                      alt={fleet.title}
                      className="
                        w-full h-full object-cover
                        transition-transform duration-700
                        group-hover:scale-[1.04]
                      "
                    />

                    {/* Shine effect */}
                    <div
                      className="
                        pointer-events-none absolute inset-0
                        flex justify-center
                        -translate-x-[120%]
                        skew-x-[-12deg]
                        transition-transform duration-1000
                        group-hover:translate-x-[120%]
                      "
                    >
                      <div className="w-16 bg-white/20 blur-sm" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center gap-5">

                    {/* Title */}
                    <div className="flex items-center gap-3">
                      <Icon className="text-orange-500 opacity-90" size={26} />

                      <div>
                        <h3 className="text-[18px] font-medium text-charcoal leading-[1.4]">
                          {fleet.title}
                        </h3>
                        <p className="text-[12px] text-gray-500">
                          {fleet.capacity}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {fleet.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-start gap-2">
                          <Check size={16} className="text-orange-500 mt-[2px]" />
                          <span className="text-[13px] text-gray-600 leading-[1.4]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-[13px] text-gray-500 leading-[1.5]">
                      {fleet.description}
                    </p>

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