"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { siteData } from "@/data/siteData";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";

export function CertificationsSection() {
  const { certifications } = siteData;

  return (
    <section id="certifications" className="relative py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Certifications"
          title="Professional Credentials"
          description="Internationally recognized certifications validating expertise in STEM, technology, and education"
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {certifications.map((cert) => {
            const IconComponent = getIcon(cert.icon);
            return (
              <StaggerItem key={cert.id}>
                <motion.div
                  className="group relative h-full glass-card rounded-2xl p-6 hover:glow transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  {/* Certificate icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-purple-500/30 transition-colors">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>

                  {/* Year badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      <Award className="w-3 h-3" />
                      {cert.year}
                    </span>
                    {cert.url && cert.url !== "#" && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
