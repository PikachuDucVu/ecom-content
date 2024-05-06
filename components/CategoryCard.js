/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { categories } from "@/lib/category";

const CategoryCard = ({ id, name }) => {
  const _ = id;

  function findBrand(brandName) {
    return categories.find(
      (category) => category.brand.toLowerCase() === brandName.toLowerCase()
    );
  }
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = findBrand(name);
    setData(getData);
  }, [_, name]);

  return (
    <div className="border border-gray-200 hover:border-grayy-300 hover:scale-105 transition-transform rounded-lg">
      <div className="flex justify-between items-center p-6">
        <div className="space-y-4">
          <h3 className="font-medium text-xl">
            {data?.brand ? data?.brand : name}
          </h3>
        </div>
        <img src={data?.image ? data.image : ""} alt={name} className=" h-10" />
      </div>
    </div>
  );
};

export default CategoryCard;
