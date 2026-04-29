import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { track, Events } from "@/lib/analytics";

const links = [
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#results", label: "Results" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Plans" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    track(Events.MobileMenuClose);
  };
  const openMenu = () => {
    setOpen(true);
    track(Events.MobileMenuOpen);
  };

  const handleNavClick = (label: string, href: string) => {
    track(Events.NavClick, { label, href });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,22,40,0.85)" : "#0A1628",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: "1px solid rgba(144,202,249,0.1)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="container-x flex items-center justify-between py-3">
        <a
          href="#top"
          aria-label="CoreSoft Solutions home"
          onClick={() => track(Events.NavClick, { label: "logo", href: "#top" })}
        >
          <Logo height={44} />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => handleNavClick(l.label, l.href)}
              className="text-[13px] font-medium uppercase tracking-[1px] transition-colors hover:text-white"
              style={{ color: "#90CAF9" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={() => track(Events.CtaClick, { location: "nav", label: "Get Free Audit" })}
          className="hidden lg:inline-flex items-center text-[12px] font-bold uppercase tracking-[1.5px] text-white transition-all px-5 py-2.5 rounded-md hover:-translate-y-0.5"
          style={{ background: "var(--red)" }}
        >
          Get Free Audit
        </a>

        <button
          className="lg:hidden text-white p-2 -mr-2 rounded-md"
          onClick={openMenu}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile menu — refined: backdrop, slide-in panel, contact actions */}
      {open && (
        <>
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close menu backdrop"
            onClick={closeMenu}
            className="fixed inset-0 z-[55] lg:hidden"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
          />

          {/* Slide-in panel */}
          <aside
            className="fixed top-0 right-0 bottom-0 z-[60] lg:hidden flex flex-col"
            style={{
              width: "min(86vw, 360px)",
              background: "linear-gradient(180deg, #0A1628 0%, #08111F 100%)",
              borderLeft: "1px solid rgba(144,202,249,0.12)",
              boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
              animation: "slideInRight 0.28s cubic-bezier(0.16,1,0.3,1)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
          >
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ borderBottom: "1px solid rgba(144,202,249,0.1)" }}
            >
              <Logo height={36} />
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="text-white p-2 rounded-md transition-colors"
                style={{ background: "rgba(144,202,249,0.08)" }}
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-2 py-4">
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => {
                        handleNavClick(l.label, l.href);
                        closeMenu();
                      }}
                      className="flex items-center justify-between px-4 py-3.5 rounded-lg text-[15px] font-semibold transition-colors"
                      style={{ color: "#E3F0FF" }}
                    >
                      <span>{l.label}</span>
                      <span style={{ color: "var(--red)" }}>→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div
              className="p-4 space-y-3"
              style={{ borderTop: "1px solid rgba(144,202,249,0.1)" }}
            >
              <a
                href="#contact"
                onClick={() => {
                  track(Events.CtaClick, { location: "mobile_menu", label: "Get Free Audit" });
                  closeMenu();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-white font-bold uppercase tracking-[1.5px] text-[13px]"
                style={{ background: "var(--red)", boxShadow: "0 4px 14px rgba(229,57,53,0.35)" }}
              >
                Get Free Audit →
              </a>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href="https://wa.me/918168194134"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track(Events.WhatsAppClick, { location: "mobile_menu" })}
                  className="flex flex-col items-center gap-1 py-3 rounded-lg transition-colors"
                  style={{ background: "rgba(37,211,102,0.12)", color: "var(--whatsapp)" }}
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-[1px]">WhatsApp</span>
                </a>
                <a
                  href="tel:+918168194134"
                  onClick={() => track(Events.CtaClick, { location: "mobile_menu", label: "call" })}
                  className="flex flex-col items-center gap-1 py-3 rounded-lg transition-colors"
                  style={{ background: "rgba(144,202,249,0.08)", color: "#90CAF9" }}
                  aria-label="Call"
                >
                  <Phone size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-[1px]">Call</span>
                </a>
                <a
                  href="mailto:admin@coresoftsolutions.net"
                  onClick={() => track(Events.CtaClick, { location: "mobile_menu", label: "email" })}
                  className="flex flex-col items-center gap-1 py-3 rounded-lg transition-colors"
                  style={{ background: "rgba(144,202,249,0.08)", color: "#90CAF9" }}
                  aria-label="Email"
                >
                  <Mail size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-[1px]">Email</span>
                </a>
              </div>
              <p className="text-center text-[11px]" style={{ color: "var(--mid-blue)" }}>
                Hisar, Haryana · Reply in 30 min
              </p>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
