"use client";

import type React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Phone,
  MessageSquare,
} from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormState("success");
    setTimeout(() => setFormState("idle"), 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, var(--primary) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
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
              05
            </span>
            <span className="text-primary font-mono text-sm uppercase tracking-widest">
              Connect
            </span>
            <span className="h-px w-12 bg-primary/50" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-display">
            Start a <span className="text-primary">New Quest</span> Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            Ready to collaborate? Send a message and let's build something
            amazing!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground font-mono">
                      Email
                    </h3>
                    <a
                      href="mailto:tanushri1595@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      tanushri1595@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground font-mono">
                      Phone
                    </h3>
                    <a
                      href="tel:+916207012561"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 62070 12561
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground font-mono">
                      Location
                    </h3>
                    <p className="text-muted-foreground">
                      Kolkata, West Bengal, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold mb-4 text-foreground font-mono flex items-center gap-2">
                  <MessageSquare size={16} className="text-primary" />
                  Social Links
                </h3>
                <div className="flex gap-3">
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
                      href: "mailto:tanushri1597@gmail.com",
                      label: "Email",
                    },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-border hover:border-primary/30"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="p-6 bg-card border border-border rounded-lg">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-destructive" />
                <span className="w-3 h-3 rounded-full bg-chart-4" />
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">
                  new_message.txt
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono mb-2 text-muted-foreground uppercase"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-mono text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono mb-2 text-muted-foreground uppercase"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-mono text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono mb-2 text-muted-foreground uppercase"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-mono text-sm"
                  placeholder="Project inquiry"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-xs font-mono mb-2 text-muted-foreground uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground font-mono text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-primary-foreground rounded font-mono font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : formState === "success" ? (
                  <span className="text-primary-foreground">Message Sent!</span>
                ) : (
                  <>
                    <span className="text-xs">[ENTER]</span> Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm font-mono">
            {new Date().getFullYear()} Tanushri Chatterjee. All rights reserved.
          </p>
          {/* <p className="text-xs text-muted-foreground/50 mt-2 font-mono">
            Crafted with React, Three.js & lots of coffee
          </p> */}
        </motion.div>
      </div>
    </section>
  );
}
