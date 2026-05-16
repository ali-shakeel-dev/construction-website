'use client'

import { motion } from 'framer-motion'
import { Bus, Truck, Check, CarFront, Ambulance } from 'lucide-react'

const Vehicles = () => {
  const fleets = [
    {
      icon: Bus,
      title: 'Buses',
      capacity: '25–50 Passengers',
      features: [
        'Air Conditioned',
        'GPS Tracking',
        'Professional Drivers',
        'Daily Maintenance',
      ],
      description:
        'Reliable workforce transportation for large construction and industrial teams.',
      image: '/images/buses.jpg',
    },

    {
      icon: Truck,
      title: 'Pickup Trucks',
      capacity: 'Equipment & Site Mobility',
      features: [
        '4WD Capability',
        'Cargo Transport',
        'Fuel Efficient',
        'All Terrain Ready',
      ],
      description:
        'Flexible transportation support for supervisors, engineers, and operational teams.',
      image: '/images/pickup.webp',
    },

    {
      icon: Bus,
      title: 'Mini Buses',
      capacity: '12–20 Passengers',
      features: [
        'Comfort Seating',
        'AC Equipped',
        'Crew Transport',
        'Urban & Remote Access',
      ],
      description:
        'Efficient transportation solution for smaller workforce groups and staff movement.',
      image: '/images/buses.jpg',
    },

    {
      icon: CarFront,
      title: 'Luxury Buses',
      capacity: 'Executive Transportation',
      features: [
        'Premium Interiors',
        'Reclining Seats',
        'WiFi & Charging',
        'Long Distance Comfort',
      ],
      description:
        'High-comfort transportation for executives, VIP staff, and corporate delegations.',
      image: '/images/luxury_buses.webp',
    },

    {
      icon: Ambulance,
      title: 'Emergency Response Pickup',
      capacity: 'Rapid Response Unit',
      features: [
        'Emergency Equipment',
        'Safety Ready',
        'Fast Deployment',
        '24/7 Availability',
      ],
      description:
        'Dedicated emergency response vehicles supporting site safety and rapid incident handling.',
      image: '/images/emergency_response_pickup.jpg',
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {fleets.map((fleet, idx) => {
            const isLastTwo = idx >= fleets.length - 2
            const Icon = fleet.icon

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`
  group border border-gray-100 bg-white overflow-hidden
  shadow-[0_8px_30px_rgba(0,0,0,0.04)]
  hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]
  transition-all duration-300
  w-full

  ${isLastTwo ? 'xl:col-span-1' : ''}
  ${idx === fleets.length - 2 ? 'xl:col-start-1 xl:translate-x-1/2' : ''}
  ${idx === fleets.length - 1 ? 'xl:col-start-2 xl:translate-x-1/2' : ''}
`}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">

                  <img
                    src={fleet.image}
                    alt={fleet.title}
                    className="
        w-full h-full object-cover
        group-hover:scale-[1.04]
        transition-transform duration-500
      "
                  />

                  {/* Shine effect */}
                  <div
                    className="
        pointer-events-none absolute inset-0 flex justify-center
        [transform:skew(-12deg)_translateX(-120%)]
        group-hover:duration-1000
        group-hover:[transform:skew(-12deg)_translateX(120%)]
      "
                  >
                    <div className="w-16 bg-white/20 blur-sm" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col gap-4">

                  {/* Title */}
                  <div className="flex items-start gap-3">

                    <div
                      className="
          w-10 h-10 flex items-center justify-center
          bg-orange-50 border border-orange-100
          flex-shrink-0
        "
                    >
                      <Icon size={20} className="text-orange-500" />
                    </div>

                    <div>
                      <h3
                        className="
            text-[17px] sm:text-[18px]
            font-medium text-charcoal leading-[1.4]
            group-hover:text-orange-500
            transition-colors duration-200
          "
                      >
                        {fleet.title}
                      </h3>

                      <p className="text-[12px] sm:text-[13px] text-gray-500 mt-1">
                        {fleet.capacity}
                      </p>
                    </div>

                  </div>

                  {/* Description */}
                  <p
                    className="
        text-[13px] sm:text-[14px]
        text-gray-500 leading-relaxed
      "
                  >
                    {fleet.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 pt-1">

                    {fleet.features.map((feature, fidx) => (
                      <div
                        key={fidx}
                        className="
            px-3 py-2
            border border-gray-100
            bg-gray-50
            text-[12px] text-gray-700
            flex items-center gap-2
          "
                      >
                        <Check size={13} className="text-orange-500" />
                        {feature}
                      </div>
                    ))}

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