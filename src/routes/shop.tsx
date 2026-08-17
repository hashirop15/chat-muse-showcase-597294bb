import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { CartDrawer } from "@/components/site/CartDrawer";
import { products } from "@/lib/products";

const filters = [
  { id: "all", label: "All" },
  { id: "tees", label: "T-Shirts" },
  { id: "denim", label: "Baggy jeans" },
  { id: "top", label: "Top rated" },
  { id: "new", label: "New" },
] as const;

type FilterId = (typeof filters)[number]["id"];

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): { filter: FilterId } => {
    const f = String(search["filter"] ?? "all") as FilterId;
    return { filter: filters.some((x) => x.id === f) ? f : "all" };
  },
  head: () => ({
    meta: [
      { title: "Shop Acid Wash Tees & Baggy Jeans — Terra Denim" },
      {
        name: "description",
        content:
          "Shop acid wash oversized t-shirts and wide-leg baggy jeans. Filter by t-shirts, denim, top rated and new arrivals.",
      },
      { property: "og:title", content: "Shop Acid Wash Tees & Baggy Jeans — Terra Denim" },
      {
        property: "og:description",
        content: "Acid wash oversized t-shirts and wide-leg baggy jeans, in small runs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { filter } = Route.useSearch();
  const navigate = useNavigate({ from: "/shop" });

  const list = useMemo(() => {
    if (filter === "all") return products;
    if (filter === "tees" || filter === "denim")
      return products.filter((p) => p.category === filter);
    return products.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <div className="min-h-screen">
      <Nav />
      <CartDrawer />
      <main className="mx-auto max-w-[1400px] px-6 pb-24 pt-36 md:px-10 md:pt-44">
        <p className="eyebrow">Shop</p>
        <h1 className="display mt-3 text-6xl md:text-8xl">Everything in the run</h1>

        <div className="mt-12 flex flex-wrap gap-2 border-b border-border pb-6">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => navigate({ search: { filter: f.id } })}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                filter === f.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:bg-secondary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">{list.length} pieces</p>

        <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
