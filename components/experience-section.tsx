"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Briefcase, ChevronRight, CheckCircle2, MapPin, Calendar } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Software Developer",
    company: "IB Arts Pvt Ltd",
    period: "2024 – Present",
    location: "India",
    type: "CURRENT QUEST",
    projects: [
      {
        name: "Star Launch",
        description: "Rocket Launch Management Mobile App",
        achievements: [
          "Developed comprehensive mobile app for rocket launch processes with Signup, Login, Home, Location, Chatbot, and Profile screens",
          "Utilized Firebase Realtime Database for secure user data management and real-time synchronization",
          "Built functionality for creating, editing, and sharing rockets with personalized pre/post-launch recommendations",
          "Implemented location-based tracking for nearby launch sites using geolocation",
        ],
      },
      {
        name: "Van Trail",
        description: "Trail Discovery and Management App",
        achievements: [
          "Developed features for adding, reviewing, reporting, and wishlisting trails",
          "Integrated map-based navigation and filtering for efficient trail discovery",
          "Engineered personalized recommendations based on user wishlist data",
        ],
      },
      {
        name: "Spare Wo",
        description: "E-commerce Application for Automotive Sector",
        achievements: [
          "Designed and developed RESTful APIs for customer module using Node.js and Express.js",
          "Built CRUD operations with SQLite and Mongoose ORM",
          "Secured APIs with JWT authentication and JOI validation",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Associate Software Developer",
    company: "Nathcorp Pvt Ltd",
    period: "2022 – 2023",
    location: "India",
    type: "COMPLETED QUEST",
    projects: [
      {
        name: "Online Exam Portal",
        description: "Interactive examination platform",
        achievements: [
          "Developed interactive online exam portal using Figma, HTML, CSS, JavaScript, and React",
          "Created visually appealing interfaces resulting in 30% increase in user engagement",
          "Achieved bi-weekly sprint objectives with 95% success rate",
          "Contributed to 20% reduction in project development time",
        ],
      },
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedProject, setExpandedProject] = useState<string | null>("Star Launch")

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded text-primary font-mono text-xs">
              03
            </span>
            <span className="text-primary font-mono text-sm uppercase tracking-widest">Quest Log</span>
            <span className="h-px flex-1 bg-primary/30" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance font-display">
            Professional <span className="text-primary">Journey</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: expIndex * 0.2 }}
              className="relative"
            >

              <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
                {/* Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                        <Briefcase className="text-primary" size={24} />
                      </div>
                      <div>
                        <span
                          className={`inline-block px-2 py-0.5 text-xs font-mono rounded mb-2 ${
                            exp.type === "CURRENT QUEST"
                              ? "bg-primary/20 text-primary border border-primary/30"
                              : "bg-accent/20 text-accent border border-accent/30"
                          }`}
                        >
                          {exp.type}
                        </span>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-mono">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="p-4">
                  <p className="text-xs font-mono text-muted-foreground mb-3 px-2">PROJECTS COMPLETED</p>
                  <div className="space-y-2">
                    {exp.projects.map((project) => (
                      <div key={project.name} className="rounded border border-border overflow-hidden">
                        <button
                          onClick={() => setExpandedProject(expandedProject === project.name ? null : project.name)}
                          className="w-full px-4 py-3 flex items-center justify-between hover:bg-secondary/30 transition-colors text-left"
                        >
                          <div>
                            <span className="font-semibold text-foreground">{project.name}</span>
                            <span className="text-muted-foreground text-sm ml-2">- {project.description}</span>
                          </div>
                          <ChevronRight
                            size={18}
                            className={`text-primary transition-transform ${
                              expandedProject === project.name ? "rotate-90" : ""
                            }`}
                          />
                        </button>

                        {expandedProject === project.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-4 pb-4 border-t border-border bg-secondary/10"
                          >
                            <ul className="space-y-2 pt-3">
                              {project.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-2 text-sm text-muted-foreground"
                                >
                                  <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
