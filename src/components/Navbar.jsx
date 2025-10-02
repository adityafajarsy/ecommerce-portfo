import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Heart, ShoppingCart, User } from "lucide-react";
import logo from "@/assets/hamburger-logo.png";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  };

  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="hamBurger Logo"
              className="h-12 w-12 transition-transform group-hover:scale-110"
            />
            <p className="text-2xl font-bold">
              ham
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Burger
              </span>
            </p>
          </Link>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-foreground hover:text-primary transition-colors"
            >
              Shop
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-1 sm:gap-3">
            {/* Wishlist */}
            <Link to="/wishlist">
              <Button
                variant="ghost"
                size="icon"
                className="relative bg-white text-black hover:text-white hover:bg-orange-500 transition-colors duration-150 ease-linear"
              >
                <Heart className="!h-5 !w-5" />
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 flex items-center justify-center p-0 text-[10px] font-bold bg-orange-500 text-white shadow-md z-10">
                    {wishlistCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link to="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative bg-white text-black hover:text-white hover:bg-orange-500 transition-colors duration-150 ease-linear"
              >
                <ShoppingCart className="!h-5 !w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1.5 -right-1.5 h-5 w-5 flex items-center justify-center p-0 text-[10px] font-bold bg-orange-500 text-white shadow-md">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Auth */}
            {localStorage.access_token ? (
              <Link
                to="/"
                onClick={handleLogout}
                className="px-2 sm:px-5 text-xs sm:text-base py-2 rounded-lg text-white font-semibold 
             bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 
             hover:from-orange-600 hover:via-orange-500 hover:to-yellow-500 
             shadow-md transition-colors ease-linear duration-300 cursor-pointer"
              >
                Logout
              </Link>
            ) : (
              <Link to="/login">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-white text-black hover:text-white hover:bg-orange-500 transition-colors duration-150 ease-linear"
                >
                  <User className="!h-5 !w-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
