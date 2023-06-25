import React from "react";

const FilterBar = () => {
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Table of Orders</h4>

          <div className="flex items-center space-x-4">
            <button className="lws-filter-btn active-filter">All</button>
            <button className="lws-filter-btn">Regular</button>
            <button className="lws-filter-btn">Express</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FilterBar;
