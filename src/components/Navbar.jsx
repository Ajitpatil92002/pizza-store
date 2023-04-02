import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar({ setShowCart }) {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">Pizza Store</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to={"/"} className="mr-5 hover:text-gray-900">
            First Link
          </Link>
          <Link to={"/"} className="mr-5 hover:text-gray-900">
            Second Link
          </Link>
          <Link to={"/"} className="mr-5 hover:text-gray-900">
            Third Link
          </Link>
          <Link to={"/"} className="mr-5 hover:text-gray-900">
            Fourth Link
          </Link>
        </nav>
        <button
          onClick={setShowCart}
          className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          <span className="mr-4">Cart</span>
          <span>{totalQuantity}</span>
          <AiOutlineShoppingCart width={100} height={100} />
        </button>
      </div>
    </header>
  );
}
