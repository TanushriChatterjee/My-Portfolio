"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Gamepad2 } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    color: "primary",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Native",
      "Next Js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    color: "accent",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Auth",
      "JOI Validation",
    ],
  },
  {
    title: "Database",
    color: "chart-4",
    skills: ["MongoDB", "MySQL", "Firebase",],
  },
  {
    title: "Tools & Design",
    color: "chart-3",
    skills: ["Git", "GitHub", "VS Code", "Responsive Design"],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="py-32 px-6 bg-card/30 relative overflow-hidden"
      ref={ref}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-primary/50" />
            <span className="px-3 py-1 bg-primary/20 border border-primary/30 rounded text-primary font-mono text-xs">
              02
            </span>
            <span className="text-primary font-mono text-sm uppercase tracking-widest">
              Skill Tree
            </span>
            <span className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance font-display">
            Unlocked <span className="text-primary">Abilities</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Technologies and tools mastered through countless hours of coding
            quests
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.15 }}
              className="p-6 rounded-lg bg-card border border-border relative overflow-hidden group hover:border-primary/50 transition-colors"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-2 left-2 w-full h-full border-t-2 border-l-2 border-primary/20 rounded-tl-lg" />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <Gamepad2 className={`text-${category.color}`} size={24} />
                <h3 className="text-xl font-semibold text-primary font-mono">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: categoryIndex * 0.15 + skillIndex * 0.05 + 0.3,
                    }}
                    onHoverStart={() => setHoveredSkill(skill)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`
                      px-4 py-2 rounded border font-mono text-sm cursor-pointer transition-all duration-300
                      ${
                        hoveredSkill === skill
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-secondary/50 text-foreground border-border hover:border-primary/50"
                      }
                    `}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>

              {/* Skill count badge */}
              <div className="absolute top-4 right-4 px-2 py-1 bg-primary/20 border border-primary/30 rounded text-xs font-mono text-primary">
                {category.skills.length} skills
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total skills counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-card border border-primary/30 rounded-lg">
            <span className="text-muted-foreground font-mono text-sm">
              TOTAL SKILLS UNLOCKED:
            </span>
            <span className="text-2xl font-bold text-primary font-display">
              {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
