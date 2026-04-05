import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";

// ── Asset imports ─────────────────────────────────────────────────────────────
import millRollingImg  from "../assets/images/main/mill_rolling.jpg";
import millRollingBImg from "../assets/images/main/mill_rolling_b.jpg";
import millBoardsImg   from "../assets/images/products/mill_boards.jpg";
import paperRollsImg   from "../assets/images/paper_rolls/kraft_paperroll.jpg";
import sundryImg       from "../assets/images/products/sundry.jpg";

const slides = [
  {
    id:       1,
    image:    millRollingImg,
    eyebrow:  "Est. Manufacturer · Kolhapur",
    title:    "Welcome to Shree Pant Krupa Paper Board",
    subtitle: "Kolhapur's trusted paper board manufacturer — delivering premium quality to packaging industries across India.",
    cta:      "Explore Products",
    ctaPath:  "/products",
  },
  {
    id:       2,
    image:    millRollingBImg,
    eyebrow:  "Our Process",
    title:    "Precision Crafted From Raw Pulp to Finished Roll",
    subtitle: "State-of-the-art rolling mills convert high-grade pulp into perfectly calibrated paper sheets — every batch quality-checked.",
    cta:      "Learn More",
    ctaPath:  "/products",
  },
  {
    id:       3,
    image:    millBoardsImg,
    eyebrow:  "Product · Mill Board",
    title:    "High-Strength Mill Board Sheets",
    subtitle: "Available from 200–550 GSM, our mill boards offer superior rigidity and printability for heavy-duty packaging applications.",
    cta:      "View Mill Board",
    ctaPath:  "/products",
  },
  {
    id:       4,
    image:    paperRollsImg,
    eyebrow:  "Product · Kraft Paper",
    title:    "Durable Kraft Board Paper Rolls",
    subtitle: "Premium Kraft paper rolls — 200 to 550 GSM — engineered for corrugated boxes, cartons, and industrial packaging.",
    cta:      "View Kraft Rolls",
    ctaPath:  "/products",
  },
  {
    id:       5,
    image:    sundryImg,
    eyebrow:  "Product · Sundry & Sheet Cutting",
    title:    "Sundry Products & Custom Sheet Cutting",
    subtitle: "From specialty sundry items to precision sheet-cut boards in any size — tailored to your exact production needs.",
    cta:      "Explore Range",
    ctaPath:  "/products",
  },
];

