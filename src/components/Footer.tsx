import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { track, Events } from "@/lib/analytics";

export function Footer() {
  return (
    <footer style={{ background: "var(--dark-bg)", borderTop: "1px solid rgba(144,202,249,0.08)" }}>
      <div className="container-x py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo height={50} />
          <p className="mt-5 text-[14px] leading-relaxed" style={{ color: "var(--mid-blue)" }}>
            Haryana ka digital partner — since 2023.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[
              { Icon: Instagram, href: "#", label: "instagram" },
              { Icon: Facebook, href: "#", label: "facebook" },
              { Icon: MessageCircle, href: "https://wa.me/918168194134", label: "whatsapp" },
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                onClick={() =>
                  label === "whatsapp"
                    ? track(Events.WhatsAppClick, { location: "footer" })
                    : track(Events.CtaClick, { location: "footer_social", label })
                }
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:text-white"
                style={{ border: "1px solid rgba(144,202,249,0.18)", color: "#546E8A" }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Services"
          items={["Website Design", "Local SEO", "Social Media", "Digital Menus", "WhatsApp Automations", "Complete Package"]}
        />
        <FooterCol
          title="Company"
          items={["About CoreSoft", "Our Process", "Case Studies", "Plans", "Free Audit"]}
        />

        <div>
          <h4 className="eyebrow" style={{ color: "#90CAF9", fontSize: 11 }}>Contact</h4>
          <ul className="mt-5 space-y-3 text-[14px]" style={{ color: "var(--mid-blue)" }}>
            <li className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Hisar, Haryana, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} />
              <a
                href="tel:+918168194134"
                onClick={() => track(Events.CtaClick, { location: "footer", label: "call" })}
                className="hover:text-white transition-colors"
              >
                +91 81681 94134
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} />
              <a
                href="mailto:admin@coresoftsolutions.net"
                onClick={() => track(Events.CtaClick, { location: "footer", label: "email" })}
                className="hover:text-white transition-colors"
              >
                admin@coresoftsolutions.net
              </a>
            </li>
          </ul>
          <a
            href="https://wa.me/918168194134"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track(Events.WhatsAppClick, { location: "footer_cta" })}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full text-white font-bold uppercase tracking-[1.5px] text-[12px] transition-all hover:-translate-y-0.5"
            style={{ background: "var(--whatsapp)" }}
          >
            💬 Chat With Us Now
          </a>
        </div>
      </div>

      <div style={{ background: "var(--dark-bg-2)" }}>
        <div
          className="container-x py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px]"
          style={{ color: "var(--mid-blue)" }}
        >
          <span>© 2025 CoreSoft Solutions. All rights reserved.</span>
          <span className="text-center">
            Hisar · Bhiwani · Sirsa · Rohtak · Fatehabad · Hansi — and growing across Haryana
          </span>
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
            <a
              href="#contact"
              onClick={() => track(Events.CtaClick, { location: "footer_link", label: i })}
              className="hover:text-white transition-colors"
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
