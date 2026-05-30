import type { Product } from "../types";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-8">
      {products.map(
        (product) =>
          product.stock > 0 && (
            <ProductCard product={product} key={product._id} />
          ),
      )}
    </div>
  );
};

export default ProductList;
