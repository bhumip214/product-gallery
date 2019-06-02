import React from 'react';

export default function SideNavBar(props) {
  return (
    <div className="sideNavBar">
      <h3 className="nav-tittle"> ALL CATEGORIES</h3>
      <div className="list">
        {props.categories.map(category => {
          return <h3> {category.name} </h3>;
        })}
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
