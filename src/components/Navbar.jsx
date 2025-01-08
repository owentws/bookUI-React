// Navbar.js
import React from 'react';

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <nav className="border p-4 bg-white">
      <div className="container mx-auto flex justify-between items-center font-outfit">
        
        <div className=" text-2xl font-bold ">BOOK4U</div>

        {/* Search Bar */}
        <div className="flex-1 mx-4 max-w-xl border-2 rounded-md">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none bg-gray-100"
          />
          
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="text-white bg-btn1 px-4 py-2 rounded-lg hover:bg-black">Login</button>
          <button className="  px-4 py-2 rounded-lg hover:bg-stone-100 border-2 ">Sign Up</button>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
