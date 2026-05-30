import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import CartSidebar from "../components/CartSidebar";
import { useState } from "react";
import Footer from "../components/Footer";

const AppLayout = () => {
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);
  return (
    <>
      <Banner />
      <Navbar setIsOpenCart={setIsOpenCart} />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <CartSidebar />
    </>
  );
};

export default AppLayout;
