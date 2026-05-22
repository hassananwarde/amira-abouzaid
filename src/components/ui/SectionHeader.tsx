"use client";

import { motion } from "framer-motion";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {badge && (
        <div className={`mb-4 ${align === "center" ? "flex justify-center" : ""}`}>
          <Badge variant="primary">{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
      <div className={`mt-6 flex ${align === "center" ? "justify-center" : "justify-start"}`}>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
      </div>
    </motion.div>
  );
}
