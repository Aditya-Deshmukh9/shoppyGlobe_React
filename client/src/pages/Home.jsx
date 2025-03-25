import { Suspense } from "react";
import { lazy } from "react";
import Loading from "../components/Loading";

const ProductList = lazy(() => import("../components/ProductList/ProductList"));

function Home() {
  return (
    <div className="h-full w-full px-4">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Welcome to ShoppyGlobe.
              <span className="sm:block">
                {" "}
                Your One-Stop Shop for Everything!{" "}
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Discover a wide range of products at unbeatable prices. Shop now
              and enjoy amazing deals and discounts!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="cursor-pointer block w-full rounded-sm border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:ring-3 focus:outline-hidden sm:w-auto">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <h2 className="text-center text-3xl sm:text-5xl font-extrabold mb-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        Our Products
      </h2>
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </div>
  );
}

export default Home;
