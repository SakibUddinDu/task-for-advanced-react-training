import './App.css'
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import OrderTable from './components/OrderTable';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  // console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('db.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        // Handle error
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

//   return (
//     <div>
//       {data ? (
//         // Render your data
//         <ul>
//           {data.map(item => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       ) : (
//         // Render a loading state
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };


  

  return (
    <>
     <Navbar></Navbar> 
     <FilterBar></FilterBar> 
     <OrderTable data={data}></OrderTable>
    </>
  )
}

export default App
