// Import semua gambar produk
import OrangeHoodie from "./assets/database/Orange Hoodie.png";
import TurquoiseSandals from "./assets/database/Turquoise Sandals.png";
import RoseGoldNecklace from "./assets/database/Rose Gold Necklace.png";
import OrangeSneakers from "./assets/database/Orange Sneakers.png";
import CreamLinenShirt from "./assets/database/Cream Linen Shirt.png";
import TurquoisePoloShirt from "./assets/database/Turquoise Polo Shirt.png";
import OrangeAmberEarrings from "./assets/database/OrangeAmber Earrings.png";
import BeigeSummerShorts from "./assets/database/Beige Summer Shorts.png";
import TurquoiseJacket from "./assets/database/Turquoise Jacket.png";
import SunglassesOrangeLens from "./assets/database/Sunglasses (BrownOrange Lens).png";
import OrangeWatch from "./assets/database/Orange Watch.png";
import LeatherBeltBrown from "./assets/database/Leather Belt (BrownBeige).png";
import OrangeTShirt from "./assets/database/Orange T-Shirt.png";
import TurquoiseBeadedBracelet from "./assets/database/Turquoise Beaded Bracelet.png";
import CreamBeigeHatPanama from "./assets/database/CreamBeige Hat.png";
import BeigeStrawHat from "./assets/database/Beige Straw Hat (summer style).png";
import CreamToteBag from "./assets/database/Cream Tote Bag (canvas  leather).png";
import OrangeWalletClutch from "./assets/database/Orange Wallet  Clutch.png";
import TurquoiseBackpack from "./assets/database/Turquoise Backpack.png";
import ScentedCandle from "./assets/database/Scented Candle (orange or beige jar).png";
import ThermosTurquoise from "./assets/database/Thermos  Water Bottle (turquoise).png";
import NotebookOrange from "./assets/database/Notebook  Journal (orange cover).png";
import CreamCushion from "./assets/database/Cream Cushion  Throw Pillow.png";
import SunglassesCase from "./assets/database/Sunglasses Case (orange or turquoise).png";
import TurquoiseYogaMat from "./assets/database/Turquoise Yoga Mat.png";
import VintageBoatNeckSweater from "./assets/database/VINTAGE Womens Boat Neck Jumper Sweater.png";
import CoralCorduroyShorts from "./assets/database/Coral Corduroy Shorts.png";
import BrownLeatherWallet from "./assets/database/Brown Leather Wallet.png";
import TurquoiseCoffeeMug from "./assets/database/Turquoise Coffee Mug.png";
import DaisymaeOrangeSandals from "./assets/database/Daisymae Orange Women's Footbed Sandals.png";

