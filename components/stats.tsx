'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 1200, suffix: '+', label: 'Skilled Workers' },
  { value: 80, suffix: '+', label: 'Vehicles Available' },
  { value: 10, suffix: '+', label: 'Projects Completed' },
  { value: 4, suffix: '+', label: 'Years Experience' },
]

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 1200
    const increment = value / (duration / 16)

    const counter = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(counter)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-white border border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              {/* Number */}
              <div className="text-3xl md:text-4xl font-medium text-charcoal">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-orange-500 mt-3 mb-3 rounded-sm" />

              {/* Label */}
              <p className="text-[13px] text-gray-500">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Stats