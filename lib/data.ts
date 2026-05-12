import siteJson from "@/content/site.json";
import doctorsJson from "@/content/doctors.json";
import servicesJson from "@/content/services.json";
import testimonialsJson from "@/content/testimonials.json";
import faqsJson from "@/content/faqs.json";
import galleryJson from "@/content/gallery.json";

export type SiteConfig = typeof siteJson;
export type Doctor = (typeof doctorsJson.doctors)[number];
export type Service = (typeof servicesJson.services)[number];
export type Testimonial = (typeof testimonialsJson.testimonials)[number];
export type Faq = (typeof faqsJson.faqs)[number];
export type GalleryItem = (typeof galleryJson.items)[number];

export const site: SiteConfig = siteJson;
export const doctors: Doctor[] = doctorsJson.doctors;
export const services: Service[] = servicesJson.services;
export const testimonials: Testimonial[] = testimonialsJson.testimonials;
export const faqs: Faq[] = faqsJson.faqs;
export const gallery: GalleryItem[] = galleryJson.items;

export const navPages = [
  { id: "/", label: "Home" },
  { id: "/about", label: "About" },
  { id: "/services", label: "Services" },
  { id: "/kids", label: "Kids" },
  { id: "/gallery", label: "Gallery" },
  { id: "/blog", label: "Journal" },
  { id: "/contact", label: "Contact" },
];

export const categories = [
  { id: "all", label: "All services" },
  { id: "general", label: "General" },
  { id: "restorative", label: "Restorative" },
  { id: "cosmetic", label: "Cosmetic" },
  { id: "orthodontic", label: "Orthodontic" },
  { id: "kids", label: "Kids" },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function formatBlogDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}
