import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#testimonials", label: "Testimonials" },
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
        <a href="#top" aria-label="CoreSoft Solutions home">
          <Logo variant="dark" height={44} />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium uppercase tracking-[1px] transition-colors hover:text-white"
              style={{ color: "#90CAF9" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center text-[12px] font-bold uppercase tracking-[1.5px] text-white transition-all px-5 py-2.5 rounded-md hover:-translate-y-0.5"
          style={{ background: "var(--red)" }}
        >
          Get Free Audit
        </a>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" style={{ background: "#0A1628" }}>
          <div className="container-x flex items-center justify-between py-3">
            <Logo variant="dark" height={40} />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-white p-2">
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-6 mt-16">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-bold tracking-tight"
                style={{ color: "#90CAF9" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center text-sm font-bold uppercase tracking-[1.5px] text-white px-6 py-3 rounded-md"
              style={{ background: "var(--red)" }}
            >
              Get Free Audit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
