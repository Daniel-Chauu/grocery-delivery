import { Link } from "react-router-dom";

interface ICategory {
  slug: string;
  name: string;
  image: string;
}

interface CategoryProps {
  category: ICategory;
}

const Category = ({ category }: CategoryProps) => {
  return (
    <Link
      className="group flex flex-col items-center gap-3 p-4"
      to={`/products?category=${category.slug}`}
    >
      <div className="size-18 sm:size-26 sm:p-2 rounded-2xl overflow-hidden bg-orange-100 group-hover:ring-2 ring-orange-300/75 transition-all">
        <img
          alt="Fruits &amp; Vegetables"
          className="w-full h-full object-contain rounded-full transition-all"
          src={category.image}
        />
      </div>
      <span className="text-xs font-medium text-zinc-600 text-center leading-tight">
        {category.name}
      </span>
    </Link>
  );
};

export default Category;
