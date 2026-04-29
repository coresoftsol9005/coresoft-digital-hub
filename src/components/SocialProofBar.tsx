const items = [
  "🍽️ Restaurants",
  "💅 Salons & Spas",
  "🏥 Clinics",
  "🛍️ Retail Shops",
  "🏗️ Contractors",
  "🎓 Coaching Centers",
  "🚗 Auto Dealers",
  "☕ Cafés",
  "🏋️ Gyms",
  "🍰 Bakeries",
];

export function SocialProofBar() {
  const doubled = [...items, ...items];
  return (
    <section
      id="proof"
      style={{
        background: "var(--dark-bg-2)",
        borderTop: "1px solid rgba(144,202,249,0.08)",
        borderBottom: "1px solid rgba(144,202,249,0.08)",
      }}
      className="py-6 overflow-hidden"
    >
      <div className="container-x flex flex-col md:flex-row items-center gap-4">
        <div className="eyebrow shrink-0" style={{ color: "var(--mid-blue)", fontSize: 10 }}>
          Trusted by local businesses in
        </div>
        <div className="overflow-hidden flex-1 w-full" style={{ maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)" }}>
          <div className="marquee-track gap-3">
            {doubled.map((it, i) => (
              <span
                key={i}
                className="shrink-0 px-4 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap"
                style={{
                  border: "1px solid rgba(144,202,249,0.14)",
                  background: "rgba(13,71,161,0.1)",
                  color: "#90CAF9",
                }}
              >
                {it}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustRibbon() {
  const items = [
    "🔒 Secure",
    "✓ No Hidden Fees",
    "★ 4.9 Google Rating",
    "🚀 7-Day Delivery",
    "📞 30-Min WhatsApp Response",
  ];
  return (
    <div
      style={{ background: "#070E1C", borderBottom: "1px solid rgba(144,202,249,0.06)" }}
      className="py-3"
    >
      <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[12px]" style={{ color: "#90CAF9" }}>
        {items.map((i) => <span key={i}>{i}</span>)}
      </div>
    </div>
  );
}
