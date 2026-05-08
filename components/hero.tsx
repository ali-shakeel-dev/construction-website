'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const images = [
  '/images/Background3.png',
  '/images/Background.jpg',
  '/images/Background1.jpg',
  '/images/Background2.jpg',
]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="h-screen relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center justify-center"
    >

      {/* Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${images[current]}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-500 rounded-full ${idx === current
              ? 'w-6 h-[5px] bg-orange-400'
              : 'w-[5px] h-[5px] bg-white/40 hover:bg-white/70'
              }`}
          />
        ))}
      </div>

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-orange-400 leading-tight">
            Everything Your Project Needs — One Platform
            <br className="hidden md:block" />
          </h1>

          {/* Description */}
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
                <div className="relative h-full w-8 bg-white/30" />
              </div>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero