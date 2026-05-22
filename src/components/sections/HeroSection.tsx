"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Bot,
  Code,
  Brain,
  Cpu,
} from "lucide-react";

import { siteData } from "@/data/siteData";
import { FloatingElements } from "@/components/animations/FloatingElements";

export function HeroSection() {
  const { hero, personal } = siteData;

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-hero flex items-center justify-center"
    >
      {/* Background Floating Elements */}
      <FloatingElements />

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>{hero.yearsExperience}+ Years of Excellence</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-gradient">
                {hero.headline}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl font-medium text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {hero.subtitle}
            </motion.p>

            {/* Summary */}
            <motion.p
              className="text-base md:text-lg leading-relaxed text-muted-foreground/80 max-w-2xl mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {personal.summary}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href={hero.ctaPrimary.href}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300"
              >
                {hero.ctaPrimary.label}

                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={hero.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />

                {hero.ctaSecondary.label}
              </a>
            </motion.div>
          </div>

          {/* ================================================= */}
          {/* RIGHT VISUAL */}
          {/* ================================================= */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Orb */}
              <div className="relative w-80 h-80 md:w-[430px] md:h-[430px] rounded-full bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 dark:border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
                {/* Animated Rings */}
                <motion.div
                  className="absolute inset-5 rounded-full border border-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="absolute inset-10 rounded-full border border-purple-500/20"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />

                {/* Image + Info */}
                <div className="relative z-10 text-center px-6">
                  {/* Glow Behind Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 blur-3xl opacity-25 animate-pulse" />
                  </div>

                  {/* Profile Image */}
                  <div className="relative w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                    <Image
                      src="/images/amira.png"
                      alt={personal.name}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>

                  {/* Name */}
                  <motion.h3
                    className="mt-6 text-2xl md:text-3xl font-bold text-foreground"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {personal.name}
                  </motion.h3>

                  {/* Title */}
                  <motion.p
                    className="mt-2 text-sm md:text-base text-muted-foreground max-w-sm mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    {personal.title}
                  </motion.p>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 shadow-xl flex items-center justify-center border border-border/50"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Bot className="w-7 h-7 text-primary" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 shadow-xl flex items-center justify-center border border-border/50"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Code className="w-7 h-7 text-purple-500" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 w-14 h-14 rounded-xl bg-white dark:bg-zinc-900 shadow-xl flex items-center justify-center border border-border/50"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: 1,
                }}
              >
                <Brain className="w-6 h-6 text-pink-500" />
              </motion.div>

              <motion.div
                className="absolute top-1/4 -left-8 w-14 h-14 rounded-xl bg-white dark:bg-zinc-900 shadow-xl flex items-center justify-center border border-border/50"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              >
                <Cpu className="w-6 h-6 text-cyan-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================================================= */}
      {/* SCROLL INDICATOR */}
      {/* ================================================= */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
