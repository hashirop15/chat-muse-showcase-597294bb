import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="display text-5xl md:text-6xl">TERRA DENIM</p>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Heavyweight tees and baggy denim, cut in small runs from organic cotton.
              Made to be worn until it looks like yours.
            </p>
          </div>
          <div>
            <p className="eyebrow">Shop</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/shop" className="link-underline">
                  All products
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link-underline">
                  Tees
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link-underline">
                  Baggy jeans
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Studio</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Shipping &amp; returns</li>
              <li>Fabric care</li>
              <li>hello@terradenim.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Terra Denim</span>
          <span>Cut &amp; sewn in small batches</span>
        </div>
      </div>
    </footer>
  );
}
