"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Bot, Code, Brain, Cpu } from "lucide-react";
import { siteData } from "@/data/siteData";
import { FloatingElements } from "@/components/animations/FloatingElements";

export function HeroSection() {
  const { hero, personal } = siteData;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <FloatingElements />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>{hero.yearsExperience}+ Years of Excellence</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-gradient">{hero.headline}</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {hero.subtitle}
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {personal.summary}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href={hero.ctaPrimary.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 active:scale-95"
              >
                {hero.ctaPrimary.label}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={hero.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                {hero.ctaSecondary.label}
              </a>
            </motion.div>
          </div>

          {/* Visual/Avatar area */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main circle with gradient */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 dark:border-white/10 flex items-center justify-center relative overflow-hidden">
                {/* Animated rings */}
                <motion.div
                  className="absolute inset-4 rounded-full border-2 border-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 rounded-full border-2 border-purple-500/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Center content */}
                <div className="text-center z-10">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white text-5xl md:text-6xl font-bold shadow-2xl shadow-primary/30">
                    A
                  </div>
                  <p className="mt-4 text-lg font-semibold text-foreground">{personal.name.split(" ")[0]} {personal.name.split(" ")[1]}</p>
                  <p className="text-sm text-muted-foreground">{personal.title}</p>
                </div>
              </div>

              {/* Floating icons */}
              <motion.div
                className="absolute -top-4 -left-4 w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Bot className="w-7 h-7 text-primary" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Code className="w-7 h-7 text-purple-500" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              >
                <Brain className="w-6 h-6 text-pink-500" />
              </motion.div>
              <motion.div
                className="absolute top-1/4 -left-8 w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              >
                <Cpu className="w-6 h-6 text-cyan-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
