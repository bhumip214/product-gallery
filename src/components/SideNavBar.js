import React from 'react';

export default function SideNavBar() {
  return (
    <div className="sideNavBar">
      <h3 className="nav-tittle"> ALL CATEGORIES</h3>
      <div className="list">
        <ul>
          <h3> Creams & gels </h3>
          <h3> Patches </h3>
          <h3> Emulsions </h3>
          <h3> Toners </h3>
          <h3> Face cleansing </h3>
          <h3> Makeup removal </h3>
          <h3> Scrubs </h3>
          <h3> Peeling </h3>
          <h3> Masks </h3>
        </ul>
      </div>
      <h3 className="nav-tittle"> FILTER BY PRICE</h3>
      <div className="filter-price">
        <h3>$ Min</h3>
        <h3>$ Max</h3>
        <button>Go</button>
      </div>
    </div>
  );
}
