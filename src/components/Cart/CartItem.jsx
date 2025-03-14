import React from "react";
import { removeItemCart, updateQuantity } from "../../redux/fetures/cartSlice";
import { useDispatch } from "react-redux";
import { BsTrash2 } from "react-icons/bs";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import toast from "react-hot-toast";

function CartItem({ id, thumbnail, title, quantity, price }) {
  const dispatch = useDispatch();

  return (
    <div className="p-6 flex items-center">
      <img
        src={thumbnail}
        alt={title}
        className="h-20 w-20 object-cover rounded"
      />
      <div className="ml-6 flex-1">
        <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
        <p className="text-gray-200"> ₹{Math.floor(price * 75)}</p>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => {
            if (quantity > 1) {
              dispatch(
                updateQuantity({
                  productId: id,
                  quantity: quantity - 1,
                })
              );
            }
          }}
          className="text-gray-100 hover:text-gray-400 cursor-pointer"
        >
          <BiMinusCircle className="h-5 w-5" />
        </button>
        <span className="text-gray-100 font-medium">{quantity}</span>
        <button
          onClick={() =>
            dispatch(
              updateQuantity({
                productId: id,
                quantity: quantity + 1,
              })
            )
          }
          className="text-gray-100 hover:text-gray-400 cursor-pointer"
        >
          <BiPlusCircle className="h-5 w-5" />
        </button>
        <button
          onClick={() => {
            dispatch(removeItemCart(id));
            toast.success("Product Remove");
          }}
          className="text-red-500 hover:text-red-700 cursor-pointer"
        >
          <BsTrash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
