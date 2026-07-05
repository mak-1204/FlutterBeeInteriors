import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Karthik Rajan",
    location: "3BHK, Electronic City Phase 2",
    rating: 5,
    quote:
      "We handed over the keys and came back to a completely finished home. Dinesh and his team managed everything — ceiling work, furniture, electrical, painting — in just 45 days. The quality of the woodwork is exceptional, and the pop ceiling in our living room is absolutely stunning.",
    project: "Full Turnkey — 3BHK · ₹14L",
  },
  {
    name: "Mohammed Irfan",
    location: "2BHK, Bommanahalli",
    rating: 5,
    quote:
      "I was skeptical about hiring a single contractor for everything, but Flutter Bee proved me wrong. They were transparent about every cost, there were no surprise bills, and the false ceiling lighting they designed is exactly what I had in mind. Highly recommend for budget-conscious homeowners.",
    project: "False Ceiling + Painting — ₹3.5L",
  },
  {
    name: "Anitha Subramaniam",
    location: "4BHK Villa, Sarjapur Road",
    rating: 5,
    quote:
      "The modular kitchen they built for me is chef-level! Smart storage solutions I hadn't even thought of. Dinesh personally visited our site three times during the work. The team is professional, punctual, and genuinely passionate about their craft.",
    project: "Modular Kitchen + Wardrobe — ₹9L",
  },
  {
    name: "Rajesh & Meera Pillai",
    location: "3BHK, HSR Layout",
    rating: 5,
    quote:
      "Flutter Bee did our complete home interiors within budget and ahead of schedule. The smart electrical wiring they did — concealed, with modular switches throughout — feels premium. We've already referred them to four of our neighbours.",
    project: "Full Turnkey — 3BHK · ₹17L",
  },
  {
    name: "Suman Reddy",
    location: "2BHK, Naidu Layout",
    rating: 5,
    quote:
      "Very satisfied with the customize furniture work. The wardrobe in our master bedroom uses every inch of available space intelligently. Clean finishes, no smell, delivered on time. Will definitely come back for the kids' room.",
    project: "Custom Furniture — ₹2.8L",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-32" style={{ background: "#F4F5EF" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
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
            Client Stories
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 400,
              color: "#1B1C1B",
              lineHeight: 1.1,
            }}
          >
            Homes loved,{" "}
            <em style={{ fontStyle: "italic", color: "#284848" }}>
              families happy
            </em>
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="p-10 md:p-16"
              style={{ background: "#284848" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#B5A96F" color="#B5A96F" />
                ))}
              </div>

              {/* Large quote mark */}
              <div
                className="mb-6 leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "5rem",
                  color: "#B5A96F",
                  lineHeight: 0.6,
                  opacity: 0.6,
                }}
              >
                "
              </div>

              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.15rem, 2.5vw, 1.45rem)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#F4F5EF",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                }}
              >
                {t.quote}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "#F4F5EF",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 300,
                      color: "rgba(244,245,239,0.6)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {t.location}
                  </p>
                </div>
                <span
                  className="px-4 py-2 self-start sm:self-auto"
                  style={{
                    border: "1px solid rgba(181,169,111,0.4)",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.65rem",
                    color: "#B5A96F",
                    letterSpacing: "0.14em",
                  }}
                >
                  {t.project}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-8 h-0.5 transition-all duration-300"
                  style={{
                    background: i === current ? "#284848" : "#284848",
                    opacity: i === current ? 1 : 0.25,
                    border: "none",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 flex items-center justify-center border border-[#284848]/30 hover:bg-[#284848] hover:text-white transition-all duration-200"
                style={{ background: "none", cursor: "pointer", color: "#284848" }}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 flex items-center justify-center border border-[#284848]/30 hover:bg-[#284848] hover:text-white transition-all duration-200"
                style={{ background: "none", cursor: "pointer", color: "#284848" }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ background: "#284848" }}
        >
          {[
            { icon: "🏆", label: "200+ Homes Delivered" },
            { icon: "⏱", label: "On-Time Delivery" },
            { icon: "🛡", label: "1 Year Warranty" },
            { icon: "💬", label: "Transparent Pricing" },
          ].map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-2 py-8 px-4 text-center"
              style={{ background: "#F4F5EF" }}
            >
              <span className="text-3xl">{b.icon}</span>
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 400,
                  color: "#1B1C1B",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
