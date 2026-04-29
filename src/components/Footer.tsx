import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer style={{ background: "var(--dark-bg)", borderTop: "1px solid rgba(144,202,249,0.08)" }}>
      <div className="container-x py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo variant="dark" height={50} />
          <p className="mt-5 text-[14px] leading-relaxed" style={{ color: "var(--mid-blue)" }}>
            Haryana ka digital partner — since 2023.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: MessageCircle, href: "https://wa.me/918168194134" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                aria-label="social"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ border: "1px solid rgba(144,202,249,0.18)", color: "#546E8A" }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Services" items={["Website Design", "Local SEO", "Social Media", "Digital Menus", "WhatsApp Automations", "Complete Package"]} />
        <FooterCol title="Company" items={["About CoreSoft", "Our Process", "Client Stories", "Pricing", "Free Audit"]} />

        <div>
          <h4 className="eyebrow" style={{ color: "#90CAF9", fontSize: 11 }}>Contact</h4>
          <ul className="mt-5 space-y-3 text-[14px]" style={{ color: "var(--mid-blue)" }}>
            <li className="flex items-center gap-2"><MapPin size={14} /> Hisar, Haryana, India</li>
            <li className="flex items-center gap-2"><Phone size={14} /> +91 81681 94134</li>
            <li className="flex items-center gap-2"><Mail size={14} /> admin@coresoftsolutions.net</li>
          </ul>
          <a
            href="https://wa.me/918168194134"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full text-white font-bold uppercase tracking-[1.5px] text-[12px] transition-all hover:-translate-y-0.5"
            style={{ background: "var(--whatsapp)" }}
          >
            💬 Chat With Us Now
          </a>
        </div>
      </div>

      <div style={{ background: "var(--dark-bg-2)" }}>
        <div className="container-x py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px]" style={{ color: "var(--mid-blue)" }}>
          <span>© 2025 CoreSoft Solutions. All rights reserved.</span>
          <span className="text-center">Hisar · Bhiwani · Sirsa · Rohtak · Fatehabad · Hansi — and growing across Haryana</span>
          <span className="block w-8 h-[3px]" style={{ background: "var(--red)" }} />
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="eyebrow" style={{ color: "#90CAF9", fontSize: 11 }}>{title}</h4>
      <ul className="mt-5 space-y-3 text-[14px]" style={{ color: "var(--mid-blue)" }}>
        {items.map((i) => (
          <li key={i}>
            <a href="#contact" className="hover:text-white transition-colors">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
