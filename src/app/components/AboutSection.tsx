import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

const highlights = [
  "8+ years delivering turnkey interiors across Bengaluru",
  "200+ homes transformed — from 1BHK to luxury villas",
  "Certified electrical & civil contractors on every project",
  "On-time delivery commitment with contractual warranty",
  "Personal site visits before every quote — no surprises",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ background: "#284848" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="absolute -top-4 -left-4 w-full h-full border border-[#B5A96F]/30"
              style={{ zIndex: 0 }}
            />
            <img
              src="https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzgzMjcxMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Flutter Bee Interiors project"
              className="relative w-full object-cover"
              style={{ aspectRatio: "4/5", zIndex: 1 }}
            />
            {/* Founder card */}
            <div
              className="absolute bottom-8 right-0 translate-x-4 p-6 z-10 shadow-xl"
              style={{ background: "#B5A96F", maxWidth: "200px" }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "#1B1C1B",
                  lineHeight: 1.2,
                }}
              >
                Dinesh L
              </p>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 400,
                  color: "#1B1C1B",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginTop: "0.3rem",
                }}
              >
                Founder & CEO
              </p>
              <a
                href="tel:9535902255"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "#1B1C1B",
                  textDecoration: "none",
                  display: "block",
                  marginTop: "0.5rem",
                }}
              >
                📞 9535902255
              </a>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 400,
                color: "#B5A96F",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Our Story
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 400,
                color: "#F4F5EF",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Crafted with care,
              <br />
              <em style={{ fontStyle: "italic", color: "#B5A96F" }}>
                delivered with pride
              </em>
            </h2>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.92rem",
                fontWeight: 300,
                color: "rgba(244,245,239,0.78)",
                lineHeight: 1.85,
                marginBottom: "1.2rem",
              }}
            >
              Flutter Bee Interiors was born from a simple belief: every family deserves a home they're proud of — regardless of budget. Founded by Dinesh L in Electronic City, Bengaluru, we've spent nearly a decade making that happen for over 200 homes across the city.
            </p>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.92rem",
                fontWeight: 300,
                color: "rgba(244,245,239,0.78)",
                lineHeight: 1.85,
                marginBottom: "2rem",
              }}
            >
              We don't just design interiors — we manage the full process, from the first sketch to the final nail. Our turnkey model means one point of contact, transparent pricing, and zero coordination headaches for you.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle
                    size={17}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#B5A96F" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 300,
                      color: "rgba(244,245,239,0.82)",
                      lineHeight: 1.6,
                    }}
                  >
                    {h}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:9535902255"
                className="px-7 py-3 text-center transition-all duration-200 hover:bg-[#c5b97f] active:scale-95"
                style={{
                  background: "#B5A96F",
                  color: "#1B1C1B",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Talk to Dinesh
              </a>
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 transition-all duration-200 active:scale-95"
                style={{
                  background: "transparent",
                  color: "#F4F5EF",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(244,245,239,0.3)",
                  cursor: "pointer",
                }}
              >
                Schedule Site Visit
              </button>
            </div>
          </motion.div>
        </div>

        {/* Service Area Callout */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <p
            className="text-center mb-6"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.68rem",
              color: "#B5A96F",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            Areas We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Electronic City",
              "Naidu Layout",
              "Bommanahalli",
              "HSR Layout",
              "Sarjapur Road",
              "Whitefield",
              "Marathahalli",
              "JP Nagar",
              "Bannerghatta Road",
              "Chandapura",
              "Anekal",
              "Attibele",
            ].map((area) => (
              <span
                key={area}
                className="px-4 py-2"
                style={{
                  border: "1px solid rgba(181,169,111,0.3)",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 300,
                  color: "rgba(244,245,239,0.72)",
                  letterSpacing: "0.08em",
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
