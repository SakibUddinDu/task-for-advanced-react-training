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
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <>
     <Navbar></Navbar> 
     <FilterBar data={data}></FilterBar> 
     
    </>
  )
}

export default App
