// import { AlignRight } from "lucide-react";

// const Header = () => {
//   return (
//     <div className="w-full flex items-center justify-between bg-black">
//       <div>
//         <img
//           src="./assets/jatin-telecom-high-resolution-logo.png"
//           className="w-[170px]"
//         />
//       </div>
//       <div className="sm:flex items-center justify-between text-white sm:mr-7 sm:gap-20">
//         <h1>Home</h1>
//         <h1>Categories</h1>
//         <h1>Repairing</h1>
//         <h1>Contact</h1>
//       </div>
//       <div className="sm:hidden">
//         <AlignRight />
//       </div>
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <nav className="flex items-center justify-between px-5 py-1 bg-black">
        <Link to="/" className="text-white text-2xl">
          <img
            src="./assets/jatin-telecom-high-resolution-logo.png"
            className="sm:w-[170px] w-[120px] cursor-pointer"
          />
        </Link>
        <div className="hidden md:flex space-x-20">
          <Link to="/" className="text-white sm:text-xl cursor-pointer">
            Home
          </Link>
          <Link
            to="/categories"
            className="text-white sm:text-xl cursor-pointer"
          >
            Categories
          </Link>
          <Link
            to="/repairing"
            className="text-white sm:text-xl cursor-pointer"
          >
            Repairing
          </Link>
          <Link to="/contact" className="text-white sm:text-xl cursor-pointer">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div
          className="md:hidden flex flex-col space-y-4 p-5 bg-black "
          onClick={() => setIsOpen(false)}
        >
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/categories" className="text-white">
            Categories
          </Link>
          <Link to="/repairing" className="text-white">
            Repairing
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
