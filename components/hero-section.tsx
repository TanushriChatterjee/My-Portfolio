"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-16">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-primary/30 bg-primary/10 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-mono text-sm">
                PLAYER_01 ONLINE
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-foreground font-display">TANUSHRI</span>
              <br />
              <span className="text-primary font-display animate-neon-flicker">
                CHATTERJEE
              </span>
            </motion.h1>

            <motion.div
              className="mb-6 h-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-xl md:text-2xl font-mono text-accent">
                {">"} {displayText}
                <span className="animate-pulse">_</span>
              </span>
            </motion.div>

            <motion.p
              className="text-muted-foreground text-lg md:text-xl max-w-xl mb-4 text-pretty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Full-stack developer crafting scalable web and mobile applications
              with React, React Native, Node.js, and Firebase. Turning complex
              problems into elegant solutions.
            </motion.p>

            <motion.div
              className="flex items-center gap-2 text-muted-foreground mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <MapPin size={16} className="text-primary" />
              <span className="font-mono text-sm">Kolkata, West Bengal</span>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#projects"
                className="group relative px-8 py-3 bg-primary text-primary-foreground rounded font-mono font-medium overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-xs">[ENTER]</span> View Quests
                </span>
                <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-primary text-primary rounded font-mono font-medium hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
              >
                <span className="text-xs">[SPACE]</span> Contact
              </a>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/TanushriChatterjee",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/tanushri18091999/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:tanushri1595@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-primary/30 rounded flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-lg border-2 border-primary/50 bg-card/50 backdrop-blur-sm p-4 animate-float">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
                  <span className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="w-3 h-3 rounded-full bg-chart-4" />
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground">
                    tanushri@dev ~
                  </span>
                </div>

                {/* Terminal content */}
                <div className="font-mono text-sm space-y-2">
                  <p>
                    <span className="text-primary">$</span> whoami
                  </p>
                  <p className="text-accent">Tanushri Chatterjee</p>
                  <p>
                    <span className="text-primary">$</span> cat skills.txt
                  </p>
                  <p className="text-muted-foreground text-xs">
                    React, React Native, Node.js
                  </p>
                  <p className="text-muted-foreground text-xs">
                    MongoDB, SQLite, Firebase
                  </p>
                  <p>
                    <span className="text-primary">$</span> echo $STATUS
                  </p>
                  <p className="text-primary">Ready for new quests!</p>
                  <p className="flex items-center gap-1">
                    <span className="text-primary">$</span>
                    <span className="animate-pulse">_</span>
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-3 py-2 bg-primary/20 rounded border border-primary/30 backdrop-blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <span className="text-xs font-mono text-primary">
                  3+ YRS EXP
                </span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 px-3 py-2 bg-accent/20 rounded border border-accent/30 backdrop-blur-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <span className="text-xs font-mono text-accent">
                  FULL STACK
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <span className="text-xs font-mono tracking-widest">
            [SCROLL DOWN]
          </span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
