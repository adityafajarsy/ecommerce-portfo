import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { DataBarang } from "../data";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchParams] = useSearchParams();

  const categories = [
    { id: "all", name: "All Products" },
    { id: "clothing", name: "Clothing" },
    { id: "footwear", name: "Footwear" },
    { id: "jewelry", name: "Jewelry" },
    { id: "accessories", name: "Accessories" },
    { id: "bags", name: "Bags" },
    { id: "home decor", name: "Home Decor" },
    { id: "kitchen", name: "Kitchen" },
    { id: "stationery", name: "Stationery" },
    { id: "sports", name: "Sports" },
    { id: "women's clothing", name: "Women's Clothing" },
    { id: "women's shoes", name: "Women's Shoes" },
  ];

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);
  
  useEffect(() => {
    if (selectedCategory === "all") {
      setProducts(DataBarang);
    } else {
      const filtered = DataBarang.filter(
        (product) => product.category === selectedCategory
      );
      setProducts(filtered);
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground">
            Browse our complete collection
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "orange" : "outline"}
              size="lg"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;