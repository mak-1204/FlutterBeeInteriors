import { motion } from "motion/react";

const services = [
  {
    icon: "🪑",
    title: "Customize Furniture",
    desc: "Bespoke pieces designed for your unique style. Precision craftsmanship for every room — from wardrobes and beds to TV units and study tables.",
    detail: "Solid wood · Engineered wood · Custom upholstery",
  },
  {
    icon: "✦",
    title: "Pop False Ceiling",
    desc: "Architectural lighting and ceiling designs that transform ordinary rooms into stunning spaces with depth, drama and perfect ambience.",
    detail: "Gypsum · POP · Cove lighting · Ceilings for all rooms",
  },
  {
    icon: "⚡",
    title: "Electric Works",
    desc: "Safe, modern and smart home electrical solutions — from complete rewiring to smart switches, MCB panels and concealed conduit wiring.",
    detail: "Smart home · MCB panels · Concealed wiring",
  },
  {
    icon: "🖌",
    title: "Painting",
    desc: "Premium paints with flawless finish. From solid wall colours to textured patterns and designer wallpapers that make a statement.",
    detail: "Asian Paints · Textures · Wallpapers",
  },
  {
    icon: "🪴",
    title: "Decor & Styling",
    desc: "Curated décor, custom blinds and soft furnishings that pull every element together — because the details are what guests remember.",
    detail: "Blinds · Curtains · Decor accessories",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32"
      style={{ background: "#F4F5EF" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
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
            What We Offer
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "#1B1C1B",
              lineHeight: 1.15,
            }}
          >
            Full-Spectrum Interior
            <br />
            <em style={{ fontStyle: "italic", color: "#284848" }}>Solutions</em>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#284848]/10">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-10 md:p-12 flex flex-col gap-5 cursor-default bg-[#F4F5EF] hover:bg-[#284848] transition-all duration-300"
            >
              <div
                className="text-4xl transition-transform duration-300 group-hover:scale-110 origin-left"
                style={{ lineHeight: 1 }}
              >
                {svc.icon}
              </div>
              <div>
                <h3
                  className="mb-3 transition-colors duration-300 text-[#1B1C1B] group-hover:text-[#F4F5EF]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.55rem",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  className="transition-colors duration-300 text-[#444] group-hover:text-[#F4F5EF]/80"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    lineHeight: 1.7,
                  }}
                >
                  {svc.desc}
                </p>
              </div>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 400,
                  color: "#B5A96F",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginTop: "auto",
                }}
              >
                {svc.detail}
              </p>
            </motion.div>
          ))}
          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="p-10 md:p-12 flex flex-col justify-between"
            style={{ background: "#284848" }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 400,
                  color: "#B5A96F",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Turnkey Promise
              </p>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.7rem",
                  fontWeight: 400,
                  color: "#F4F5EF",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}
              >
                One team. One contract. Zero stress.
              </h3>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  color: "rgba(244,245,239,0.72)",
                  lineHeight: 1.7,
                }}
              >
                We handle everything from design to delivery — so you move in to a finished home, not a construction site.
              </p>
            </div>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 px-6 py-3 transition-all duration-200 hover:bg-[#c5b97f] active:scale-95 self-start"
              style={{
                background: "#B5A96F",
                color: "#1B1C1B",
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
              }}
            >
              Get a Quote
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
