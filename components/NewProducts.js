import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const Title = styled.h2`
  border-top: 1px solid #e0e0e0;
  font-size: 2rem;
  margin: 30px 0;
  font-weight: normal;
  padding-top: 20px;
  margin-left: 5px;
`;

export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>Sản phẩm mới</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}
