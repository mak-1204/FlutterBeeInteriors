import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const projectTypes = [
  "Full Home Interiors",
  "Modular Kitchen",
  "Custom Furniture",
  "False Ceiling & Electrical",
  "Painting & Decor",
];

export function EnquiryPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", area: "", projectType: "", budget: "" });
  const scrollDepthFired = useRef(false);
  const timerFired = useRef(false);

  const show = () => {
    if (dismissed) return;
    if (sessionStorage.getItem("enquiry_dismissed")) return;
    setVisible(true);
  };

  useEffect(() => {
    if (sessionStorage.getItem("enquiry_dismissed")) return;

    // 60-second timer trigger
    const timer = setTimeout(() => {
      if (!timerFired.current) {
        timerFired.current = true;
        show();
      }
    }, 60000);

    // Scroll-depth trigger (50%)
    const handleScroll = () => {
      if (scrollDepthFired.current) return;
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (scrolled / total > 0.5) {
        scrollDepthFired.current = true;
        if (!timerFired.current) show();
      }
    };

    // Exit-intent trigger
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !timerFired.current) {
        timerFired.current = true;
        show();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dismissed]);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("enquiry_dismissed", "1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Flutter Bee! 🦋\nName: ${form.name}\nPhone: ${form.phone}\nArea: ${form.area}\nProject: ${form.projectType}\nBudget: ${form.budget}`
    );
    window.open(`https://wa.me/919535902255?text=${msg}`, "_blank");
    dismiss();
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.7rem 0.85rem",
    background: "rgba(244,245,239,0.08)",
    border: "1px solid rgba(244,245,239,0.18)",
    color: "#F4F5EF",
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.85rem",
    fontWeight: 300,
    outline: "none",
  };

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60"
            onClick={dismiss}
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-md max-h-[85vh] overflow-y-auto rounded-md shadow-2xl flex flex-col"
            style={{ background: "#284848" }}
          >
            {/* Gold top bar */}
            <div style={{ height: "4px", background: "#B5A96F", flexShrink: 0 }} />

            <div className="p-6 md:p-8">
              {/* Close */}
              <button
                onClick={dismiss}
                className="absolute top-5 right-5 text-[rgba(244,245,239,0.5)] hover:text-[#F4F5EF] transition-colors"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                <X size={20} />
              </button>

              <div className="mb-5 pr-4">
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.65rem",
                    color: "#B5A96F",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    marginBottom: "0.6rem",
                  }}
                >
                  Free Consultation
                </p>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.7rem",
                    fontWeight: 400,
                    color: "#F4F5EF",
                    lineHeight: 1.2,
                  }}
                >
                  Not sure where to start?
                </h3>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.84rem",
                    fontWeight: 300,
                    color: "rgba(244,245,239,0.68)",
                    marginTop: "0.5rem",
                    lineHeight: 1.6,
                  }}
                >
                  Get a free consultation call from Dinesh — our founder. No pressure, just good advice.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  required
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                />
                <input
                  required
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={inputStyle}
                />
                <input
                  required
                  placeholder="Your Area / Locality *"
                  value={form.area}
                  onChange={(e) => setForm({ ...form, area: e.target.value })}
                  style={inputStyle}
                />
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="" style={{ background: "#284848" }}>Project type…</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t} style={{ background: "#284848" }}>{t}</option>
                  ))}
                </select>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="" style={{ background: "#284848" }}>Budget range (optional)…</option>
                  {["Under ₹3L", "₹3L – ₹7L", "₹7L – ₹15L", "₹15L – ₹30L", "₹30L+"].map((b) => (
                    <option key={b} value={b} style={{ background: "#284848" }}>{b}</option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="mt-1 py-3.5 transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{
                    background: "#B5A96F",
                    color: "#1B1C1B",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Get Free Consultation →
                </button>
                <button
                  type="button"
                  onClick={dismiss}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.7rem",
                    color: "rgba(244,245,239,0.4)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "0.3rem 0",
                  }}
                >
                  No thanks, I'll browse
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
