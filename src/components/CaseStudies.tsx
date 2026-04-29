import { motion } from "framer-motion";
import { TrendingUp, Users, Star, ArrowUpRight } from "lucide-react";
import { track, Events } from "@/lib/analytics";

interface CaseStudy {
  client: string;
  category: string;
  city: string;
  challenge: string;
  solution: string;
  metrics: { icon: typeof TrendingUp; value: string; label: string }[];
  quote: string;
  author: string;
  accent: string;
}

const cases: CaseStudy[] = [
  {
    client: "Sharma Dhaba",
    category: "Restaurant",
    city: "Hisar",
    challenge: "Zero online presence, walk-ins down 40% post-Covid.",
    solution: "5-page website + Google My Business + QR digital menu + WhatsApp ordering.",
    metrics: [
      { icon: TrendingUp, value: "+312%", label: "Online Orders" },
      { icon: Users, value: "1.8K", label: "Monthly Visitors" },
      { icon: Star, value: "4.9★", label: "Google Rating" },
    ],
    quote: "Pehle log dhoondte the, ab khud aate hain. CoreSoft ne game change kar diya.",
    author: "Ramesh Sharma, Owner",
    accent: "var(--red)",
  },
  {
    client: "Glow Beauty Studio",
    category: "Salon & Spa",
    city: "Bhiwani",
    challenge: "Manual booking chaos, missed appointments, no Instagram traction.",
    solution: "Booking-enabled website + Instagram management + WhatsApp auto-replies.",
    metrics: [
      { icon: TrendingUp, value: "+187%", label: "Bookings/Month" },
      { icon: Users, value: "12K", label: "IG Followers" },
      { icon: Star, value: "4.8★", label: "Google Rating" },
    ],
    quote: "WhatsApp pe bookings 24x7 aati hain. Staff ka time bach gaya, revenue double ho gaya.",
    author: "Priya Malik, Founder",
    accent: "#1565C0",
  },
  {
    client: "CityCare Clinic",
    category: "Healthcare",
    city: "Rohtak",
    challenge: "Patients couldn't find them on Google, low new-patient flow.",
    solution: "Local SEO campaign + GMB optimisation + appointment landing page.",
    metrics: [
      { icon: TrendingUp, value: "+241%", label: "GMB Calls" },
      { icon: Users, value: "Top 3", label: "Map Pack Rank" },
      { icon: Star, value: "4.9★", label: "Google Rating" },
    ],
    quote: "Mahine mein 60+ naye patients sirf Google se aate hain. Bahut professional team hai.",
    author: "Dr. Anil Verma, MD",
    accent: "#0D47A1",
  },
];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-24 md:py-32"
      style={{ background: "var(--dark-bg-2)" }}
    >
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full"
            style={{ background: "rgba(229,57,53,0.12)", color: "#FFB4B2" }}
          >
            <span style={{ color: "var(--red)" }}>●</span> Case Studies
          </span>
          <h2
            className="mt-5 font-black text-white"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-1px", lineHeight: 1.1 }}
          >
            Stories From Businesses Just Like Yours
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: "var(--mid-blue)" }}>
            Three real Haryana clients. Real timelines. Real numbers — verified.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onViewportEnter={() => track(Events.CaseStudyView, { client: c.client })}
              className="rounded-2xl p-7 flex flex-col"
              style={{
                background: "var(--dark-card)",
                border: "1px solid rgba(144,202,249,0.12)",
                borderTop: `4px solid ${c.accent}`,
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="eyebrow" style={{ color: "#90CAF9", fontSize: 10 }}>
                    {c.category} · {c.city}
                  </div>
                  <h3 className="mt-2 text-2xl font-black text-white" style={{ letterSpacing: "-0.5px" }}>
                    {c.client}
                  </h3>
                </div>
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: `${c.accent}22`, color: c.accent }}
                >
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <div className="mt-5 space-y-3 text-[14px] leading-relaxed">
                <div>
                  <div className="eyebrow mb-1" style={{ color: "var(--mid-blue)", fontSize: 10 }}>
                    Challenge
                  </div>
                  <p style={{ color: "#E3F0FF" }}>{c.challenge}</p>
                </div>
                <div>
                  <div className="eyebrow mb-1" style={{ color: "var(--mid-blue)", fontSize: 10 }}>
                    Solution
                  </div>
                  <p style={{ color: "#E3F0FF" }}>{c.solution}</p>
                </div>
              </div>

              <div
                className="mt-6 grid grid-cols-3 gap-2 rounded-lg p-3"
                style={{ background: "rgba(10,22,40,0.6)", border: "1px solid rgba(144,202,249,0.08)" }}
              >
                {c.metrics.map((m, k) => (
                  <div key={k} className="text-center">
                    <m.icon size={16} style={{ color: c.accent, margin: "0 auto" }} />
                    <div className="font-mono font-bold text-white mt-1" style={{ fontSize: 18 }}>
                      {m.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-[1px]" style={{ color: "var(--mid-blue)" }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <blockquote
                className="mt-6 pl-4 italic text-[14px]"
                style={{ borderLeft: `3px solid ${c.accent}`, color: "#E3F0FF" }}
              >
                "{c.quote}"
                <footer className="mt-2 text-[12px] not-italic" style={{ color: "var(--mid-blue)" }}>
                  — {c.author}
                </footer>
              </blockquote>

              <a
                href="#contact"
                onClick={() =>
                  track(Events.CtaClick, { location: "case_study", client: c.client })
                }
                className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold uppercase tracking-[1.5px] text-[12px] transition-all hover:-translate-y-0.5"
                style={{ border: `1px solid ${c.accent}`, color: c.accent }}
              >
                Get Similar Results →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
