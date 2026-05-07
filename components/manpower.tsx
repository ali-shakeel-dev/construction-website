'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  Wrench,
  Zap,
  Flame,
  Users,
  Shield,
  Briefcase,
  ChevronDown,
  Cpu,
  HardHat,
  Layers,
  Building2,
  Settings,
  ClipboardCheck,
} from 'lucide-react'

const Manpower = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const categories = [
    {
      icon: Wrench,
      title: 'Skilled Trades',
      description:
        'Expert tradespeople delivering precision craftsmanship across every phase of construction.',
      bullets: [
        'Carpenters, plumbers & HVAC specialists',
        'Experienced in commercial & residential projects',
        'Available for short and long-term deployment',
        'Banksman / Flagman',
        'Car Punter',
        'General Worker',
        'Fire Watch',
        'Scaffolder (TUV certified)',
        'Scaffolding Supervisor (Aramco approved)',
        'Signalman',
      ],
      image: '/images/manpower-1.jpg',
    },
    {
      icon: Cpu,
      title: 'Operators',
      description:
        'Trained heavy equipment operators ensuring efficient, safe site operations.',
      bullets: [
        'Dump Truck Operator',
        'Poclain Operator',
        'Grader Operator',
        'Bulldozer Operator',
        'Roller Operator',
        'Heavy Equipment Mechanic Operator',
        'Manlift Operator',
      ],
      image: '/images/operators.jpg',
    },
    {
      icon: Layers,
      title: 'Steel Structure',
      description:
        'Specialist steel structure teams handling complex structural erection, rigging, and lifting operations to international standards.',
      bullets: [
        'Steel Structure Engineer',
        'Steel Structure Supervisor',
        'Steel Structure Foreman',
        'Surveyor (with equipment)',
        'Lifting Supervisor',
        'Rigger-I (with TUV)',
        'Rigger-II (Aramco Approved)',
        'Rigger-III (Aramco Approved)',
      ],
      image: '/images/steel_structure_supervisor.jpg',
    },
    {
      icon: Building2,
      title: 'Civil Work',
      description:
        'Comprehensive civil workforce covering foundations, masonry, surveying, and all site support activities.',
      bullets: [
        'Civil Engineer',
        'Civil Foreman / Supervisor',
        'Civil Surveyor',
        'Steel Fixer',
        'Steel Fabricator',
        'Mason (Block)',
        'Scaffolding Inspector',
      ],
      image: '/images/civil_engineers.jpg',
    },
    {
      icon: Flame,
      title: 'Welding & Fabrication',
      description:
        'Certified welders delivering precise structural fabrication and metalwork to ASME & AWS standards.',
      bullets: [
        'Welder MIG',
        'Welder TIG',
        'Welder ARC',
        '6G Welder',
        '3G Welder',
        'Fitter',
        'Grinder Man',
        'Painter (Aramco Certified)',
        'Painter',
      ],
      image: '/images/manpower-3.jpg',
    },
    {
      icon: Settings,
      title: 'Mechanical',
      description:
        'Skilled mechanical teams handling equipment installation, pipework, and heavy plant operations across industrial projects.',
      bullets: [
        'Mechanical Engineer',
        'Mechanical Supervisor / Foreman',
        'Mechanical Fitter',
        'Pipefitter',
        'Heavy Equipment Mechanic',
      ],
      image: '/images/mechanical_engineers.jpg',
    },
    {
      icon: ClipboardCheck,
      title: 'QC',
      description:
        'Qualified quality control professionals ensuring every deliverable meets client specifications and international codes.',
      bullets: [
        'Civil QC Inspector',
        'Mechanical QC Inspector',
        'Welding QC Inspector',
        'Steel Structure QC Inspector',
        'Scaffolding Inspector',
        'Infrastructure QC',
      ],
      image: '/images/qc.jpg',
    },
    {
      icon: Zap,
      title: 'Electrical & Technical',
      description:
        'Certified electricians and technical experts ensuring full compliance with national and international electrical codes.',
      bullets: [
        'Electrician',
        'Electrical Supervisor',
        'Licensed electricians & instrumentation techs',
        'Skilled in industrial and commercial systems',
      ],
      image: '/images/manpower-2.jpg',
    },
    {
      icon: Shield,
      title: 'HSE Professionals',
      description:
        'Certified HSE professionals enforcing zero-incident culture, regulatory compliance, and site-wide safety standards.',
      bullets: [
        'HSE Manager',
        'HSE Lead',
        'HSE Engineer',
        'HSE Supervisor',
        'HSE Officer / Inspector',
        'Fire Watch',
        'NEBOSH & OSHA certified',
        'Hazard assessment & toolbox talk leaders',
      ],
      image: '/images/SafetyProfessionals2.jpeg',
    },
    {
      icon: Briefcase,
      title: 'Professional Engineers',
      description:
        'Experienced engineers overseeing design, execution, planning, and site coordination across all disciplines.',
      bullets: [
        'Structural Engineer',
        'Civil Engineer',
        'Mechanical Engineer',
        'Electrical Engineer',
        'Infrastructure Engineer',
        'Planning Engineer',
        'Site supervision & project coordination',
        'Design review and quality assurance',
      ],
      image: '/images/manpower-6.jpg',
    },
  ]

  const skilledImages = [
    '/images/SkilledTrades.png',
    '/images/SkilledTrades2.png',
  ]

  const activeCategory = categories[activeTab]
  const Icon = activeCategory.icon

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % categories.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (activeTab !== 0) return
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % skilledImages.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [activeTab])

  return (
    <section id="manpower" className="py-20 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-orange-500 mb-3">
            Workforce & Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-medium text-center text-charcoal">
            Skilled Manpower Solutions
          </h2>
          <div className="w-16 h-[3px] bg-orange-500 mt-4 rounded-sm" />
          <p className="text-[15px] text-gray-500 max-w-lg text-center mt-4">
            Reliable, trained, and project-ready workforce for every stage of construction.
          </p>
        </motion.div>

        {/* Desktop Tabs — two rows to handle 10 tabs */}
        <div className="hidden md:flex justify-center mb-10">
          <div className="flex gap-1 border border-gray-100 bg-white p-1 flex-wrap justify-center max-w-6xl">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 text-[11px] font-medium transition-colors ${activeTab === idx
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden mb-8">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-full bg-orange-500 text-white px-4 py-3 flex justify-between items-center"
          >
            <span>{activeCategory.title}</span>
            <ChevronDown className={`transition-transform ${mobileOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileOpen && (
            <div className="border bg-white">
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveTab(idx)
                    setMobileOpen(false)
                  }}
                  className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-50 last:border-0"
                >
                  {category.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Panel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-gray-100 overflow-hidden"
        >
          <div className="grid md:grid-cols-2">

            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              {activeTab === 0 ? (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imageIndex}
                    src={skilledImages[imageIndex]}
                    alt="Skilled"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              ) : (
                <motion.img
                  key={activeCategory.image}
                  src={activeCategory.image}
                  alt={activeCategory.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Text Content */}
            <div className="p-10 flex flex-col gap-6 justify-center">

              <div className="flex items-center gap-3">
                <Icon className="text-orange-500 flex-shrink-0" size={28} />
                <h3 className="text-lg font-medium text-charcoal">
                  {activeCategory.title}
                </h3>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed">
                {activeCategory.description}
              </p>

              <ul className="space-y-2">
                {activeCategory.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1 h-1 rounded-full bg-orange-500 flex-shrink-0 mt-[6px]" />
                    {bullet}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Manpower