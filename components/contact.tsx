'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Phone as PhoneIcon } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['0509784533', '0564388262'],
      action: (detail) => `tel:${detail}`,
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['rakib262262@gmail.com', 'raneemrakib@gmail.com'],
      action: (detail) => `mailto:${detail}`,
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'P.O. Box 435, Al Khobar 31952',
        'Al-Khobar South – Rakka St.',
        'Cross 6 / 7, Kingdom of Saudi Arabia',
      ],
      action: null,
    },
    {
      icon: PhoneIcon,
      title: 'Fax',
      details: ['013 8693691'],
      action: null,
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team to discuss your construction requirements.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="overflow-hidden border border-gray-300 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all bg-off-white p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-orange-500 flex-shrink-0" size={28} />
                  <h3 className="text-lg font-bold text-charcoal">{info.title}</h3>
                </div>
                <div className="space-y-2">
                  {info.details.map((detail, didx) => (
                    <div key={didx}>
                      {info.action ? (
                        <a
                          href={info.action(detail)}
                          className="text-gray-700 hover:text-orange-600 font-medium transition-colors cursor-pointer block"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p className="text-gray-700 text-sm">{detail}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 overflow-hidden border border-gray-300 shadow-sm h-80 bg-gray-300"
        >
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
            <div className="text-center">
              <MapPin className="text-gray-600 mx-auto mb-3" size={40} />
              <p className="text-gray-700 font-medium">Al Khobar, Saudi Arabia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
