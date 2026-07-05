export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0e1313" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Flutter Bee Interiors Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
              <div className="flex flex-col items-start pt-0.5">
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
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
                    fontSize: "0.58rem",
                    fontWeight: 400,
                    color: "rgba(244,245,239,0.5)",
                    letterSpacing: "0.36em",
                    textTransform: "uppercase",
                    lineHeight: 1,
                    marginTop: "0.15rem",
                  }}
                >
                  INTERIORS
                </span>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.84rem",
                fontWeight: 300,
                color: "rgba(244,245,239,0.55)",
                lineHeight: 1.8,
                maxWidth: "300px",
                marginBottom: "1.5rem",
              }}
            >
              End-to-end home interior solutions delivered with precision and care. Serving Bengaluru since 2016.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/flutterbeeinteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center transition-all duration-200 hover:bg-[#B5A96F] hover:text-[#1B1C1B]"
                style={{
                  border: "1px solid rgba(181,169,111,0.3)",
                  color: "#B5A96F",
                  textDecoration: "none",
                }}
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919535902255"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center transition-all duration-200 hover:bg-[#B5A96F] hover:text-[#1B1C1B]"
                style={{
                  border: "1px solid rgba(181,169,111,0.3)",
                  color: "#B5A96F",
                  textDecoration: "none",
                }}
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.65rem",
                color: "#B5A96F",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", id: "#home" },
                { label: "Services", id: "#services" },
                { label: "Portfolio", id: "#portfolio" },
                { label: "About", id: "#about" },
                { label: "Testimonials", id: "#testimonials" },
                { label: "Contact", id: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 300,
                      color: "rgba(244,245,239,0.55)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                    className="hover:text-[#B5A96F] transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.65rem",
                color: "#B5A96F",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Phone", value: "9535902255", href: "tel:9535902255" },
                {
                  label: "Email",
                  value: "flutterbeeinteriors@gmail.com",
                  href: "mailto:flutterbeeinteriors@gmail.com",
                },
                {
                  label: "Instagram",
                  value: "@flutterbeeinteriors",
                  href: "https://instagram.com/flutterbeeinteriors",
                },
                {
                  label: "Location",
                  value: "Electronic City Phase 2, Naidu Layout, Bengaluru",
                  href: "#",
                },
              ].map((c) => (
                <div key={c.label}>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.6rem",
                      color: "rgba(181,169,111,0.6)",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                    }}
                  >
                    {c.label}
                  </p>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 300,
                      color: "rgba(244,245,239,0.6)",
                      textDecoration: "none",
                      display: "block",
                      marginTop: "0.15rem",
                      lineHeight: 1.5,
                    }}
                    className="hover:text-[#F4F5EF] transition-colors"
                  >
                    {c.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(244,245,239,0.07)" }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 300,
              color: "rgba(244,245,239,0.3)",
            }}
          >
            © 2026 Flutter Bee Interiors. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 300,
              color: "rgba(244,245,239,0.3)",
            }}
          >
            Electronic City Phase 2, Naidu Layout, Bengaluru · 9535902255
          </p>
        </div>
      </div>
    </footer>
  );
}
