import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const filters = [
  { id: "all", label: "All" },
  { id: "living", label: "Living Room" },
  { id: "bedroom", label: "Bedroom" },
  { id: "kitchen", label: "Kitchen" },
  { id: "ceiling", label: "False Ceiling" },
  { id: "furniture", label: "Furniture" },
];

const projects = [
  {
    id: 1,
    tags: ["living", "ceiling"],
    title: "Prestige Meridian — Living Room",
    location: "Electronic City Phase 2",
    size: "3BHK · ₹12L Budget",
    img: "https://images.unsplash.com/photo-1720247520862-7e4b14176fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzgzMjcxMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    wide: true,
  },
  {
    id: 2,
    tags: ["bedroom"],
    title: "Brigade Utopia — Master Bedroom",
    location: "Sarjapur Road",
    size: "2BHK · ₹7L Budget",
    img: "https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBlbGVnYW50fGVufDF8fHx8MTc4MzI3MTM0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    wide: false,
  },
  {
    id: 3,
    tags: ["kitchen"],
    title: "Sobha City — Modular Kitchen",
    location: "HSR Layout",
    size: "3BHK · ₹5L Kitchen",
    img: "https://images.unsplash.com/photo-1755771984341-546c2a04f236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yJTIwZGVzaWduJTIwSW5kaWF8ZW58MXx8fHwxNzgzMjcxMzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    wide: false,
  },
  {
    id: 4,
    tags: ["living", "furniture"],
    title: "Mantri Espana — Full Living",
    location: "Bommanahalli",
    size: "4BHK · ₹20L Turnkey",
    img: "https://images.unsplash.com/photo-1724582586495-d050726cf354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzgzMjcxMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    wide: true,
  },
  {
    id: 5,
    tags: ["bedroom", "furniture"],
    title: "NCC Nagarjuna — Kids Room",
    location: "Electronic City",
    size: "2BHK · ₹8L Budget",
    img: "https://images.unsplash.com/photo-1720420021124-4e18564e070f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBlbGVnYW50fGVufDF8fHx8MTc4MzI3MTM0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    wide: false,
  },
  {
    id: 6,
    tags: ["kitchen"],
    title: "Adarsh Palm Meadows — Kitchen",
    location: "Whitefield",
    size: "3BHK · ₹6L Kitchen",
    img: "https://images.unsplash.com/photo-1682662045815-9016c6225dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yJTIwZGVzaWduJTIwSW5kaWF8ZW58MXx8fHwxNzgzMjcxMzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    wide: false,
  },
  {
    id: 7,
    tags: ["ceiling", "living"],
    title: "Vaishnavi Terraces — Living + Ceiling",
    location: "Naidu Layout",
    size: "3BHK · ₹15L Turnkey",
    img: "https://images.unsplash.com/photo-1720247520881-672bc136da8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzgzMjcxMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    wide: true,
  },
  {
    id: 8,
    tags: ["bedroom"],
    title: "Prestige Primrose — Bedroom Suite",
    location: "Electronic City",
    size: "3BHK · ₹9L Budget",
    img: "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBlbGVnYW50fGVufDF8fHx8MTc4MzI3MTM0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    wide: false,
  },
];

export function PortfolioSection() {
  const [active, setActive] = useState("all");

  const visible = projects.filter(
    (p) => active === "all" || p.tags.includes(active)
  );

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32"
      style={{ background: "#1B1C1B" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 400,
                color: "#B5A96F",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                marginBottom: "0.9rem",
              }}
            >
              Our Projects
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "#F4F5EF",
                lineHeight: 1.1,
              }}
            >
              Homes We've{" "}
              <em style={{ fontStyle: "italic", color: "#B5A96F" }}>
                Transformed
              </em>
            </h2>
          </div>
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className="px-4 py-2 transition-all duration-200"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  border: `1px solid ${active === f.id ? "#B5A96F" : "rgba(244,245,239,0.25)"}`,
                  background: active === f.id ? "#B5A96F" : "transparent",
                  color: active === f.id ? "#1B1C1B" : "#F4F5EF",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {visible.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden cursor-pointer ${p.wide ? "sm:col-span-2" : ""}`}
                style={{ aspectRatio: p.wide ? "16/7" : "4/5" }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(27,28,27,0.92) 40%, transparent 100%)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.62rem",
                      color: "#B5A96F",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {p.location} · {p.size}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.3rem",
                      fontWeight: 500,
                      color: "#F4F5EF",
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>
                </div>
                {/* Always-visible label on mobile */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 sm:hidden"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(27,28,27,0.88) 60%, transparent)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "#F4F5EF",
                    }}
                  >
                    {p.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/flutterbeeinteriors"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 transition-all duration-200 hover:bg-[#B5A96F]/10"
            style={{
              border: "1px solid rgba(181,169,111,0.5)",
              color: "#B5A96F",
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
