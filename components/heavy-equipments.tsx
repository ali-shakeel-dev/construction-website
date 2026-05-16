'use client'

import { motion } from 'framer-motion'
import {
  Truck,
  Tractor,
  Settings,
  Cog,
  Construction,
  Zap,
} from 'lucide-react'

const HeavyEquipments = () => {
  const equipments = [
    {
      icon: Construction,
      name: 'Backhoe Loader',
      image: '/images/backhoe_loader.jpg',
      description: 'Versatile digging and loading equipment for all-site operations.',
    },
    {
      icon: Cog,
      name: 'Bobcat',
      image: '/images/bobcat.jpg',
      description: 'Compact loader for tight and high-efficiency construction work.',
    },
    {
      icon: Truck,
      name: 'Concrete Mixer Truck',
      image: '/images/concrete_mixer_truck.jpg',
      description: 'Reliable transport and mixing of concrete on large construction sites.',
    },
    {
      icon: Settings,
      name: 'Concrete Mixer Pump',
      image: '/images/concrete_mixer_pump.jpg',
      description: 'High-efficiency concrete pumping for fast placement.',
    },
    {
      icon: Truck,
      name: 'Crawler Crane',
      image: '/images/crawler-crane.jpg',
      description: 'Heavy lifting crane for large-scale structural operations.',
    },
    {
      icon: Construction,
      name: 'Excavator',
      image: '/images/excavator.webp',
      description: 'Powerful earth-moving machine for excavation and demolition.',
    },
    {
      icon: Settings,
      name: 'Mobile Crane',
      image: '/images/mobile_crane.jpg',
      description: 'Flexible lifting solution for dynamic construction environments.',
    },
    {
      icon: Tractor,
      name: 'Road Roller',
      image: '/images/road_roller.jpg',
      description: 'Compaction equipment for roads and infrastructure projects.',
    },
    {
      icon: Cog,
      name: 'Shovel Loader',
      image: '/images/shovel_loader.jpg',
      description: 'Efficient material handling and loading operations.',
    },
    {
      icon: Truck,
      name: 'Telescopic Mobile Crane',
      image: '/images/telescopic_mobile_crane.webp',
      description: 'Extended reach lifting for complex site requirements.',
    },
  ]

  return (
    <section id="heavy-equipments" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-orange-500 mb-3">
            Fleet & Machinery
          </p>

          <h2 className="text-4xl md:text-5xl font-medium text-center text-charcoal leading-tight">
            Heavy Equipments
          </h2>

          <div className="w-16 h-[3px] bg-orange-500 mt-4 rounded-sm" />

          <p className="text-[15px] text-gray-500 max-w-lg text-center mt-4">
            Modern heavy machinery supporting large-scale construction and infrastructure projects.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {equipments.map((item, idx) => {
            const Icon = item.icon
            const isLast = idx === equipments.length - 1

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

                  ${isLast ? 'xl:col-start-2' : ''}
                `}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">

                  <img
                    src={item.image}
                    alt={item.name}
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
                <div className="p-5 sm:p-6 flex flex-col gap-3">

                  {/* Title */}
                  <div className="flex items-start gap-3">

                    <div className="w-10 h-10 flex items-center justify-center bg-orange-50 border border-orange-100">
                      <Icon size={20} className="text-orange-500" />
                    </div>

                    <div>
                      <h3 className="text-[17px] sm:text-[18px] font-medium text-charcoal group-hover:text-orange-500 transition-colors">
                        {item.name}
                      </h3>
                    </div>

                  </div>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default HeavyEquipments