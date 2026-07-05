import { useState, useRef } from "react";
import { motion } from "motion/react";

const pairs = [
  {
    label: "Living Room Makeover",
    before: "https://images.unsplash.com/photo-1667510436110-79d3dabc2008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzgzMjcxMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    after: "https://images.unsplash.com/photo-1646987916641-1f3c8992daa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb20lMjBtb2Rlcm58ZW58MXx8fHwxNzgzMjcxMzQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    label: "Kitchen Transformation",
    before: "https://images.unsplash.com/photo-1684397671650-68fd1417fb3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yJTIwZGVzaWduJTIwSW5kaWF8ZW58MXx8fHwxNzgzMjcxMzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    after: "https://images.unsplash.com/photo-1682662044733-9120471befc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yJTIwZGVzaWduJTIwSW5kaWF8ZW58MXx8fHwxNzgzMjcxMzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

function Slider({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const pct = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  };

  return (
    <div className="flex flex-col gap-3">
      <p
        style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "0.72rem",
          color: "#B5A96F",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        {label}
      </p>
      <div
        ref={ref}
        className="relative overflow-hidden select-none cursor-col-resize"
        style={{ aspectRatio: "16/9" }}
        onMouseDown={() => (dragging.current = true)}
        onMouseMove={(e) => dragging.current && updatePos(e.clientX)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchMove={(e) => updatePos(e.touches[0].clientX)}
      >
        {/* After image */}
        <img
          src={after}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Before image clipped */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src={before}
            alt="Before"
            className="absolute inset-0 h-full object-cover"
            style={{ width: ref.current?.offsetWidth + "px" }}
          />
        </div>
        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" stroke="#284848" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        {/* Labels */}
        <div
          className="absolute top-3 left-3 px-2 py-1"
          style={{ background: "rgba(27,28,27,0.7)" }}
        >
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.62rem", color: "#F4F5EF", letterSpacing: "0.14em" }}>
            BEFORE
          </span>
        </div>
        <div
          className="absolute top-3 right-3 px-2 py-1"
          style={{ background: "rgba(40,72,72,0.8)" }}
        >
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.62rem", color: "#F4F5EF", letterSpacing: "0.14em" }}>
            AFTER
          </span>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  return (
    <section className="py-24" style={{ background: "#F4F5EF" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
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
            The Transformation
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
            Before & <em style={{ fontStyle: "italic", color: "#284848" }}>After</em>
          </h2>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.85rem",
              color: "#666",
              marginTop: "0.8rem",
            }}
          >
            Drag the slider to see the difference
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pairs.map((p) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Slider before={p.before} after={p.after} label={p.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
