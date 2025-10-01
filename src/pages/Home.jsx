import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import heroBanner from "../assets/hero-banner.jpg";
import axios from "axios";
import { DataBarang } from "@/data";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=4"
        );
        const data = response.data;
        console.log(data);
        setFeaturedProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)]">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate__animated animate__fadeInUp">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Style That
                <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Satisfies
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover the latest trends in fashion, accessories, and jewelry.
                Fresh styles delivered with a side of amazing deals!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-500 group"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/products?category=jewelery">
                  <Button size="lg" variant="outline">
                    View Jewelry
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate__animated animate__fadeInUp animate__slow">
              <img
                src={heroBanner}
                alt="Fashion Collection"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-orange-400 text-primary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold">
            🎉 Summer Sale! Get up to 50% off on selected items 🎉
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-xl text-muted-foreground">
            Check out our handpicked selection of trending items
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted rounded-lg h-80"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DataBarang.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link to="/products">
            <Button size="lg" variant="outline">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#FEF3E7] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/products?category=men's clothing">
              <div className="bg-card p-8 rounded-2xl text-center hover:shadow-[var(--shadow-hover)] transition-all group cursor-pointer border border-border">
                <div className="text-4xl mb-4">👔</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                  Men's Clothing
                </h3>
                <p className="text-muted-foreground">Style for him</p>
              </div>
            </Link>
            <Link to="/products?category=women's clothing">
              <div className="bg-card p-8 rounded-2xl text-center hover:shadow-[var(--shadow-hover)] transition-all group cursor-pointer border border-border">
                <div className="text-4xl mb-4">👗</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                  Women's Clothing
                </h3>
                <p className="text-muted-foreground">Fashion for her</p>
              </div>
            </Link>
            <Link to="/products?category=jewelery">
              <div className="bg-card p-8 rounded-2xl text-center hover:shadow-[var(--shadow-hover)] transition-all group cursor-pointer border border-border">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                  Jewelry
                </h3>
                <p className="text-muted-foreground">Shine bright</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
