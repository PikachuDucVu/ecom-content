import React from "react";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import Center from "@/components/Center";

const SearchingItem = ({ products, id }) => {
  console.log(products);

  return (
    <div>
      <Header />
      <Center>
        <Title>
          Bạn đang tìm từ khóa:
          <span className="font-normal"> {id}</span>
        </Title>
        <ProductsGrid products={products} />
      </Center>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  await mongooseConnect();
  const products = await Product.find(
    {
      title: { $regex: `${id}`, $options: "i" },
    },
    null,
    {
      sort: { _id: -1 },
      limit: 12,
    }
  );
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      id,
    },
  };
}

export default SearchingItem;
