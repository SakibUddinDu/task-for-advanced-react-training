import './App.css'
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import OrderTable from './components/OrderTable';
import { useEffect, useState } from 'react';
import Pagination from './components/Pagination';

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

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;
  const lastIndex = currentPage * ordersPerPage;
  console.log("l i " , lastIndex);
  const firstIndex = lastIndex - ordersPerPage;
  console.log("f i " , firstIndex);
  const orders = data.slice(firstIndex, lastIndex);
  // console.log(orders)
  const numberOfPage = Math.ceil(data.length / ordersPerPage);
  console.log(numberOfPage); //25/5 =5
  const numbersArr = [...Array(numberOfPage + 1).keys()].slice(1);
  console.log(numbersArr) 

  const prevPage = () => {
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  };

  const changePage = (id) => {
      setCurrentPage(id)
  };

  const nextPage = () => {
    if(currentPage !== numberOfPage){
      setCurrentPage(currentPage + 1)
    }
  };
  
  return (
    <>
     <Navbar></Navbar> 
     <FilterBar data={orders}></FilterBar> 
     <Pagination data={orders} nextPage={nextPage}  prevPage={prevPage} changePage={changePage} numbersArr={numbersArr} ></Pagination>
    </>
  )
}

export default App
