import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddBooks from "../pages/AddBooks";
import EditBook from "../pages/EditBook";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ShowBooks from "../pages/ShowBooks";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-books" element={<ShowBooks />} />
        <Route path="/add-book" element={<AddBooks />} />
        <Route path="/edit-book" element={<EditBook />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
