'use client'
import { motion } from 'framer-motion'

const areas = [
  {
    num: '01',
    title: 'Commercial & High-Rise',
    specialties: [
      'Office towers',
      'Shopping centers',
      'Hotels & hospitality',
      'Mixed-use developments',
      'Modern facade systems',
    ],
    icon: (
      <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="8" y="10" width="26" height="28" stroke="#d85a30" strokeWidth="1.5"/>
        <rect x="13" y="20" width="5" height="5" stroke="#d85a30" strokeWidth="1.2"/>
        <rect x="24" y="20" width="5" height="5" stroke="#d85a30" strokeWidth="1.2"/>
        <rect x="13" y="29" width="5" height="9" stroke="#d85a30" strokeWidth="1.2"/>
        <rect x="24" y="29" width="5" height="9" stroke="#d85a30" strokeWidth="1.2"/>
        <line x1="8" y1="15" x2="34" y2="15" stroke="#d85a30" strokeWidth="1.2"/>
        <line x1="21" y1="10" x2="21" y2="38" stroke="#d85a30" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Industrial & Manufacturing',
    specialties: [
      'Manufacturing facilities',
      'Warehouses',
      'Processing plants',
      'Heavy equipment installation',
      'Industrial infrastructure',
    ],
    icon: (
      <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="5" y="18" width="32" height="20" stroke="#d85a30" strokeWidth="1.5"/>
        <polyline points="5,18 21,8 37,18" stroke="#d85a30" strokeWidth="1.5" fill="none"/>
        <rect x="14" y="24" width="6" height="6" stroke="#d85a30" strokeWidth="1.2"/>
        <rect x="22" y="24" width="6" height="6" stroke="#d85a30" strokeWidth="1.2"/>
        <line x1="21" y1="18" x2="21" y2="38" stroke="#d85a30" strokeWidth="1.2"/>
        <line x1="5" y1="30" x2="37" y2="30" stroke="#d85a30" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Residential Development',
    specialties: [
      'Apartment complexes',
      'Villas & townhouses',
      'Residential compounds',
      'Master-planned communities',
      'Interior finishing',
    ],
    icon: (
      <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="7" y="20" width="28" height="18" stroke="#d85a30" strokeWidth="1.5"/>
        <polyline points="4,21 21,9 38,21" stroke="#d85a30" strokeWidth="1.5" fill="none"/>
        <rect x="17" y="28" width="8" height="10" stroke="#d85a30" strokeWidth="1.2"/>
        <rect x="10" y="25" width="6" height="6" stroke="#d85a30" strokeWidth="1.2"/>
        <rect x="26" y="25" width="6" height="6" stroke="#d85a30" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Infrastructure & Utilities',
    specialties: [
      'Power plants',
      'Water treatment',
      'Utilities networks',
      'Transportation infrastructure',
      'Renewable energy projects',
    ],
    icon: (
      <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <polygon points="21,5 27,18 40,18 30,27 34,40 21,31 8,40 12,27 2,18 15,18" stroke="#d85a30" strokeWidth="1.5" fill="none"/>
        <circle cx="21" cy="23" r="4" stroke="#d85a30" strokeWidth="1.2"/>
        <line x1="21" y1="5" x2="21" y2="19" stroke="#d85a30" strokeWidth="1.2"/>
      </svg>
    ),
  },
]

const AreasOfOperation = () => {
  return (
    <section id="areas" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-between gap-8 mb-16"
      >
        <div className="flex items-center flex-col">
          <p className="text-[11px] font-medium tracking-[0.12em] text-center uppercase text-orange-500 mb-3">
            Sectors We Serve
          </p>

          <h2 className="text-4xl md:text-5xl font-medium text-center text-charcoal leading-tight">
            Areas of Operation
          </h2>

          <div className="w-20 h-[3px] bg-orange-500 mt-3 mb-4 rounded-sm" />
        <p className="text-[15px] text-gray-500 max-w-lg leading-relaxed text-center pb-1">
          End-to-end construction solutions across multiple sectors from foundations to final fit-out.
        </p>
        </div>
      </motion.div>


        {/* Grid — 1px gap mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12"
          style={{ gap: '1px', border: '0.5px solid rgba(0,0,0,0.1)' }}
        >
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white hover:bg-gray-50 transition-colors duration-200 p-8 flex flex-col group"
            >
              <span className="text-[11px] font-medium tracking-widest text-gray-400 group-hover:text-orange-500 transition-colors mb-5">
                {area.num}
              </span>
              <div className="mb-5">{area.icon}</div>
              <h3 className="text-[15px] font-medium text-charcoal mb-4 leading-snug">
                {area.title}
              </h3>
              <ul className="mt-auto flex flex-col">
                {area.specialties.map((s, sidx) => (
                  <li
                    key={sidx}
                    className="flex items-start gap-2 text-[13px] text-gray-500 py-[9px] border-b border-gray-100 last:border-0 last:pb-0 leading-snug"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500 mt-[6px] flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AreasOfOperation