"use client";

import { motion } from "framer-motion";
import { Trophy, ExternalLink } from "lucide-react";
import { siteData } from "@/data/siteData";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { getIcon } from "@/lib/icons";

export function AchievementsSection() {
  const { achievements } = siteData;

  return (
    <section id="achievements" className="relative py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Achievements"
          title="Competitions & Recognition"
          description="Leading students and institutions to excellence in national and international arenas"
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {achievements.map((achievement) => {
            const IconComponent = getIcon(achievement.icon);
            return (
              <StaggerItem key={achievement.id}>
                <motion.div
                  className="group relative h-full glass-card rounded-2xl p-6 overflow-hidden"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Year badge */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="primary" className="text-xs">
                      {achievement.year}
                    </Badge>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {achievement.description}
                  </p>

                  {/* Achievement badge */}
                  <div className="flex items-center gap-2 mt-auto">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                      {achievement.badge}
                    </span>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
