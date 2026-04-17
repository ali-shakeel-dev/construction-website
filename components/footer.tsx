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
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
    <footer className="bg-charcoal text-gray-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500" />
              <span className="font-bold text-xl text-white">Rakan Al-Bina</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Delivering large-scale construction, manpower, and infrastructure support services across Saudi Arabia with unmatched reliability and execution.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.url}
                    className="w-10 h-10 bg-gray-700 hover:bg-orange-500 text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Rakan Al-Bina Contracting Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
