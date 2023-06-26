/* eslint-disable react/prop-types */
// import React from "react";
// import { useState } from 'react';
// import OrderTable from './OrderTable';

// const FilterBar = ({ data }) => {
//   const [filteredData, setFilteredData] = useState(data);

//   function filterDataByDeliveryType(deliveryType) {
//     const filtered = filteredData.filter(item => item.deliveryType === deliveryType);
//     setFilteredData(filtered);
//   }

//   function showAllData() {
//     setFilteredData(data);
//   }

//   return (
//     <main className="py-12 px-6 2xl:px-6 container">
//       <div className="order-2 xl:-order-1">
//         <div className="flex items-center justify-between mb-12">
//           <h4 className="mt-2 text-xl font-bold">Table of Orders</h4>

//           <div className="flex items-center space-x-4">
//             <button className="lws-filter-btn active-filter" onClick={showAllData}>All</button>
//             <button className="lws-filter-btn" onClick={() => filterDataByDeliveryType('Regular')}>Regular</button>
//             <button className="lws-filter-btn" onClick={() => filterDataByDeliveryType('Express')}>Express</button>
//           </div>
//         </div>
//       </div>
//       <OrderTable filteredData={filteredData} />
//     </main>
//   );
// };

// export default FilterBar;

import { useState } from "react";
import OrderTable from "./OrderTable";
import { useEffect } from "react";

const FilterBar = ({ data }) => {
  console.log(data);
  const [filteredData, setFilteredData] = useState(data);
  console.log(filteredData);

  function filterDataByDeliveryType(deliveryType) {
    const filtered = data.filter((item) => item.deliveryType === deliveryType);
    setFilteredData(filtered);
  }

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Table of Orders</h4>

          <div className="flex items-center space-x-4">
            <button
              className="lws-filter-btn active-filter"
              onClick={() => setFilteredData(data)}
            >
              All
            </button>
            <button
              className="lws-filter-btn"
              onClick={() => filterDataByDeliveryType("Regular")}
            >
              Regular
            </button>
            <button
              className="lws-filter-btn"
              onClick={() => filterDataByDeliveryType("Express")}
            >
              Express
            </button>
          </div>
        </div>
      </div>
      <OrderTable filteredData={filteredData}></OrderTable>
    </main>
  );
};

export default FilterBar;
