import React, {useState} from 'react';
import './App.css';
import * as requests from './requests';
import Header from './components/Header';
import SideNavBar from './components/SideNavBar';
import Products from './components/Products';
import styled from 'styled-components';

const Main = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 60px;
  margin: 38px auto 0;
  width: 1080px;
`;

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Here as an example to get you started with requests.js
  React.useEffect(() => {
    (async () => {
      const categoriesResponse = await requests.getCategories();
      setCategories(categoriesResponse);
      const productsResponse = await requests.getProducts({
        categoryId: categoriesResponse[0].id,
      });
      setProducts(productsResponse);
      const product = await requests.getProduct(productsResponse[0].id);
      console.log('Example request: categories', categories);
      console.log('Example request: products', products);
      console.log('Example request: product', product);
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      <Main>
        <SideNavBar categories={categories} />
        <Products products={products} />
      </Main>
    </div>
  );
}
