import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(40,72,72,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(27,28,27,0.18)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2 focus:outline-none"
          >
            <div className="flex flex-col leading-none">
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.45rem",
                  fontWeight: 600,
                  color: "#B5A96F",
                  letterSpacing: "0.08em",
                  lineHeight: 1,
                }}
              >
                FLUTTER BEE
              </span>
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 400,
                  color: "#F4F5EF",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  lineHeight: 1.6,
                }}
              >
                INTERIORS
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-[#F4F5EF] hover:text-[#B5A96F] transition-colors duration-200"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:9535902255"
              className="flex items-center gap-2 px-5 py-2 rounded-none transition-all duration-200"
              style={{
                background: "#B5A96F",
                color: "#1B1C1B",
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <Phone size={14} />
              Call Us
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#F4F5EF] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-16"
          style={{ background: "#284848" }}
        >
          <div className="flex flex-col items-center justify-center flex-1 gap-8 pb-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  fontWeight: 400,
                  color: "#F4F5EF",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.06em",
                }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:9535902255"
              className="mt-4 flex items-center gap-2 px-8 py-3"
              style={{
                background: "#B5A96F",
                color: "#1B1C1B",
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <Phone size={16} />
              9535902255
            </a>
          </div>
        </div>
      )}
    </>
  );
}
