import {
  ArrowLeft,
  ArrowRightIcon,
  Check,
  HouseIcon,
  LeafIcon,
  Minus,
  Plus,
  ShoppingCart,
  ShoppingCartIcon,
  StarIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import Loading from "../components/Loading";
import { useCart } from "../contexts/CartContext";
import type { Product } from "../types";
import DummyReviewsSection from "../assets/DummyReviewsSection";
import ProductList from "../components/ProductList";

const ProductDetail = () => {
  const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "$";

  const { id } = useParams();
  const navigate = useNavigate();
  const { items, addToCart, updateQuantity, removeFromCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [localQuantity, setLocalQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = () => {
      setLoading(true);
      setLocalQuantity(1);
      window.scrollTo(0, 0);
      const product = dummyProducts.find((p) => p._id === id);
      setProduct(product!);
      setRelatedProducts(dummyProducts.filter((p) => p._id !== id));
      setLoading(false);
    };
    fetchProduct();
  }, [id, navigate]);

  if (loading) return <Loading />;
  if (!product) return null;

  const cartItem = items.find((item) => item.product._id === product._id);
  const inCart = !!cartItem;
  const displayQuantity = inCart ? cartItem.quantity : localQuantity;

  const handleMinus = () => {
    if (inCart) {
      if (cartItem.quantity > 1)
        updateQuantity(product._id, cartItem.quantity - 1);
      else removeFromCart(product._id);
    } else {
      setLocalQuantity(Math.max(1, localQuantity - 1));
    }
  };
  const handlePlus = () => {
    if (inCart) {
      updateQuantity(product._id, cartItem.quantity + 1);
    } else {
      setLocalQuantity(localQuantity + 1);
    }
  };

  const categoryLabel = product.category.replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb Navigation - Sử dụng Link */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link className="hover:text-green-600 transition-colors" to="/">
            <HouseIcon size={16} />
          </Link>
          <span>/</span>
          <Link
            className="hover:text-green-600 transition-colors"
            to="/products"
          >
            Products
          </Link>
          <span>/</span>
          <Link
            className="hover:text-green-600 transition-colors capitalize"
            to={`/products?category=${product.category}`}
          >
            {categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-green-600 font-medium truncate max-w-50">
            {product.name}
          </span>
        </nav>

        {/* Back Button */}
        <button
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-600 transition-colors"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} /> Back
        </button>

        {/* Product Card Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative flex items-center justify-center p-8 md:p-12 min-h-80 bg-gray-50/30">
              <img
                alt="Fanta 1.5L"
                className="max-h-90 w-auto object-contain"
                src={product.image}
              />
              <div className="absolute top-5 left-5">
                {product.isOrganic && (
                  <span className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-app-green text-white rounded-full">
                    <LeafIcon className="w-3 h-3" />
                    Organic
                  </span>
                )}

                {product.discount > 0 && (
                  <span className="px-2.5 py-1 text-xs font-semibold bg-orange-500 text-white rounded-full uppercase">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <span className="text-xs font-medium text-gray-400 tracking-wider mb-2 capitalize">
                {categoryLabel}
              </span>
              <h1 className="text-2xl md:text-3xl font-semibold text-green-800 mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              {product.rating > 0 && (
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex items-center gap-0.5 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        size={16}
                        fill="currentColor"
                        className={`w-4 h-4 ${star <= Math.round(product.rating) ? "text-app-warning fill-app-warning" : "text-app-border"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-gray-400">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
              )}

              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-3xl md:text-4xl font-semibold text-green-700">
                  {currency}
                  {product.price.toFixed(2)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-lg text-gray-400 line-through">
                    {currency}
                    {product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="mb-6">
                {product.stock > 0 ? (
                  <span className="text-sm text-app-success font-medium flex items-center gap-1">
                    <Check size={16} /> In Stock ({product.stock} available)
                  </span>
                ) : (
                  <span className="text-sm text-app-success font-medium">
                    Out of stock
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="p-3 hover:bg-app-cream transition-colors"
                    onClick={handleMinus}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-5 text-sm font-semibold min-w-10 text-center">
                    {displayQuantity}
                  </span>
                  <button
                    onClick={handlePlus}
                    className="p-3 hover:bg-app-cream transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Add to cart */}
                <button
                  className={`flex-1 py-3 font-semibold rounded-xl flex-center gap-2  transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] ${
                    inCart
                      ? "bg-app-cream text-app-green border border-app-green"
                      : "bg-app-orange text-white hover:bg-app-orange-dark"
                  }`}
                  disabled={product.stock === 0}
                  onClick={() => {
                    if (!inCart) addToCart(product, localQuantity);
                  }}
                >
                  <ShoppingCartIcon size={18} />
                  {inCart ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        {product.reviewCount > 0 && <DummyReviewsSection product={product} />}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-12 mb-44">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-app-green">
                  Related Products
                </h2>
                <p className="text-sm text-app-text-light mt-1">
                  More from beverages
                </p>
              </div>
              <Link
                to={`/products?category=${product.category}`}
                className="text-sm font-semibold text-app-orange hover:text-app-orange-dark flex items-center gap-1 transition-colors"
              >
                View All <ArrowRightIcon className="size-4" />
              </Link>
            </div>
            <ProductList products={relatedProducts.slice(0, 5)} />
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
