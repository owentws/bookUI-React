import React from "react";

const DetailBoxAll = ({data}) => {
  return (
    <div class="container mx-auto bg-white mt-4">
       <div class="flex justify-center">
      <div class="grid grid-cols-12">
        <div class="col-span-4 p-8 bg-green-300">
          <h1>Book Detail</h1>
          <p>ID : {data[0].id}</p>
          <p>DATE : {data[0].date}</p>
          <p>Size : {data[0].size}</p>
          <p>Page : {data[0].page}</p>
          <p>Categories : {data[0].categories}</p>
        </div>
        <div class="col-span-8 p-8 bg-red-200 w-3/4">
          <h1>Book Detail : {data[0].title}</h1>
          
          <p>{data[0].detail}</p>           
         
        </div>
      </div>
    </div> 
    </div>
    
  );
};

export default DetailBoxAll;
