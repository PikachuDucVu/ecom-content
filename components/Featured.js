"use client";
/* eslint-disable @next/next/no-img-element */
import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import { convertUSDtoVND, fakeSales, randomInt } from "@/lib/utils";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
  width: 85%;
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.75rem;
  margin: 10px 0;
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

function truncateString(str, length, ending = "...") {
  if (str.length > length) {
    return str.slice(0, length - ending.length) + ending;
  }
  return str;
}

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{truncateString(product.description, 256, "...")}</Desc>
              <ButtonsWrapper>
                <ButtonLink
                  href={"/product/" + product._id}
                  outline={1}
                  white={1}
                >
                  Thông tin sản phẩm
                </ButtonLink>
                <Button white onClick={addFeaturedToCart}>
                  <CartIcon />
                  Thêm vào giỏ hàng
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <div className="flex flex-col gap-10 mt-14">
              <img
                src="https://ducvu-ecommerce.s3.ap-southeast-2.amazonaws.com/1714690174159.png"
                alt=""
                className="scale-125 hover:scale-150 transition-transform duration-300 ease-in-out"
              />
              <div className="w-full text-center text-xl line-through text-slate-500 mt-10">
                Giá gốc: {fakeSales(product?.price || 0, 10)} VND
              </div>
              <div className="w-full text-center -mt-7 font-bold text-xl rainbowText">
                Giá ưu đãi: {convertUSDtoVND(product?.price)} VND
              </div>
            </div>
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
