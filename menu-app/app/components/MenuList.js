import React from 'react';

const MenuList = ({ data, category }) => {
    let tmpData = data.filter((item, i) => item.category == category);
  return (
    <div className="menu-list">
      {tmpData.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuList;