"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Smartphone, Globe, Zap, GraduationCap, Music, Film, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Building cross-platform apps with React Native",
  },
  {
    icon: Globe,
    title: "Full Stack",
    description: "End-to-end development from UI to APIs",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and user experience",
  },
]

const interests = [
  { icon: Code2, label: "Tech Exploration" },
  { icon: Music, label: "Music" },
  { icon: Users, label: "Social Engagement" },
  { icon: Film, label: "Films & Series" },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded text-primary font-mono text-xs">
                01
              </span>
              <span className="text-primary font-mono text-sm uppercase tracking-widest">Character Info</span>
              <span className="h-px flex-1 bg-primary/30" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-balance font-display"
            >
              Building <span className="text-primary">Digital Experiences</span> That Matter
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-muted-foreground text-pretty"
            >
              <p>
                Resourceful and detail-oriented Software Developer with hands-on experience in building full-stack web
                and mobile applications using modern technologies such as React Native, React.js, Node.js, and Firebase.
              </p>
              <p>
                Proven ability to deliver scalable and secure solutions across e-commerce, education, and aerospace
                domains. Skilled in RESTful API development, UI/UX implementation, and database management with MongoDB
                and SQLite.
              </p>
              <p>
                Strong collaborative skills with a track record of achieving sprint goals and enhancing product
                usability.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 p-4 bg-card/50 border border-border rounded-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="text-primary" size={20} />
                <span className="font-mono text-sm text-primary">EDUCATION</span>
              </div>
              <p className="font-semibold text-foreground">B.Tech in Computer Science & Engineering</p>
              <p className="text-sm text-muted-foreground">RVS College of Engineering & Technology</p>
              <p className="text-xs text-primary font-mono mt-1">2018 - 2022</p>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-6"
            >
              <p className="text-xs font-mono text-muted-foreground mb-3">INTERESTS</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest.label}
                    className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 border border-border rounded text-xs text-muted-foreground"
                  >
                    <interest.icon size={12} />
                    {interest.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />

                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors border border-primary/20">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2 text-foreground font-mono">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
