import styled from "styled-components";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";

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

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;

function formatCash(str) {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ",") + prev;
    });
}

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images?.[0]} alt="" />
        </div>
      </WhiteBox>
      <Title href={url}>{title}</Title>
      <ProductInfoBox>
        <PriceRow>
          <Price>{formatCash(Number(price * 25000).toString())} VND</Price>
        </PriceRow>
        <Button block onClick={() => addProduct(_id)} primary outline>
          Add to cart
        </Button>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
