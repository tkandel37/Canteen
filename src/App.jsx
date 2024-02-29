import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainDashboard from "views/admin/default";
import AuthLayout from "layouts/auth";
import Receipt from "components/receiptScreen";
import Auth from "./layouts/auth/index";
import Navbar from "components/navbar";

const App = () => {
  return (
    <div className="dark:bg-[#111111] bg-white">
      <Navbar/>
      <div className="p-4">
      <Router>
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/canteen" element={<Receipt />} />
        <Route path="/sign-in" element={<AuthLayout isRegister = {false} />} />
        <Route path="/sign-up" element={<AuthLayout isRegister = {true} />} />
      </Routes>
    </Router>
      </div>
    </div>
  );
};

export default App;
