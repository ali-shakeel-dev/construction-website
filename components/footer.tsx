'use client'

import { motion } from 'framer-motion'
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press'],
    Services: ['Manpower', 'Fleet & Transport', 'Safety Services'],
    Resources: ['Portfolio', 'Areas of Operation', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service'],
  }

  const socialLinks = [
    { icon: Facebook, url: '#' },
    { icon: Twitter, url: '#' },
    { icon: Linkedin, url: '#' },
    { icon: Instagram, url: '#' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-charcoal text-gray-300 pt-20 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-orange-500 flex items-center justify-center text-orange-500 text-[11px] font-semibold">
                MAK
              </div>
              <span className="font-medium text-lg text-white">
                Construction
              </span>
            </div>

            <p className="text-[13px] text-gray-400 leading-relaxed">
              Large-scale construction, manpower, and infrastructure support across Saudi Arabia.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-5">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.url}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={itemVariants}>
              <h4 className="text-[13px] font-medium text-white mb-4 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[13px] text-gray-500">
            &copy; {currentYear} MAK Construction. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-[13px] text-gray-500 hover:text-orange-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[13px] text-gray-500 hover:text-orange-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer