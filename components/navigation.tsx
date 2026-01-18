"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Terminal } from "lucide-react"

const navItems = [
  { name: "About", href: "#about", key: "A" },
  { name: "Skills", href: "#skills", key: "S" },
  { name: "Quests", href: "#experience", key: "Q" },
  { name: "Projects", href: "#projects", key: "P" },
  { name: "Contact", href: "#contact", key: "C" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-primary/20" : ""
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 text-primary font-display font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Terminal size={20} />
          <span className="text-lg tracking-wider">TC.DEV</span>
        </motion.a>

        {/* Desktop Navigation with keyboard shortcuts */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <a
                href={item.href}
                className="group relative px-4 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-mono flex items-center gap-2"
              >
                <span className="text-xs text-primary/50 border border-primary/30 rounded px-1 group-hover:bg-primary/20 transition-colors">
                  {item.key}
                </span>
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary border border-primary/30 p-2 rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-lg border-b border-primary/20"
          >
            <ul className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-mono py-3 border-b border-border/50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-xs text-primary/50 border border-primary/30 rounded px-1.5 py-0.5">
                      {item.key}
                    </span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
