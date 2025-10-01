import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Heart, ShoppingCart, User } from 'lucide-react';
import logo from '@/assets/hamburger-logo.png';

const Navbar = () => {

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="hamBurger Logo" 
              className="h-12 w-12 transition-transform group-hover:scale-110"
            />
            <p className="text-2xl font-bold">
              ham<span className='bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent'>Burger</span>
            </p>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              Shop
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative bg-white text-black hover:text-white  hover:bg-orange-500 transition-colors duration-150 ease-linear">
                <Heart className="!h-5 !w-5" />
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative bg-white text-black hover:text-white  hover:bg-orange-500 transition-colors duration-150 ease-linear">
                <ShoppingCart className="!h-5 !w-5" />
              </Button>
            </Link>

            <Link to="/login">
              <Button variant="ghost" size="icon" className='bg-white text-black hover:text-white  hover:bg-orange-500 transition-colors duration-150 ease-linear'>
                <User className="!h-5 !w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;