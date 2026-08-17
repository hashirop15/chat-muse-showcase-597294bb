import { Link } from "@tanstack/react-router";
import { cartItemKey, useCart } from "@/lib/cart";

export function CartDrawer() {
  const { items, open, setOpen, total, remove, setQty } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        aria-label="Close cart"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-foreground/40 backdrop-blur-[2px]"
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <p className="eyebrow">Your cart</p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-xs uppercase tracking-[0.2em]"
          >
            Close
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
            <p className="display text-3xl">Nothing in here yet</p>
            <Link
              to="/shop"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary px-6 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground"
            >
              Shop the run
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {items.map((i) => {
                const k = cartItemKey(i);
                return (
                  <div key={k} className="flex gap-4 py-5">
                    <img
                      src={i.image}
                      alt={i.name}
                      className="h-28 w-24 shrink-0 bg-black object-contain"
                    />
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-3">
                        <p className="text-sm">{i.name}</p>
                        <p className="text-sm tabular-nums">${i.price * i.qty}</p>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">Size {i.size}</p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-border">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => setQty(k, i.qty - 1)}
                            className="px-3 py-1 text-sm"
                          >
                            −
                          </button>
                          <span className="px-3 text-sm tabular-nums">{i.qty}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => setQty(k, i.qty + 1)}
                            className="px-3 py-1 text-sm"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(k)}
                          className="link-underline text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-border px-6 py-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="tabular-nums">${total}</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Shipping calculated at checkout. Free over $150.
              </p>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-primary px-6 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
