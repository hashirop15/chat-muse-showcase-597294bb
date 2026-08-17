import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import j1 from "@/assets/j1.jpg";
import j2 from "@/assets/j2.jpg";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import editorial from "@/assets/editorial.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "tees" | "denim";
  image: string;
  tags: ("top" | "new")[];
  detail: string;
};

export const products: Product[] = [
  {
    id: "bone-heavyweight-tee",
    name: "Bone Heavyweight Tee",
    price: 48,
    category: "tees",
    image: t1,
    tags: ["top"],
    detail: "290 GSM boxy cotton",
  },
  {
    id: "washed-black-tee",
    name: "Washed Black Tee",
    price: 52,
    category: "tees",
    image: t2,
    tags: ["top", "new"],
    detail: "Garment dyed, dropped shoulder",
  },
  {
    id: "sun-wash-baggy",
    name: "Sun-Wash Baggy Jean",
    price: 128,
    category: "denim",
    image: j1,
    tags: ["top"],
    detail: "Wide leg, 14oz selvedge",
  },
  {
    id: "raw-indigo-baggy",
    name: "Raw Indigo Baggy Jean",
    price: 134,
    category: "denim",
    image: j2,
    tags: ["new"],
    detail: "Unwashed indigo, relaxed rise",
  },
  {
    id: "clay-boxy-tee",
    name: "Clay Boxy Tee",
    price: 48,
    category: "tees",
    image: hero3,
    tags: ["new"],
    detail: "Earth pigment dye",
  },
  {
    id: "field-tee",
    name: "Field Tee",
    price: 54,
    category: "tees",
    image: hero2,
    tags: ["top"],
    detail: "Organic jersey, arch print",
  },
  {
    id: "studio-baggy",
    name: "Studio Baggy Jean",
    price: 138,
    category: "denim",
    image: hero1,
    tags: [],
    detail: "Column fit, stone wash",
  },
  {
    id: "linen-room-tee",
    name: "Linen Room Tee",
    price: 46,
    category: "tees",
    image: editorial,
    tags: ["new"],
    detail: "Cotton-linen blend",
  },
];

export const slides = [
  {
    image: hero1,
    eyebrow: "Top rated — 01",
    title: "Heavyweight, honestly cut",
    copy: "The 290 GSM tee that holds its shape after every wash.",
  },
  {
    image: hero2,
    eyebrow: "Top rated — 02",
    title: "Baggy, the way it should fall",
    copy: "Wide legs, deep rise, denim woven to break in with you.",
  },
  {
    image: hero3,
    eyebrow: "Top rated — 03",
    title: "Earth pigment studies",
    copy: "Clay, bone and indigo — dyed in small runs, never repeated.",
  },
];
