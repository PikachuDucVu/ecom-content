import { categories } from "@/lib/category";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div className="pt-16 w-2/3  p-3">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Category;
