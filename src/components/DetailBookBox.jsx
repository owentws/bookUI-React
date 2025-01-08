import React from "react";

const DetailBookBox = ({data}) => {
  return (
    <div class="container mx-auto">
      <div class="flex  justify-center">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-6 bg-white flex justify-center px-4 py-8">
            <img
              class="w-auto h-96"
              src="https://img.pikbest.com/templates/20211025/bg/f640210105f01.png!w700wp"
              alt=""
            />
          </div>
          <div class="col-span-6 bg- px-4 py-8 bg-white">
            <div class="flex flex-col">
              <h1 class="text-2xl font-semibold">{data[0].title}</h1>
              <p class="text-base">Author : Willaim Athor</p>
              <p>★★★★</p>
              <p class="text-2xl font-semibold mt-2">$ 4.99</p>
              <p class="text-xl mt-2">Amount 1</p>
              <div class="mt-8 flex">
                <button className="flex-1 text-white bg-btn1 px-4 py-2 mr-3 rounded-lg hover:bg-black">Buy</button>
                <button className="flex-1  text-btn1 bg-white px-4 py-2 rounded-lg border-2 border-btn1 hover:bg-black">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBookBox;
