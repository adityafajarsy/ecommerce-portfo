import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { addToCart } from "../store/cartSlice";
import { toggleWishlist } from "../store/wishlistSlice";
import { toast, Toaster } from "sonner";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);
  const purchasedItems = useSelector((state) => state.cart.purchasedItems);

  const isWishlisted = wishlist.some((item) => item.id === product.id);
  const isInCart = cartItems.some((item) => item.id === product.id);
  
  // ✅ Cek apakah produk ada di cart dan ambil quantity-nya
  const cartItem = cartItems.find((item) => item.id === product.id);
  
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
    
    // ✅ Cek stock sebelum add to cart
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
    <div className="group overflow-hidden transition-all hover:shadow-lg border-border bg-white border rounded-2xl flex flex-col cursor-pointer">
      <Toaster />
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-[#FEF3E7] relative">
          {/* ✅ Badge untuk Low Stock / Out of Stock */}
          {(isLowStock || isOutOfStock) && (
            <div className={`absolute top-2 right-2 z-10 px-3 py-1 rounded-full text-xs font-bold ${
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
            className={`h-full w-full object-contain transition-transform group-hover:scale-105 p-2 sm:p-0 ${
              isOutOfStock ? 'opacity-50 grayscale' : ''
            }`}
          />
        </div>

        <div className="p-2 sm:p-3 bg-white">
          <h3 className="font-semibold text-sm sm:text-lg line-clamp-2 mb-1 sm:mb-2 group-hover:text-orange-400 transition-colors">
            {product.title}
          </h3>
          <p className="text-lg sm:text-2xl font-bold text-orange-500">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1 capitalize">
            {product.category}
          </p>
        </div>
      </Link>

      {/* Button */}
      <CardFooter className="py-6 gap-2 justify-center items-center hidden sm:flex bg-white">
        {/* Out of Stock */}
        {isOutOfStock && (
          <Button
            className="flex-1 h-[45px] bg-red-500 hover:bg-red-600 text-white cursor-not-allowed opacity-70"
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
            className="flex-1 h-[45px] bg-gray-200 hover:bg-gray-300 text-gray-700"
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
            className="flex-1 h-[45px] border-2 border-yellow-500 bg-white text-yellow-700 hover:bg-yellow-50"
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
            className="flex-1 h-[45px]"
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
          className={`size-10 border transition-all duration-75 ease-in-out p-5 active:scale-75 ${
            isWishlisted
              ? "bg-orange-500 text-white hover:bg-orange-600"
              : "bg-white text-black hover:text-white hover:bg-orange-500"
          }`}
        >
          <Heart className={`!h-4 !w-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </Button>
      </CardFooter>
    </div>
  );
};

export default ProductCard;