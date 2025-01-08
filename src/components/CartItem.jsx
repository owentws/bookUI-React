import React from 'react'

const CartItem = ({data}) => {

    console.log(data)
    
    
    if (!data || !data.cartItems) {
        // กรณีข้อมูลยังโหลดไม่เสร็จ หรือเป็น null
        return <div>Loading...</div>;
      }

  return (
    <div>
        <div className='container m-auto'>
            
            {data.cartItems.map((item) => (
                <div className='flex gap-4 p-4'>
                    <img className='w-24 h-24' src={item.book.imgUrl} alt="" />
                    <div>
                        <h1>Title : {item.book.title}</h1>
                        <h6>Author :</h6>
                        <p>Price:</p>
                        <p>Quantity :</p>
                        <p>Total Price :</p>
                    </div>                
                </div>
            ))}
            </div>
        </div>
    
  )
}

export default CartItem