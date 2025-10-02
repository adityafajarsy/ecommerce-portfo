import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NoTokenLayout } from "@/components/ProtectedRoutes";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
  clearCart,
} from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <NoTokenLayout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-lg text-muted-foreground">Cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        {/* Image */}
                        <div className="w-24 h-24 bg-secondary rounded-lg flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>

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
                          <p className="text-sm text-muted-foreground">
                            Stock: {item.stock - item.quantity} left
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col items-end justify-between">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => dispatch(removeFromCart(item.id))}
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
                              onClick={() => dispatch(addToCart(item))}
                              disabled={item.quantity >= item.stock}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Clear Cart */}
            {cartItems.length > 0 && (
              <div
                className="absolute -mt-19 sm:-mt-14 ml-[280px] sm:ml-[860px]"
                onClick={() => dispatch(clearCart())}
              >
                <button className="flex gap-2 items-center cursor-pointer sm:border border-red-500 p-2 rounded-2xl hover:bg-red-500 hover:text-white transition-colors duration-200 ease-out">
                  <h1 className="font-semibold sm:flex hidden">Clear All</h1>
                  <Trash2 className="!h-7 !w-7 " />
                  <h1 className="font-semibold text-xs sm:hidden">Clear All</h1>
                </button>
              </div>
            )}

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
