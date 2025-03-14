import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetchproduct from "../../hooks/useFetchData.jsx";
import BuyButton from "../ui/BuyButton";
import Loading from "../Loading.jsx";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { data, loading, error } = useFetchproduct(
    `https://dummyjson.com/products/${id}`
  );

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  if (loading) return <Loading />;
  if (error) return <p>Error loading product details.</p>;

  return (
    <section className="bg-gray-900 text-white h-full py-8">
      <div className="max-w-screen-xl h-full mx-auto px-4 flex flex-col sm:flex-row sm:gap-8">
        {/* Product Images */}
        <div className="flex flex-col sm:w-2/3 h-full items-center space-y-4">
          <img
            src={product?.thumbnail}
            alt={product?.title}
            className="rounded-lg border border-white p-4 shadow-lg w-full md:w-[400px] h-[300px] object-cover"
          />
          <div className="grid grid-cols-3 gap-2">
            {product?.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product?.title} ${index + 1}`}
                className="w-24 h-24 object-cover border border-white rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">{product?.title}</h1>
          <h2 className="text-xl italic text-gray-400">by {product?.brand}</h2>
          <p className="text-gray-300">{product?.description}</p>
          <p className="text-lg font-semibold text-green-400">
            Price: ₹{Math.floor(product?.price * 80)}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
            <p>Category: {product?.category}</p>
            <p>Rating: {Math.floor(product?.rating)} / 5</p>
            <p>Stock: {product?.stock}</p>
            <p>SKU: {product?.sku}</p>
            <p>Weight: {product?.weight}g</p>
            <p>
              Dimensions: {product?.dimensions.width} x{" "}
              {product?.dimensions.height} x {product?.dimensions.depth} cm
            </p>
            <p>Warranty: {product?.warrantyInformation}</p>
            <p>Shipping: {product?.shippingInformation}</p>
            <p>Availability: {product?.availabilityStatus}</p>
            <p>Return Policy: {product?.returnPolicy}</p>
            <p>Minimum Order: {product?.minimumOrderQuantity}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-x-2">
            <BuyButton {...product} />
          </div>

          {/* Reviews */}
          <h3 className="text-xl font-bold mt-6">Reviews:</h3>
          <div className="grid grid-cols-1 gap-4">
            {product?.reviews?.map((review, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <p className="text-yellow-400">Rating: {review.rating} / 5</p>
                <p className="text-gray-300">{review.comment}</p>
                <p className="text-gray-500">By: {review.reviewerName}</p>
                <p className="text-gray-500">
                  Date: {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
