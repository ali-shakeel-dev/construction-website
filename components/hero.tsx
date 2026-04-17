'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="h-screen relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/hero-bg.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Building the Future with <span className="text-orange-400">Precision and Scale</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            Delivering large-scale construction, manpower, and infrastructure support services across Saudi Arabia with unmatched reliability and execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#portfolio" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold flex items-center justify-center gap-2 transition-colors hover:scale-105 duration-200 cursor-pointer">
              See our work <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default Hero
