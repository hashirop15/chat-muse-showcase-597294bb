import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — Terra Denim` : "Product — Terra Denim";
    const description = p?.description ?? "Small-run tees and baggy denim from Terra Denim.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes[0] ?? "OS");
  const [active, setActive] = useState(product.image);

  return (
    <div className="min-h-screen">
      <Nav />
      <CartDrawer />
      <main className="mx-auto max-w-[1400px] px-6 pb-24 pt-32 md:px-10 md:pt-40">
        <Link to="/shop" className="link-underline text-xs uppercase tracking-[0.2em]">
          Back to shop
        </Link>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <div>
            <div className="overflow-hidden bg-black">
              <img
                src={active}
                alt={product.name}
                width={1000}
                height={1300}
                className="mx-auto aspect-[3/4] w-full scale-105 object-cover object-center"
              />
            </div>
            <div className="mt-4 flex gap-3">
              {[product.image, product.hoverImage].map((src) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(src)}
                  className={`w-20 overflow-hidden border bg-black ${
                    active === src ? "border-primary" : "border-border"
                  }`}
                >
                  <img src={src} alt="" className="aspect-[4/5] w-full object-cover object-center" />
                </button>
              ))}
            </div>
          </div>

          <div className="md:pt-6">
            <p className="eyebrow">{product.category === "tees" ? "T-Shirt" : "Baggy denim"}</p>
            <h1 className="display mt-3 text-5xl md:text-6xl">{product.name}</h1>
            <p className="mt-4 text-lg tabular-nums">${product.price}</p>
            <p className="mt-6 max-w-md text-sm text-muted-foreground">{product.description}</p>

            <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">Size</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`border px-4 py-2 text-[11px] uppercase tracking-[0.15em] transition-colors ${
                    size === s
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => add(product, size)}
              className="mt-8 w-full max-w-sm rounded-full bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Add to cart
            </button>

            <dl className="mt-12 divide-y divide-border border-y border-border">
              {[
                ["Fit", product.detail],
                ["Care", "Cold wash, inside out, line dry"],
                ["Shipping", "Free over $150 — 2-5 working days"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-8 py-4 text-sm">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
