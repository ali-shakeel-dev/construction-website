'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Clients = () => {
  const clients = [
    // Tier 1: mega enterprise / strongest credibility
    { name: 'Saudi Aramco', logo: '/images/aramco.png' },
    { name: 'NEOM', logo: '/images/neom.png' },
    { name: 'Sinopec', logo: '/images/sinopec.png' },

    // Tier 2: major contractors / developers
    { name: 'BESIX', logo: '/images/besix.png' },
    { name: 'Al Bawani', logo: '/images/bawani.png' },
    { name: 'MERAS', logo: '/images/meras.png' },
    { name: 'MID Contracting', logo: '/images/midcon.png' },

    // Tier 3: supporting / regional partners
    { name: 'Tamimi', logo: '/images/tamimi.png' },
    { name: 'Sharq', logo: '/images/sharq.png' },
    { name: 'Jong Steel', logo: '/images/jong.png' },
    { name: 'ZYCC', logo: '/images/zycc.png' },
  ]

  return (
    <section id="clients" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
            Our Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations across Saudi Arabia and the region.
          </p>
        </motion.div>

        {/* Row 1 (6 items) */}
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 mb-14">
          {clients.slice(0, 6).map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              className="flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={180}
                height={100}
                className="h-16 md:h-18 w-auto object-contain
                          grayscale opacity-70
                          transition-all duration-300
                          hover:grayscale-0 hover:opacity-100 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Row 2 (remaining items centered) */}
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12">
          {clients.slice(6).map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              className="flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={180}
                height={100}
                className="h-16 md:h-18 w-auto object-contain
                          grayscale opacity-70
                          transition-all duration-300
                          hover:grayscale-0 hover:opacity-100 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Clients