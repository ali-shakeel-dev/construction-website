'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-7xl mx-auto px-6 h-screen flex flex-col items-center justify-center text-center">
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

      {/* Logo Carousel Section */}
      <div className="relative bg-charcoal py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest">Our Partners</p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-charcoal to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-charcoal to-transparent z-10" />
            
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="flex gap-12 w-max"
            >
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-12">
                  {[
                    { emoji: '🏗️', name: 'STATSIG' },
                    { emoji: '⚙️', name: 'Cortex' },
                    { emoji: '🔧', name: '2X' },
                    { emoji: '🏭', name: 'Tennr' },
                    { emoji: '🏢', name: 'Maven' },
                  ].map((logo, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center min-w-max px-8 py-4"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="text-4xl">{logo.emoji}</div>
                        <div className="text-sm text-gray-300 font-semibold whitespace-nowrap">{logo.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
