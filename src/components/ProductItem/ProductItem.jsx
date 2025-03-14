import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import BuyButton from "../ui/BuyButton.jsx";

function ProductItem(data) {
  return (
    <section className="bg-slate-800 w-72 min-h-[12rem] overflow-hidden text-white border rounded-lg shadow-md p-4 mx-auto hover:-translate-y-1 transition-all duration-300">
      <Link to={`/product/${data?.id}`}>
        <div className="relative pb-[90%] overflow-hidden">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
            loading="lazy"
          />
          {data.discountPercentage > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
              {Math.round(data.discountPercentage)}% OFF
            </div>
          )}
        </div>
        <div className="flex justify-between">
          <div className="">
            <h3 className="text-sm font-semibold mb-2 h-10 ">{data?.title}</h3>
            <div className="flex items-center mb-2">
              <FaStar className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-300">{data?.rating}</span>
              <span className="ml-2 text-sm text-gray-300">
                ({data?.stock} in stock)
              </span>
            </div>
            <h4 className="text-sm text-gray-400 font-bold mb-4">
              {data?.category}
            </h4>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold mb-2">
              ₹{Math.floor(data?.price * 80)}
            </p>
          </div>
        </div>
      </Link>
      <div className="flex gap-x-2">
        <BuyButton {...data} />
      </div>
    </section>
  );
}

export default ProductItem;
