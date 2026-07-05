import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const projectTypes = [
  "Full Home Interiors",
  "Modular Kitchen",
  "Custom Furniture",
  "False Ceiling & Electrical",
  "Painting & Decor",
  "Other",
];

const budgetRanges = [
  "Under ₹3L",
  "₹3L – ₹7L",
  "₹7L – ₹15L",
  "₹15L – ₹30L",
  "₹30L+",
];

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Flutter Bee Interiors! 🦋\n\nName: ${form.name}\nPhone: ${form.phone}\nArea: ${form.area}\nProject: ${form.projectType || 'Not specified'}\nBudget: ${form.budget || 'Not specified'}\n\nMessage: ${form.message || "Please contact me for a consultation."}`
    );
    window.open(`https://wa.me/919535902255?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1rem",
    background: "rgba(244,245,239,0.07)",
    border: "1px solid rgba(244,245,239,0.2)",
    color: "#F4F5EF",
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.88rem",
    fontWeight: 300,
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.65rem",
    fontWeight: 400,
    color: "#B5A96F",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "#1B1C1B" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
              Get In Touch
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "#F4F5EF",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Start your
              <br />
              <em style={{ fontStyle: "italic", color: "#B5A96F" }}>
                dream home
              </em>{" "}
              today
            </h2>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 300,
                color: "rgba(244,245,239,0.7)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: "440px",
              }}
            >
              Fill the form and we'll send you a WhatsApp message within 2 hours. Or call Dinesh directly for an immediate response.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {[
                {
                  icon: <Phone size={18} />,
                  label: "Call / WhatsApp",
                  value: "+91 9535902255",
                  href: "tel:9535902255",
                },
                {
                  icon: <Mail size={18} />,
                  label: "Email",
                  value: "flutterbeeinteriors@gmail.com",
                  href: "mailto:flutterbeeinteriors@gmail.com",
                },
                {
                  icon: <MapPin size={18} />,
                  label: "Studio",
                  value:
                    "Electronic City Phase 2, Naidu Layout, Bengaluru",
                  href: "https://maps.google.com/?q=Electronic+City+Phase+2+Naidu+Layout+Bengaluru",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex gap-4 items-start group hover:opacity-80 transition-opacity"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#284848", color: "#B5A96F" }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.65rem",
                        color: "#B5A96F",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                      }}
                    >
                      {c.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.88rem",
                        fontWeight: 300,
                        color: "rgba(244,245,239,0.85)",
                        marginTop: "0.2rem",
                      }}
                    >
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map embed */}
            <div className="w-full overflow-hidden" style={{ height: "240px" }}>
              <iframe
                title="Flutter Bee Interiors Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2987936050724!2d77.6744!3d12.8442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b0b0b0b0b0b%3A0x0!2sElectronic+City+Phase+2%2C+Bengaluru%2C+Karnataka!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="240"
                style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Electronic+City+Phase+2+Naidu+Layout+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 transition-all duration-200 hover:bg-[#B5A96F] hover:text-[#1B1C1B]"
              style={{
                border: "1px solid rgba(181,169,111,0.4)",
                color: "#B5A96F",
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 400,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <MapPin size={13} /> Get Directions
            </a>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="p-8 md:p-10" style={{ background: "#284848" }}>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "#F4F5EF",
                  marginBottom: "1.8rem",
                }}
              >
                Free Consultation Request
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Rajan"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Area / Locality *</label>
                  <input
                    required
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    placeholder="e.g. Electronic City Phase 2"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Project Type</label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="" style={{ background: "#284848" }}>
                      Select type…
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} style={{ background: "#284848" }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Budget Range (optional)</label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="" style={{ background: "#284848" }}>
                      Select range…
                    </option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b} style={{ background: "#284848" }}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Message (optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your project…"
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 py-4 transition-all duration-200 hover:opacity-90 active:scale-95"
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
                  <MessageCircle size={17} />
                  {sent ? "Sent! Check WhatsApp" : "Send via WhatsApp"}
                </button>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 300,
                    color: "rgba(244,245,239,0.45)",
                    textAlign: "center",
                    lineHeight: 1.6,
                  }}
                >
                  Your details are safe. We'll respond within 2 hours during
                  business hours (9am–8pm, Mon–Sat).
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
