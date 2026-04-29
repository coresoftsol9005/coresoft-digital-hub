import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

interface FormState {
  name: string;
  phone: string;
  whatsappSame: "yes" | "no" | "";
  whatsapp: string;
  business: string;
  city: string;
  category: string;
  services: string[];
  goals: string[];
  budget: string;
  notes: string;
}

const empty: FormState = {
  name: "", phone: "", whatsappSame: "", whatsapp: "", business: "", city: "",
  category: "", services: [], goals: [], budget: "", notes: "",
};

const categories = [
  "🍽️ Restaurant / Café / Dhaba",
  "💅 Salon / Spa / Beauty Parlour",
  "🏥 Clinic / Hospital / Doctor",
  "🛍️ Retail Shop",
  "🏗️ Contractor / Service Business",
  "🎓 Coaching / Education",
  "🏋️ Gym / Fitness",
  "🔧 Other",
];

const serviceOpts = [
  "Website Design", "Local SEO", "Social Media Management", "QR Digital Menu",
  "WhatsApp Automation", "Facebook/Instagram Ads", "Google Ads", "Complete Package",
];

const goalOpts = [
  "More walk-in customers", "More online enquiries", "Better Google ranking",
  "Manage social media", "Automate follow-ups", "Look more professional",
];

const budgets = ["Under ₹5,000", "₹5,000–₹10,000", "₹10,000–₹20,000", "₹20,000+", "Not sure yet"];

const stepLabels = [
  "Your Name", "Contact Details", "Business Info", "Business Category",
  "Services Needed", "Your Goals", "Budget Range", "Anything Else?",
];

const inputStyle: React.CSSProperties = {
  background: "rgba(10,22,40,0.8)",
  border: "1px solid rgba(144,202,249,0.2)",
  color: "#fff",
  borderRadius: 8,
  padding: "12px 14px",
  width: "100%",
  fontSize: 15,
  outline: "none",
};

