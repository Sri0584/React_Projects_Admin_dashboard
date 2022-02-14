import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/products/Product";

const App = () => {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:pid" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
