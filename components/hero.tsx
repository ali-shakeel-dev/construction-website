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
            Your Construction Partner <span className="text-orange-400">with Skilled Manpower</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            Delivering large-scale construction, manpower, and infrastructure support services across Saudi Arabia with unmatched reliability and execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a
              href="#portfolio"
              className="group relative bg-orange-500 text-white px-8 py-3 font-semibold flex items-center justify-center gap-2 overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                See our work <ArrowRight size={20} />
              </span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/30"></div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default Hero
