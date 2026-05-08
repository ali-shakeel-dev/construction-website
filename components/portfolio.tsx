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
    {
      name: 'Abdullah City',
      client: 'King Abdullah Economic City',
      location: 'Rabigh, Saudi Arabia',
      description:
        'Large-scale urban development and infrastructure project supporting residential, commercial, and industrial expansion.',
      image: '/images/Abdullah_city_riyadh.jpg',
    },
    {
      name: 'King Fahad Stadium',
      client: 'Saudi Ministry of Sport',
      location: 'Riyadh, Saudi Arabia',
      description:
        'Major sports infrastructure project involving stadium development, maintenance, and supporting facilities.',
      image: '/images/King_fahad_Stadium.jpg',
    },
    {
      name: 'Jeddah Stadium',
      client: 'Saudi Ministry of Sport',
      location: 'Jeddah, Saudi Arabia',
      description:
        'Modern stadium and entertainment venue designed to support international sporting events and public gatherings.',
      image: '/images/Jedha_stadium.webp',
    },
    {
      name: 'Diriyah City',
      client: 'Diriyah Gate Development Authority',
      location: 'Diriyah, Riyadh, Saudi Arabia',
      description:
        'Heritage and mixed-use development focused on cultural preservation, tourism, and modern infrastructure.',
      image: '/images/Dariyah_city.webp',
    },
    {
      name: 'Qiddiya Art Center',
      client: 'Qiddiya Investment Company',
      location: 'Qiddiya, Riyadh, Saudi Arabia',
      description:
        'Entertainment and cultural development project featuring modern art, performance, and recreational facilities.',
      image: '/images/Qidiya_art_center.jpg',
    },
    {
      name: 'Ithra Cultural Center',
      client: 'Saudi Aramco',
      location: 'Dhahran, Saudi Arabia',
      description:
        'World-class cultural and knowledge center supporting education, exhibitions, arts, and innovation initiatives.',
      image: '/images/Ithra_cultural_center.webp',
    },
  ]

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-14 md:mb-16"
        >
          <div className="flex flex-col items-center text-center">
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-orange-500 mb-3">
              Project Delivery
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-charcoal leading-tight">
              Our Portfolio
            </h2>

            <div className="w-16 h-[3px] bg-orange-500 mt-4 rounded-sm" />

            <p className="text-sm sm:text-[15px] text-gray-500 max-w-2xl mt-4 leading-relaxed px-2">
              End-to-end construction delivery across landmark infrastructure,
              commercial, and industrial projects.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, idx) => {
            const isLastTwo = idx >= projects.length - 2

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className={`
                  group border border-gray-100 bg-white overflow-hidden
                  shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]
                  transition-all duration-300
                  w-full

                  ${isLastTwo ? 'lg:col-span-1' : ''}
                  ${idx === projects.length - 2 ? 'lg:col-start-1 lg:translate-x-1/2' : ''}
                  ${idx === projects.length - 1 ? 'lg:col-start-2 lg:translate-x-1/2' : ''}
                `}
              >

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">

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
                  <div
                    className="
                      pointer-events-none absolute inset-0 flex justify-center
                      [transform:skew(-12deg)_translateX(-120%)]
                      group-hover:duration-1000
                      group-hover:[transform:skew(-12deg)_translateX(120%)]
                    "
                  >
                    <div className="w-16 bg-white/20 blur-sm" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col gap-3">

                  <h3
                    className="
                      text-[17px] sm:text-[18px]
                      font-medium text-charcoal leading-[1.4]
                      group-hover:text-orange-500
                      transition-colors duration-200
                    "
                  >
                    {project.name}
                  </h3>

                  <div className="flex flex-col gap-1 text-[12px] sm:text-[13px] text-gray-500">

                    <span className="break-words">
                      Client:{' '}
                      <span className="text-gray-700">
                        {project.client}
                      </span>
                    </span>

                    <span className="break-words">
                      Location:{' '}
                      <span className="text-gray-700">
                        {project.location}
                      </span>
                    </span>

                  </div>

                  <p
                    className="
                      text-[13px] sm:text-[14px]
                      text-gray-500 leading-relaxed
                    "
                  >
                    {project.description}
                  </p>

                </div>
              </motion.div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Portfolio