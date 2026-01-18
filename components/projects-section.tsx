"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Rocket,
  Map,
  ShoppingCart,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "Star Launch",
    description:
      "A comprehensive mobile application to streamline rocket launch processes with real-time data synchronization, location tracking, and AI chatbot.",
    icon: Rocket,
    tags: ["React Native", "Firebase", "Geolocation", "Chatbot"],
    color: "primary",
    liveUrl: "#",
    githubUrl: "https://github.com/TanushriChatterjee/StarLaunch",
    status: "COMPLETED",
  },
  {
    title: "Van Trail",
    description:
      "Trail discovery and management app featuring map-based navigation, community reviews, wishlisting, and personalized recommendations.",
    icon: Map,
    tags: ["React Native", "Maps API", "Node.js", "MongoDB"],
    color: "accent",
    liveUrl: "#",
    githubUrl: "https://github.com/TanushriChatterjee/VanTrail-Frontend",
    status: "COMPLETED",
  },
  {
    title: "Spare Wo",
    description:
      "E-commerce platform for automotive sector with secure RESTful APIs, JWT authentication, and robust database management.",
    icon: ShoppingCart,
    tags: ["Node.js", "Express", "SQLite", "JWT"],
    color: "chart-4",
    liveUrl: "#",
    githubUrl: "https://github.com/TanushriChatterjee/SpareWo-Backend",
    status: "COMPLETED",
  },
  {
    title: "Online Exam Portal",
    description:
      "Interactive examination platform with visually appealing interfaces that increased user engagement by 30%.",
    icon: GraduationCap,
    tags: ["React", "JavaScript", "CSS", "Figma"],
    color: "chart-3",
    liveUrl: "#",
    githubUrl: "https://github.com/TanushriChatterjee/ExamPortal",
    status: "COMPLETED",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const normalize = (value: string) =>
    value.trim().toUpperCase().replace(/\s+/g, "_");

  const getStatusColor = (title: string, status: string) => {
    const key = `${normalize(title)}-${normalize(status)}`;

    switch (key) {
      case "STAR_LAUNCH-COMPLETED":
        return "text-primary border-primary/50 bg-primary/10";

      case "VAN_TRAIL-COMPLETED":
        return "text-accent border-accent/50 bg-accent/10";

      case "SPARE_WO-COMPLETED":
        return "text-chart-4 border-chart-4/50 bg-chart-4/10";

      case "ONLINE_EXAM_PORTAL-COMPLETED":
        return "text-teal-500 border-teal-500/50 bg-teal-500/10";

      default:
        return "text-muted-foreground border-border bg-secondary";
    }
  };

  return (
    <section id="projects" className="py-32 px-6 bg-card/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded text-primary font-mono text-xs">
              04
            </span>
            <span className="text-primary font-mono text-sm uppercase tracking-widest">
              Achievements
            </span>
            <span className="h-px flex-1 bg-primary/30" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance font-display">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles size={16} className="text-primary" />
              <span className="font-mono">Hover to inspect</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-lg overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Status badge */}
              <div
                className={`absolute top-4 right-4 z-10 px-2 py-1 text-xs font-mono rounded border ${getStatusColor(
                  project.title,
                  project.status,
                )}`}
              >
                {project.status}
              </div>

              {/* Project icon header */}
              <div className="relative h-40 bg-gradient-to-br from-secondary to-card flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.2 : 1,
                    rotate: hoveredIndex === index ? 10 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="relative"
                >
                  <project.icon
                    size={64}
                    className={`text-${project.color} opacity-80`}
                  />
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 animate-ping"
                    >
                      <project.icon
                        size={64}
                        className={`text-${project.color} opacity-30`}
                      />
                    </motion.div>
                  )}
                </motion.div>

                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors font-mono">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex gap-4 pt-4 border-t border-border">
                  {/* <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a> */}
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                    aria-label={`View source code of ${project.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, var(--${project.color}) 0%, transparent 50%)`,
                    opacity: 0.1,
                  }}
                />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
