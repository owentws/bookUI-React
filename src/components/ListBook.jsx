import React from "react";

const ListBook = () => {
  return (
    <div className="grid grid-cols-[250px_1fr] grid-rows-[auto_1fr] h-screen">
      {/* Header */}
      <header className="col-span-2 bg-gray-100 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl font-bold">
            hype<span className="text-orange-500">books</span>
          </div>
          <nav className="ml-8 space-x-4">
            <a href="#" className="text-gray-700 hover:underline">
              Book Store
            </a>
            <a href="#" className="text-gray-700 hover:underline">
              Wishlist
            </a>
            <a href="#" className="text-gray-700 hover:underline">
              My Collection
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path>
              <path d="M12 8v4l3 3"></path>
            </svg>
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
              3
            </span>
          </button>
          <div className="flex items-center">
            <span className="mr-2 text-gray-700">Hi, Lee Higgins</span>
            <img
              src="https://via.placeholder.com/32"
              alt="User Avatar"
              className="rounded-full w-8 h-8"
            />
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="bg-white border-r border-gray-200 p-4">
        <input
          type="text"
          placeholder="Title, Subject..."
          className="w-full border border-gray-300 rounded p-2 mb-4"
        />
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Popular Subjects</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Biographies & Memoirs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Business & Money
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Children's Books
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Computers & Technology
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="p-4 bg-gray-50">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">For You</h1>
          <div className="flex space-x-2">
            <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex bg-white p-4 shadow rounded ">
            <img
              src="https://img.pikbest.com/templates/20211025/bg/f640210105f01.png!w700wp"
              alt="Book Cover"
              className="mb-4 rounded w-2/5 h-full"
            />
            <div>
                <h3 className="font-bold text-gray-700">
              Work for Money, Design for Love
            </h3>
            <p className="text-sm text-gray-500">Business & Money</p>
            <p className="text-green-600 font-bold mt-2">$22.00</p>
            <button className="w-full bg-orange-500 text-white py-2 mt-4 rounded hover:bg-orange-600">
              Add to cart
            </button>
            </div>
            
          </div>
          
          {/* Add more book cards here */}
        </div>
      </main>
    </div>
  );
};

export default ListBook;
