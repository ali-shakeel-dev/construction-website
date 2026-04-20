'use client'

import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
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
              Get in touch
            </p>

            <h2 className="text-4xl md:text-5xl font-medium text-center text-charcoal leading-tight">
              Contact Us
            </h2>

            <div className="w-20 h-[3px] bg-orange-500 mt-1 mb-4 rounded-sm" />
            <p className="text-[15px] text-gray-500 max-w-lg leading-relaxed text-center pb-1">
              Reach our team to discuss your construction requirements.
            </p>
          </div>
        </motion.div>

        {/* Mosaic grid */}
        <div
          className="grid md:grid-cols-2 mt-12"
          style={{ gap: '1px', border: '0.5px solid rgba(0,0,0,0.1)' }}
        >

          {/* LEFT — phone / email / fax */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 flex flex-col gap-8"
          >
            {/* Phone */}
            <div className="flex gap-4 items-start">
              <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 36 36" fill="none">
                <rect x="10" y="4" width="16" height="28" rx="2" stroke="#d85a30" strokeWidth="1.4" />
                <line x1="10" y1="9" x2="26" y2="9" stroke="#d85a30" strokeWidth="1.2" />
                <line x1="10" y1="27" x2="26" y2="27" stroke="#d85a30" strokeWidth="1.2" />
                <circle cx="18" cy="30" r="1" fill="#d85a30" />
              </svg>
              <div>
                <p className="text-[11px] font-medium tracking-widest uppercase text-gray-400 mb-1">Phone</p>
                <a href="tel:+966554051906" className="block text-sm text-charcoal hover:text-orange-500 transition-colors leading-loose">+966 55 405 1906</a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 36 36" fill="none">
                <rect x="4" y="9" width="28" height="18" rx="1" stroke="#d85a30" strokeWidth="1.4" />
                <polyline points="4,9 18,20 32,9" stroke="#d85a30" strokeWidth="1.4" fill="none" />
              </svg>
              <div>
                <p className="text-[11px] font-medium tracking-widest uppercase text-gray-400 mb-1">Email</p>
                <a href="mailto:contact@mahmud-makrak.net" className="block text-sm text-charcoal hover:text-orange-500 transition-colors leading-loose">contact@mahmud-makrak.net</a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — address + map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="bg-white p-8 flex flex-col gap-6"
          >
            <div className="flex gap-4 items-start">
              <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 36 36" fill="none">
                <path d="M18 4C13.03 4 9 8.03 9 13c0 7 9 19 9 19s9-12 9-19c0-4.97-4.03-9-9-9z" stroke="#d85a30" strokeWidth="1.4" />
                <circle cx="18" cy="13" r="3" stroke="#d85a30" strokeWidth="1.2" />
              </svg>
              <div>
                <p className="text-[11px] font-medium tracking-widest uppercase text-gray-400 mb-1">Address</p>
                <p className="text-sm text-charcoal leading-[1.9]">
                  P.O. Box 435, Al Khobar 31952<br />
                  Al-Khobar South – Rakka St.<br />
                  Cross 6 / 7, Kingdom of Saudi Arabia
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-2 bg-gray-50 border border-gray-100 h-48 flex flex-col items-center justify-center gap-2">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 3C9.58 3 6 6.58 6 11c0 6 8 14 8 14s8-8 8-14c0-4.42-3.58-8-8-8z" stroke="#d85a30" strokeWidth="1.3" />
                <circle cx="14" cy="11" r="2.5" stroke="#d85a30" strokeWidth="1.2" />
              </svg>
              <p className="text-[13px] text-gray-500">Al Khobar, Saudi Arabia</p>
              <p className="text-[12px] text-gray-400">31952</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact