'use client'

import { motion } from 'framer-motion'

const Portfolio = () => {
  const projects = [
    {
      name: 'King Salman Park',
      client: 'Saudi Government',
      location: 'Riyadh',
      description: 'One of the world\'s largest urban parks featuring green spaces, recreational facilities, and cultural venues.',
      image: '/images/project-1.jpg',
    },
    {
      name: 'Ithra Cultural Center',
      client: 'Saudi Aramco',
      location: 'Dhahran',
      description: 'A landmark cultural destination with world-class architecture and facilities.',
      image: '/images/project-2.jpg',
    },
    {
      name: 'Chamber of Commerce Tower',
      client: 'Chamber of Commerce',
      location: 'Riyadh',
      description: 'Modern commercial high-rise offering premium office infrastructure.',
      image: '/images/project-3.jpg',
    },
    {
      name: 'NEOM Hospital',
      client: 'NEOM',
      location: 'NEOM City',
      description: 'Advanced healthcare facility with cutting-edge technology and sustainable design.',
      image: '/images/project-4.jpg',
    },
    {
      name: 'Aramco Stadium',
      client: 'Saudi Aramco',
      location: 'Dhahran',
      description: 'Large-scale sports infrastructure with modern engineering and design.',
      image: '/images/project-5.jpg',
    },
    {
      name: 'SNT Gulf Factory',
      client: 'SNT Gulf',
      location: 'Industrial City',
      description: 'Manufacturing facility optimized for performance and sustainability.',
      image: '/images/project-6.jpg',
    }
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">Our Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of construction projects across commercial, industrial, and infrastructure sectors.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="overflow-hidden border border-gray-300 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="aspect-video bg-gray-300 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">{project.name}</h3>
                <p className="text-sm text-orange-600 font-semibold mb-1">Client: {project.client}</p>
                <p className="text-sm text-gray-600 mb-3">Location: {project.location}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
