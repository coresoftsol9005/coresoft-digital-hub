import { motion } from "framer-motion";
import { Globe, Search, Share2, QrCode, MessageSquare, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  gradient: string;
  badge: { text: string; tone: "red" | "navy" };
  title: string;
  body: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Globe,
    gradient: "linear-gradient(135deg, #E3F0FF, #F0F4F8)",
    badge: { text: "Most Popular", tone: "red" },
    title: "Websites That Convert",
    body: "Mobile-first, blazing-fast websites that make your business look premium and turn visitors into customers. Delivered in 7 days.",
    features: ["Mobile-First Design", "Google-Optimised", "WhatsApp CTA Integrated", "Free 1-Year Maintenance"],
  },
  {
    icon: Search,
    gradient: "linear-gradient(135deg, #E8F5E9, #F7F9FC)",
    badge: { text: "High ROI", tone: "navy" },
    title: "Get Found on Google",
    body: "Google My Business setup, local keyword targeting, and review management that puts you on the map — literally.",
    features: ["GMB Setup & Optimisation", "Local Keyword Strategy", "Review Generation System", "Monthly Reports"],
  },
  {
    icon: Share2,
    gradient: "linear-gradient(135deg, #FCE4EC, #F7F9FC)",
    badge: { text: "Done For You", tone: "red" },
    title: "Social That Sells",
    body: "Consistent, on-brand content calendars, reels, stories, and paid ads managed end-to-end. You focus on running your business.",
    features: ["12 Posts/Month", "Story & Reel Templates", "Comment Management", "Monthly Analytics"],
  },
  {
    icon: QrCode,
    gradient: "linear-gradient(135deg, #FFF8E1, #F7F9FC)",
    badge: { text: "Restaurants", tone: "red" },
    title: "QR Menu in 48 Hours",
    body: "Scannable QR menus with real-time updates, WhatsApp ordering integration, and beautiful food photography layouts.",
    features: ["Unlimited Updates", "WhatsApp Order Integration", "Multi-language", "Analytics Dashboard"],
  },
  {
    icon: MessageSquare,
    gradient: "linear-gradient(135deg, #E8F5E9, #F7F9FC)",
    badge: { text: "New", tone: "navy" },
    title: "Automate Your Follow-Ups",
    body: "WhatsApp broadcast lists, automated inquiry replies, lead capture flows, and CRM-lite tools that work while you sleep.",
    features: ["Instant Inquiry Auto-Reply", "Lead Nurture Sequences", "Broadcast Campaigns", "n8n Workflow Automation"],
  },
  {
    icon: Sparkles,
    gradient: "linear-gradient(135deg, #E3F0FF, #FCE4EC)",
    badge: { text: "Best Value", tone: "red" },
    title: "Everything in One Package",
    body: "Website + SEO + Social + QR Menu + WhatsApp Automation — the complete digital presence for new and growing businesses.",
    features: ["All 5 Services Bundled", "Priority Delivery (5 Days)", "30-Min WhatsApp Support", "EMI Available"],
  },
];

export function Services() {
  return (
    <section id="services" style={{ background: "var(--off-white)" }} className="py-24 md:py-32">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full"
            style={{ background: "rgba(13,71,161,0.08)", color: "var(--navy)" }}
          >
            <span style={{ color: "var(--red)" }}>●</span> What We Do
          </span>
          <h2
            className="mt-5 font-black"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--text-1)", letterSpacing: "-1px", lineHeight: 1.1 }}
          >
            6 Ways We Grow Your Business Online
          </h2>
          <p className="mt-5 text-base md:text-lg" style={{ color: "var(--text-2)" }}>
            From your first website to full digital automation — we handle everything.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl overflow-hidden bg-white transition-all"
              style={{
                border: "1px solid var(--brand-border)",
                boxShadow: "0 1px 2px rgba(13,71,161,0.04)",
              }}
            >
              <div className="relative h-24 flex items-center justify-center" style={{ background: s.gradient }}>
                <s.icon size={36} style={{ color: "var(--navy)" }} strokeWidth={1.6} />
                <span
                  className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-[1.5px] px-2.5 py-1 rounded-full text-white"
                  style={{ background: s.badge.tone === "red" ? "var(--red)" : "var(--navy)" }}
                >
                  {s.badge.text}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}>
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--text-2)" }}>
                  {s.body}
                </p>
                <ul className="mt-5 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[14px]" style={{ color: "var(--text-2)" }}>
                      <span className="mt-0.5 font-bold" style={{ color: "var(--red)" }}>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-[13px] font-bold uppercase tracking-[1.5px] transition-all group-hover:gap-2"
                  style={{ color: "var(--navy)" }}
                >
                  See Packages →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
