import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/lib/products";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (product: Product, size?: string) => void;
  remove: (key: string) => void;
  setQty: (key: string, qty: number) => void;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "terra-cart";
const keyOf = (i: CartItem) => `${i.id}::${i.size}`;

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const value = useMemo<CartCtx>(() => {
    return {
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      total: items.reduce((n, i) => n + i.qty * i.price, 0),
      open,
      setOpen,
      add: (product, size) => {
        const s = size ?? product.sizes[0];
        setItems((prev) => {
          const k = `${product.id}::${s}`;
          const found = prev.find((i) => keyOf(i) === k);
          if (found)
            return prev.map((i) => (keyOf(i) === k ? { ...i, qty: i.qty + 1 } : i));
          return [
            ...prev,
            { id: product.id, name: product.name, price: product.price, image: product.image, size: s, qty: 1 },
          ];
        });
        setOpen(true);
      },
      remove: (k) => setItems((prev) => prev.filter((i) => keyOf(i) !== k)),
      setQty: (k, qty) =>
        setItems((prev) =>
          qty <= 0
            ? prev.filter((i) => keyOf(i) !== k)
            : prev.map((i) => (keyOf(i) === k ? { ...i, qty } : i)),
        ),
    };
  }, [items, open]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export const cartItemKey = keyOf;
