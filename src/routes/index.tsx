import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { HeroSlider } from "@/components/site/HeroSlider";
import { ProductCard } from "@/components/site/ProductCard";
import { CartDrawer } from "@/components/site/CartDrawer";
import { products } from "@/lib/products";
import editorial from "@/assets/editorial.jpg";
import texture from "@/assets/texture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Terra Denim — Heavyweight Tees & Baggy Jeans" },
      {
        name: "description",
        content:
          "Organic cotton heavyweight tees and wide-leg baggy denim, cut in small runs. Shop the Terra Denim collection.",
      },
      { property: "og:title", content: "Terra Denim — Heavyweight Tees & Baggy Jeans" },
      {
        property: "og:description",
        content: "Organic cotton heavyweight tees and wide-leg baggy denim, cut in small runs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const marquee = [
  "290 GSM cotton",
  "Wide leg denim",
  "Small batch runs",
  "Organic fibres",
  "Free shipping over $150",
];

function Home() {
  const tees = products.filter((p) => p.category === "tees");
  const denim = products.filter((p) => p.category === "denim");

  return (
    <div className="min-h-screen">
      <Nav />
      <CartDrawer />
      <main>
        <HeroSlider />

        <section className="overflow-hidden border-y border-border bg-secondary/40 py-4">
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0">
                {marquee.map((m) => (
                  <span
                    key={`${k}-${m}`}
                    className="flex items-center gap-8 whitespace-nowrap px-8 text-xs uppercase tracking-[0.22em] text-muted-foreground"
                  >
                    {m} <span className="text-clay">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The collection</p>
              <h2 className="display mt-3 text-5xl md:text-7xl">Tees &amp; baggy denim</h2>
            </div>
            <Link to="/shop" className="link-underline text-xs uppercase tracking-[0.2em]">
              View all
            </Link>
          </div>

          <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <Link key={p.id} to="/shop">
                <ProductCard product={p} />
              </Link>
            ))}
          </div>
        </section>

        <section className="grid items-stretch md:grid-cols-2">
          <img
            src={editorial}
            alt="Model in an oversized tee and baggy jeans in a sunlit room"
            loading="lazy"
            width={1400}
            height={1000}
            className="h-full min-h-[420px] w-full object-cover"
          />
          <div className="flex flex-col justify-center bg-primary px-8 py-20 text-primary-foreground md:px-16">
            <p className="eyebrow" style={{ color: "var(--sand)" }}>
              Made slowly
            </p>
            <h2 className="display mt-4 text-5xl md:text-6xl">
              Cut once, worn for years
            </h2>
            <p className="mt-6 max-w-md text-sm opacity-80">
              Every run is limited to what our small mill can weave in a season. Tees are
              knit at 290 GSM so the shoulder holds; denim is cut wide and deep so it
              drapes instead of clinging.
            </p>
            <Link
              to="/shop"
              className="mt-10 w-fit rounded-full border border-current px-7 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-background hover:text-foreground"
            >
              Shop now
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow">Material study</p>
              <h2 className="display mt-3 text-5xl md:text-6xl">The cloth, up close</h2>
              <dl className="mt-10 divide-y divide-border border-y border-border">
                {[
                  ["Weight", "290 GSM combed cotton jersey"],
                  ["Denim", "14oz selvedge, unsanforized"],
                  ["Dye", "Earth pigment, low water"],
                  ["Fit", "Boxy tee, wide-leg jean"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-8 py-4 text-sm">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <img
              src={texture}
              alt="Close-up of woven cotton fabric"
              loading="lazy"
              width={1400}
              height={1000}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </section>

        <section id="journal" className="border-t border-border bg-secondary/40 py-24 md:py-32">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <p className="eyebrow">Journal</p>
            <h2 className="display mt-3 text-5xl md:text-6xl">Notes from the studio</h2>
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {[
                ["How a tee should fall", "On shoulder seams, and why we drop them."],
                ["Breaking in raw denim", "Six months, no wash — a field guide."],
                ["Dyeing with earth", "Clay, madder and iron in our small dye house."],
              ].map(([title, copy]) => (
                <article key={title} className="group border-t border-border pt-6">
                  <h3 className="display text-3xl">{title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{copy}</p>
                  <span className="mt-5 inline-block link-underline text-xs uppercase tracking-[0.2em]">
                    Read
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-24 text-center md:px-10">
          <h2 className="display mx-auto max-w-2xl text-5xl md:text-6xl">
            Early access to every small run
          </h2>
          <form
            className="mx-auto mt-10 flex max-w-md gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full border-b border-border bg-transparent px-1 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-foreground"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-primary px-6 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Join
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
