'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Phone as PhoneIcon } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team to discuss your construction requirements.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid md:grid-cols-[1fr_1px_1fr] gap-10 items-start">

          {/* LEFT */}
          <div className="space-y-8">

            {/* Phone */}
            <div className="flex gap-3 items-start">
              <Phone className="text-orange-500 mt-1" size={20} />
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Phone</p>
                <a href="tel:0509784533" className="block text-base text-gray-800 hover:text-orange-600 transition">
                  0509784533
                </a>
                <a href="tel:0564388262" className="block text-base text-gray-800 hover:text-orange-600 transition">
                  0564388262
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3 items-start">
              <Mail className="text-orange-500 mt-1" size={20} />
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Email</p>
                <a href="mailto:rakib262262@gmail.com" className="block text-base text-gray-800 hover:text-orange-600 transition">
                  rakib262262@gmail.com
                </a>
                <a href="mailto:raneemrakib@gmail.com" className="block text-base text-gray-800 hover:text-orange-600 transition">
                  raneemrakib@gmail.com
                </a>
              </div>
            </div>

            {/* Fax */}
            <div className="flex gap-3 items-start">
              <PhoneIcon className="text-orange-500 mt-1" size={20} />
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Fax</p>
                <p className="text-base text-gray-800">013 8693691</p>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="hidden md:block bg-gray-200 w-px h-full mx-auto"></div>

          {/* RIGHT */}
          <div className="space-y-8">

            {/* Address */}
            <div className="flex gap-3 items-start">
              <MapPin className="text-orange-500 mt-1" size={20} />
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Address</p>
                <p className="text-base text-gray-800 leading-relaxed">
                  P.O. Box 435, Al Khobar 31952<br />
                  Al-Khobar South – Rakka St.<br />
                  Cross 6 / 7, Kingdom of Saudi Arabia
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="h-72 w-full overflow-hidden rounded-none">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-gray-600 mx-auto mb-2" size={34} />
                  <p className="text-gray-700 font-medium text-sm">Al Khobar, Saudi Arabia</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact