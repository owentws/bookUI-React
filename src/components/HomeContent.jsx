import React from "react";

const HomeContent = () => {

  return (
    <div class="bg-color3 pt-16 pb-32 font-outfit">
      <div class="container mx-auto  flex items-center justify-center gap-16 ">
        <div class="relative w-96 h-64 flex justify-center items-center">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/magical-forest-kid%27s-story-book-cover-design-template-a5a7b22ecef3e58e40169b57f5aa12a5.jpg?ts=1698341143"
            alt="Image 1"
            class="w-auto h-40 absolute z-10 transform translate-x-36 translate-y-28"
          />
          <img
            src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/22739/optimized_product_thumb_children-stories-book-cover-541__1_.jpg"
            alt="Image 2"
            class="w-auto h-40 absolute z-20 transform -translate-x-36 -translate-y-11"
          />
          <img
            src="https://img.pikbest.com/templates/20211025/bg/f640210105f01.png!w700wp"
            alt="Image 3"
            class="w-[300px] h-[300px] absolute z-30 object-contain"
          />
        </div>
        {/* <img src="https://png.pngtree.com/png-vector/20240803/ourmid/pngtree-smiling-student-girl-with-backpack-and-books-clipart-illustration-png-image_13366155.png" alt="" /> */}
        <div>
          
          <h1 class="text-5xl font-extrabold mb-2">Books You Can't Put Down</h1>
          <h2 class="text-lg font-semibold mb-8">Experience the joy of reading with a bookstore you can trust.</h2>
          <button class="text-white bg-btn1 px-8 py-2 rounded-lg hover:bg-green-700 ">
            Get The Deal
          </button>
        </div>
      </div>
    </div>

    // <div class="">
    //   <div class="container mx-auto font-outfit bg-color3  mt-">
    //     <div class="grid grid-cols-2 gap-4 pt-8">

    //     <div class="flex justify-end border">
    //       <img
    //             class="w-auto h-auto object-cover rounded-lg mt-4 flex-col"
    //             src="https://png.pngtree.com/png-vector/20240803/ourmid/pngtree-smiling-student-girl-with-backpack-and-books-clipart-illustration-png-image_13366155.png"
    //             alt=""
    //           />
    //       </div>

    //       <div class="flex  border">
            
    //           <div className="flex flex-col p-8 border w-3/4">
    //             <h2 class="text-sm mb-2">Back to School</h2>
    //             <h2 class="text-4xl text-green-700 font-bold mb-2">Special 50% Off</h2>
    //             <h2 class="text-xl mb-4">For Our student community</h2>
    //             <p class="text-sm">
    //               There are many variations of passages of Lorem Ipsum
    //               available, but the majority have suffered alteration in some
    //               form, by injected humour, or randomised words which don't look
    //               even slightly believable.
    //             </p>
    //             <div> <button class=" text-white bg-btn1 px-8 py-2 rounded-lg hover:bg-green-700 mt-5">
    //               Get The Deal
    //             </button>
    //             </div>
               
    //           </div>
             
            
    //       </div>

    //     </div>
    //   </div>
    // </div>

    //     <div class="w-full bg-slate-400">
    //       <div class="container mx-auto font-outfit">
    //       <div class="grid grid-cols-12 gap-4">
    //         <div class="col-span-8  p-4  rounded-md border-2 border-gray-200">
    //           <div class="flex gap-4">
    //             <div className="p-8 border">
    //               <h2 class="text-sm mb-2">Back to School</h2>
    //               <h2 class="text-2xl font-bold mb-2">Special 50% Off</h2>
    //               <h2 class="text-xl mb-4">For Our student community</h2>
    //               <p class="text-sm">
    //                 There are many variations of passages of Lorem Ipsum available,
    //                 but the majority have suffered alteration in some form, by
    //                 injected humour, or randomised words which don't look even
    //                 slightly believable.
    //               </p>
    //               <button class="text-white bg-green-600 px-8 py-2 rounded-lg hover:bg-green-700 mt-5">
    //                 Get The Deal
    //               </button>
    //             </div>

    //               <img
    //                 class="w-full h-full object-cover rounded-lg mt-4 flex-col"
    //                 src="https://png.pngtree.com/png-vector/20240803/ourmid/pngtree-smiling-student-girl-with-backpack-and-books-clipart-illustration-png-image_13366155.png"
    //                 alt=""
    //               />

    //           </div>
    //         </div>

    //         <div class=" col-span-4 rounded-md border-2 border-gray-200 flex-col">
    //           <img class="w-full h-72 object-cover" src="https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg" alt="" />
    //           <div class="p-4">
    //             <h1 class="text-xl font-bold mb-2">BEST SELLER</h1>
    //             <p>There are many variations of passages of Lorem Ipsum available,</p>
    //           </div>

    //         </div>
    //       </div>
    //     </div>
    // </div>

    
  );
};

export default HomeContent;
