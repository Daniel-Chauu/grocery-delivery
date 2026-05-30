import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { dummyProducts } from "../../assets/assets";
import type { Product } from "../../types";
import ProductCard from "../ProductCard";

const PopularProducts = () => {
  const [products, setProducts] = useState<Product[]>(
    dummyProducts.slice(0, 10),
  );

  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Popular Products</h2>

            <p className="text-sm text-app-text-light mt-1">
              Top-rated products this season
            </p>
          </div>

          <a
            href="/products"
            className="text-sm font-semibold text-app-orange hover:text-app-orange-dark flex items-center gap-1 transition-colors"
          >
            View All
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-8">
          {/* Product Card */}
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
