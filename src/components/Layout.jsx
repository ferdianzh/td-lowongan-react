import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
   return ( 
      <div className="min-h-screen flex flex-col justify-center bg-gray-100">
         <Navbar />
         <main className="container w-3/5 mx-auto mt-8">
            <Outlet />
         </main>
         <Footer />
      </div>
   );
}
 
export default Layout;