const HeroBanner = () => {
  const [current,     setCurrent]     = useState(0);
  const [isPaused,    setIsPaused]    = useState(false);
  const [loaded,      setLoaded]      = useState({});
  const [touchStartX, setTouchStartX] = useState(null);
  const autoRef                       = useRef(null);
  const navigate                      = useNavigate();
  const total                         = slides.length;

  // Preload all images on mount
  useEffect(() => {
    slides.forEach((slide, i) => {
      const img  = new window.Image();
      img.src    = slide.image;
      img.onload = () => setLoaded((prev) => ({ ...prev, [i]: true }));
    });
  }, []);

  const goTo = useCallback((index) => setCurrent(index), []);

  const next = useCallback(() => goTo((current + 1) % total), [current, total, goTo]);
  const prev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo]);

  // Auto-advance
  useEffect(() => {
    if (!isPaused) autoRef.current = setInterval(next, 5000);
    return () => clearInterval(autoRef.current);
  }, [next, isPaused]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Montserrat:wght@400;500;600;700&display=swap');

        /* ── Root ───────────────────────────────────────────── */
        .hero-root {
          position:   relative;
          height:     90vh;
          min-height: 580px;
          overflow:   hidden;
          background: #080c18;
          font-family: 'Montserrat', sans-serif;
        }
        @media (max-width: 768px) {
          .hero-root { height: 75vh; min-height: 440px; }
        }

        /* ── Slide layers ───────────────────────────────────── */
        .hero-slide-layer {
          position:    absolute;
          inset:       0;
          transition:  opacity 1s ease;
          will-change: opacity;
        }
        .hero-slide-layer.is-active   { opacity: 1; z-index: 2; }
        .hero-slide-layer.is-inactive { opacity: 0; z-index: 1; }

        .hero-slide-bg {
          position:            absolute;
          inset:               0;
          background-size:     cover;
          background-position: center;
          transform:           scale(1.05);
          transition:          transform 7s ease;
        }
        .hero-slide-layer.is-active .hero-slide-bg {
          transform: scale(1);
        }

        .hero-overlay {
          position:   absolute;
          inset:      0;
          background: linear-gradient(
            110deg,
            rgba(5,10,25,0.80) 0%,
            rgba(5,10,25,0.45) 55%,
            rgba(5,10,25,0.20) 100%
          );
        }

        /* ── Content ────────────────────────────────────────── */
        .hero-content {
          position:    relative;
          z-index:     10;
          height:      100%;
          display:     flex;
          align-items: center;
        }

        .hero-text-wrap { max-width: 700px; }

        /* Eyebrow */
        .hero-eyebrow {
          display:        inline-flex;
          align-items:    center;
          gap:            0.45rem;
          background:     rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          border:         1px solid rgba(255,255,255,0.18);
          color:          rgba(255,255,255,0.9);
          font-size:      0.75rem;
          font-weight:    600;
          padding:        0.38rem 1rem;
          border-radius:  20px;
          margin-bottom:  1.1rem;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          animation:      hFadeUp 0.65s ease both;
        }
        .hero-eyebrow::before {
          content:       '';
          display:       inline-block;
          width:         7px;
          height:        7px;
          border-radius: 50%;
          background:    #f5a623;
          flex-shrink:   0;
        }

        /* Title */
        .hero-title {
          font-family:   'Playfair Display', serif;
          font-size:     clamp(1.9rem, 4.8vw, 3.8rem);
          font-weight:   900;
          color:         #ffffff;
          line-height:   1.13;
          margin-bottom: 1.1rem;
          letter-spacing: -0.3px;
          text-shadow:   0 6px 32px rgba(0,0,0,0.35);
          animation:     hFadeUp 0.65s ease 0.1s both;
        }

        /* Subtitle */
        .hero-sub {
          font-size:     clamp(0.9rem, 1.6vw, 1.05rem);
          color:         rgba(255,255,255,0.72);
          line-height:   1.7;
          margin-bottom: 2rem;
          max-width:     560px;
          font-weight:   400;
          animation:     hFadeUp 0.65s ease 0.18s both;
        }

        /* CTA */
        .hero-cta-btn {
          display:        inline-flex;
          align-items:    center;
          gap:            0.55rem;
          background:     linear-gradient(135deg, #f5a623 0%, #e8850a 100%);
          border:         none;
          border-radius:  10px;
          color:          #1a0d00;
          font-weight:    700;
          font-size:      0.95rem;
          padding:        0.8rem 2rem;
          cursor:         pointer;
          box-shadow:     0 8px 28px rgba(245,166,35,0.40);
          transition:     all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          font-family:    'Montserrat', sans-serif;
          letter-spacing: 0.2px;
          animation:      hFadeUp 0.65s ease 0.26s both;
        }
        .hero-cta-btn:hover {
          transform:  translateY(-3px) scale(1.04);
          box-shadow: 0 14px 36px rgba(245,166,35,0.55);
        }

        /* ── Arrow buttons ──────────────────────────────────── */
        .hero-arrow-btn {
          position:        absolute;
          top:             50%;
          transform:       translateY(-50%);
          z-index:         10;
          width:           50px;
          height:          50px;
          border-radius:   50%;
          border:          1.5px solid rgba(255,255,255,0.28);
          background:      rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          color:           white;
          display:         flex;
          align-items:     center;
          justify-content: center;
          cursor:          pointer;
          transition:      all 0.25s ease;
        }
        .hero-arrow-btn:hover {
          background:   rgba(245,166,35,0.22);
          border-color: #f5a623;
          transform:    translateY(-50%) scale(1.1);
        }
        @media (max-width: 768px) { .hero-arrow-btn { display: none !important; } }

        /* ── Dot indicators ─────────────────────────────────── */
        .hero-dot-btn {
          border:        none;
          cursor:        pointer;
          border-radius: 3px;
          height:        3px;
          background:    rgba(255,255,255,0.30);
          transition:    all 0.35s ease;
          padding:       0;
        }
        .hero-dot-btn.active {
          background: #f5a623;
          width:      30px !important;
        }

        /* ── Slide counter ──────────────────────────────────── */
        .hero-counter {
          position:      absolute;
          bottom:        2rem;
          right:         2rem;
          z-index:       10;
          color:         rgba(255,255,255,0.55);
          font-size:     0.82rem;
          font-weight:   700;
          letter-spacing: 1.5px;
          font-family:   'Montserrat', sans-serif;
        }
        .hero-counter strong { color: rgba(255,255,255,0.9); }

        /* ── Progress bar ───────────────────────────────────── */
        .hero-progress-track {
          position:   absolute;
          bottom:     0; left: 0; right: 0;
          height:     3px;
          background: rgba(255,255,255,0.10);
          z-index:    10;
        }
        .hero-progress-fill {
          height:     100%;
          background: linear-gradient(90deg, #f5a623, #ffd580);
        }

        /* ── Animations ─────────────────────────────────────── */
        @keyframes hFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes hProgressBar {
          from { width: 0%;   }
          to   { width: 100%; }
        }
      `}</style>

      <section
        className="hero-root"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX === null) return;
          const diff = touchStartX - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
          setTouchStartX(null);
        }}
        aria-label="Hero banner"
      >
        {/* ── Slide layers ── */}
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero-slide-layer ${i === current ? "is-active" : "is-inactive"}`}
          >
            <div
              className="hero-slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
              role="img"
              aria-label={slide.title}
            />
            <div className="hero-overlay" />
          </div>
        ))}

        {/* ── Text content ── */}
        <div className="container hero-content">
          <div className="hero-text-wrap">
            <div key={`ey-${current}`} className="hero-eyebrow">
              {slides[current].eyebrow}
            </div>
            <h1 key={`ti-${current}`} className="hero-title">
              {slides[current].title}
            </h1>
            <p key={`su-${current}`} className="hero-sub">
              {slides[current].subtitle}
            </p>
            <button
              key={`cta-${current}`}
              className="hero-cta-btn"
              onClick={() => navigate(slides[current].ctaPath)}
            >
              {slides[current].cta} <FiArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* ── Arrows ── */}
        <button
          className="hero-arrow-btn"
          style={{ left: "1.5rem" }}
          onClick={prev}
          aria-label="Previous slide"
        >
          <FiChevronLeft size={22} />
        </button>
        <button
          className="hero-arrow-btn"
          style={{ right: "1.5rem" }}
          onClick={next}
          aria-label="Next slide"
        >
          <FiChevronRight size={22} />
        </button>

        {/* ── Dot nav + counter row ── */}
        <div
          style={{
            position:   "absolute",
            bottom:     "2rem",
            left:       "50%",
            transform:  "translateX(-50%)",
            zIndex:     10,
            display:    "flex",
            alignItems: "center",
            gap:        "0.45rem",
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot-btn ${i === current ? "active" : ""}`}
              style={{ width: i === current ? 30 : 9 }}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="hero-counter">
          <strong>{String(current + 1).padStart(2, "0")}</strong>
          <span style={{ opacity: 0.4 }}> / {String(total).padStart(2, "0")}</span>
        </div>

        {/* ── Progress bar ── */}
        <div className="hero-progress-track">
          <div
            key={`pb-${current}-${isPaused}`}
            className="hero-progress-fill"
            style={{ animation: isPaused ? "none" : "hProgressBar 5s linear forwards" }}
          />
        </div>
      </section>
    </>
  );
};

export default HeroBanner;