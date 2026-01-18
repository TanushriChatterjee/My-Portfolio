"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Star, Trophy, Target } from "lucide-react"

export function GameHUD() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showLevelUp, setShowLevelUp] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)

      // Level up logic based on scroll
      const newLevel = Math.min(Math.floor(progress / 20) + 1, 5)
      if (newLevel > currentLevel) {
        setCurrentLevel(newLevel)
        setShowLevelUp(true)
        setTimeout(() => setShowLevelUp(false), 2000)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [currentLevel])

  const levelTitles = ["Visitor", "Explorer", "Investigator", "Enthusiast", "Fan"]

  return (
    <>
      {/* Top HUD Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
        <div className="h-1 bg-secondary">
          <motion.div
            className="h-full xp-bar"
            style={{ width: `${scrollProgress}%` }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>
      </div>

      {/* Side Stats */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4"
      >
        <div className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg p-3 pixel-border text-primary">
          <div className="flex items-center gap-2 text-xs font-mono">
            <Zap size={14} className="text-primary" />
            <span>LVL {currentLevel}</span>
          </div>
          <p className="text-[10px] text-muted-foreground mt-1">{levelTitles[currentLevel - 1]}</p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm border border-accent/30 rounded-lg p-3 pixel-border text-accent">
          <div className="flex items-center gap-2 text-xs font-mono">
            <Star size={14} />
            <span>XP</span>
          </div>
          <p className="text-sm font-bold mt-1">{Math.floor(scrollProgress * 10)}</p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm border border-chart-4/30 rounded-lg p-3 pixel-border text-chart-4">
          <div className="flex items-center gap-2 text-xs font-mono">
            <Trophy size={14} />
            <span>3+ YRS</span>
          </div>
          <p className="text-[10px] text-muted-foreground mt-1">Experience</p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm border border-chart-3/30 rounded-lg p-3 pixel-border text-chart-3">
          <div className="flex items-center gap-2 text-xs font-mono">
            <Target size={14} />
            <span>5+</span>
          </div>
          <p className="text-[10px] text-muted-foreground mt-1">Projects</p>
        </div>
      </motion.div>

      {/* Level Up Notification */}
      <AnimatePresence>
        {showLevelUp && (
          <motion.div
            initial={{ y: -100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -100, opacity: 0, scale: 0.8 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="bg-primary/20 backdrop-blur-md border-2 border-primary rounded-lg px-8 py-4 animate-level-up">
              <div className="flex items-center gap-3">
                <Trophy className="text-primary" size={24} />
                <div>
                  <p className="text-primary font-display font-bold text-lg">LEVEL UP!</p>
                  <p className="text-sm text-muted-foreground">You are now a {levelTitles[currentLevel - 1]}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
