import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const { cartItem } = useSelector((state) => state.cart);

  const totalAmount = useMemo(() => {
    return cartItem.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItem]);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-100 mb-6">
              Order Summary
            </h2>
            <div className="space-y-4">
              {cartItem.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <p className="text-gray-100">{item.title}</p>
                    <p className="text-sm text-gray-200">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="text-gray-100">
                    ₹{Math.floor((item.price * item.quantity).toFixed(2) * 80)}
                  </p>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-100">Total:</span>
                  <span className="font-bold text-gray-100">
                    ₹ {Math.floor(totalAmount * 80)}.00
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
