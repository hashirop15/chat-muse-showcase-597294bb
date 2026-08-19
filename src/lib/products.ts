import ferrariFront from "@/assets/ferrari-front-card.jpg.asset.json";
import ferrariBack from "@/assets/ferrari-back-card.jpg.asset.json";
import acidBlueFront from "@/assets/acid-blue-front-card.jpg.asset.json";
import acidBlueBoth from "@/assets/acid-blue-back-card.jpg.asset.json";
import acidGrayFront from "@/assets/acid-gray-front-card.jpg.asset.json";
import acidGrayBack from "@/assets/acid-gray-back-card.jpg.asset.json";
import baggyFront from "@/assets/black-baggy-front-card.jpg.asset.json";
import baggyBack from "@/assets/black-baggy-back-card.jpg.asset.json";
import blueBaggyFront from "@/assets/blue-baggy-front-card.jpg.asset.json";
import blueBaggyBack from "@/assets/blue-baggy-back-card.jpg.asset.json";
import heroFerrari from "@/assets/hero-ferrari.jpg.asset.json";
import heroBlackBaggy from "@/assets/hero-black-baggy.jpg.asset.json";
import heroAcidBlue from "@/assets/hero-acid-blue.jpg.asset.json";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "tees" | "denim";
  image: string;
  hoverImage: string;
  tags: ("top" | "new")[];
  detail: string;
  description: string;
  sizes: string[];
};

export const products: Product[] = [
  {
    id: "ferrari-acid-wash-tee",
    name: "Formula 1 Ferrari Acid Wash Tee",
    price: 59,
    category: "tees",
    image: ferrariFront.url,
    hoverImage: ferrariBack.url,
    tags: ["top", "new"],
    detail: "Acid wash, drop shoulder",
    description:
      "Heavyweight acid-washed cotton with a drop shoulder cut. Front Scuderia print, full back graphic.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "acid-blue-oversized-tee",
    name: "Acid Blue Oversized Tee",
    price: 52,
    category: "tees",
    image: acidBlueFront.url,
    hoverImage: acidBlueBoth.url,
    tags: ["top"],
    detail: "Indigo acid wash, boxy fit",
    description:
      "Boxy 280 GSM cotton dyed in an indigo acid wash — no two pieces come out the same.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "acid-gray-oversized-tee",
    name: "Acid Gray Oversized Tee",
    price: 49,
    category: "tees",
    image: acidGrayFront.url,
    hoverImage: acidGrayBack.url,
    tags: ["new"],
    detail: "Washed charcoal, dropped shoulder",
    description:
      "Washed charcoal jersey with a mineral finish and reinforced ribbed collar.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "washed-black-baggy-jean",
    name: "Washed Black Baggy Jean",
    price: 128,
    category: "denim",
    image: baggyFront.url,
    hoverImage: baggyBack.url,
    tags: ["top", "new"],
    detail: "Wide leg, faded black denim",
    description:
      "Wide-leg baggy denim in faded black with whiskering at the hip and a deep rise.",
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: "blue-wide-leg-baggy-jean",
    name: "Blue Wide Leg Baggy Jean",
    price: 134,
    category: "denim",
    image: blueBaggyFront.url,
    hoverImage: blueBaggyBack.url,
    tags: ["top", "new"],
    detail: "Mid-blue wash, monogram weave",
    description:
      "Mid-blue washed denim with a tonal monogram weave, wide straight legs and a high rise. Whiskering at the hip, contrast stitch, and darker pocket facings on the back.",
    sizes: ["28", "30", "32", "34", "36"],
  },
];

export const slides = [
  {
    image: heroFerrari.url,
    eyebrow: "Top rated — 01",
    title: "Acid wash, race cut",
    copy: "The Ferrari drop-shoulder tee — heavyweight cotton, full back graphic.",
  },
  {
    image: heroBlackBaggy.url,
    eyebrow: "Top rated — 02",
    title: "Baggy, the way it should fall",
    copy: "Wide legs, deep rise, faded black denim built to break in with you.",
  },
  {
    image: heroAcidBlue.url,
    eyebrow: "Top rated — 03",
    title: "Indigo acid studies",
    copy: "Every tee washed in small runs — no two ever come out the same.",
  },
];
