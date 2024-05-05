/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Button from "@/components/Button";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import { fakeSales, randomInt, convertUSDtoVND } from "@/lib/utils";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 5px;
  height: 150px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 125px;
  }
`;

const Title = styled(Link)`
  display: flex;
  font-weight: normal;
  font-size: 1rem;
  color: inherit;
  text-decoration: none;
  height: 65px;
`;

const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;

  const [randomPercents, setRandomPercents] = useState(0);

  useEffect(() => {
    setRandomPercents(randomInt(5, 20));
  }, []);

  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images?.[0]} alt="" />
        </div>
      </WhiteBox>
      <Title href={url}>{title}</Title>
      <ProductInfoBox>
        <div className="flex justify-between items-end text-lg">
          <div className="text-gray-600">
            <div className="font-bold">Giá gốc </div>
            <div className="line-through">
              {fakeSales(price, randomPercents)}₫
            </div>
          </div>
          <div className="text-right">
            <div className="text-red-500">Giảm {randomPercents}%</div>
            <div className="font-bold text-green-600">
              {convertUSDtoVND(price)}₫
            </div>
          </div>
        </div>
        <Button block onClick={() => addProduct(_id)} primary outline>
          Thêm vào giỏ hàng
        </Button>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
