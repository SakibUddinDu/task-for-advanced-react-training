/* eslint-disable react/prop-types */
import React from "react";
import Theader from './Theader';
import FilterBar from './FilterBar';

const OrderTable = ({ filteredData }) => {
  console.log(filteredData);

  return (
    <>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <Theader />
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {filteredData ? (
                      filteredData.map((order) => {
                        return (
                          // <tr key={order.orderID}> unique na keno?
                          <tr key={order.uniqueID}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                              <div className="inline-flex items-center gap-x-3">
                                <input
                                  type="checkbox"
                                  className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                                />
    
                                <span>{order.orderID}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {order.orderDate}
                            </td>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                              <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10 3L4.5 8.5L2 6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
    
                                <h2 className="text-sm font-normal">{order.deliveryType}</h2>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              <div className="flex items-center gap-x-2">
                                <div>
                                  <h2 className="text-sm font-medium   ">
                                    {order.customerName}
                                  </h2>
                                  <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                                    {order.email}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                              {order.address}
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                              <div className="flex items-center gap-x-6">
                                <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                  {order.phone}
                                </button>
    
                            
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td>Loading</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

       {/* <Pagination data={filteredData}></Pagination> */}
      </section>
    </>
  );
};

export default OrderTable;












// import React from "react";
// import Theader from './Theader';
// import FilterBar from './FilterBar';
import Pagination from './Pagination';

// const OrderTable = ({ filteredData }) => {
//   console.log(filteredData)
//   return (
//     <>
//     <section className="container px-4 mx-auto">
//       <div className="flex flex-col">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
//             <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
//               <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//                 <Theader></Theader>
//                 <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
//                   {filteredData? (
//                     filteredData.map((order) => {
//                         return (
//                           <tr key={order.orderID + 1}>
//                             <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
//                               <div className="inline-flex items-center gap-x-3">
//                                 <input
//                                   type="checkbox"
//                                   className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
//                                 />
    
//                                 <span>{order.orderID}</span>
//                               </div>
//                             </td>
//                             <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
//                               {order.orderDate}
//                             </td>
//                             <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
//                               <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
//                                 <svg
//                                   width="12"
//                                   height="12"
//                                   viewBox="0 0 12 12"
//                                   fill="none"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                   <path
//                                     d="M10 3L4.5 8.5L2 6"
//                                     stroke="currentColor"
//                                     strokeWidth="1.5"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                   />
//                                 </svg>
    
//                                 <h2 className="text-sm font-normal">{order.deliveryType}</h2>
//                               </div>
//                             </td>
//                             <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
//                               <div className="flex items-center gap-x-2">
//                                 <div>
//                                   <h2 className="text-sm font-medium   ">
//                                     {order.customerName}
//                                   </h2>
//                                   <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
//                                     {order.email}
//                                   </p>
//                                 </div>
//                               </div>
//                             </td>
//                             <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
//                               {order.address}
//                             </td>
//                             <td className="px-4 py-4 text-sm whitespace-nowrap">
//                               <div className="flex items-center gap-x-6">
//                                 <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
//                                   {order.phone}
//                                 </button>
    
                            
//                               </div>
//                             </td>
//                           </tr>
//                         );
//                       })
//                   ):(
//                     <p>Loading</p>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center justify-between mt-6">
//         <a
//           href="#"
//           className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-5 h-5 rtl:-scale-x-100"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
//             />
//           </svg>

//           <span>previous</span>
//         </a>

//         <div className="items-center hidden md:flex gap-x-3">
//           <a
//             href="#"
//             className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
//           >
//             1
//           </a>
//           <a
//             href="#"
//             className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
//           >
//             2
//           </a>
//           <a
//             href="#"
//             className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
//           >
//             3
//           </a>
//           <a
//             href="#"
//             className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
//           >
//             ...
//           </a>
//           <a
//             href="#"
//             className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
//           >
//             12
//           </a>
//           <a
//             href="#"
//             className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
//           >
//             13
//           </a>
//           <a
//             href="#"
//             className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
//           >
//             14
//           </a>
//         </div>

//         <a
//           href="#"
//           className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
//         >
//           <span>Next</span>

//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="w-5 h-5 rtl:-scale-x-100"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//             />
//           </svg>
//         </a>
//       </div>
//     </section>
//     </>
    
//   );
// };

// export default OrderTable;
