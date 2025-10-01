import { NoTokenLayout } from "@/components/ProtectedRoutes";


const Wishlist = () => {
  // if (wishlist.length === 0) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-center py-20">
  //         <Heart className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
  //         <h2 className="text-3xl font-bold mb-4">Your wishlist is empty</h2>
  //         <p className="text-xl text-muted-foreground mb-8">
  //           Save your favorite items for later!
  //         </p>
  //         <Link to="/products">
  //           <Button size="lg">Discover Products</Button>
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <NoTokenLayout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">My Wishlist</h1>
            {/* <p className="text-xl text-muted-foreground">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
          </p> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))} */}
          </div>
        </div>
      </div>
    </NoTokenLayout>
  );
};

export default Wishlist;
