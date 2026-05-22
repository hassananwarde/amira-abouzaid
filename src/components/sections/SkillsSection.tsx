"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getIcon } from "@/lib/icons";

export function SkillsSection() {
  const { skills } = siteData;

  // Group skills by category
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Skills"
          title="Expertise & Capabilities"
          description="A comprehensive skill set built over 17+ years of educational technology leadership"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Progress bars */}
          <ScrollReveal direction="left">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Technical Proficiency</h3>
              <div className="space-y-5">
                {skills.map((skill, i) => (
                  <ProgressBar
                    key={skill.id}
                    value={skill.level}
                    label={skill.name}
                    delay={i * 0.1}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Skill badges */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              {categories.map((category) => {
                const categorySkills = skills.filter((s) => s.category === category);
                return (
                  <motion.div
                    key={category}
                    className="glass-card rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold mb-4 text-primary">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => {
                        const IconComponent = getIcon(skill.icon);
                        return (
                          <motion.div
                            key={skill.id}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <IconComponent className="w-4 h-4" />
                            {skill.name}
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
