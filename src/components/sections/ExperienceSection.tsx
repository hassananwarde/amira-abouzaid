"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Building2, Calendar, Award } from "lucide-react";
import { siteData } from "@/data/siteData";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExperienceSection() {
  const { experience } = siteData;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Experience"
          title="Professional Journey"
          description="A decade and a half of shaping technology education across Egypt's leading schools"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500 md:-translate-x-1/2" />

          {experience.map((item, index) => {
            const isExpanded = expandedId === item.id;
            const isLeft = index % 2 === 0;

            return (
              <ScrollReveal
                key={item.id}
                direction={isLeft ? "left" : "right"}
                delay={index * 0.1}
                className="relative mb-8 md:mb-12"
              >
                <div className={`md:flex items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg md:-translate-x-1/2 z-10 mt-6" />

                  {/* Content card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                    <motion.div
                      className="glass-card rounded-2xl p-5 md:p-6 cursor-pointer group"
                      onClick={() => toggleExpand(item.id)}
                      whileHover={{ y: -2 }}
                      layout
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-sm text-primary font-medium mb-1">
                            <Calendar className="w-4 h-4" />
                            {item.duration}
                          </div>
                          <h3 className="text-lg font-semibold">{item.school}</h3>
                          <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                            <Building2 className="w-3.5 h-3.5" />
                            {item.role}
                          </p>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-1"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          )}
                        </motion.div>
                      </div>

                      {/* Achievements preview */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.achievements.slice(0, 2).map((achievement, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                          >
                            <Award className="w-3 h-3" />
                            {achievement.length > 30 ? achievement.substring(0, 30) + "..." : achievement}
                          </span>
                        ))}
                        {item.achievements.length > 2 && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                            +{item.achievements.length - 2} more
                          </span>
                        )}
                      </div>

                      {/* Expanded details */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-border">
                              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                {item.details}
                              </p>
                              <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                              <ul className="space-y-2">
                                {item.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
