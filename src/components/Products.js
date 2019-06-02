import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  box-shadow: 0 4px 14px 7px rgba(121, 121, 121, 0.05);
  border-radius: 4px;
  width: 191px;
  height: 300px;
  &:hover {
    cursor: pointer;
    background: #ffffff;
    border: 2px solid #f8cb00;
  }
`;

const Header = styled.h2`
  font-size: 27px;
  color: #2d2d2d;
  letter-spacing: 0;
  line-height: 31px;
  text-align: left;
  margin-bottom: 35px;
`;

const ProductName = styled.div`
  font-size: 18px;
  color: #373738;
  letter-spacing: 0;
  text-align: center;
  margin-top: 30px;
  height: 50px;
`;
const Img = styled.img`
  height: 178px;
  width: 178px;
`;

const ProductsList = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(4, auto);
`;

export default function Products(props) {
  return (
    <div>
      <Header> Robots</Header>
      <ProductsList>
        {props.products.map(product => {
          return (
            <Container>
              <Img src={product.images.medium} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <div>$ {product.price}</div>
            </Container>
          );
        })}
      </ProductsList>
    </div>
  );
}
