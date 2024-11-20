import { useState } from "react";
import CardsGrid from "./Cards";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai"; // For the hamburger icon
import { IoMdClose } from "react-icons/io"; // For the close icon

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // State for category
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer toggle
  const categories = ["Reputation", "New users", "Voters", "Editors", "Moderators"];

  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Title Section */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-black font-serif">Users</h1>

          {/* Hamburger Menu (Visible on sm and md screens only) */}
          <div className="lg:hidden"> {/* Make it visible for sm and md */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 rounded-md text-gray-800 hover:bg-gray-100"
            >
              <AiOutlineMenu size={24} />
            </button>
          </div>
        </div>

        {/* Search and Filters Section */}
        <div className="flex lg:flex-row flex-col items-center justify-between gap-4 mb-8">
          {/* Search Bar */}
          <div className="flex items-center lg:w-1/4 md:w-full border border-gray-300 rounded-md p-3 shadow-sm">
            <CiSearch className="text-2xl text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search users"
              className="w-full bg-transparent outline-none text-gray-700 font-normal font-sans text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters (Visible only on larger screens) */}
          <div className="hidden lg:flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)} // Set category on click
                className={`px-4 py-3 font-medium rounded-lg ${
                  selectedCategory === category
                    ? "bg-[#849FFF] text-white"
                    : "text-gray-600 hover:bg-[#849FFF] hover:text-white"
                } transition`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Section */}
        <CardsGrid searchQuery={searchQuery} category={selectedCategory} />
      </div>

      {/* Drawer for sm and md screens */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50">
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-bold text-gray-800">Filter Categories</h2>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-md text-gray-800 hover:bg-gray-100"
              >
                <IoMdClose size={24} />
              </button>
            </div>
            <div className="p-4 flex flex-col gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsDrawerOpen(false); // Close drawer after selecting
                  }}
                  className={`w-full text-left px-4 py-2 font-normal font-sans text-base rounded-lg ${
                    selectedCategory === category
                      ? "bg-indigo-500 text-white"
                      : "text-gray-600 hover:bg-indigo-500 hover:text-white"
                  } transition`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
