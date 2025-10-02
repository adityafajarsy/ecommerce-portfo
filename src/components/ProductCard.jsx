import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { addToCart } from "../store/cartSlice";
import { toggleWishlist } from "../store/wishlistSlice";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ambil state wishlist buat ngecek apakah produk ini udah di-wishlist
  const wishlist = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login");
      return;
    }
    dispatch(addToCart(product));
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
    <Card className="group overflow-hidden transition-all hover:shadow-lg border-border">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-[#FEF3E7]">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain transition-transform group-hover:scale-105 p-2 sm:p-4"
          />
        </div>

        <CardContent className="p-2 sm:p-3">
          <h3 className="font-semibold text-sm sm:text-lg line-clamp-2 mb-1 sm:mb-2 group-hover:text-orange-400 transition-colors">
            {product.title}
          </h3>
          <p className="text-lg sm:text-2xl font-bold text-orange-500">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1 capitalize">
            {product.category}
          </p>
        </CardContent>
      </Link>

      {/* Button - Hidden di mobile, show di sm ke atas */}
      <CardFooter className="p-4 pt-0 gap-2 justify-center items-center hidden sm:flex">
        <Button
          className="flex-1 h-[35px]"
          size="sm"
          variant={"orange"}
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
        <Button
          onClick={handleToggleWishlist}
          className={`size-9 border transition-colors duration-150 ease-linear ${
            isWishlisted
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-white text-black hover:text-white hover:bg-orange-500"
          }`}
          size="icon"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
