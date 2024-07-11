import React, {useEffect, useState} from 'react';
import { apiUrl, FilterData} from './data';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './Components/Filter'
import Navbar from './Components/Navbar';
import {toast} from 'react-toastify';
import Cards from './Components/Cards';
import Spinner from './Components/Spinner';

function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    async function fetchData(){ 
      setLoading(true);
      try{
        const output = apiUrl;
        setCourses(output[0].data);
      }
      catch(error){
        toast.error("Something went wrong");
        }
      setLoading(false);
    }
    fetchData();
  },[]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-700">
      <div>
        <Navbar/>
      </div>
      <div className='bg-slate-700'>
        <div>
            <Filter FilterData = {FilterData} category = {category} setCategory = {setCategory}/>
          </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? <Spinner/> : <Cards courses = {courses} category = {category}/>
          }
        </div>
      </div>
      <ToastContainer/>
    </div>    
     );
}

export default App;