import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center md:items-end overflow-hidden"
      style={{ background: "#1B1C1B" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzgzMjcxMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080)",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.45,
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(27,28,27,0.2) 0%, rgba(27,28,27,0.1) 40%, rgba(27,28,27,0.75) 80%, rgba(27,28,27,0.95) 100%)",
        }}
      />
      {/* Teal gradient accent */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(40,72,72,0.35) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 md:pt-0 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 400,
              color: "#B5A96F",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "1.2rem",
            }}
          >
            Electronic City Phase 2 · Bengaluru
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 300,
              color: "#F4F5EF",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Elevate Your
            <br />
            <em style={{ fontStyle: "italic", color: "#B5A96F" }}>
              Living Space
            </em>
          </h1>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "1rem",
              fontWeight: 300,
              color: "rgba(244,245,239,0.78)",
              maxWidth: "480px",
              lineHeight: 1.7,
              marginBottom: "2.4rem",
            }}
          >
            End-to-end home interior solutions — crafted with precision, delivered with care. Turnkey transformations across Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-4 transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                background: "#B5A96F",
                color: "#1B1C1B",
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
              }}
            >
              Get Free Consultation
            </button>
            <button
              onClick={() => scrollTo("#portfolio")}
              className="px-8 py-4 transition-all duration-200 hover:bg-white/10 active:scale-95"
              style={{
                background: "transparent",
                color: "#F4F5EF",
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 400,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                border: "1px solid rgba(244,245,239,0.4)",
                cursor: "pointer",
              }}
            >
              View Our Work
            </button>
          </div>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-8 md:gap-16"
        >
          {[
            { num: "200+", label: "Homes Delivered" },
            { num: "8+", label: "Years Experience" },
            { num: "100%", label: "Turnkey Solutions" },
            { num: "5★", label: "Client Rating" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  fontWeight: 500,
                  color: "#B5A96F",
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </span>
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 400,
                  color: "rgba(244,245,239,0.6)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginTop: "0.3rem",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        onClick={() => scrollTo("#services")}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[#B5A96F] opacity-70 hover:opacity-100 transition-opacity"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
