import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #f8cb00;
  border-top: 5px solid #6364d8;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1080px;
  margin: 0 auto;
`;
const Title = styled.h1`
  padding: 50px 101px 50px 0;
  font-weight: 900;
  font-size: 36px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 33px;
  text-align: left;
  width: 193px;
`;

const SearchBar = styled.div`
  background: #ffffff;
  border-radius: 4px;
  align-items: center;
  width: 661px;
  height: 51px;
`;

const H3 = styled.h3`
  font-size: 15px;
  color: rgba(123, 123, 123, 0.78);
  letter-spacing: 0;
  line-height: 31px;
  text-align: left;
  margin-top: 11px;
  margin-left: 52px;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <MainContainer>
        <Title> Amazing store</Title>
        <SearchBar>
          <H3> Search products by name </H3>
        </SearchBar>
      </MainContainer>
    </HeaderWrapper>
  );
}
