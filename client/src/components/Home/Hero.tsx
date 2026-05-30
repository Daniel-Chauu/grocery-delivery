import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { heroSectionData } from "../../assets/assets";

const Hero = () => {
  return (
    <section className="relative mb-10 flex min-h-135 items-center overflow-hidden rounded-3xl">
      {/* Background Image */}
      <img
        src={heroSectionData.hero_image}
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-app-green via-app-green/65 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-xl xl:pl-10">
          {/* Badge */}
          <span className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-orange-300/10 px-4 py-1.5 text-xs font-semibold text-orange-300">
            <Leaf className="size-3" />
            Farm-Fresh & Organic
          </span>

          {/* Heading */}
          <h1 className="mb-5 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Nourish your home with{" "}
            <span className="text-orange-300">Earth&apos;s finest</span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-md text-base leading-relaxed text-white/70">
            {heroSectionData.description}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Link
              to="/products"
              className="flex-center active:scale-[0.98] gap-2 rounded-full bg-orange-400 px-7 py-3 font-semibold text-white transition-all hover:bg-orange-500"
            >
              Shop Now
              <ArrowRight className="size-4" />
            </Link>

            <Link
              to="/products"
              className="rounded-full border border-white/20 bg-white/10 px-7 py-3 font-semibold text-white transition-all hover:bg-white/20"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
