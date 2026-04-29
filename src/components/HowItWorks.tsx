import { motion } from "framer-motion";
import { Search, Phone, Wrench, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
  timeline: string;
}

const steps: Step[] = [
  { num: "01", icon: Search, title: "Free Discovery Audit", body: "Fill our 5-minute form. We audit your business, competitors, and online gaps — completely free. No sales pressure.", timeline: "Day 0 · Free" },
  { num: "02", icon: Phone, title: "Custom Strategy Call", body: "We WhatsApp you within 30 minutes with a personalised digital roadmap, transparent pricing, and zero jargon.", timeline: "Day 1 · Free" },
  { num: "03", icon: Wrench, title: "We Build Everything", body: "Our team executes — website, SEO setup, social templates, QR menu, automations. You get daily progress updates.", timeline: "Days 2–7 · Paid" },
  { num: "04", icon: Rocket, title: "Launch & Grow", body: "We go live, hand over full control, and stay available via WhatsApp for ongoing support. Your growth starts now.", timeline: "Day 7 · Ongoing" },
];

export function HowItWorks() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ background: "var(--off-white)" }}>
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full"
            style={{ background: "rgba(13,71,161,0.08)", color: "var(--navy)" }}
          >
            <span style={{ color: "var(--red)" }}>●</span> The Process
          </span>
          <h2
            className="mt-5 font-black"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--text-1)", letterSpacing: "-1px", lineHeight: 1.1 }}
          >
            From "Zero Online Presence" to "Full Digital Machine" in 4 Steps
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* dotted connector (desktop) */}
          <div
            className="hidden lg:block absolute left-0 right-0 top-12 h-0.5"
            style={{
              backgroundImage: "repeating-linear-gradient(to right, var(--brand-border) 0 6px, transparent 6px 12px)",
            }}
          >
            <span
              className="timeline-dot absolute -top-1 w-2.5 h-2.5 rounded-full"
              style={{ background: "var(--red)", boxShadow: "0 0 12px rgba(229,57,53,0.6)" }}
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-6 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white rounded-xl p-6 relative"
                style={{ border: "1px solid var(--brand-border)" }}
              >
                <span
                  className="absolute -top-3 left-6 font-mono font-medium text-white text-[13px] px-3 py-1 rounded"
                  style={{ background: "var(--red)" }}
                >
                  {s.num}
                </span>
                <div
                  className="mt-3 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(13,71,161,0.08)", color: "var(--navy)" }}
                >
                  <s.icon size={22} />
                </div>
                <h3 className="mt-4 font-bold text-lg" style={{ color: "var(--text-1)" }}>{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--text-2)" }}>{s.body}</p>
                <div className="mt-4 font-mono text-[12px]" style={{ color: "var(--navy)" }}>{s.timeline}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-bold uppercase tracking-[1.5px] text-[14px] transition-all hover:-translate-y-0.5"
            style={{ background: "var(--red)", boxShadow: "0 4px 14px rgba(229,57,53,0.3)" }}
          >
            Start Your Free Audit →
          </a>
        </div>
      </div>
    </section>
  );
}
