import React from 'react'

const HomePromotion = () => {
  return (
    <div class="container mx-auto mt-4 mb-4 font-outfit">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-6  p-4  rounded-md border-2 border-gray-200 bg-amber-200">
        <div class="flex gap-4">
          <div className="pt-8 pl-8 border flex-1">
            <h2 class="text-sm mb-2">Discount up to</h2>
            <h2 class="text-4xl font-bold mb-2">20% off</h2>
            <h2 class="text-sm mb-4">It all begins witha great bookk!</h2>
            <button class="text-white bg-green-600 px-8 py-2 rounded-lg hover:bg-green-700 mt-5">
              Shop now
            </button>
          </div>
          <div class="border flex-none">
            <img
              class="border w-auto h-64 object-cover"
              src="https://img.pikbest.com/origin/10/11/15/2pIkbEsTypIkbEsTftj.png!sw800"
              alt=""
            />
            </div>
            
          
        </div>
      </div>

      <div class=" col-span-6 rounded-md border-2 border-gray-200 flex bg-red-300">
        
        <div class="p-16">
          <h1 class="text-4xl font-bold mb-2">BEST SELLER</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>
        
        
      </div>
    </div>
  </div>
  )
}

export default HomePromotion
