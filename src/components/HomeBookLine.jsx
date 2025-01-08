import React from "react";
import { Link } from 'react-router-dom';


const HomeBookLine = ({data}) => {

  console.log(data)
  const books = data;
  
  return (
    <div class="container mx-auto mt-8">
      <div class="flex justify-between">
        <h1 class="text-xl">Recommemded for You</h1>
        <p>more</p>
        </div>
      
      <div class="grid grid-cols-12 gap-4 text-xl h-auto  text-center mt-2">
        {books.map((book) => (
         <div class="col-span-2 border-2 ">
            <div class="bg-white p-4">
           
            <button class="bg-gray-100 text-gray-700 px-4 py-1 mb-4 rounded border border-gray-300 hover:bg-gray-200 text-sm">
            <Link to={`/create/${book.bookId}`}>Edit {book.bookId}</Link>
            </button>
            
            <img
              src={book.imgUrl}
              alt="Book cover"
              class="rounded-lg w-full h-60 object-cover"
            />
            </div>

            <div class="py-2 px-4">
            <h2 class="text-lg font-semibold text-left">{book.title}</h2>
            <div class="flex">
              <span class="text-color1 text-sm">{book.author}</span>
            </div>
          </div>

          <div class="px-4 pb-4 flex gap-4 justify-between items-center">
            <span class="text-green-600 font-semibold text-lg">${book.price}</span>
            <button class="bg-btn1 text-white px-4 py-1 rounded border border-gray-300 hover:bg-gray-200 text-sm">
              Add to cart
            </button>
          </div>

         </div>
        ))}

        
      </div>

    </div>
  );
};

export default HomeBookLine;
