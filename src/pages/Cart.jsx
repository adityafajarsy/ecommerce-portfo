import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NoTokenLayout } from "@/components/ProtectedRoutes";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  clearCart,
  checkoutCart,
  increaseQuantity,
} from "../store/cartSlice";
import { toast, Toaster } from "sonner";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const purchasedItems = useSelector((state) => state.cart.purchasedItems);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item.id));
    toast.success(`Success Remove ${item.quantity} ${item.title} from Cart`);
  };

  const handleClearAll = () => {
    dispatch(clearCart());
    toast.success('All items removed from Cart');
  };

  // ✅ Handle Checkout - validasi dan proses checkout
  const handleCheckout = () => {
    // Validasi: cek apakah ada item yang quantity-nya melebihi available stock
    const outOfStockItems = cartItems.filter(item => {
      const totalPurchased = purchasedItems[item.id] || 0;
      const availableStock = item.stock - totalPurchased;
      return item.quantity > availableStock;
    });
    
    if (outOfStockItems.length > 0) {
      toast.error('Some items are out of stock. Please update your cart.');
      return;
    }

    // Dispatch checkout action
    dispatch(checkoutCart(cartItems));
    
    toast.success('Checkout successful! Thank you for your purchase.');
  };

  return (
    <NoTokenLayout>
      <Toaster/>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Shopping Cart</h1>

            {/* Clear Cart Button */}
            {cartItems.length > 0 && (
              <button
                className="flex gap-2 items-center cursor-pointer border px-3 py-2 rounded-2xl hover:bg-orange-500 hover:text-white transition-colors duration-200 ease-out"
                onClick={handleClearAll}
              >
                <Trash2 className="h-5 w-5" />
                <span className="font-semibold hidden sm:inline">
                  Clear All
                </span>
              </button>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-lg text-muted-foreground">Cart is empty.</p>
              ) : (
                cartItems.map((item) => {
                  const totalPurchased = purchasedItems[item.id] || 0;
                  const availableStock = item.stock - totalPurchased;
                  const remainingStock = availableStock - item.quantity;

                  return (
                    <Card key={item.id}>
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                          {/* Image */}
                          <div className="w-full sm:w-24 h-32 sm:h-24 rounded-lg flex-shrink-0 bg-[#FEF3E7]">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-contain p-2"
                            />
                          </div>

                          {/* Info & Actions Container */}
                          <div className="flex-1 flex flex-col sm:flex-row gap-4 sm:gap-6">
                            {/* Info */}
                            <div className="flex-1 min-w-0">
                              <Link
                                to={`/product/${item.id}`}
                                className="font-semibold text-lg hover:text-primary transition-colors line-clamp-2"
                              >
                                {item.title}
                              </Link>
                              <p className="text-muted-foreground capitalize mt-1">
                                {item.category}
                              </p>
                              <p className="text-2xl font-bold text-primary mt-2">
                                ${item.price.toFixed(2)}
                              </p>
                              {/* ✅ Display remaining stock dengan warning */}
                              <p className={`text-sm mt-1 font-medium ${
                                remainingStock <= 5 
                                  ? 'text-red-500' 
                                  : 'text-muted-foreground'
                              }`}>
                                Stock: {remainingStock} left
                                {remainingStock <= 5 && remainingStock > 0 && (
                                  <span className="ml-2 text-xs">(Low Stock!)</span>
                                )}
                                {remainingStock === 0 && (
                                  <span className="ml-2 text-xs">(Out of Stock!)</span>
                                )}
                              </p>
                            </div>

                            {/* Actions */}
                            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-between">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleRemoveItem(item)}
                              >
                                <Trash2 className="h-5 w-5 text-destructive" />
                              </Button>

                              <div className="flex items-center gap-2 border rounded-lg">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() =>
                                    dispatch(decreaseQuantity(item.id))
                                  }
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-12 text-center font-semibold">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => dispatch(increaseQuantity(item.id))}
                                  disabled={item.quantity >= availableStock}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              )}
            </div>

            {/* Order Summary */}
            {cartItems.length > 0 && (
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6 space-y-6">
                    <h2 className="text-2xl font-bold">Order Summary</h2>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-semibold">
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="font-semibold text-primary">FREE</span>
                      </div>

                      <div className="border-t border-border pt-3">
                        <div className="flex justify-between">
                          <span className="text-lg font-semibold">Total</span>
                          <span className="text-lg font-bold text-primary">
                            ${subtotal.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Button 
                      size="lg" 
                      className="w-full" 
                      variant="orange"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </Button>

                    <Link to="/products">
                      <Button variant="outline" size="lg" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </NoTokenLayout>
  );
};

export default Cart;
