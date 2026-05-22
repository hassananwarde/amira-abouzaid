export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  phone: string;
  whatsapp: string;
  summary: string;
}

export interface HeroData {
  headline: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  yearsExperience: number;
}

export interface Statistic {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

export interface AboutData {
  roles: string[];
  highlights: string[];
  statistics: Statistic[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  cta: string;
}

export interface ExperienceItem {
  id: string;
  school: string;
  role: string;
  duration: string;
  achievements: string[];
  details?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  badge: string;
  icon: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  icon: string;
  category: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  icon: string;
  url?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  rating: number;
}

export interface ContactData {
  whatsappNumber: string;
  email: string;
  linkedin: string;
  location: string;
  formFields: FormField[];
}

export interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FooterData {
  quickLinks: { label: string; href: string }[];
  socialLinks: SocialLink[];
  copyright: string;
}

export interface SeoData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogType: string;
}

export interface SiteData {
  personal: PersonalInfo;
  hero: HeroData;
  about: AboutData;
  services: Service[];
  experience: ExperienceItem[];
  achievements: Achievement[];
  skills: Skill[];
  certifications: Certification[];
  testimonials: Testimonial[];
  contact: ContactData;
  footer: FooterData;
  seo: SeoData;
}
