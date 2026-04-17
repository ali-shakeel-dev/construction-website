'use client'

import { motion } from 'framer-motion'
import { Shield, AlertCircle, Heart } from 'lucide-react'

const Safety = () => {
  const safetyServices = [
    {
      icon: Shield,
      title: 'Safety Equipment',
      description:
        'Full PPE kits including helmets, vests, gloves, footwear, and respiratory protection.',
      image: '/images/safety-equipment.jpg',
    },
    {
      icon: AlertCircle,
      title: 'Safety Tools',
      description:
        'Barriers, warning systems, fire extinguishers, fall protection, and first aid systems.',
      image: '/images/safety-tools.jpg',
    },
    {
      icon: Heart,
      title: 'On-Site Ambulance',
      description:
        '24/7 emergency response with trained personnel and medical equipment.',
      image: '/images/ambulance.jpg',
    },
  ]

  return (
    <section id="safety" className="py-20 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header — aligned with other sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex flex-col items-center">
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-orange-500 mb-3">
              Protection & Standards
            </p>

            <h2 className="text-4xl md:text-5xl font-medium text-center text-charcoal leading-tight">
              Safety & Compliance
            </h2>

            <div className="w-16 h-[3px] bg-orange-500 mt-4 rounded-sm" />

            <p className="text-[15px] text-gray-500 max-w-lg text-center mt-4 leading-[1.5]">
              Safety systems built into every stage of execution across all sites.
            </p>
          </div>
        </motion.div>

{/* Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  {safetyServices.map((service, idx) => {
    const Icon = service.icon

    return (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: idx * 0.08 }}
        className="
          group bg-white border border-gray-100 overflow-hidden
          shadow-[0_8px_30px_rgba(0,0,0,0.04)]
          hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]
          transition-all duration-300
        "
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">

          <img
            src={service.image}
            alt={service.title}
            className="
              w-full h-full object-cover
              transition-transform duration-700
              group-hover:scale-[1.04]
            "
          />

          {/* Shine effect (your version) */}
          <div className="
            pointer-events-none absolute inset-0 flex justify-center
            [transform:skew(-12deg)_translateX(-120%)]
            group-hover:duration-1000
            group-hover:[transform:skew(-12deg)_translateX(120%)]
          ">
            <div className="w-16 bg-white/20 blur-sm"></div>
          </div>

        </div>

        {/* Content */}
        <div className="p-7 flex flex-col gap-4">

          <div className="flex items-center gap-3">
            <Icon className="text-orange-500 opacity-90" size={22} />
            <h3 className="text-[15px] font-medium text-charcoal leading-[1.4] group-hover:text-orange-500 transition-colors duration-200">
              {service.title}
            </h3>
          </div>

          <p className="text-[13px] text-gray-500 leading-[1.5]">
            {service.description}
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

export default Safety