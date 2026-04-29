import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { track, Events } from "@/lib/analytics";

interface Tier {
  name: string;
  badge: string;
  badgeTone: "navy" | "red" | "muted";
  tagline: string;
  features: { text: string; included: boolean }[];
  recommended?: boolean;
}

const tiers: Tier[] = [
  {
    name: "Starter",
    badge: "Best to Begin",
    badgeTone: "muted",
    tagline: "Perfect for small shops getting online for the first time.",
    features: [
      { text: "4-Page Professional Website", included: true },
      { text: "Google My Business Setup", included: true },
      { text: "WhatsApp CTA Integration", included: true },
      { text: "1 Year Free Hosting", included: true },
      { text: "Mobile Optimised", included: true },
      { text: "Social Media (Add-on)", included: false },
      { text: "Automation (Add-on)", included: false },
    ],
  },
  {
    name: "Growth",
    badge: "⚡ Most Popular",
    badgeTone: "red",
    tagline: "For growing businesses ready to dominate local search.",
    recommended: true,
    features: [
      { text: "8-Page Premium Website", included: true },
      { text: "Local SEO (3-Month Campaign)", included: true },
      { text: "QR Digital Menu", included: true },
      { text: "12 Social Posts/Month", included: true },
      { text: "WhatsApp Auto-Reply Setup", included: true },
      { text: "Google Ads Consultation (Free)", included: true },
      { text: "Priority 5-Day Delivery", included: true },
    ],
  },
  {
    name: "Complete",
    badge: "Maximum Impact",
    badgeTone: "navy",
    tagline: "Full-stack digital takeover with dedicated account manager.",
    features: [
      { text: "Everything in Growth +", included: true },
      { text: "Full WhatsApp Automation", included: true },
      { text: "Facebook + Instagram Ads (Setup)", included: true },
      { text: "n8n Lead Nurture Workflow", included: true },
      { text: "Monthly Strategy Calls", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "EMI Available (0% for 3 months)", included: true },
    ],
  },
];

const badgeBg = (t: Tier["badgeTone"]) => {
  if (t === "red") return "var(--red)";
  if (t === "navy") return "var(--navy-lt)";
  return "rgba(144,202,249,0.2)";
};

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32" style={{ background: "var(--dark-bg)" }}>
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full"
            style={{ background: "rgba(144,202,249,0.1)", color: "#90CAF9" }}
          >
            <span style={{ color: "var(--red)" }}>●</span> Tailored Plans
          </span>
          <h2
            className="mt-5 font-black text-white"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-1px", lineHeight: 1.1 }}
          >
            Three Plans. Custom Quotes. Zero Surprises.
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: "var(--mid-blue)" }}>
            Every business is different — tell us your goals and we'll send a personalised quote within 30 minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl p-8 flex flex-col"
              style={{
                background: "var(--dark-card)",
                border: t.recommended ? "1px solid rgba(229,57,53,0.4)" : "1px solid rgba(144,202,249,0.12)",
                borderTop: t.recommended ? "4px solid var(--red)" : "1px solid rgba(144,202,249,0.12)",
                transform: t.recommended ? "scale(1.04)" : "none",
                zIndex: t.recommended ? 2 : 1,
                boxShadow: t.recommended ? "0 20px 50px rgba(229,57,53,0.15)" : "none",
              }}
            >
              <span
                className="self-start text-[10px] font-bold uppercase tracking-[1.5px] px-2.5 py-1 rounded-full text-white"
                style={{ background: badgeBg(t.badgeTone) }}
              >
                {t.badge}
              </span>
              <h3 className="mt-4 text-[13px] font-bold uppercase tracking-[2px]" style={{ color: "#90CAF9" }}>
                {t.name}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#E3F0FF" }}>
                {t.tagline}
              </p>

              <ul className="mt-7 space-y-3 flex-1">
                {t.features.map((f, k) => (
                  <li
                    key={k}
                    className="flex items-start gap-3 text-[14px]"
                    style={{ color: f.included ? "#E3F0FF" : "var(--mid-blue)" }}
                  >
                    {f.included ? (
                      <Check size={18} style={{ color: "var(--red)", flexShrink: 0, marginTop: 1 }} />
                    ) : (
                      <X size={18} style={{ color: "var(--mid-blue)", flexShrink: 0, marginTop: 1 }} />
                    )}
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() =>
                  track(Events.QuoteRequest, { plan: t.name, location: "pricing_card" })
                }
                className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold uppercase tracking-[1.5px] text-[13px] transition-all hover:-translate-y-0.5"
                style={
                  t.recommended
                    ? { background: "var(--red)", color: "#fff", boxShadow: "0 4px 14px rgba(229,57,53,0.35)" }
                    : { border: "1px solid #90CAF9", color: "#90CAF9", background: "transparent" }
                }
              >
                Get Quote →
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="#contact"
            onClick={() => track(Events.QuoteRequest, { plan: "unsure", location: "pricing_footer" })}
            className="text-[14px] underline-offset-4 hover:underline"
            style={{ color: "#90CAF9" }}
          >
            Not sure which plan? Get a free personalised recommendation →
          </a>
          <span
            className="text-[11px] font-bold uppercase tracking-[1.5px] px-3 py-1.5 rounded-full text-white"
            style={{ background: "var(--red)" }}
          >
            Flexible payments · EMI available on all plans
          </span>
        </div>
      </div>
    </section>
  );
}
