import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HomeBookLine from '../components/HomeBookLine';



const TestData = () => {

    
    const [dataBook,setDataBook] = useState(null);

    const client = axios.create({
             baseURL: "http://localhost:8080/api/book"
         });

    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
  
    useEffect(() => {
      getData()
      
    }, []);

    function getData(){
      client.get('/getBooksData') // Replace with your API endpoint
        .then((response) => {
          if (response.data && response.data.length > 0) {
            setDataBook(response.data); // Store data if response is valid and has items
          } else {
            setError("No data available"); // Set error if response data is empty
          }
          setLoading(false); // Stop loading once data is fetched or error is set
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setError("Error fetching data"); // Set error if API call fails
          setLoading(false); // Stop loading on error
        });
    }


    


  //เช็คเวลาโหลด
  if (loading) return <p>Loading...</p>; // Display loading state
  //เช็คเออเร่อ
  if (error) return <p>{error}</p>; // Display error message if there’s an issue

  return (
    <div>
       {dataBook && <HomeBookLine data={dataBook}/>}
      <div class="flex gap-4 justify-center mt-5" >
      
        
    </div>
    </div>
    
  )
}

export default TestData