'use client'

import { motion } from 'framer-motion'

const Portfolio = () => {
  const projects = [
    {
      name: 'King Salman Park',
      client: 'Saudi Government',
      location: 'Riyadh',
      description:
        'One of the world’s largest urban parks featuring green spaces, recreational facilities, and cultural venues.',
      image: '/images/KingSalmanPark.jpg',
    },
    {
      name: 'Ithra Cultural Center',
      client: 'Saudi Aramco',
      location: 'Dhahran',
      description:
        'A landmark cultural destination with world-class architecture and facilities.',
      image: '/images/IthraCulturalCenter.webp',
    },
    {
      name: 'Chamber of Commerce Tower',
      client: 'Chamber of Commerce',
      location: 'Riyadh',
      description:
        'Modern commercial high-rise offering premium office infrastructure.',
      image: '/images/ChamberofCommerceTower.jpg',
    },
    {
      name: 'NEOM Hospital',
      client: 'NEOM',
      location: 'NEOM City',
      description:
        'Advanced healthcare facility with cutting-edge technology and sustainable design.',
      image: '/images/NEOMHospital.jpg',
    },
    {
      name: 'Aramco Stadium',
      client: 'Saudi Aramco',
      location: 'Dhahran',
      description:
        'Large-scale sports infrastructure with modern engineering and design.',
      image: '/images/AramcoStadium.png',
    },
    {
      name: 'SNT Gulf Factory',
      client: 'SNT Gulf',
      location: 'Industrial City',
      description:
        'Manufacturing facility optimized for performance and sustainability.',
      image: '/images/SNTGulfFactory.png',
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header — system aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex flex-col items-center">
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-orange-500 mb-3">
              Project Delivery
            </p>

            <h2 className="text-4xl md:text-5xl font-medium text-center text-charcoal leading-tight">
              Our Portfolio
            </h2>

            <div className="w-16 h-[3px] bg-orange-500 mt-4 rounded-sm" />

            <p className="text-[15px] text-gray-500 max-w-lg text-center mt-4 leading-[1.5]">
              End-to-end construction delivery across landmark infrastructure, commercial, and industrial projects.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group border border-gray-100 bg-white overflow-hidden
              shadow-[0_8px_30px_rgba(0,0,0,0.04)]
              hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]
              transition-all duration-300"
            >

              <div className="relative aspect-video overflow-hidden bg-gray-100 group">

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-[1.04]
                    transition-transform duration-500
                  "
                />

                {/* Shine effect */}
                <div className="
                  pointer-events-none absolute inset-0 flex justify-center
                  [transform:skew(-12deg)_translateX(-120%)]
                  group-hover:duration-1000
                  group-hover:[transform:skew(-12deg)_translateX(120%)]
                ">
                  <div className="w-16 bg-white/20 blur-sm"></div>
                </div>

              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">

                <h3 className="text-[16px] font-medium text-charcoal leading-[1.4] group-hover:text-orange-500 transition-colors duration-200">
                  {project.name}
                </h3>

                <div className="flex flex-col gap-1 text-[12px] text-gray-500">
                  <span>
                    Client: <span className="text-gray-600">{project.client}</span>
                  </span>
                  <span>
                    Location: <span className="text-gray-600">{project.location}</span>
                  </span>
                </div>

                <p className="text-[13px] text-gray-500 leading-[1.5]">
                  {project.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Portfolio