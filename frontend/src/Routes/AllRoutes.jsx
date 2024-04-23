import React from "react";
import { Route, Routes } from "react-router-dom";
import Men from "../Pages/Men/Men";
import Kid from "../Pages/Kid/Kid";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import Women from "../Pages/Women/Women";
import Shoes from "../Pages/Shoes/Shoes";
import Admin from "../Pages/Admin/Admin";
import Search from "../Pages/Search/Search";
import Beauty from "../Pages/Beauty/Beauty";
import Payment from "../Pages/Payment/Payment";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import AdminLogin from "../Pages/Authentication/AdminLogin";
import SingleDetailKid from "../Pages/Kid/SingleDetailKid";
import SingleDetailMen from "../Pages/Men/SingleDetailMen";
import SingleDetailShoes from "../Pages/Shoes/SingleDetailShoes";
import SingleDetailWomen from "../Pages/Women/SingleDetailWomen";
import SingleDetailBeauty from "../Pages/Beauty/SingleDetailBeauty";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/search/:query" element={<Search />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="/men" element={<Men />} />
      <Route path="/men/:id" element={<SingleDetailMen />} />
      <Route path="/kid" element={<Kid />} />
      <Route path="/kid/:id" element={<SingleDetailKid />} />
      <Route path="/women" element={<Women />} />
      <Route path="/women/:id" element={<SingleDetailWomen />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/shoes/:id" element={<SingleDetailShoes />} />
      <Route path="/beauty" element={<Beauty />} />
      <Route path="/beauty/:id" element={<SingleDetailBeauty />} />
    </Routes>
  );
};

export default AllRoutes;
