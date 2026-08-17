import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";

const links = [
  { label: "Shop", search: {} },
  { label: "T-Shirts", search: { filter: "tees" } },
  { label: "Baggy Denim", search: { filter: "denim" } },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="display text-2xl tracking-tight">
          TERRA&nbsp;DENIM
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              search={l.search}
              className="link-underline text-xs uppercase tracking-[0.2em]"
            >
              {l.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="rounded-full bg-primary px-5 py-2 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
          >
            Cart ({count})
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="rounded-full bg-primary px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-primary-foreground"
          >
            Cart ({count})
          </button>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="text-xs uppercase tracking-[0.2em]"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                search={l.search}
                onClick={() => setOpen(false)}
                className="display text-3xl"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
