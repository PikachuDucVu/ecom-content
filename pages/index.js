import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import Footer from "@/components/Footer";
import Category from "@/components/Category";
import { Categories as Brands } from "@/models/Categories";
import { useState } from "react";
import SponsorPopup from "@/components/SponsorPopup";
import Feature from "@/components/Feature";
import NewsLetter from "@/components/NewsLetter";

export default function HomePage({ featuredProduct, newProducts, categories }) {
  const [showSponsorPopup, setShowSponsorPopup] = useState(false);

  return (
    <div className={`${showSponsorPopup ? "overflow-y-visible" : ""}`}>
      {showSponsorPopup && <SponsorPopup closeModal={setShowSponsorPopup} />}
      <Header />
      <Featured product={featuredProduct} />
      <div className="flex w-full justify-center p-5 ">
        <Category categories={categories} />
      </div>
      <NewProducts products={newProducts} />
      <NewsLetter />
      <div className="flex w-full justify-center p-5">
        <Feature />.
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "663418a8fdee4ab1cdb2d220";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 12,
  });
  const categories = await Brands.find({}, null, {
    sort: { _id: -1 },
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