export function DiscoveryForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(empty);
  const [done, setDone] = useState(false);
  const total = 8;
  const progress = ((step + 1) / total) * 100;

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setData((d) => ({ ...d, [k]: v }));
  const toggle = (k: "services" | "goals", v: string) =>
    set(k, data[k].includes(v) ? data[k].filter((x) => x !== v) : [...data[k], v]);

  const canNext = () => {
    switch (step) {
      case 0: return data.name.trim().length > 1;
      case 1: return /^\d{10}$/.test(data.phone.replace(/\D/g, "")) && data.whatsappSame !== "" && (data.whatsappSame === "yes" || /^\d{10}$/.test(data.whatsapp.replace(/\D/g, "")));
      case 2: return data.business.trim().length > 1 && data.city.trim().length > 1;
      case 3: return data.category !== "";
      case 4: return data.services.length > 0;
      case 5: return data.goals.length > 0;
      case 6: return data.budget !== "";
      default: return true;
    }
  };

  const submit = () => {
    setDone(true);
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.4 }, colors: ["#E53935", "#0D47A1", "#90CAF9"] });
  };

  const waLink = `https://wa.me/918168194134?text=${encodeURIComponent(
    `Hi CoreSoft! I just filled your discovery form.\n\nName: ${data.name}\nPhone: ${data.phone}\nBusiness: ${data.business}, ${data.city}\nCategory: ${data.category}\nServices: ${data.services.join(", ")}\nBudget: ${data.budget}`
  )}`;

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "var(--off-white)" }}>
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span
            className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full"
            style={{ background: "rgba(13,71,161,0.08)", color: "var(--navy)" }}
          >
            <span style={{ color: "var(--red)" }}>●</span> Free Audit
          </span>
          <h2
            className="mt-5 font-black"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--text-1)", letterSpacing: "-1px", lineHeight: 1.1 }}
          >
            Get Your Free Business Audit
          </h2>
          <p className="mt-4 text-base md:text-lg" style={{ color: "var(--text-2)" }}>
            Fill this 5-minute form. We'll WhatsApp you a personalised digital roadmap within 30 minutes — completely free.
          </p>
        </div>

        <div
          className="max-w-[640px] mx-auto rounded-2xl overflow-hidden"
          style={{
            background: "var(--dark-card)",
            border: "1px solid rgba(144,202,249,0.12)",
            borderTop: "4px solid var(--red)",
            boxShadow: "0 30px 60px rgba(13,71,161,0.18)",
          }}
        >
          {/* Progress */}
          <div className="h-[3px]" style={{ background: "rgba(144,202,249,0.15)" }}>
            <div
              className="h-full transition-all duration-500"
              style={{ width: `${done ? 100 : progress}%`, background: "var(--red)" }}
            />
          </div>

          <div className="p-7 md:p-9">
            {!done ? (
              <>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[12px]" style={{ color: "#90CAF9" }}>
                    Step {String(step + 1).padStart(2, "0")} / {total}
                  </span>
                  <span className="eyebrow" style={{ color: "var(--mid-blue)", fontSize: 10 }}>
                    {stepLabels[step]}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="min-h-[260px]"
                  >
                    {step === 0 && (
                      <div>
                        <Label>Aap ka naam kya hai?</Label>
                        <input style={inputStyle} placeholder="e.g. Ramesh Sharma" value={data.name} onChange={(e) => set("name", e.target.value)} autoFocus />
                      </div>
                    )}
                    {step === 1 && (
                      <div className="space-y-5">
                        <div>
                          <Label>Phone Number</Label>
                          <input style={inputStyle} placeholder="10-digit mobile" value={data.phone} onChange={(e) => set("phone", e.target.value)} inputMode="numeric" />
                        </div>
                        <div>
                          <Label>Yahi number WhatsApp pe hai?</Label>
                          <div className="flex gap-3">
                            {(["yes", "no"] as const).map((v) => (
                              <Pill key={v} active={data.whatsappSame === v} onClick={() => set("whatsappSame", v)}>
                                {v === "yes" ? "Yes, same number" : "No, different"}
                              </Pill>
                            ))}
                          </div>
                        </div>
                        {data.whatsappSame === "no" && (
                          <div>
                            <Label>WhatsApp Number</Label>
                            <input style={inputStyle} placeholder="10-digit WhatsApp" value={data.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} inputMode="numeric" />
                          </div>
                        )}
                      </div>
                    )}
                    {step === 2 && (
                      <div className="space-y-5">
                        <div>
                          <Label>Business Name</Label>
                          <input style={inputStyle} placeholder="e.g. Sharma Dhaba" value={data.business} onChange={(e) => set("business", e.target.value)} />
                        </div>
                        <div>
                          <Label>City / Town</Label>
                          <input style={inputStyle} placeholder="e.g. Hisar" value={data.city} onChange={(e) => set("city", e.target.value)} />
                        </div>
                      </div>
                    )}
                    {step === 3 && (
                      <div>
                        <Label>Aap ka business kis category mein aata hai?</Label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {categories.map((c) => (
                            <Pill key={c} active={data.category === c} onClick={() => set("category", c)} block>{c}</Pill>
                          ))}
                        </div>
                      </div>
                    )}
                    {step === 4 && (
                      <div>
                        <Label>Aapko kaunsi services chahiye? (multiple OK)</Label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {serviceOpts.map((s) => (
                            <Pill key={s} active={data.services.includes(s)} onClick={() => toggle("services", s)} block>{s}</Pill>
                          ))}
                        </div>
                      </div>
                    )}
                    {step === 5 && (
                      <div>
                        <Label>Aapke main goals kya hain?</Label>
                        <div className="grid gap-2">
                          {goalOpts.map((g) => (
                            <Pill key={g} active={data.goals.includes(g)} onClick={() => toggle("goals", g)} block>{g}</Pill>
                          ))}
                        </div>
                      </div>
                    )}
                    {step === 6 && (
                      <div>
                        <Label>Approximate Budget?</Label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {budgets.map((b) => (
                            <Pill key={b} active={data.budget === b} onClick={() => set("budget", b)} block>{b}</Pill>
                          ))}
                        </div>
                      </div>
                    )}
                    {step === 7 && (
                      <div>
                        <Label>Anything else you want us to know?</Label>
                        <textarea
                          style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
                          placeholder="Optional — share any specific requirements, deadlines, or examples you like."
                          value={data.notes}
                          onChange={(e) => set("notes", e.target.value)}
                        />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <button
                    disabled={step === 0}
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    className="px-5 py-2.5 rounded-lg text-[13px] font-bold uppercase tracking-[1.5px] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{ border: "1px solid rgba(144,202,249,0.3)", color: "#90CAF9", background: "transparent" }}
                  >
                    ← Back
                  </button>
                  {step < total - 1 ? (
                    <button
                      disabled={!canNext()}
                      onClick={() => setStep((s) => s + 1)}
                      className="px-6 py-2.5 rounded-lg text-[13px] font-bold uppercase tracking-[1.5px] text-white transition-all hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                      style={{ background: "var(--red)" }}
                    >
                      Next →
                    </button>
                  ) : (
                    <button
                      onClick={submit}
                      className="px-6 py-2.5 rounded-lg text-[13px] font-bold uppercase tracking-[1.5px] text-white transition-all hover:-translate-y-0.5"
                      style={{ background: "var(--red)" }}
                    >
                      Submit Audit Request
                    </button>
                  )}
                </div>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                <div
                  className="mx-auto w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                  style={{ background: "rgba(229,57,53,0.15)", color: "var(--red)" }}
                >
                  ✓
                </div>
                <h3 className="mt-5 text-2xl font-black text-white">Shukriya, {data.name.split(" ")[0]}!</h3>
                <p className="mt-3 text-[15px]" style={{ color: "#90CAF9" }}>
                  We've received your audit request. Hum aapko WhatsApp pe 30 minute ke andar contact karenge.
                </p>

                <div className="mt-6 text-left rounded-lg p-5" style={{ background: "rgba(10,22,40,0.6)", border: "1px solid rgba(144,202,249,0.12)" }}>
                  {[
                    ["Name", data.name],
                    ["Phone", data.phone],
                    ["Business", `${data.business}, ${data.city}`],
                    ["Category", data.category],
                    ["Services", data.services.join(", ")],
                    ["Budget", data.budget],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 py-1.5 text-[13px] border-b last:border-0" style={{ borderColor: "rgba(144,202,249,0.08)" }}>
                      <span style={{ color: "var(--mid-blue)" }}>{k}</span>
                      <span className="text-right text-white font-medium">{v || "—"}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg text-white font-bold uppercase tracking-[1.5px] text-[13px] transition-all hover:-translate-y-0.5"
                  style={{ background: "var(--whatsapp)" }}
                >
                  💬 Open WhatsApp Now
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block eyebrow mb-3" style={{ color: "#90CAF9", fontSize: 11 }}>
      {children}
    </label>
  );
}

function Pill({
  active, onClick, children, block,
}: { active: boolean; onClick: () => void; children: React.ReactNode; block?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left text-[14px] px-4 py-3 rounded-lg transition-all ${block ? "w-full" : ""}`}
      style={{
        background: active ? "rgba(229,57,53,0.1)" : "rgba(10,22,40,0.5)",
        border: `1px solid ${active ? "var(--red)" : "rgba(144,202,249,0.2)"}`,
        color: active ? "#fff" : "#90CAF9",
        fontWeight: active ? 600 : 400,
      }}
    >
      {children}
    </button>
  );
}
