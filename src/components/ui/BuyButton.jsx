import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/fetures/cartSlice";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

function BuyButton(data) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          toast.success("Add to cart");
          dispatch(addToCart(data));
        }}
        className="cursor-pointer relative w-full inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-gray-900 transition duration-300 ease-out border-2 border-gray-300 rounded-full shadow-md group"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full bg-gradient-to-br to-purple-600 from-blue-500 duration-300 -translate-y-full  group-hover:translate-y-0 ease">
          <FaCartPlus color="white" size={25} />
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-gray-200 transition-all duration-300 transform group-hover:translate-y-full ease">
          Add to Cart
        </span>
      </button>
      <button
        onClick={() => navigate("/checkout")}
        className="px-5 py-2.5 cursor-pointer relative rounded-full group font-medium text-white inline-block bg-gradient-to-br to-purple-600 from-blue-500"
      >
        <span className="relative">Buy</span>
      </button>
    </>
  );
}

export default BuyButton;
