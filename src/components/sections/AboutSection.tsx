"use client";

import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";
import { siteData } from "@/data/siteData";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";

export function AboutSection() {
  const { about, personal } = siteData;

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="About Me"
          title="Passionate About Transforming Education"
          description="Leading the future of STEM and ICT education with innovation, dedication, and expertise"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Roles & Highlights */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              {/* Roles */}
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Current Roles
                </h3>
                <div className="space-y-3">
                  {about.roles.map((role, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">{role}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  {about.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Stats */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {about.statistics.map((stat, i) => {
                const IconComponent = getIcon(stat.icon);
                return (
                  <motion.div
                    key={stat.label}
                    className="glass-card rounded-2xl p-6 text-center group hover:glow transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-purple-500/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional info card */}
            <motion.div
              className="mt-6 glass-card rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-semibold mb-3">Professional Philosophy</h4>
              <p className="text-muted-foreground leading-relaxed italic">
                &quot;Education is not just about imparting knowledge—it's about igniting curiosity, 
                fostering innovation, and preparing students for a future we can only imagine. 
                Through STEM, AI, and technology, we empower the next generation to become 
                creators, not just consumers, of technology.&quot;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <p className="font-medium text-sm">{personal.name}</p>
                  <p className="text-xs text-muted-foreground">{personal.title}</p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
