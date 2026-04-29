import { motion } from "framer-motion";

const cards = [
  {
    title: "Restaurants & Cafés",
    emoji: "🍽️",
    accent: "#E53935",
    body: "QR menus, WhatsApp ordering, Google Maps reviews, food photography-optimised websites, Zomato/Swiggy profile linking.",
    badge: "Most Popular",
    stat: "Avg. 40% more table reservations",
  },
  {
    title: "Salons & Spas",
    emoji: "💅",
    accent: "#0D47A1",
    body: "Before/after galleries, online booking integrations, Instagram content packages, loyalty promotion automation.",
    badge: "Premium Design",
    stat: "Avg. 3× more enquiries/month",
  },
  {
    title: "Clinics & Doctors",
    emoji: "🏥",
    accent: "#1565C0",
    body: "Trust-first websites with credentials, appointment forms, patient testimonial sections, Google Reviews setup.",
    badge: "Trust Builder",
    stat: "Avg. 4.8★ GMB rating achieved",
  },
  {
    title: "Retail & Service Shops",
    emoji: "🛍️",
    accent: "#E53935",
    body: "Catalogue websites, lead capture forms, WhatsApp chat integration, local SEO for hyper-local discovery.",
    badge: "Lead Generator",
    stat: "Avg. 60% more walk-ins reported",
  },
];

export function WhoWeHelp() {
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--dark-bg)" }}>
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full"
            style={{ background: "rgba(144,202,249,0.1)", color: "#90CAF9" }}
          >
            <span style={{ color: "var(--red)" }}>●</span> Who We Serve
          </span>
          <h2
            className="mt-5 font-black text-white"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-1px", lineHeight: 1.1 }}
          >
            Built for Haryana's Hardest-Working Business Owners
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl overflow-hidden p-7 transition-all"
              style={{
                background: "var(--dark-card)",
                border: "1px solid rgba(144,202,249,0.1)",
                borderTop: `4px solid ${c.accent}`,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span style={{ fontSize: 32 }}>{c.emoji}</span>
                  <h3 className="text-xl font-bold text-white">{c.title}</h3>
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-[1.5px] px-2.5 py-1 rounded-full whitespace-nowrap"
                  style={{ background: `${c.accent}22`, color: c.accent, border: `1px solid ${c.accent}55` }}
                >
                  {c.badge}
                </span>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#90CAF9" }}>
                {c.body}
              </p>
              <div className="mt-5 pt-5 border-t font-mono text-[13px]" style={{ borderColor: "rgba(144,202,249,0.1)", color: "var(--red)" }}>
                ↗ {c.stat}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
