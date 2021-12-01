import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import { Login } from "./pages/Login";
import { Welcome } from "./pages/Welcome";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/Login");
    // if (!api.token || api.token === "") {
    // } else {
    //   getOwnData();
    // }
  }, [navigate]);
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}></Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
