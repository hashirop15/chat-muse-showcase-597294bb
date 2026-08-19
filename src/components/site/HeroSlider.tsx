import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "@/lib/products";

const DURATION = 6000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const startX = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const started = Date.now();
    const id = window.setInterval(() => {
      const p = (Date.now() - started) / DURATION;
      if (p >= 1) {
        go(index + 1);
      } else {
        setProgress(p);
      }
    }, 40);
    return () => window.clearInterval(id);
  }, [index, go]);

  const onDown = (x: number) => {
    startX.current = x;
  };
  const onUp = (x: number) => {
    if (startX.current === null) return;
    const dx = x - startX.current;
    if (Math.abs(dx) > 60) go(index + (dx < 0 ? 1 : -1));
    startX.current = null;
  };

  return (
    <section
      className="relative h-[92vh] min-h-[620px] w-full select-none overflow-hidden md:h-[88vh] md:min-h-[700px]"
      onPointerDown={(e) => onDown(e.clientX)}
      onPointerUp={(e) => onUp(e.clientX)}
      onTouchStart={(e) => onDown(e.touches[0]?.clientX ?? 0)}
      onTouchEnd={(e) => onUp(e.changedTouches[0]?.clientX ?? 0)}
    >
      {slides.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 bg-black transition-opacity duration-[1200ms] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={s.image}
            alt={s.title}
            width={1920}
            height={1080}
            {...(i === 0 ? {} : { loading: "lazy" as const })}
            className={`h-full w-full bg-black object-cover object-center transition-transform duration-[7000ms] ease-linear ${
              i === index ? "scale-[1.02]" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 md:px-10 md:pb-24">
        <p
          key={`e-${index}`}
          className="reveal-up eyebrow text-primary-foreground/80"
          style={{ color: "var(--bone)" }}
        >
          {slides[index]!.eyebrow}
        </p>
        <h1
          key={`t-${index}`}
          className="reveal-up display mt-4 max-w-4xl text-6xl md:text-8xl"
          style={{ color: "var(--bone)" }}
        >
          {slides[index]!.title}
        </h1>
        <p
          key={`c-${index}`}
          className="reveal-up mt-5 max-w-md text-sm md:text-base"
          style={{ color: "var(--bone)", opacity: 0.85 }}
        >
          {slides[index]!.copy}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            to="/shop"
            className="rounded-full bg-background px-7 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition-transform hover:-translate-y-0.5"
          >
            Shop the look
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(index - 1)}
              className="h-11 w-11 rounded-full border border-white/40 text-lg leading-none text-white transition-colors hover:bg-white/15"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(index + 1)}
              className="h-11 w-11 rounded-full border border-white/40 text-lg leading-none text-white transition-colors hover:bg-white/15"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-10 flex gap-3">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className="h-[2px] w-16 bg-white/30 md:w-24"
            >
              <span
                className="block h-full bg-white transition-[width] duration-100"
                style={{ width: i === index ? `${progress * 100}%` : i < index ? "0%" : "0%" }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
