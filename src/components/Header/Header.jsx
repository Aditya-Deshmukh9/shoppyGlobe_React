import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function Header() {
  const { cartItem } = useSelector((state) => state.cart);

  return (
    <header className="sticky z-50 top-0 w-full px-4 h-16 bg-gray-800 flex justify-between items-center">
      <div className="flex items-center">
        <Link
          to={"/"}
          className="text-center text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          ShoppyGlobe
        </Link>
      </div>

      <Link
        to={"/cart"}
        className="h-10 p-1 px-2 gap-2 flex items-center border border-gray-300"
      >
        <FaShoppingCart size={25} />
        <p className="text-2xl">{cartItem ? cartItem.length : "0"}</p>
      </Link>
    </header>
  );
}

export default Header;