// Update DataBarang dengan variabel import
export const DataBarang = [
  {
    id: 1,
    title: "Orange Hoodie",
    price: 32.99,
    description: "Comfortable casual hoodie in bright orange, perfect for daily wear or layering.",
    category: "clothing",
    image: OrangeHoodie,
    rating: { rate: 4.6, count: 210 },
  },
  {
    id: 2,
    title: "Turquoise Sandals",
    price: 24.5,
    description: "Lightweight turquoise sandals with a shiny strap, stylish and comfy for summer.",
    category: "footwear",
    image: TurquoiseSandals,
    rating: { rate: 4.3, count: 132 },
  },
  {
    id: 3,
    title: "Rose Gold Necklace",
    price: 89.99,
    description: "Elegant rose gold necklace with adjustable chain, perfect for both casual and formal occasions.",
    category: "jewelry",
    image: RoseGoldNecklace,
    rating: { rate: 4.8, count: 154 },
  },
  {
    id: 4,
    title: "Orange Sneakers",
    price: 59.0,
    description: "Trendy orange sneakers with modern design, durable sole, and comfortable fit.",
    category: "footwear",
    image: OrangeSneakers,
    rating: { rate: 4.5, count: 276 },
  },
  {
    id: 5,
    title: "Cream Linen Shirt",
    price: 42.75,
    description: "Breathable cream-colored linen shirt, lightweight and perfect for warm weather.",
    category: "clothing",
    image: CreamLinenShirt,
    rating: { rate: 4.4, count: 167 },
  },
  {
    id: 6,
    title: "Turquoise Polo Shirt",
    price: 28.5,
    description: "Classic turquoise polo shirt with a clean fit, ideal for casual and semi-formal use.",
    category: "clothing",
    image: TurquoisePoloShirt,
    rating: { rate: 4.2, count: 120 },
  },
  {
    id: 7,
    title: "Orange - Amber Earrings",
    price: 34.99,
    description: "Stylish amber-orange earrings with unique design, lightweight and elegant.",
    category: "jewelry",
    image: OrangeAmberEarrings,
    rating: { rate: 4.6, count: 95 },
  },
  {
    id: 8,
    title: "Beige Summer Shorts",
    price: 35.0,
    description: "Casual beige shorts made for comfort and style during warm summer days.",
    category: "clothing",
    image: BeigeSummerShorts,
    rating: { rate: 4.3, count: 140 },
  },
  {
    id: 9,
    title: "Turquoise Jacket",
    price: 64.9,
    description: "Stylish turquoise jacket with a modern cut, perfect for layering and cool weather.",
    category: "clothing",
    image: TurquoiseJacket,
    rating: { rate: 4.5, count: 178 },
  },
  {
    id: 10,
    title: "Sunglasses with Orange Lenses",
    price: 21.99,
    description: "Trendy aviator sunglasses with orange-brown tinted lenses for a stylish look.",
    category: "accessories",
    image: SunglassesOrangeLens,
    rating: { rate: 4.1, count: 112 },
  },
  {
    id: 11,
    title: "Orange Watch",
    price: 120.0,
    description: "Minimalist sporty watch with an orange dial, water resistant and durable.",
    category: "accessories",
    image: OrangeWatch,
    rating: { rate: 4.7, count: 89 },
  },
  {
    id: 12,
    title: "Leather Belt (Brown/Beige)",
    price: 27.99,
    description: "Classic brown leather belt with beige tone, durable and versatile for daily outfits.",
    category: "accessories",
    image: LeatherBeltBrown,
    rating: { rate: 4.4, count: 143 },
  },
  {
    id: 13,
    title: "Orange T-Shirt",
    price: 22.0,
    description: "Bright orange t-shirt made of soft cotton, comfortable for everyday wear.",
    category: "clothing",
    image: OrangeTShirt,
    rating: { rate: 4.2, count: 199 },
  },
  {
    id: 14,
    title: "Turquoise Beaded Bracelet",
    price: 18.5,
    description: "Handmade turquoise beaded bracelet, adds a touch of uniqueness to your style.",
    category: "jewelry",
    image: TurquoiseBeadedBracelet,
    rating: { rate: 4.3, count: 77 },
  },
  {
    id: 15,
    title: "Cream - Beige Hat (Panama Hat / Fedora)",
    price: 36.99,
    description: "Classic cream/beige Panama-style hat, lightweight and perfect for sunny days.",
    category: "accessories",
    image: CreamBeigeHatPanama,
    rating: { rate: 4.5, count: 102 },
  },
  {
    id: 16,
    title: "Cream Tote Bag (canvas / leather)",
    price: 39.99,
    description: "Stylish cream tote bag made of durable canvas with leather accents, perfect for everyday use.",
    category: "accessories",
    image: CreamToteBag,
    rating: { rate: 4.3, count: 87 },
  },
  {
    id: 17,
    title: "Orange Wallet / Clutch",
    price: 19.95,
    description: "Compact orange wallet or clutch with modern design, ideal for carrying essentials.",
    category: "accessories",
    image: OrangeWalletClutch,
    rating: { rate: 4.0, count: 54 },
  },
  {
    id: 18,
    title: "Turquoise Backpack",
    price: 49.5,
    description: "Spacious turquoise backpack with sturdy zippers, suitable for travel, work, or school.",
    category: "bags",
    image: TurquoiseBackpack,
    rating: { rate: 4.5, count: 142 },
  },
  {
    id: 19,
    title: "Scented Candle (orange or beige jar)",
    price: 12.75,
    description: "Relaxing orange vanilla cream scented candle in a decorative jar.",
    category: "home decor",
    image: ScentedCandle,
    rating: { rate: 4.7, count: 201 },
  },
  {
    id: 20,
    title: "Thermos / Water Bottle (turquoise)",
    price: 24.99,
    description: "Insulated turquoise thermos bottle, keeps beverages hot or cold for hours.",
    category: "kitchen",
    image: ThermosTurquoise,
    rating: { rate: 4.4, count: 92 },
  },
  {
    id: 21,
    title: "Notebook / Journal (orange cover)",
    price: 9.99,
    description: "Simple yet elegant orange cover notebook, perfect for journaling or note-taking.",
    category: "stationery",
    image: NotebookOrange,
    rating: { rate: 4.2, count: 63 },
  },
  {
    id: 22,
    title: "Cream Cushion / Throw Pillow",
    price: 14.5,
    description: "Soft cream cushion to elevate your living room or bedroom interior.",
    category: "home decor",
    image: CreamCushion,
    rating: { rate: 4.6, count: 78 },
  },
  {
    id: 23,
    title: "Beige Straw Hat (summer style)",
    price: 17.5,
    description: "Trendy beige straw hat, perfect for summer outings and beachwear.",
    category: "accessories",
    image: BeigeStrawHat,
    rating: { rate: 4.3, count: 34 },
  },
  {
    id: 24,
    title: "Sunglasses Case (orange or turquoise)",
    price: 8.99,
    description: "Durable sunglasses case with stylish orange or turquoise finish.",
    category: "accessories",
    image: SunglassesCase,
    rating: { rate: 4.0, count: 51 },
  },
  {
    id: 25,
    title: "Turquoise Yoga Mat",
    price: 29.99,
    description: "Eco-friendly turquoise yoga mat with anti-slip surface for better grip.",
    category: "sports",
    image: TurquoiseYogaMat,
    rating: { rate: 4.8, count: 109 },
  },
  {
    id: 26,
    title: "VINTAGE Womens Boat Neck Jumper Sweater",
    price: 35.99,
    description: "Vintage-style women's boat neck jumper sweater, comfortable and elegant.",
    category: "women's clothing",
    image: VintageBoatNeckSweater,
    rating: { rate: 4.4, count: 88 },
  },
  {
    id: 27,
    title: "Coral Corduroy Shorts",
    price: 21.75,
    description: "Trendy coral corduroy shorts, lightweight and perfect for casual wear.",
    category: "women's clothing",
    image: CoralCorduroyShorts,
    rating: { rate: 4.1, count: 47 },
  },
  {
    id: 28,
    title: "Brown Leather Wallet",
    price: 27.5,
    description: "Classic brown leather wallet with multiple card slots and a sleek design.",
    category: "accessories",
    image: BrownLeatherWallet,
    rating: { rate: 4.5, count: 120 },
  },
  {
    id: 29,
    title: "Turquoise Coffee Mug",
    price: 11.99,
    description: "Charming turquoise ceramic coffee mug, durable and microwave-safe.",
    category: "kitchen",
    image: TurquoiseCoffeeMug,
    rating: { rate: 4.6, count: 65 },
  },
  {
    id: 30,
    title: "Daisymae Orange Women's Footbed Sandals",
    price: 32.95,
    description: "Comfortable Daisymae orange footbed sandals for women, stylish and versatile.",
    category: "women's shoes",
    image: DaisymaeOrangeSandals,
    rating: { rate: 4.7, count: 73 },
  },
];