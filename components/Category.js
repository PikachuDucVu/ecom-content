import CategoryCard from "./CategoryCard";
import Link from "next/link";

const Category = ({ categories }) => {
  console.log(categories);

  return (
    <div className="pt-16 w-2/3 p-3">
      <div className="text-center pb-10 font-bold text-2xl">
        Các danh mục sản phẩm
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link href={`/search/${category.name}`} passHref key={category.id}>
            <CategoryCard {...category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
