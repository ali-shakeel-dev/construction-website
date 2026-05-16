'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Clients = () => {

  return (
    <section id="clients" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-8"
        >
          <div className="flex items-center flex-col">
            <p className="text-[11px] font-medium tracking-[0.12em] text-center uppercase text-orange-500 mb-3">
              Network & Trust
            </p>

            <h2 className="text-4xl md:text-5xl font-medium text-center text-charcoal leading-tight">
              Our Clients
            </h2>

            <div className="w-20 h-[3px] bg-orange-500 mt-1 mb-4 rounded-sm" />
            <p className="text-[15px] text-gray-500 max-w-lg leading-relaxed text-center pb-1">
              Trusted by leading organizations across Saudi Arabia and the region spanning infrastructure, and regional partnerships.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center items-center"
        >
          <Image
            src="/mak_contracting_clients.png" // your combined PNG
            alt="Our Clients"
            width={1400}
            height={700}
            priority
            className="
            w-full
            max-w-6xl
            h-auto
            object-contain
          "
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Clients