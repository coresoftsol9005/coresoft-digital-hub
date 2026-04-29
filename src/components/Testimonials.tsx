import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface T {
  quote: string;
  name: string;
  business: string;
  city: string;
  source: string;
}

const items: T[] = [
  { quote: "CoreSoft ne hamare dhaba ke liye ek amazing website banaya — 7 din mein! Ab log Google par dhundh ke directly WhatsApp karte hain. Hamare orders 40% badh gaye pehle mahine mein hi.", name: "Ramesh Sharma", business: "Sharma Dhaba", city: "Hisar", source: "Google Review · Verified" },
  { quote: "Meri salon ka Instagram account 3 mahine mein 0 se 1,200 followers ho gaya. CoreSoft ne sab handle kiya — content, captions, hashtags. Main sirf apna kaam karti hoon.", name: "Priya Malhotra", business: "Gloss Salon", city: "Bhiwani", source: "Google Review · Verified" },
  { quote: "They built our clinic website in 5 days and set up our Google My Business. We went from invisible online to ranking #1 for 'dentist in Sirsa'. Worth every rupee.", name: "Dr. Vivek Anand", business: "Anand Dental Clinic", city: "Sirsa", source: "Google Review · Verified" },
  { quote: "QR menu system is brilliant. Customers scan, order on WhatsApp, and we save time on printing. CoreSoft ka WhatsApp support bhi bahut fast hai — 30 minutes mein reply.", name: "Sunita Devi", business: "Café Sunrise", city: "Fatehabad", source: "Google Review · Verified" },
  { quote: "Pehle humari koi online presence nahi thi. Ab humara Google rating 4.9 hai aur monthly 25-30 new customers directly Google se aate hain. Incredible results.", name: "Manoj Garg", business: "Garg Electronics", city: "Hansi", source: "Google Review · Verified" },
  { quote: "The automation setup is next level. Jo kaam hum 3 ghante mein karte the — follow-ups, confirmations — ab automatically hota hai. ROI within 2 months.", name: "Harish Yadav", business: "YadavFit Gym", city: "Rohtak", source: "WhatsApp Testimonial · Verified" },
];

function initials(name: string) {
  return name.split(/\s+/).slice(0, 2).map((n) => n[0]).join("").toUpperCase();
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32" style={{ background: "var(--off-white)" }}>
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full"
            style={{ background: "rgba(13,71,161,0.08)", color: "var(--navy)" }}
          >
            <span style={{ color: "var(--red)" }}>●</span> Client Stories
          </span>
          <h2
            className="mt-5 font-black"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--text-1)", letterSpacing: "-1px", lineHeight: 1.1 }}
          >
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: "var(--text-2)" }}>
            Real businesses. Real growth. Real Haryana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="bg-white rounded-2xl p-7 transition-all hover:-translate-y-1"
              style={{
                border: "1px solid var(--brand-border)",
                borderLeft: "4px solid var(--red)",
                boxShadow: "0 1px 3px rgba(13,71,161,0.04)",
              }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="#E53935" stroke="#E53935" />
                ))}
              </div>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--text-1)" }}>
                "{t.quote}"
              </p>
              <div className="mt-6 pt-5 flex items-center gap-3 border-t" style={{ borderColor: "var(--brand-border)" }}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: "var(--navy)" }}
                >
                  {initials(t.name)}
                </div>
                <div>
                  <div className="font-bold text-[14px]" style={{ color: "var(--text-1)" }}>{t.name}</div>
                  <div className="text-[12px]" style={{ color: "var(--text-2)" }}>{t.business}, {t.city}</div>
                  <div className="text-[10px] mt-0.5 font-mono" style={{ color: "var(--text-3)" }}>{t.source}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-white text-[14px] font-medium"
            style={{ background: "var(--navy)" }}
          >
            <span style={{ color: "#FFD54F" }}>★ 4.9 / 5.0</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>Based on 87 Google Reviews</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>Hisar, Haryana</span>
          </div>
        </div>
      </div>
    </section>
  );
}
