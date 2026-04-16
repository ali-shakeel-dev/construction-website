'use client'

import { motion } from 'framer-motion'

const Clients = () => {
  const clients = [
    { name: 'BESIX', logo: '🏢' },
    { name: 'Saudi Aramco', logo: '⚡' },
    { name: 'Al Bawani', logo: '🏗️' },
    { name: 'Jong Steel', logo: '⛓️' },
    { name: 'MID Contracting', logo: '🔧' },
    { name: 'Tamimi', logo: '🏪' },
    { name: 'NEOM', logo: '🌟' },
    { name: 'Sinopec', logo: '🛢️' },
    { name: 'MERAS', logo: '⚙️' },
    { name: 'ZYCC', logo: '🚀' },
  ]

  return (
    <section id="clients" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">Our Clients</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations across Saudi Arabia and the region.
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="flex flex-col items-center justify-center p-6 border border-gray-300 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all bg-off-white hover:bg-white cursor-pointer group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{client.logo}</div>
              <p className="text-center text-sm font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">{client.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
