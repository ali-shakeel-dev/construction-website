'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="h-screen relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center justify-center">

      {/* Background */}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-3xl"
        >

          {/* Small label */}
          <p className="text-[11px] tracking-[0.14em] uppercase text-orange-400">
            Construction • Manpower • Infrastructure
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight">
            Your Construction Partner
            <br className="hidden md:block" />
            <span className="block mt-2">
              with Skilled Manpower
            </span>
            <span className="block text-orange-400">
              Heavy Equipment & Materials
            </span>
          </h1>

          {/* Description (clean + human) */}
          <p className="text-[16px] md:text-lg text-gray-200 leading-relaxed">
            Delivering construction, manpower, and infrastructure support across Saudi Arabia with reliable execution on every project.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a
              href="#portfolio"
              className="group relative bg-orange-500 text-white px-8 py-3 font-medium flex items-center justify-center gap-2 overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight size={18} />
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