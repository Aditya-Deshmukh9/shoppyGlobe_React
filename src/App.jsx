import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
