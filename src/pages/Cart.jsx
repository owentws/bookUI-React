import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CartItem from '../components/CartItem'




const Cart = () => {

 const [dataCart,setDataCart] = useState(null);

    const client = axios.create({
             baseURL: "http://localhost:8080/api/cart"
         });

    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
  
    useEffect(() => {
      getCartData()
      
    }, []);

    function getCartData() {
        client.get('/3')
          .then((response) => {
            console.log('API Response:', response.data); // Debug API Response
            if (response.data) {
              setDataCart(response.data); // Set data to state
            } else {
              setError("No data available"); // Handle empty response
            }
            setLoading(false); // Stop loading
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            setError("Error fetching data"); // Handle error
            setLoading(false); // Stop loading
          });
      }
      


//   //เช็คเวลาโหลด
//   if (loading) return <p>Loading...</p>; // Display loading state
//   //เช็คเออเร่อ
//   if (error) return <p>{error}</p>; // Display error message if there’s an issue




  return (
    <div>
        <CartItem data={dataCart} />
        
    </div>
  )
}

export default Cart