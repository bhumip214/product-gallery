import React from 'react';
import './App.css';
import * as requests from './requests';
import Header from './components/Header';
import SideNavBar from './components/SideNavBar';

export default function App() {
  // Here as an example to get you started with requests.js
  React.useEffect(() => {
    (async () => {
      const categories = await requests.getCategories();
      const products = await requests.getProducts({
        categoryId: categories[0].id,
      });
      const product = await requests.getProduct(products[0].id);
      console.log('Example request: categories', categories);
      console.log('Example request: products', products);
      console.log('Example request: product', product);
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      <SideNavBar />
    </div>
  );
}
