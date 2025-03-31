import React from "react";
import { Link, useRouteError } from "react-router";

function NotFound() {
  const { status, statusText, data } = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">{status}</h1>

        <p className="text-2xl font-bold tracking-tight text-bg sm:text-4xl">
          {statusText}
        </p>

        <p className="mt-4 text-gray-500">{data}</p>

        <Link
          to={"/"}
          className="mt-6 block w-full bg-blue-500 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
