import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes[0] ?? "OS");

  return (
    <article className="group">
      <Link
        to="/product/$id"
        params={{ id: product.id }}
        className="relative block overflow-hidden bg-secondary"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1000}
          height={1300}
          className="aspect-[4/5] w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src={product.hoverImage}
          alt={`${product.name} — alternate view`}
          loading="lazy"
          aria-hidden="true"
          className="absolute inset-0 aspect-[4/5] h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {product.tags.includes("new") && (
          <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
            New
          </span>
        )}
      </Link>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm">
            <Link to="/product/$id" params={{ id: product.id }} className="link-underline">
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">{product.detail}</p>
        </div>
        <p className="text-sm tabular-nums">${product.price}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {product.sizes.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSize(s)}
            className={`border px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] transition-colors ${
              size === s ? "border-primary bg-primary text-primary-foreground" : "border-border"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => add(product, size)}
        className="mt-3 w-full rounded-full border border-primary px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Add to cart
      </button>
    </article>
  );
}
