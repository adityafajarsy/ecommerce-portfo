import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg border-border">
        <div className="aspect-square overflow-hidden bg-[#FEF3E7]">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="p-3">
          <h3 className="font-semibold text-lg line-clamp-2 mb-2 group-hover:text-orange-400 transition-colors">
            {product.title}
          </h3>
          <p className="text-2xl font-bold text-orange-500">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-sm text-muted-foreground mt-1 capitalize">
            {product.category}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex gap-2 justify-center items-center">
          <Button 
            className="flex-1 h-[35px]"
            size="sm"
            variant={'orange'}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button 
          className='bg-white text-black hover:text-white border hover:bg-orange-500 transition-colors duration-150 ease-linear'
            size="icon"
          >
            <Heart className={`h-4 w-4'fill-current`} />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;