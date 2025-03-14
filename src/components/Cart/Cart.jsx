import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import CartItem from "./CartItem";
import { useMemo } from "react";

function Cart() {
  const { cartItem, totalItemInCart } = useSelector((state) => state.cart);

  const totalAmount = useMemo(() => {
    return cartItem.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItem]);

  if (cartItem.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">
          Your cart is empty
        </h2>
        <Link
          to="/"
          className="text-blue-500 font-semibold hover:text-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-100 mb-8">
        Shopping Cart ({totalItemInCart})
      </h1>
      <div className="rounded-lg shadow-md overflow-hidden">
        <div className="divide-y divide-gray-900">
          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-100">Total:</span>
            <span className="text-2xl font-bold text-gray-100">
              Total: ₹{Math.floor(totalAmount * 80)}.00
            </span>
          </div>
          <Link
            to="/checkout"
            className="mt-6 block w-full bg-blue-500 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
