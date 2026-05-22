import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatWhatsAppMessage(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  const { name, email, phone, service, message } = data;
  return encodeURIComponent(
    `Hello Amira,

` +
    `My name is ${name}.
` +
    `Email: ${email}
` +
    `Phone: ${phone}
` +
    `Service Requested: ${service}

` +
    `Message:
${message}

` +
    `Looking forward to hearing from you!`
  );
}

export function getWhatsAppLink(phone: string, message: string) {
  return `https://wa.me/${phone.replace(/\+/g, "")}?text=${message}`;
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
