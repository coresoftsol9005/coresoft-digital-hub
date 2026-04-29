import { motion } from "framer-motion";
import { StatCounter } from "./StatCounter";

const stats = [
  { value: <StatCounter end={150} suffix="+" />, label: "Businesses Served Across Haryana", sub: "Restaurants, Salons, Clinics, Retail" },
  { value: <><span>₹</span><StatCounter end={2.4} decimals={1} suffix="Cr+" /></>, label: "Revenue Generated for Clients", sub: "Via website leads & WhatsApp orders" },
  { value: <><StatCounter end={4.9} decimals={1} />★</>, label: "Average Google Rating Achieved", sub: "Across all managed GMB profiles" },
  { value: <><StatCounter end={7} /> Days</>, label: "Average Website Delivery Time", sub: "With free revisions included" },
];

export function Results() {
  return (
    <section id="results" className="py-24 md:py-32" style={{ background: "var(--dark-bg)" }}>
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full"
            style={{ background: "rgba(144,202,249,0.1)", color: "#90CAF9" }}
          >
            <span style={{ color: "var(--red)" }}>●</span> Our Results
          </span>
          <h2
            className="mt-5 font-black text-white"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-1px", lineHeight: 1.1 }}
          >
            Real Numbers From Real Haryana Businesses
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(144,202,249,0.1)" }}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 md:p-10 text-center"
              style={{ background: "var(--dark-bg)" }}
            >
              <div
                className="font-mono font-medium"
                style={{ color: "var(--red)", fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1 }}
              >
                {s.value}
              </div>
              <div className="mt-4 font-bold text-white text-[15px]">{s.label}</div>
              <div className="mt-2 text-[13px]" style={{ color: "var(--mid-blue)" }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>

        <hr className="my-12" style={{ borderColor: "rgba(144,202,249,0.1)" }} />

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center text-[14px]" style={{ color: "#90CAF9" }}>
          <span>🏆 Haryana's #1 Rated Local Digital Agency</span>
          <span>✓ 100% On-Time Delivery Record</span>
          <span>🔒 Zero Advance Risk — Pay After You're Happy</span>
        </div>
      </div>
    </section>
  );
}
