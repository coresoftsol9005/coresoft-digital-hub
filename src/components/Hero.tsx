import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NetworkGraph } from "./NetworkGraph";
import { track, Events } from "@/lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--dark-bg)" }}
    >
      <NetworkGraph />
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(13,71,161,0.35) 0%, transparent 70%)",
        }}
      />
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,22,40,0.4) 0%, transparent 30%, transparent 70%, rgba(10,22,40,0.9) 100%)",
        }}
      />

      <div className="container-x relative z-10 text-center pt-28 pb-20">
        <motion.div custom={0} initial="hidden" animate="show" variants={fadeUp} className="eyebrow inline-flex items-center gap-2" style={{ color: "#90CAF9" }}>
          <span style={{ color: "var(--red)" }}>●</span> Hisar ka Digital Partner
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 font-black text-white"
          style={{
            fontSize: "clamp(48px, 7vw, 88px)",
            lineHeight: 1.02,
            letterSpacing: "-2px",
          }}
        >
          Aapka Business,<br />
          <span className="relative inline-block">
            <span className="relative z-10">Online</span>
            <svg
              className="absolute left-0 right-0 -bottom-2 w-full"
              height="14"
              viewBox="0 0 320 14"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                className="underline-draw"
                d="M4 9 Q 80 2 160 7 T 316 6"
                stroke="#E53935"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>{" "}
          Powerhouse.
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-8 font-light"
          style={{ color: "#90CAF9", fontSize: 18, letterSpacing: "5px", textTransform: "uppercase" }}
        >
          Websites · Social Media · Digital Menus · Automations
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 mx-auto"
          style={{ color: "rgba(144,202,249,0.75)", fontSize: 16, maxWidth: 560, lineHeight: 1.7 }}
        >
          We help restaurants, salons, clinics, and retail shops across Haryana get found online,
          generate leads on autopilot, and look premium — in just 7 days.
        </motion.p>

        {/* Stat row */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-y-6"
        >
          {[
            ["150+", "Businesses Served"],
            ["7 Days", "Average Delivery"],
            ["30 Min", "WhatsApp Response"],
          ].map(([n, l], idx) => (
            <div
              key={l}
              className="px-8"
              style={{
                borderRight: idx < 2 ? "1px solid rgba(144,202,249,0.18)" : "none",
              }}
            >
              <div className="font-mono font-medium text-white" style={{ fontSize: 32 }}>
                {n}
              </div>
              <div className="eyebrow mt-1" style={{ color: "#90CAF9", fontSize: 10 }}>
                {l}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={() => track(Events.CtaClick, { location: "hero", label: "Get Free Audit" })}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-bold uppercase tracking-[1.5px] text-[14px] transition-all hover:-translate-y-0.5"
            style={{ background: "var(--red)", boxShadow: "0 4px 14px rgba(229,57,53,0.35)" }}
          >
            Get Your Free Audit →
          </a>
          <a
            href="#case-studies"
            onClick={() => track(Events.CtaClick, { location: "hero", label: "See Our Work" })}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-bold uppercase tracking-[1.5px] text-[14px] transition-all"
            style={{
              border: "1px solid rgba(144,202,249,0.3)",
              color: "#90CAF9",
            }}
          >
            See Our Work ↓
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {[
            "✓ No Advance Payment Risk",
            "✓ 1-Year Free Support",
            "✓ 7-Day Delivery Guarantee",
          ].map((b) => (
            <span
              key={b}
              className="text-[11px] font-medium px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(13,71,161,0.25)",
                border: "1px solid rgba(144,202,249,0.18)",
                color: "#90CAF9",
              }}
            >
              {b}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#proof"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 chevron-bounce"
        style={{ color: "#90CAF9" }}
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
