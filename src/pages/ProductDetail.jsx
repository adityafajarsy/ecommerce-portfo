import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DataBarang } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/store/wishlistSlice";
import { addToCart } from "@/store/cartSlice";
import { toast, Toaster } from "sonner";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wishlist = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);
  const purchasedItems = useSelector((state) => state.cart.purchasedItems);

  useEffect(() => {
    const foundProduct = DataBarang.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return null;

  const isWishlisted = wishlist.some((item) => item.id === product.id);
  const isInCart = cartItems.some((item) => item.id === product.id);
  
  // ✅ Hitung available stock
  const totalPurchased = purchasedItems[product.id] || 0;
  const availableStock = product.stock - totalPurchased;
  
  // ✅ Determine stock status
  const isOutOfStock = availableStock === 0;
  const isLowStock = availableStock > 0 && availableStock <= 5;

  const handleAddToCart = () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login");
      return;
    }
    
    if (isOutOfStock) {
      toast.error("Stok tidak mencukupi!");
      return;
    }
    
    if (!isInCart) {
      dispatch(addToCart(product));
      toast.success(`Success Added ${product.title} to Cart`);
    }
  };

  const handleToggleWishlist = () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login");
      return;
    }
    dispatch(toggleWishlist(product));
  };

  return (
    <div className="min-h-screen py-12 pb-28 sm:pb-12">
      <Toaster/>
      <div className="container mx-auto px-4">
        <Link to="/products">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-[#FEF3E7] rounded-2xl p-12 flex items-center justify-center relative">
            {/* Badge Stock Status */}
            {(isLowStock || isOutOfStock) && (
              <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold z-10 ${
                isOutOfStock 
                  ? 'bg-red-500 text-white' 
                  : 'bg-yellow-500 text-black'
              }`}>
                {isOutOfStock ? 'SOLD OUT' : `${availableStock} LEFT`}
              </div>
            )}
            <img
              src={product.image}
              alt={product.title}
              className={`max-h-[500px] object-contain ${
                isOutOfStock ? 'opacity-50 grayscale' : ''
              }`}
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
              {/* Out of Stock */}
              {isOutOfStock && (
                <Button
                  className="flex-1 h-[40px] bg-red-500 hover:bg-red-600 text-white cursor-not-allowed opacity-70"
                  size="sm"
                  disabled
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Out of Stock
                </Button>
              )}

              {/* Added to Cart */}
              {!isOutOfStock && isInCart && (
                <Button
                  className="flex-1 h-[40px] bg-gray-200 hover:bg-gray-300 text-gray-700"
                  size="sm"
                  disabled
                >
                  <ShoppingCart className="h-4 w-4 mr-2 fill-current" />
                  Added to Cart
                </Button>
              )}

              {/* Low Stock */}
              {!isOutOfStock && !isInCart && isLowStock && (
                <Button
                  className="flex-1 h-[40px] border-2 border-yellow-500 bg-white text-yellow-700 hover:bg-yellow-50"
                  size="sm"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Low Stock ({availableStock})
                </Button>
              )}

              {/* Normal Add to Cart */}
              {!isOutOfStock && !isInCart && !isLowStock && (
                <Button
                  className="flex-1 h-[40px]"
                  size="sm"
                  variant="orange"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              )}

              <Button
                onClick={handleToggleWishlist}
                className={`size-11 border transition-colors duration-150 ease-linear p-5 active:scale-90 ${
                  isWishlisted
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-white text-black hover:text-white hover:bg-orange-200"
                }`}
              >
                <Heart className={`!h-7 !w-7 ${isWishlisted ? 'fill-current' : ''}`} />
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
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 flex items-center justify-center gap-3 z-50 sm:hidden">
        {/* Out of Stock - Mobile */}
        {isOutOfStock && (
          <Button
            className="flex-1 h-[40px] bg-red-500 hover:bg-red-600 text-white cursor-not-allowed opacity-70"
            size="sm"
            disabled
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Out of Stock
          </Button>
        )}

        {/* Added to Cart - Mobile */}
        {!isOutOfStock && isInCart && (
          <Button
            className="flex-1 h-[40px] bg-gray-200 hover:bg-gray-300 text-gray-700"
            size="sm"
            disabled
          >
            <ShoppingCart className="h-4 w-4 mr-2 fill-current" />
            Added to Cart
          </Button>
        )}

        {/* Low Stock - Mobile */}
        {!isOutOfStock && !isInCart && isLowStock && (
          <Button
            className="flex-1 h-[40px] border-2 border-yellow-500 bg-white text-yellow-700 hover:bg-yellow-50"
            size="sm"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Low Stock ({availableStock})
          </Button>
        )}

        {/* Normal Add to Cart - Mobile */}
        {!isOutOfStock && !isInCart && !isLowStock && (
          <Button
            className="flex-1 h-[40px]"
            size="sm"
            variant="orange"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        )}

        <Button
          onClick={handleToggleWishlist}
          className={`size-12 border transition-colors duration-150 ease-linear p-5 active:scale-90 ${
            isWishlisted
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-white text-black hover:text-white hover:bg-orange-500"
          }`}
        >
          <Heart className={`!h-7 !w-7 ${isWishlisted ? 'fill-current' : ''}`} />
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
