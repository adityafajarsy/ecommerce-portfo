import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DataBarang } from "../data";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = DataBarang.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <p className="text-center py-12">Product not found</p>;

  const handleAddToCart = () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login");
      return;
    }
  };

  return (
    <div className="min-h-screen py-12 pb-28 sm:pb-12">
      <div className="container mx-auto px-4">
        <Link to="/products">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-[#FEF3E7] rounded-2xl p-12 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[500px] object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 capitalize bg-orange-500">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              <div className="flex items-center gap-4 mb-6">
                <p className="text-4xl font-bold text-orange-500">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating.rate)
                            ? "fill-orange-500 text-orange-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    ({product.rating.count} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-b border-border py-6">
              <h2 className="font-semibold text-lg mb-3">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Desktop Buttons - Hidden di mobile */}
            <div className="hidden sm:flex gap-4">
              <Button
                size="lg"
                className="flex-1"
                variant={"orange"}
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                className="relative bg-white text-black hover:text-white hover:bg-orange-500 transition-colors duration-150 ease-linear border"
                size="lg"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <div className="bg-[#FEF3E7] rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🚚</div>
                <div>
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-sm text-muted-foreground">
                    On orders over $50
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-2xl">↩️</div>
                <div>
                  <p className="font-semibold">Easy Returns</p>
                  <p className="text-sm text-muted-foreground">
                    30-day return policy
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-2xl">🔒</div>
                <div>
                  <p className="font-semibold">Secure Payment</p>
                  <p className="text-sm text-muted-foreground">
                    Your data is protected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Buttons - Hanya muncul di mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 flex gap-3 z-50 sm:hidden">
        <Button className="flex-1 h-12" variant="orange">
          <ShoppingCart className="h-5 w-5 mr-2" />
          Add to Cart
        </Button>
        <Button
          className="bg-white text-black hover:text-white border hover:bg-orange-500 transition-colors duration-150 ease-linear h-12 w-12"
          size="icon"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
