import ferrariFront from "@/assets/formula-1-ferrari-acid-wash-drop-shoulder-t-shirt.png.asset.json";
import ferrariBack from "@/assets/formula-1-ferrari-acid-wash-drop-shoulder-t-shirt---copy.png.asset.json";
import acidBlueFront from "@/assets/acid-blue-shirt-front.png.asset.json";
import acidBlueBoth from "@/assets/chatgpt-image-aug-16-2026-04-09-15-am.png.asset.json";
import acidGrayFront from "@/assets/acid-gray-t-shirt-front.png.asset.json";
import acidGrayBack from "@/assets/acid-gray-t-shirt-back-side.png.asset.json";
import baggyFront from "@/assets/gray-baggy.png.asset.json";
import baggyBack from "@/assets/gray-jean-back-side.jpg.asset.json";

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
];

export const slides = [
  {
    image: ferrariBack.url,
    eyebrow: "Top rated — 01",
    title: "Acid wash, race cut",
    copy: "The Ferrari drop-shoulder tee — heavyweight cotton, full back graphic.",
  },
  {
    image: baggyFront.url,
    eyebrow: "Top rated — 02",
    title: "Baggy, the way it should fall",
    copy: "Wide legs, deep rise, faded black denim built to break in with you.",
  },
  {
    image: acidBlueFront.url,
    eyebrow: "Top rated — 03",
    title: "Indigo acid studies",
    copy: "Every tee washed in small runs — no two ever come out the same.",
  },
];
