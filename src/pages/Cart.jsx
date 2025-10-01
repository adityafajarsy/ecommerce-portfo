import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NoTokenLayout from "@/components/NoTokenLayout";

const Cart = () => {
  return (
    <NoTokenLayout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-secondary rounded-lg flex-shrink-0">
                      <img
                        src=""
                        alt=""
                        className="w-full h-full object-contain p-2"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/`}
                        className="font-semibold text-lg hover:text-primary transition-colors line-clamp-2"
                      >
                        Fjalraven
                      </Link>
                      <p className="text-muted-foreground capitalize mt-1">
                        Mens
                      </p>
                      <p className="text-2xl font-bold text-primary mt-2">
                        $12
                      </p>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-5 w-5 text-destructive" />
                      </Button>

                      <div className="flex items-center gap-2 border rounded-lg">
                        <Button variant="ghost" size="icon">
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-semibold">
                          2
                        </span>
                        <Button variant="ghost" size="icon">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold">Order Summary</h2>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-semibold text-primary">FREE</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between">
                        <span className="text-lg font-semibold">Total</span>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="w-full" variant="orange">
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
          </div>
        </div>
      </div>
    </NoTokenLayout>
  );
};

export default Cart;
