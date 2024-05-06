import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";

export default function ProductsPage({ products }) {
  return (
    <>
      <Header />
      <Center>
        <Title>Tất cả sản phẩm</Title>
        <ProductsGrid products={products} />
      </Center>
      <div className="w-full mt-[5vh]">
        <NewsLetter />
        <div className="flex w-full justify-center ">
          <Feature />.
        </div>
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
