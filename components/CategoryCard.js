/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";

const CategoryCard = ({ id, brand: name, count, image }) => {
  const _ = id;

  useEffect(() => {}, [_]);

  return (
    <div className="border border-gray-200 hover:border-grayy-300 hover:scale-105 transition-transform rounded-lg">
      <div className="flex justify-between items-center p-6">
        <div className="space-y-4">
          <h3 className="font-medium text-xl">{name}</h3>
          <p className="text-gray-500">{count}</p>
        </div>
        <img src={image} alt={name} className="w-[100px]" />
      </div>
    </div>
  );
};

export default CategoryCard;
