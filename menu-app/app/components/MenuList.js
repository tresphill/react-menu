import React from 'react';
import Dinner from './dinner'
import Breakfast from './breakfast'
import Appetizer from './appetizers'
import Drinks from './drinks'
import Lunch from './lunch'

const MenuList = ({ data, view }) => {
    return (
        <>
        {view === 'Breakfast' && <Breakfast data={data} />}
        {view === 'Lunch' && <Lunch data={data} />}
        {view === 'Dinner' && <Dinner data={data} />}
        {view === 'Appetizer' && <Appetizer data={data} />}
        {view === 'Drinks' && <Drinks data={data} />}
        </>
    );
};

export default MenuList;








// const MenuList = ({ data, category }) => {
//     let tmpData = data.filter((item, i) => item.category == category);
//   return (
//     <div className="menu-list">
//       {tmpData.map(item => (
//         <div key={item.id}>
//           <h3>{item.name}</h3>
//           <p>{item.category}</p>
//           <p>{item.description}</p>
//           <p>{item.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MenuList;