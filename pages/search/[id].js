import React from "react";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import Center from "@/components/Center";
import NewsLetter from "@/components/NewsLetter";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";

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
        {products.length > 0 ? (
          <ProductsGrid products={products} />
        ) : (
          <p>Không tìm thấy sản phẩm nào</p>
        )}
      </Center>
      {products.length > 0 ? (
        <div className="w-full mt-[20vh]">
          <div className="flex w-full justify-center ">
            <Feature />.
          </div>
          <Footer />
        </div>
      ) : (
        <div className="absolute bottom-0 w-full">
          <NewsLetter />
          <div className="flex w-full justify-center ">
            <Feature />.
          </div>
          <Footer />
        </div>
      )}
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
